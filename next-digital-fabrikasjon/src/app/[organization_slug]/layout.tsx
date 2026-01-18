// app/[organization_slug]/layout.tsx
import { createContext } from 'react'
import { notFound } from 'next/navigation'
import { defineQuery } from 'next-sanity'
import { client } from '@/libs/sanity/client'

// Bruk defineQuery for bedre typesikkerhet og editor-støtte
const ORGANIZATION_BY_SLUG = defineQuery(`
  *[_type == "organization" && slug.current == $slug][0]{
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
  // ... utvid typen etter behov
}

export const OrganizationContext = createContext<{
  organization: Organization
} | null>(null)

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
    <OrganizationContext.Provider value={{ organization }}>
      {children}
    </OrganizationContext.Provider>
  )
}