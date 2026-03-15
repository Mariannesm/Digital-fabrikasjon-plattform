'use client'

import { useState } from 'react'
import { BlockRenderer } from '@/components/blocks'
import type { PageSection } from '@/lib/sanity/queries/page'

interface Props {
  sections: PageSection[]
}

export default function SectionedPage({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!sections?.length) return null

  const active = sections[activeIndex]

  return (
    <div className="w-full px-4 py-12">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[320px_1fr]">

        {/* Left sidebar nav */}
        <aside className="flex flex-col items-start self-start">
          <nav className="w-full space-y-4">
            {sections.map((section, i) => (
              <button
                key={section._key}
                onClick={() => setActiveIndex(i)}
                className={`w-full px-8 py-6 text-left text-lg text-white shadow-lg transition-colors ${
                  i === activeIndex
                    ? 'bg-[#214C50]'
                    : 'bg-[#488B90] hover:bg-[#214C50]'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Right content panel */}
        <div className="w-full">
          <div className="min-h-[420px] rounded-2xl bg-white p-10 shadow-lg">
            {active.title && (
              <div className="flex flex-col gap-2 mb-8">
                <h2 className="text-2xl font-bold text-[#214C50]">{active.title}</h2>
                <span className="h-1 w-full bg-[#488B90] rounded" />
              </div>
            )}

            <div className={
              active.align === 'center'
                ? '[&_.prose]:text-center [&_.prose_ul]:list-none [&_.prose_ul]:pl-0 [&_h2]:text-center [&_h3]:text-center'
                : active.align === 'right'
                ? '[&_.prose]:text-right [&_.prose_ul]:list-none [&_.prose_ul]:pl-0 [&_h2]:text-right [&_h3]:text-right'
                : ''
            }>
              <BlockRenderer blocks={active.content ?? []} />
            </div>

            {/* Forrige / Neste */}
            {sections.length > 1 && (
              <div className="mt-10 flex items-end justify-between">
                <button
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition disabled:opacity-30"
                >
                  Forrige
                </button>
                <button
                  onClick={() => setActiveIndex((i) => Math.min(sections.length - 1, i + 1))}
                  disabled={activeIndex === sections.length - 1}
                  className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition disabled:opacity-30"
                >
                  Neste
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
