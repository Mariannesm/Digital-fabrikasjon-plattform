import { notFound, redirect } from 'next/navigation'
import { getProjectById } from '@/lib/sanity/queries/project'
import { getProjectAccess } from '@/lib/project/auth'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import EditProjectForm from './EditProjectForm'

interface Props {
  params: Promise<{ organization_slug: string; id: string }>
}

export default async function EditProjectPage({ params }: Props) {
  const { organization_slug, id } = await params

  const project = await getProjectById(id)
  if (!project) notFound()

  const projectAccess = await getProjectAccess(project.slug.current)
  if (!projectAccess) {
    redirect(`/${organization_slug}/projects/login`)
  }

  const imageUrl = project.coverImage?.asset?.url

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="REDIGER PROSJEKT" />
      <EditProjectForm
        projectId={project._id}
        projectSlug={project.slug.current}
        organizationSlug={organization_slug}
        initialTitle={project.title}
        initialImageUrl={imageUrl}
      />
    </MainWrapper>
  )
}
