import { notFound } from 'next/navigation'
import { defineQuery } from 'next-sanity'
import { client } from '@/lib/sanity/client'
import { OrganizationProvider } from '@/providers/OrganizationProvider'

const ORGANIZATION_BY_SLUG = defineQuery(`
  *[_type == "organization" && slug.current == $slug && active == true]{
    _id,
    _type,
    name,
    slug
  }
`)

type Organization = {
  _id: string
  name: string
  slug: string
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
