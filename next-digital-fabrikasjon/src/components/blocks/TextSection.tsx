import { PortableText } from '@portabletext/react'
import type { TextBlockProps } from './types'

export function TextSection({ heading, content }: TextBlockProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-3xl font-bold text-[#214C50] mb-6">
          {heading}
        </h2>
      )}
      <div className="prose prose-lg max-w-none prose-headings:text-[#214C50] prose-a:text-[#488B90] prose-a:underline">
        <PortableText value={content} />
      </div>
    </section>
  )
}