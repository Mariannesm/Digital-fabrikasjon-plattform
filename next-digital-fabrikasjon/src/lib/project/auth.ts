'use server'

import { cookies } from 'next/headers'
import { sign, verify } from 'jsonwebtoken'
import { getProjectBySlug } from '@/lib/sanity/queries/project'

const COOKIE_SECRET = process.env.COOKIE_SECRET!
const COOKIE_PREFIX = 'project_access_'

function cookieName(slug: string) {
  return `${COOKIE_PREFIX}${slug}`
}

interface ProjectTokenPayload {
  projectId: string
  slug: string
}

/** Logger inn på et prosjekt. Returnerer feilmelding eller null ved suksess. */
export async function loginToProject(slug: string, password: string): Promise<string | null> {
  const project = await getProjectBySlug(slug)

  if (!project) {
    return 'Prosjektet finnes ikke'
  }

  if (project.editPassword !== password) {
    return 'Feil passord'
  }

  const token = sign(
    { projectId: project._id, slug } satisfies ProjectTokenPayload,
    COOKIE_SECRET,
  )

  const cookieStore = await cookies()
  cookieStore.set({
    name: cookieName(slug),
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    // Ingen maxAge = session cookie (forsvinner når nettleseren lukkes)
  })

  return null
}

/** Logger ut fra et prosjekt ved å slette cookie. */
export async function logoutFromProject(slug: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName(slug))
}

/** Sjekker om nåværende bruker har tilgang til et prosjekt.
 *  Returnerer projectId hvis tilgang, null ellers. */
export async function getProjectAccess(slug: string): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName(slug))?.value

  if (!token) return null

  try {
    const payload = verify(token, COOKIE_SECRET) as ProjectTokenPayload

    if (payload.slug !== slug) return null

    return payload.projectId
  } catch {
    return null
  }
}
