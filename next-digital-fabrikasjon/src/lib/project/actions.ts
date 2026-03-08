'use server'

import { createClient } from '@sanity/client'
import { dataset, projectId, apiVersion } from '@/lib/sanity/env'

/** Sanity-klient med write-tilgang (server-only) */
function getWriteClient() {
  const token = process.env.SANITY_API_TOKEN
  if (!token) throw new Error('SANITY_API_TOKEN mangler i .env.local')
  return createClient({ projectId, dataset, apiVersion, useCdn: false, token })
}

export interface CreateProjectInput {
  title: string
  password: string
  description?: string
  organizationId: string
  coverImageFile?: FormData
}

/** Lager slug fra tittel (enkel slugify) */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Oppretter nytt prosjekt i Sanity. Returnerer prosjekt-slug eller kaster feil. */
export async function createProject(formData: FormData): Promise<{ slug: string }> {
  const writeClient = getWriteClient()

  const title = formData.get('title') as string
  const password = formData.get('password') as string
  const description = formData.get('description') as string | null
  const organizationId = formData.get('organizationId') as string
  const imageFile = formData.get('coverImage') as File | null

  if (!title || !password || !organizationId) {
    throw new Error('Tittel, passord og organisasjon er påkrevd')
  }

  const slug = slugify(title)

  // Sjekk at slug ikke allerede finnes
  const existing = await writeClient.fetch(
    `*[_type == "project" && slug.current == $slug][0]._id`,
    { slug }
  )
  if (existing) {
    throw new Error(`Et prosjekt med dette navnet finnes allerede: "${slug}"`)
  }

  // Last opp bilde om det finnes
  let coverImage: object | undefined
  if (imageFile && imageFile.size > 0) {
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer())
    const uploadedAsset = await writeClient.assets.upload('image', imageBuffer, {
      filename: imageFile.name,
      contentType: imageFile.type,
    })
    coverImage = {
      _type: 'image',
      asset: { _type: 'reference', _ref: uploadedAsset._id },
    }
  }

  const doc = {
    _type: 'project',
    title,
    slug: { _type: 'slug', current: slug },
    editPassword: password,
    organization: { _type: 'reference', _ref: organizationId },
    status: 'pending',
    ...(description ? { content: [{ _type: 'block', _key: 'desc', style: 'normal', children: [{ _type: 'span', _key: 'span0', text: description }] }] } : {}),
    ...(coverImage ? { coverImage } : {}),
  }

  await writeClient.create(doc)

  return { slug }
}

/** Oppdaterer et eksisterende prosjekt. Krever at brukeren har gyldig cookie. */
export async function updateProject(
  projectId: string,
  formData: FormData
): Promise<void> {
  const writeClient = getWriteClient()

  const title = formData.get('title') as string
  const imageFile = formData.get('coverImage') as File | null

  const patch = writeClient.patch(projectId)

  if (title) {
    patch.set({ title })
  }

  if (imageFile && imageFile.size > 0) {
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer())
    const uploadedAsset = await writeClient.assets.upload('image', imageBuffer, {
      filename: imageFile.name,
      contentType: imageFile.type,
    })
    patch.set({
      coverImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: uploadedAsset._id },
      },
    })
  }

  await patch.commit()
}

/** Admin-funksjon: Endrer status på prosjekt */
export async function adminUpdateProjectStatus(
  projectDocId: string,
  status: 'draft' | 'pending' | 'approved' | 'rejected'
): Promise<void> {
  const writeClient = getWriteClient()
  await writeClient.patch(projectDocId).set({ status }).commit()
}
