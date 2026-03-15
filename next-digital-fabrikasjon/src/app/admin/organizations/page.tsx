import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { OrganizationsView } from './OrganizationsView'

interface Organization {
  _id: string
  name: string
  slug: { current: string }
  url: string
  active: boolean
}

export default async function OrganizationsPage() {
  const user = await getCurrentUserWithRole()

  if (!user || !isSuperAdmin(user.role)) {
    redirect('/admin')
  }

  const organizations = await client.fetch<Organization[]>(
    `*[_type == "organization"] | order(name asc) { _id, name, slug, url, active }`
  )

  return <OrganizationsView organizations={organizations} />
}
