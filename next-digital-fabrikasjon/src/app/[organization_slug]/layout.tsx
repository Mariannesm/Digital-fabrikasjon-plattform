import { notFound } from 'next/navigation'
import { defineQuery } from 'next-sanity'
import { client } from '@/lib/sanity/client'
import { OrganizationProvider } from '@/providers/OrganizationProvider'

const ORGANIZATION_BY_SLUG = defineQuery(`
  *[_type == "organization" && slug.current == $slug && active == true][0]{
    _id,
    _type,
    name,
    slug,
    url,
    icon{ asset->{ url }, alt }
  }
`)

type Organization = {
  _id: string
  name: string
  slug: { current: string }
  url: string
  icon?: { asset?: { url: string }; alt?: string }
}

type Props = {
  params: Promise<{ organization_slug: string }>
  children: React.ReactNode
}

export default async function OrganizationLayout({ params, children }: Props) {
  const { organization_slug } = await params

  const organization = await client.fetch<Organization | null>(
    ORGANIZATION_BY_SLUG,
    { slug: organization_slug }
  )

  if (!organization) {
    notFound()
  }

  return (
    <OrganizationProvider organization={organization}>
      {children}
    </OrganizationProvider>
  )
}
