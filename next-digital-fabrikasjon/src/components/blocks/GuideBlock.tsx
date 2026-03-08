'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { GuideBlockProps } from './types'
import { urlFor } from './sanityImage'

export function GuideBlock({ icon, steps }: GuideBlockProps) {
  const [currentStep, setCurrentStep] = useState(0)

  if (!steps?.length) return null

  const step = steps[currentStep]
  const iconUrl = icon?.asset ? urlFor(icon.asset).width(96).height(96).url() : null

  return (
    <section className="flex-1 w-full">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr]">

          {/* VENSTRE SIDEBAR */}
          <aside className="flex flex-col items-start self-start sticky top-6 z-10">
            {iconUrl && (
              <div className="mb-8 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                <Image
                  src={iconUrl}
                  alt=""
                  width={96}
                  height={96}
                  className="object-contain opacity-80"
                />
              </div>
            )}

            <nav className="w-full space-y-4" aria-label="Steg-navigasjon">
              {steps.map((s, i) => (
                <button
                  key={s._key || String(i)}
                  onClick={() => setCurrentStep(i)}
                  aria-current={i === currentStep ? 'step' : undefined}
                  className={`
                    w-full px-8 py-5 text-left text-lg text-white shadow-md transition-colors
                    ${i === currentStep
                      ? 'bg-[#214C50]'
                      : 'bg-[#488B90] hover:bg-[#214C50]'
                    }
                  `}
                >
                  {i === 0 ? s.title : `${i}. ${s.title}`}
                </button>
              ))}
            </nav>
          </aside>

          {/* HØYRE INNHOLDSPANEL */}
          <div className="w-full">
            <section className="w-full rounded-2xl bg-white p-10 shadow-lg text-left flex flex-col min-h-[420px]">

              {/* Tittel */}
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold">{step.title}</h2>
                <span className="h-1 w-full bg-[#488B90]" />
              </div>

              {/* Innhold */}
              <div className="prose max-w-none text-base font-normal text-black mb-6">
                <PortableText value={step.content} />
              </div>

              {/* Info-boks (sikkerhet el.l.) */}
              {step.infoBox && step.infoBox.items?.length > 0 && (
                <div className="rounded-lg border-2 border-[#E69138] bg-[#EBECEB] p-4 mb-6 max-w-md">
                  {step.infoBox.title && (
                    <p className="text-base font-semibold mb-2">
                      {step.infoBox.title.toUpperCase()}:
                    </p>
                  )}
                  <ul className="list-disc space-y-1 text-sm ml-5">
                    {step.infoBox.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Kurs-lenke */}
              {step.courseLink?.href && (
                <Link
                  href={step.courseLink.href}
                  className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-4 py-3 max-w-xl mb-6 hover:bg-[#488B90]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold tracking-wide text-[#214C50]">
                    {step.courseLink.label || 'Gå til kurs'}
                  </h3>
                  <span className="rounded-2xl bg-[#214C50] px-5 py-2 text-white font-bold text-sm hover:bg-[#488B90] transition-colors">
                    Gå til
                  </span>
                </Link>
              )}

              {/* Forrige / Neste */}
              <div className="mt-auto flex items-end justify-between pt-6">
                <button
                  onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                  disabled={currentStep === 0}
                  aria-label={`Forrige steg: ${currentStep > 0 ? steps[currentStep - 1]?.title : ''}`}
                  className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition disabled:opacity-40"
                >
                  Forrige
                </button>
                <button
                  onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
                  disabled={currentStep === steps.length - 1}
                  aria-label={`Neste steg: ${currentStep < steps.length - 1 ? steps[currentStep + 1]?.title : ''}`}
                  className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition disabled:opacity-40"
                >
                  Neste
                </button>
              </div>
            </section>
          </div>

        </div>
      </div>
    </section>
  )
}
