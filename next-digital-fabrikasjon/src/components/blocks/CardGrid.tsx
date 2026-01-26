import Image from 'next/image'
import Link from 'next/link'
import type { CardGridBlockProps, CardItem } from './types'
import { urlFor } from './sanityImage'

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function Card({ card }: { card: CardItem }) {
  const content = (
    <div className="h-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#488B90]">
      {card.icon?.asset && (
        <div className="h-20 bg-[#488B90]/10 flex items-center justify-center p-4">
          <Image
            src={urlFor(card.icon.asset).width(80).height(80).url()}
            alt=""
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#214C50] mb-2">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-gray-600 text-sm">
            {card.description}
          </p>
        )}
      </div>
    </div>
  )

  if (card.link) {
    return (
      <Link href={card.link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}

export function CardGrid({ heading, cards, columns = 3 }: CardGridBlockProps) {
  if (!cards?.length) return null

  const colClass = columnClasses[columns]

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-3xl font-bold text-[#214C50] mb-8 text-center">
          {heading}
        </h2>
      )}
      <div className={`grid ${colClass} gap-6`}>
        {cards.map((card, index) => (
          <Card key={card._key || index} card={card} />
        ))}
      </div>
    </section>
  )
}
