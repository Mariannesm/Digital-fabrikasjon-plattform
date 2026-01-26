import Image from 'next/image'
import type { ImageBlockProps } from './types'
import { urlFor } from './sanityImage'

const sizeClasses = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
  full: 'max-w-full',
}

const imageWidths = {
  small: 448,
  medium: 672,
  large: 896,
  full: 1200,
}

export function ImageBlock({ image, alt, caption, size = 'medium' }: ImageBlockProps) {
  if (!image?.asset) return null

  const sizeClass = sizeClasses[size]
  const imageWidth = imageWidths[size]

  return (
    <figure className={`${sizeClass} mx-auto px-6 py-8`}>
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <Image
          src={urlFor(image.asset).width(imageWidth).quality(85).url()}
          alt={alt || image.alt || 'Image'}
          width={imageWidth}
          height={Math.round(imageWidth * 0.66)}
          className="w-full h-auto object-cover"
        />
      </div>
      {(caption || image.caption) && (
        <figcaption className="mt-3 text-center text-sm text-gray-600">
          {caption || image.caption}
        </figcaption>
      )}
    </figure>
  )
}
