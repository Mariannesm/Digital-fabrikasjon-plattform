import { client } from '@/lib/sanity/client'

export interface PageSection {
  _key: string
  title?: string
  align?: 'left' | 'center' | 'right'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]
}

export interface SanityPage {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  layout: 'full' | 'sections'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[]
  sections: PageSection[]
  category: { name: string; slug: { current: string } } | null
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
      "category": category->{ name, slug },
      sections[]{
        _key,
        title,
        align,
        content[]{
          ...,
          _type == "cardGridBlock" => {
            "cards": cards[]{
              ...,
              "pageRef": pageRef->{ _id, slug, "orgSlug": organization->slug.current }
            }
          }
        }
      },
      "blocks": blocks[]{
        ...,
        _type == "cardGridBlock" => {
          "cards": cards[]{
            ...,
            "pageRef": pageRef->{ _id, slug, "orgSlug": organization->slug.current }
          }
        },
        _type == "versionListBlock" => {
          "items": items[]{
            ...,
            "pageRef": pageRef->{ _id, slug, "orgSlug": organization->slug.current }
          }
        },
        _type == "guideBlock" => {
          "steps": steps[]{
            ...,
            "courseLink": courseLink{
              label,
              href,
              "courseRef": courseRef->{ _id, slug, "orgSlug": organization->slug.current }
            }
          }
        }
      }
    }`,
    { orgSlug, slug }
  )
}

export interface TechnologyPage {
  _id: string
  name: string
  slug: { current: string }
  icon?: { asset: { _ref: string } }
}

export async function getPagesByCategory(
  orgSlug: string,
  categorySlug: string
): Promise<TechnologyPage[]> {
  return client.fetch(
    `*[_type == "page"
      && organization->slug.current == $orgSlug
      && category->slug.current == $categorySlug
      && active == true
    ] | order(order asc) {
      _id,
      name,
      slug,
      icon { asset }
    }`,
    { orgSlug, categorySlug }
  )
}
