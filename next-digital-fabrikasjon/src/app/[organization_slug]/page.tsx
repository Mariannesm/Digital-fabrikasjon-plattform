import Link from 'next/link'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import CardButton from '@/components/ui/Cardbutton'
import { client } from '@/lib/sanity/client'

type Category = {
  _id: string
  name: string
  slug: { current: string }
  buttonText: string
  order: number
}

type StandalonePage = {
  _id: string
  name: string
  slug: { current: string }
  order: number
}

async function getMenuItems(orgSlug: string) {
  const [categories, standalonePages] = await Promise.all([
    // Bare kategorier der denne org-en har minst én aktiv side
    client.fetch<Category[]>(`
      *[_type == "category"] | order(order asc) {
        _id, name, slug, buttonText, order,
        "hasPages": count(*[
          _type == "page"
          && organization->slug.current == $orgSlug
          && category._ref == ^._id
          && active == true
        ]) > 0
      }[hasPages == true]
    `, { orgSlug }),

    // Sider uten kategori og uten forelder-side, tilknyttet denne orgen
    client.fetch<StandalonePage[]>(`
      *[_type == "page"
        && organization->slug.current == $orgSlug
        && !defined(category)
        && !defined(parentPage)
        && active == true
      ] | order(order asc) {
        _id, name, slug, order
      }
    `, { orgSlug }),
  ])
  return { categories, standalonePages }
}

type Props = {
  params: Promise<{ organization_slug: string }>
}

export default async function MenuPage({ params }: Props) {
  const { organization_slug } = await params
  const { categories, standalonePages } = await getMenuItems(organization_slug)

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit mt-10 sm:mt-16">
        {categories.map((category) => (
          <Link key={category._id} href={`/${organization_slug}/${category.slug.current}`}>
            <CardButton>{category.buttonText}</CardButton>
          </Link>
        ))}

        {/* Frittstående sider uten kategori (f.eks. egendefinerte sider) */}
        {standalonePages.map((page) => (
          <Link key={page._id} href={`/${organization_slug}/${page.slug.current}`}>
            <CardButton>{page.name.toUpperCase()}</CardButton>
          </Link>
        ))}
      </section>
    </MainWrapper>
  )
}
