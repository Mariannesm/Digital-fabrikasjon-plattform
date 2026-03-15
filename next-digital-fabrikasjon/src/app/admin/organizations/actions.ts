'use server'

import { revalidatePath } from 'next/cache'
import { getWriteClient } from '@/lib/sanity/client'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'

async function requireSuperAdmin() {
  const user = await getCurrentUserWithRole()
  if (!user || !isSuperAdmin(user.role)) {
    throw new Error('Kun SUPER_ADMIN kan administrere organisasjoner')
  }
}

export async function createOrganization(formData: FormData): Promise<void> {
  await requireSuperAdmin()

  const name = formData.get('name') as string
  const url = formData.get('url') as string

  if (!name?.trim() || !url?.trim()) throw new Error('Navn og URL er påkrevd')

  // Generate slug from name
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  const writeClient = getWriteClient()
  const org = await writeClient.create({
    _type: 'organization',
    name: name.trim(),
    slug: { _type: 'slug', current: slug },
    url: url.trim(),
    active: true,
  })

  // Auto-create default "Om oss" page for the new organization
  await writeClient.create({
    _type: 'page',
    name: 'Om oss',
    slug: { _type: 'slug', current: 'om-oss' },
    organization: { _type: 'reference', _ref: org._id },
    layout: 'full',
    active: true,
    order: 0,
    blocks: [],
  })

  revalidatePath('/admin/organizations')
}

export async function toggleOrganizationActive(orgId: string, active: boolean): Promise<void> {
  await requireSuperAdmin()

  const writeClient = getWriteClient()
  await writeClient.patch(orgId).set({ active }).commit()

  revalidatePath('/admin/organizations')
}

export async function updateOrganization(orgId: string, formData: FormData): Promise<void> {
  await requireSuperAdmin()

  const name = formData.get('name') as string
  const url = formData.get('url') as string

  if (!name?.trim() || !url?.trim()) throw new Error('Navn og URL er påkrevd')

  const writeClient = getWriteClient()
  await writeClient.patch(orgId).set({ name: name.trim(), url: url.trim() }).commit()

  revalidatePath('/admin/organizations')
}
