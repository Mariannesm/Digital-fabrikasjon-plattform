import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import CompletionsView from './CompletionsView'

interface CompletionRow {
  _id: string
  courseSlug: string
  email: string
  score: number
  total: number
  passed: boolean
  completedAt: string
  organizationSlug: string
}

interface OrgOption {
  slug: string
  name: string
}

type Props = { searchParams: Promise<{ org?: string }> }

export default async function CourseCompletionsPage({ searchParams }: Props) {
  const user = await getCurrentUserWithRole()
  if (!user) return null

  const superAdmin = isSuperAdmin(user.role)
  const { org } = await searchParams

  let filterSlug: string | null = null
  if (!superAdmin && user.assigned_to) {
    const ownOrg = await client.fetch<{ slug: { current: string } } | null>(
      `*[_type == "organization" && _id == $id][0] { slug }`,
      { id: user.assigned_to }
    )
    filterSlug = ownOrg?.slug?.current ?? null
  } else if (superAdmin && org) {
    filterSlug = org
  }

  const orgFilter = filterSlug ? `&& organizationSlug == $orgSlug` : ''
  const [rows, organizations] = await Promise.all([
    client.fetch<CompletionRow[]>(
      `*[_type == "quizCompletion" ${orgFilter}] | order(completedAt desc) {
        _id, courseSlug, email, score, total, passed, completedAt, organizationSlug
      }`,
      filterSlug ? { orgSlug: filterSlug } : {}
    ),
    superAdmin
      ? client.fetch<OrgOption[]>(
          `*[_type == "organization" && active == true] | order(name asc) { "slug": slug.current, name }`
        )
      : Promise.resolve([]),
  ])

  return (
    <CompletionsView
      rows={rows}
      organizations={organizations}
      currentOrg={org}
      superAdmin={superAdmin}
    />
  )
}
