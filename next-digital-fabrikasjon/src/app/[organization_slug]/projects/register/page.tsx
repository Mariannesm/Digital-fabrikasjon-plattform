import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import RegisterProjectForm from './RegisterProjectForm'

interface Props {
  params: Promise<{ organization_slug: string }>
}

export default async function RegisterProjectPage({ params }: Props) {
  const { organization_slug } = await params

  const org = await client.fetch<{ _id: string; name: string } | null>(
    `*[_type == "organization" && slug.current == $slug && active == true][0]{ _id, name }`,
    { slug: organization_slug }
  )

  if (!org) notFound()

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="REGISTRER DITT PROSJEKT" />
      <RegisterProjectForm organizationId={org._id} organizationSlug={organization_slug} />
    </MainWrapper>
  )
}
