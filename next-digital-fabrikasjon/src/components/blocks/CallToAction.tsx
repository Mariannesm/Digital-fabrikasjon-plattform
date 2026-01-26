import Link from 'next/link'
import type { CtaBlockProps } from './types'

const styleClasses = {
  primary: 'bg-[#214C50] text-white hover:bg-[#488B90]',
  secondary: 'bg-[#488B90] text-white hover:bg-[#214C50]',
  outline: 'bg-transparent border-2 border-[#214C50] text-[#214C50] hover:bg-[#214C50] hover:text-white',
}

export function CallToAction({ heading, text, buttonText, buttonLink, style = 'primary' }: CtaBlockProps) {
  const buttonClass = styleClasses[style]

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {heading && (
          <h2 className="text-3xl font-bold text-[#214C50] mb-4">
            {heading}
          </h2>
        )}
        {text && (
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {text}
          </p>
        )}
        {buttonLink ? (
          <Link
            href={buttonLink}
            className={`inline-block rounded-2xl px-8 py-4 text-lg font-bold shadow-md transition-colors ${buttonClass}`}
          >
            {buttonText}
          </Link>
        ) : (
          <button
            className={`rounded-2xl px-8 py-4 text-lg font-bold shadow-md transition-colors ${buttonClass}`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  )
}
