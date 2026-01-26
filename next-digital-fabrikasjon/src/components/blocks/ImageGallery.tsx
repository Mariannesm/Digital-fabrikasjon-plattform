import Image from 'next/image'
import type { ImageGalleryBlockProps } from './types'
import { urlFor } from './sanityImage'

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function ImageGallery({ heading, images, columns = 3 }: ImageGalleryBlockProps) {
  if (!images?.length) return null

  const colClass = columnClasses[columns]

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-3xl font-bold text-[#214C50] mb-8 text-center">
          {heading}
        </h2>
      )}
      <div className={`grid ${colClass} gap-6`}>
        {images.map((image, index) => (
          <figure key={image._key || index} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              {image.asset && (
                <Image
                  src={urlFor(image.asset).width(400).height(400).quality(85).url()}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            {image.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}
