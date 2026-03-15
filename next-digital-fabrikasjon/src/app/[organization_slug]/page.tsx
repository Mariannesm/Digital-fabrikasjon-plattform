import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import OrgMenu from './OrgMenu'

type Props = {
  params: Promise<{ organization_slug: string }>
}

export default async function MenuPage({ params }: Props) {
  const { organization_slug } = await params

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header />
      <OrgMenu orgSlug={organization_slug} />
    </MainWrapper>
  )
}
