import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { adminUpdateProjectStatus } from '@/lib/project/actions'

interface ProjectRow {
  _id: string
  title: string
  slug: { current: string }
  status: string
  organization: { name: string; slug: { current: string } }
  _createdAt: string
}

async function getProjects(orgId: string | null, superAdmin: boolean): Promise<ProjectRow[]> {
  const orgFilter = superAdmin || !orgId ? '' : `&& organization._ref == $orgId`
  return client.fetch(
    `*[_type == "project" ${orgFilter}] | order(_createdAt desc) {
      _id, title, slug, status, _createdAt,
      organization-> { name, slug }
    }`,
    orgId ? { orgId } : {}
  )
}

const STATUS_LABELS: Record<string, string> = {
  draft: 'Utkast',
  pending: 'Til vurdering',
  approved: 'Godkjent',
  rejected: 'Avvist',
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-gray-100 text-gray-700',
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-700',
}

export default async function AdminProjectsPage() {
  const user = await getCurrentUserWithRole()
  if (!user) return null

  const superAdmin = isSuperAdmin(user.role)
  const projects = await getProjects(user.assigned_to ?? null, superAdmin)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">Prosjekter</h1>

      {projects.length === 0 ? (
        <p className="text-gray-500">Ingen prosjekter funnet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">Tittel</th>
                <th className="px-4 py-3 text-left font-semibold">Org</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Opprettet</th>
                <th className="px-4 py-3 text-left font-semibold">Handling</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-gray-600">{p.organization?.name ?? '–'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        STATUS_COLORS[p.status] ?? 'bg-gray-100'
                      }`}
                    >
                      {STATUS_LABELS[p.status] ?? p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(p._createdAt).toLocaleDateString('nb-NO')}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    {p.status !== 'approved' && (
                      <form
                        action={async () => {
                          'use server'
                          await adminUpdateProjectStatus(p._id, 'approved')
                        }}
                      >
                        <button
                          type="submit"
                          className="rounded-lg bg-green-600 px-3 py-1 text-xs font-bold text-white hover:bg-green-700 transition"
                        >
                          Godkjenn
                        </button>
                      </form>
                    )}
                    {p.status !== 'rejected' && (
                      <form
                        action={async () => {
                          'use server'
                          await adminUpdateProjectStatus(p._id, 'rejected')
                        }}
                      >
                        <button
                          type="submit"
                          className="rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white hover:bg-red-700 transition"
                        >
                          Avvis
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
