'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import type { AccordionBlockProps, AccordionItem } from './types'

function AccordionItemComponent({ item, isOpen, onToggle }: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#214C50] pr-4">
          {item.question}
        </span>
        <span className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-5 h-5 text-[#488B90]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0'}`}
      >
        <div className="prose prose-sm max-w-none text-gray-600">
          <PortableText value={item.answer} />
        </div>
      </div>
    </div>
  )
}

export function Accordion({ heading, items }: AccordionBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!items?.length) return null

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-3xl font-bold text-[#214C50] mb-8 text-center">
          {heading}
        </h2>
      )}
      <div className="bg-white rounded-xl shadow-md p-6">
        {items.map((item, index) => (
          <AccordionItemComponent
            key={item._key || index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
