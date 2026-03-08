import Image from 'next/image'
import Link from 'next/link'
import type { CardGridBlockProps, CardItem } from './types'
import { urlFor } from './sanityImage'

const columnClasses: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function Card({ card }: { card: CardItem }) {
  const inner = (
    <div
      className="
        w-full rounded-[28px] bg-[#488B90]
        shadow-[0_12px_30px_rgba(0,0,0,0.18)]
        hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]
        transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#214C50]
        flex flex-col items-center justify-center text-center
        px-6 py-8 min-h-[180px] sm:min-h-[210px]
        uppercase tracking-wide text-xl sm:text-2xl font-bold text-white
      "
    >
      {card.icon?.asset && (
        <Image
          src={urlFor(card.icon.asset).width(96).height(96).url()}
          alt=""
          width={96}
          height={96}
          className="object-contain mb-4 opacity-90"
        />
      )}
      <span className="leading-tight">{card.title}</span>
    </div>
  )

  if (card.link) {
    return (
      <Link href={card.link} className="block">
        {inner}
      </Link>
    )
  }

  return inner
}

export function CardGrid({ heading, cards, columns = 3 }: CardGridBlockProps) {
  if (!cards?.length) return null

  const colClass = columnClasses[columns] ?? columnClasses[3]

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-2xl text-left mb-10">{heading}</h2>
      )}
      <div className={`grid ${colClass} gap-x-12 gap-y-10 justify-items-center`}>
        {cards.map((card, index) => (
          <Card key={card._key || String(index)} card={card} />
        ))}
      </div>
    </section>
  )
}
