import { client } from '@/lib/sanity/client'

export interface SanityImageAsset {
  _id: string
  url: string
}

export interface SanityImage {
  asset: SanityImageAsset
  hotspot?: { x: number; y: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  alt?: string
}

export interface ProjectSummary {
  _id: string
  title: string
  slug: { current: string }
  status: 'draft' | 'pending' | 'approved' | 'rejected'
  coverImage?: SanityImage
}

export interface ProjectDetail extends ProjectSummary {
  content?: unknown[]
  attachments?: { _key: string; description?: string; asset: SanityImageAsset }[]
}

/** Henter prosjekt inkl. editPassword – kun bruk server-side! */
export async function getProjectBySlug(slug: string): Promise<(ProjectDetail & { editPassword: string }) | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      editPassword,
      status,
      coverImage { asset->{ _id, url }, hotspot, crop, alt },
      content,
      attachments[] { _key, description, asset->{ _id, url } }
    }`,
    { slug }
  )
}

/** Henter prosjekt for visning – uten passord */
export async function getProjectById(id: string): Promise<ProjectDetail | null> {
  return client.fetch(
    `*[_type == "project" && _id == $id][0] {
      _id,
      title,
      slug,
      status,
      coverImage { asset->{ _id, url }, hotspot, crop, alt },
      content,
      attachments[] { _key, description, asset->{ _id, url } }
    }`,
    { id }
  )
}

/** Henter alle prosjekter for en organisasjon (til oversikten) */
export async function getProjectsByOrganization(orgSlug: string): Promise<ProjectSummary[]> {
  return client.fetch(
    `*[_type == "project" && organization->slug.current == $orgSlug] | order(_createdAt desc) {
      _id,
      title,
      slug,
      status,
      coverImage { asset->{ _id, url }, hotspot, crop, alt }
    }`,
    { orgSlug }
  )
}

/** Oppdaterer status på et prosjekt – kun admin, krever write-token */
export async function updateProjectStatus(
  projectId: string,
  status: 'draft' | 'pending' | 'approved' | 'rejected',
  writeClient: typeof client
): Promise<void> {
  await writeClient.patch(projectId).set({ status }).commit()
}
