import Image from 'next/image'
import type { StaffGridBlockProps } from './types'
import { urlFor } from './sanityImage'

export function StaffGridBlock({ heading, intro, staff }: StaffGridBlockProps) {
  if (!staff?.length) return null

  return (
    <section className="w-full">
      {heading && (
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <span className="h-1 w-full bg-[#488B90]" />
        </div>
      )}

      {intro && (
        <p className="mb-8 text-base font-normal text-black">{intro}</p>
      )}

      <div className="flex flex-col gap-8">
        {staff.map((person, i) => {
          const photoUrl = person.photo?.asset
            ? urlFor(person.photo.asset).width(96).height(96).url()
            : null

          return (
            <div key={person._key || String(i)} className="flex items-start gap-6">
              {/* Bilde */}
              {photoUrl ? (
                <Image
                  src={photoUrl}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 object-cover flex-shrink-0"
                />
              ) : (
                <div className="h-24 w-24 bg-gray-200 flex-shrink-0" />
              )}

              {/* Tekst */}
              <div className="text-black">
                <p className="leading-7">
                  <span className="font-semibold">Navn:</span> {person.name}
                </p>
                {person.role && (
                  <p className="leading-7">
                    <span className="font-semibold">Rolle:</span> {person.role}
                  </p>
                )}
                {person.contact && (
                  <p className="leading-7">
                    <span className="font-semibold">Kontaktinformasjon:</span>{' '}
                    {person.contact.includes('@') ? (
                      <a href={`mailto:${person.contact}`} className="underline hover:text-[#488B90]">
                        {person.contact}
                      </a>
                    ) : person.contact}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
