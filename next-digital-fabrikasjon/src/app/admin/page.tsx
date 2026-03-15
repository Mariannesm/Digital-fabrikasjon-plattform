import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { DashboardView } from './DashboardView'

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
    <DashboardView
      projects={stats.projects}
      courses={stats.courses}
      userEmail={user.email}
      userRole={user.role}
    />
  )
}
