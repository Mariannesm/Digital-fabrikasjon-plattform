import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'

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

async function getCompletions(orgSlug: string | null, superAdmin: boolean): Promise<CompletionRow[]> {
  const orgFilter = superAdmin || !orgSlug ? '' : `&& organizationSlug == $orgSlug`
  return client.fetch(
    `*[_type == "quizCompletion" ${orgFilter}] | order(completedAt desc) {
      _id, courseSlug, email, score, total, passed, completedAt, organizationSlug
    }`,
    orgSlug ? { orgSlug } : {}
  )
}

export default async function CourseCompletionsPage() {
  const user = await getCurrentUserWithRole()
  if (!user) return null

  const superAdmin = isSuperAdmin(user.role)

  // For non-super-admins, filter by their org slug
  let orgSlug: string | null = null
  if (!superAdmin && user.assigned_to) {
    const org = await client.fetch<{ slug: { current: string } } | null>(
      `*[_type == "organization" && _id == $id][0] { slug }`,
      { id: user.assigned_to }
    )
    orgSlug = org?.slug?.current ?? null
  }

  const rows = await getCompletions(orgSlug, superAdmin)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">Kursgjennomføringer</h1>

      {rows.length === 0 ? (
        <p className="text-gray-500">Ingen gjennomføringer registrert ennå.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">E-post</th>
                <th className="px-4 py-3 text-left font-semibold">Kurs</th>
                <th className="px-4 py-3 text-left font-semibold">Resultat</th>
                <th className="px-4 py-3 text-left font-semibold">Bestått</th>
                <th className="px-4 py-3 text-left font-semibold">Dato</th>
                {superAdmin && (
                  <th className="px-4 py-3 text-left font-semibold">Org</th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3 font-medium">{row.courseSlug}</td>
                  <td className="px-4 py-3">
                    {row.score}/{row.total} ({Math.round((row.score / row.total) * 100)}%)
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        row.passed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {row.passed ? 'Ja' : 'Nei'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {row.completedAt
                      ? new Date(row.completedAt).toLocaleDateString('nb-NO')
                      : '–'}
                  </td>
                  {superAdmin && (
                    <td className="px-4 py-3 text-gray-500">{row.organizationSlug}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
