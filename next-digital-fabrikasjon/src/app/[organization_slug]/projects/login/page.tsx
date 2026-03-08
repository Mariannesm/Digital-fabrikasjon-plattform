import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import ProjectLoginForm from './ProjectLoginForm'

interface Props {
  params: Promise<{ organization_slug: string }>
}

export default async function ProjectLoginPage({ params }: Props) {
  const { organization_slug } = await params

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="LOGG INN PÅ PROSJEKT" />

      <div className="flex justify-center px-4 mt-10 sm:mt-16">
        <ProjectLoginForm organizationSlug={organization_slug} />
      </div>
    </MainWrapper>
  )
}
