import { client } from '@/lib/sanity/client'

export interface PageParent {
  _id: string
  name: string
  slug: { current: string }
}

export interface SiblingPage {
  _id: string
  name: string
  slug: { current: string }
}

export interface SanityPage {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  layout: 'full' | 'sidebar'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[]
  parent: PageParent | null
  grandparent: PageParent | null
  siblings: SiblingPage[]
}

export async function getPageBySlug(
  orgSlug: string,
  slug: string
): Promise<SanityPage | null> {
  return client.fetch(
    `*[_type == "page"
      && organization->slug.current == $orgSlug
      && slug.current == $slug
      && active == true][0] {
      _id,
      name,
      slug,
      description,
      layout,
      blocks[],
      "parent": parentPage-> { _id, name, slug },
      "grandparent": parentPage->parentPage-> { _id, name, slug },
      "siblings": *[
        _type == "page"
        && active == true
        && organization->slug.current == $orgSlug
        && (
          (defined(^.parentPage) && parentPage._ref == ^.parentPage._ref)
          || (!defined(^.parentPage) && !defined(parentPage))
        )
      ] | order(order asc) { _id, name, slug }
    }`,
    { orgSlug, slug }
  )
}

export async function getTopLevelPages(orgSlug: string): Promise<SiblingPage[]> {
  return client.fetch(
    `*[_type == "page"
      && organization->slug.current == $orgSlug
      && !defined(parentPage)
      && active == true
    ] | order(order asc) { _id, name, slug }`,
    { orgSlug }
  )
}
