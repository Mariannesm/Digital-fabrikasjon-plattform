import Image from 'next/image'
import type { HeroBlockProps } from './types'
import { urlFor } from './sanityImage'

const alignmentClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
}

export function HeroSection({ title, subtitle, backgroundImage, alignment = 'center' }: HeroBlockProps) {
  const alignClass = alignmentClasses[alignment]

  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {backgroundImage?.asset && (
        <Image
          src={urlFor(backgroundImage.asset).width(1920).quality(85).url()}
          alt={backgroundImage.alt || title}
          fill
          className="object-cover"
          priority
        />
      )}

      <div className={`absolute inset-0 ${backgroundImage ? 'bg-black/40' : 'bg-[#214C50]'}`} />

      <div className={`relative z-10 flex flex-col ${alignClass} max-w-4xl mx-auto px-6 py-16`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}