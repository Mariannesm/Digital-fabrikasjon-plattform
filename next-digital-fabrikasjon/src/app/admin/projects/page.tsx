import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'
import { client } from '@/lib/sanity/client'
import { ProjectsView } from './ProjectsView'

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

export default async function AdminProjectsPage() {
  const user = await getCurrentUserWithRole()
  if (!user) return null

  const superAdmin = isSuperAdmin(user.role)
  const projects = await getProjects(user.assigned_to ?? null, superAdmin)

  return <ProjectsView projects={projects} />
}
