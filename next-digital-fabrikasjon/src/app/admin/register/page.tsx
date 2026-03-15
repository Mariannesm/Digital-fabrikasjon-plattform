import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { RegisterAdminView } from './RegisterAdminView'

interface Organization {
  _id: string
  name: string
  slug: { current: string }
}

export default async function RegisterAdminPage() {
  const user = await getCurrentUserWithRole()

  if (!user || !isSuperAdmin(user.role)) {
    redirect('/admin')
  }

  const organizations = await client.fetch<Organization[]>(
    `*[_type == "organization" && active == true] | order(name asc) { _id, name, slug }`
  )

  return <RegisterAdminView organizations={organizations} />
}
