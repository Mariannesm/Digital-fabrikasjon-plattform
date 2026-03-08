import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { RegisterAdminForm } from './RegisterAdminForm'

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

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-2">Opprett ny admin</h1>
      <p className="mb-8 text-sm text-gray-500">
        Kun tilgjengelig for SUPER_ADMIN. ADMIN-brukere må knyttes til én organisasjon.
        Brukeren logger inn på <strong>/login</strong> med e-post og passord.
      </p>

      <RegisterAdminForm organizations={organizations} />
    </div>
  )
}
