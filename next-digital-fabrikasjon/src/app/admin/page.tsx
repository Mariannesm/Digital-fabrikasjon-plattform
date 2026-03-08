import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'

async function getStats(orgId: string | null, superAdmin: boolean) {
  const orgFilter = superAdmin || !orgId ? '' : `&& organization._ref == $orgId`

  const [projects, courses] = await Promise.all([
    client.fetch<number>(
      `count(*[_type == "project" ${orgFilter}])`,
      orgId ? { orgId } : {}
    ),
    client.fetch<number>(
      `count(*[_type == "course" ${orgFilter}])`,
      orgId ? { orgId } : {}
    ),
  ])

  return { projects, courses }
}

export default async function AdminDashboard() {
  const user = await getCurrentUserWithRole()
  if (!user) return null

  const superAdmin = isSuperAdmin(user.role)
  const stats = await getStats(user.assigned_to ?? null, superAdmin)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Prosjekter" value={stats.projects} />
        <StatCard label="Kurs" value={stats.courses} />
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Innlogget som <strong>{user.email}</strong> ({user.role})
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#C2D8DA] px-6 py-8 text-center shadow-sm">
      <p className="text-4xl font-extrabold text-[#214C50]">{value}</p>
      <p className="mt-2 text-base font-semibold text-[#214C50]">{label}</p>
    </div>
  )
}
