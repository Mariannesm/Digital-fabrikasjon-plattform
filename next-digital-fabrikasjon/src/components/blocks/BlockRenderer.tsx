import type { ComponentType } from 'react'
import type { PageBlock } from './types'
import { HeroSection } from './HeroSection'
import { TextSection } from './TextSection'
import { ImageBlock } from './ImageBlock'
import { ImageGallery } from './ImageGallery'
import { CallToAction } from './CallToAction'
import { VideoEmbed } from './VideoEmbed'
import { Accordion } from './Accordion'
import { CardGrid } from './CardGrid'
import { Divider } from './Divider'

// Map block types to their components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, ComponentType<any>> = {
  heroBlock: HeroSection,
  textBlock: TextSection,
  imageBlock: ImageBlock,
  imageGalleryBlock: ImageGallery,
  ctaBlock: CallToAction,
  videoBlock: VideoEmbed,
  accordionBlock: Accordion,
  cardGridBlock: CardGrid,
  dividerBlock: Divider,
}

interface BlockRendererProps {
  blocks: PageBlock[]
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks?.length) {
    return null
  }

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type]

        if (!Component) {
          // Unknown block type - skip or show warning in development
          if (process.env.NODE_ENV === 'development') {
            return (
              <div
                key={block._key}
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 m-4 text-yellow-800"
              >
                Unknown block type: <code>{block._type}</code>
              </div>
            )
          }
          return null
        }

        return <Component key={block._key} {...block} />
      })}
    </>
  )
}

// Export the component map for custom implementations
export { blockComponents }
