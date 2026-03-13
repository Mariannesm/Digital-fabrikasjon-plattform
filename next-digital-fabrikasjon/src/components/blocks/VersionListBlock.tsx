import Image from 'next/image'
import Link from 'next/link'
import type { VersionListBlockProps } from './types'
import { urlFor } from './sanityImage'

export function VersionListBlock({ heading, items }: VersionListBlockProps) {
  if (!items?.length) return null

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-2xl text-left mb-6">{heading}</h2>
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-6 lg:gap-10">
        {items.map((item, index) => {
          const imageUrl = item.image?.asset
            ? urlFor(item.image.asset).width(200).height(180).url()
            : null

          const card = (
            <div className="flex flex-col w-80 rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden">
              {/* Teal header med bilde */}
              <div className="h-48 bg-[#488B90] flex items-center justify-center">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    width={100}
                    height={160}
                    className="object-contain py-2"
                  />
                ) : (
                  <div className="w-24 h-24 bg-[#214C50]/30 rounded-full" />
                )}
              </div>

              {/* Innhold */}
              <div className="text-left p-7 flex-1">
                <h3 className="font-semibold pb-4 text-lg">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Velg-knapp */}
              <div className="p-4 pt-0 flex justify-end">
                <span className="bg-[#214C50] rounded-2xl px-5 py-3 text-lg text-white font-semibold shadow-md hover:bg-[#488B90] transition-colors">
                  Velg
                </span>
              </div>
            </div>
          )

          const href = item.pageRef
            ? `/${item.pageRef.orgSlug}/${item.pageRef.slug.current}`
            : item.link

          return href ? (
            <Link key={item._key || String(index)} href={href} className="block hover:-translate-y-1 transition-transform">
              {card}
            </Link>
          ) : (
            <div key={item._key || String(index)}>
              {card}
            </div>
          )
        })}
      </div>
    </section>
  )
}
