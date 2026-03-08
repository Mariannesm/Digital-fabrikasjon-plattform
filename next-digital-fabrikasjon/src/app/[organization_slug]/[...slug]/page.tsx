import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/sanity/queries/page'
import { BlockRenderer } from '@/components/blocks'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'

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

  // Build breadcrumb chain: grandparent → parent → current
  const breadcrumbs: { name: string; href: string | null }[] = []
  if (page.grandparent) {
    breadcrumbs.push({
      name: page.grandparent.name,
      href: `/${organization_slug}/${page.grandparent.slug.current}`,
    })
  }
  if (page.parent) {
    breadcrumbs.push({
      name: page.parent.name,
      href: `/${organization_slug}/${page.parent.slug.current}`,
    })
  }
  breadcrumbs.push({ name: page.name, href: null })

  // Base path for sibling links (same directory level)
  const slugPrefix = slug.slice(0, -1)
  const siblingBasePath =
    slugPrefix.length > 0
      ? `/${organization_slug}/${slugPrefix.join('/')}/`
      : `/${organization_slug}/`

  if (page.layout === 'sidebar') {
    return (
      <MainWrapper classNames="bg-[#FFFCF8]">
        <Header title={page.name} />
        <div className="flex w-full flex-1">
          {/* Sibling navigation sidebar */}
          {page.siblings.length > 1 && (
            <nav
              aria-label="Sidenavigasjon"
              className="w-64 flex-shrink-0 bg-[#C2D8DA] p-6"
            >
              <ul className="flex flex-col gap-2">
                {page.siblings.map((sibling) => {
                  const isActive = sibling.slug.current === pageSlug
                  return (
                    <li key={sibling._id}>
                      <Link
                        href={`${siblingBasePath}${sibling.slug.current}`}
                        className={`block rounded-lg px-4 py-2 text-sm font-semibold transition ${
                          isActive
                            ? 'bg-[#214C50] text-white'
                            : 'bg-[#488B90] text-white hover:bg-[#214C50]'
                        }`}
                      >
                        {sibling.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}

          {/* Page content */}
          <div className="flex-1 bg-white px-8 py-8">
            {breadcrumbs.length > 1 && (
              <nav aria-label="Brødsmulesti" className="mb-6 text-sm text-gray-500">
                {breadcrumbs.map((crumb, i) => (
                  <span key={i}>
                    {i > 0 && <span className="mx-2">/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-[#488B90] hover:underline">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-gray-800">{crumb.name}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}
            <BlockRenderer blocks={page.blocks} />
          </div>
        </div>
      </MainWrapper>
    )
  }

  // Default: full-width layout
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title={page.name} />
      <div className="mx-auto w-full max-w-5xl px-4 py-8">
        {breadcrumbs.length > 1 && (
          <nav aria-label="Brødsmulesti" className="mb-6 text-sm text-gray-500">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#488B90] hover:underline">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-gray-800">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <BlockRenderer blocks={page.blocks} />
      </div>
    </MainWrapper>
  )
}
