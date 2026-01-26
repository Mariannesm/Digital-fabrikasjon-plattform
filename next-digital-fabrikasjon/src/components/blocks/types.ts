import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Base block type with _key and _type
export interface BaseBlock {
  _key: string
  _type: string
}

// Sanity image with optional metadata
export interface SanityImage {
  _type: 'image'
  asset: SanityImageSource
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
  caption?: string
}

// Hero Block
export interface HeroBlockProps extends BaseBlock {
  _type: 'heroBlock'
  title: string
  subtitle?: string
  backgroundImage?: SanityImage
  alignment?: 'left' | 'center' | 'right'
}

// Text Block
export interface TextBlockProps extends BaseBlock {
  _type: 'textBlock'
  heading?: string
  content: PortableTextBlock[]
}

// Image Block
export interface ImageBlockProps extends BaseBlock {
  _type: 'imageBlock'
  image: SanityImage
  alt?: string
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
}

// Image Gallery Block
export interface GalleryImage extends SanityImage {
  alt?: string
  caption?: string
}

export interface ImageGalleryBlockProps extends BaseBlock {
  _type: 'imageGalleryBlock'
  heading?: string
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

// CTA Block
export interface CtaBlockProps extends BaseBlock {
  _type: 'ctaBlock'
  heading?: string
  text?: string
  buttonText: string
  buttonLink?: string
  style?: 'primary' | 'secondary' | 'outline'
}

// Video Block
export interface VideoBlockProps extends BaseBlock {
  _type: 'videoBlock'
  title?: string
  videoUrl: string
  caption?: string
}

// Accordion Block
export interface AccordionItem {
  _key: string
  question: string
  answer: PortableTextBlock[]
}

export interface AccordionBlockProps extends BaseBlock {
  _type: 'accordionBlock'
  heading?: string
  items: AccordionItem[]
}

// Card Grid Block
export interface CardItem {
  _key: string
  icon?: SanityImage
  title: string
  description?: string
  link?: string
}

export interface CardGridBlockProps extends BaseBlock {
  _type: 'cardGridBlock'
  heading?: string
  cards: CardItem[]
  columns?: 2 | 3 | 4
}

// Divider Block
export interface DividerBlockProps extends BaseBlock {
  _type: 'dividerBlock'
  style?: 'line' | 'dots' | 'space'
}

// Union type of all blocks
export type PageBlock =
  | HeroBlockProps
  | TextBlockProps
  | ImageBlockProps
  | ImageGalleryBlockProps
  | CtaBlockProps
  | VideoBlockProps
  | AccordionBlockProps
  | CardGridBlockProps
  | DividerBlockProps