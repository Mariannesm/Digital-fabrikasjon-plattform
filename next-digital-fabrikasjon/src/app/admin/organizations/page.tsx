import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { OrgRow } from './OrgRow'
import { OrgForm } from './OrgForm'

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

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">Organisasjoner</h1>

      {/* Opprett ny org */}
      <div className="mb-8 rounded-2xl bg-[#C2D8DA] px-6 py-5">
        <h2 className="mb-3 text-base font-bold text-[#214C50]">Opprett ny organisasjon</h2>
        <OrgForm />
      </div>

      {/* Org-tabell */}
      {organizations.length === 0 ? (
        <p className="text-gray-500">Ingen organisasjoner opprettet ennå.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">Navn</th>
                <th className="px-4 py-3 text-left font-semibold">Slug</th>
                <th className="px-4 py-3 text-left font-semibold">URL</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Handling</th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <OrgRow
                  key={org._id}
                  _id={org._id}
                  name={org.name}
                  slug={org.slug?.current ?? ''}
                  url={org.url ?? ''}
                  active={org.active ?? false}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
