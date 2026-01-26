import type { DividerBlockProps } from './types'

export function Divider({ style = 'line' }: DividerBlockProps) {
  if (style === 'space') {
    return <div className="h-12" aria-hidden="true" />
  }

  if (style === 'dots') {
    return (
      <div className="flex justify-center items-center py-8" aria-hidden="true">
        <span className="w-2 h-2 bg-[#488B90] rounded-full mx-2" />
        <span className="w-2 h-2 bg-[#488B90] rounded-full mx-2" />
        <span className="w-2 h-2 bg-[#488B90] rounded-full mx-2" />
      </div>
    )
  }

  // Default: line
  return (
    <div className="flex justify-center py-8" aria-hidden="true">
      <hr className="w-full max-w-md border-t border-gray-300" />
    </div>
  )
}
