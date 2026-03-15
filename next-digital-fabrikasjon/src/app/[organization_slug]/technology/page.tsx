import Link from 'next/link'
import Image from 'next/image'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import { getPagesByCategory } from '@/lib/sanity/queries/page'
import { urlFor } from '@/components/blocks/sanityImage'

type Props = {
  params: Promise<{ organization_slug: string }>
}

export default async function TechnologyPage({ params }: Props) {
  const { organization_slug } = await params
  const pages = await getPagesByCategory(organization_slug, 'technology')

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="LÆR Å BRUK TEKNOLOGIENE" />

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-10 py-8 sm:py-10">
        <h2 className="mb-15 text-2xl">Teknologier ved ditt valgte område</h2>

        {pages.length === 0 ? (
          <p className="text-gray-500 mt-8">Ingen teknologisider er lagt til ennå.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 justify-items-center mt-10">
            {pages.map((page) => (
              <Link key={page._id} href={`/${organization_slug}/${page.slug.current}`}>
                <button className="w-[300px] h-[210px] sm:w-[360px] sm:h-[240px]
                  rounded-[28px] bg-[#488B90]
                  shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]
                  transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#214C50]
                  flex flex-col items-center justify-center text-center
                  px-6 uppercase tracking-wide text-xl sm:text-2xl font-bold text-white"
                >
                  {page.icon?.asset && (
                    <Image
                      src={urlFor(page.icon.asset).width(96).height(96).url()}
                      alt=""
                      aria-hidden="true"
                      width={96}
                      height={96}
                      className="object-contain mb-4 opacity-90"
                    />
                  )}
                  <span className="leading-tight">{page.name}</span>
                </button>
              </Link>
            ))}
          </div>
        )}
      </section>
    </MainWrapper>
  )
}
