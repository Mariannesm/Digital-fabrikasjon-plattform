import Image from 'next/image'
import type { MaterialCardBlockProps } from './types'
import { urlFor } from './sanityImage'

function SpecList({ label, items }: { label: string; items: string[] }) {
  if (!items?.length) return null
  return (
    <div className="mt-3">
      <div className="mb-1 font-bold">{label}:</div>
      <ul className="list-disc pl-5 text-sm space-y-0.5">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export function MaterialCardBlock({ heading, intro, materials }: MaterialCardBlockProps) {
  if (!materials?.length) return null

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-16 pt-7">
      {heading && (
        <h2 className="text-2xl font-bold text-left mb-2">{heading}</h2>
      )}
      {intro && (
        <p className="text-left font-normal mb-8 whitespace-pre-line">{intro}</p>
      )}

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {materials.map((mat, i) => {
          const imageUrl = mat.image?.asset
            ? urlFor(mat.image.asset).width(300).height(240).url()
            : null

          return (
            <article
              key={mat._key || String(i)}
              className="rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden w-full"
            >
              {/* Teal header */}
              <div className="h-60 bg-[#488B90] flex items-center justify-center overflow-hidden">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={mat.name}
                    width={300}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                ) : null}
              </div>

              <div className="px-4 pb-4 pt-3 text-left">
                <h4 className="mb-3 text-lg font-bold text-[#2F7D80]">{mat.name}</h4>

                {/* Specs */}
                {mat.specs?.length > 0 && (
                  <div className="mb-3 space-y-1 text-sm">
                    {mat.specs.map((spec, si) => (
                      <div key={si}>
                        <span className="font-bold">{spec.label}:</span> {spec.value}
                      </div>
                    ))}
                  </div>
                )}

                <SpecList label="Fordeler" items={mat.fordeler} />
                <SpecList label="Ulemper" items={mat.ulemper} />
                <SpecList label="Anbefalt bruk" items={mat.anbefalingBruk} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
