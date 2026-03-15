import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/sanity/queries/page'
import { BlockRenderer } from '@/components/blocks'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import SectionedPage from '@/components/templates/SectionedPage'

type Props = {
  params: Promise<{ organization_slug: string; slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { organization_slug, slug } = await params
  const pageSlug = slug[slug.length - 1]
  const page = await getPageBySlug(organization_slug, pageSlug)

  if (!page) return {}

  return {
    title: page.name,
    description: page.description,
  }
}

export default async function DynamicPage({ params }: Props) {
  const { organization_slug, slug } = await params
  const pageSlug = slug[slug.length - 1]

  const page = await getPageBySlug(organization_slug, pageSlug)

  if (!page) {
    notFound()
  }

  // Breadcrumb: category → current (if page has a category with a matching route)
  const categoryHref = page.category?.slug.current
    ? `/${organization_slug}/${page.category.slug.current}`
    : null

  if (page.layout === 'sections') {
    return (
      <MainWrapper classNames="bg-[#FFFCF8]">
        <Header title={page.name} />
        <SectionedPage sections={page.sections ?? []} />
      </MainWrapper>
    )
  }

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title={page.name} />
      <div className="mx-auto w-full max-w-5xl px-4 py-8">
        {page.category && categoryHref && (
          <nav aria-label="Brødsmulesti" className="mb-6 text-sm text-gray-500">
            <Link href={categoryHref} className="hover:text-[#488B90] hover:underline">
              {page.category.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{page.name}</span>
          </nav>
        )}
        <BlockRenderer blocks={page.blocks ?? []} />
      </div>
    </MainWrapper>
  )
}
