'use client'

import Link from 'next/link'
import CardButton from '@/components/ui/Cardbutton'
import { useTranslation } from '@/providers/LanguageProvider'

interface Props {
  orgSlug: string
}

export default function OrgMenu({ orgSlug }: Props) {
  const { t } = useTranslation()

  const items = [
    { key: 'menu.technologies', href: `/${orgSlug}/technology` },
    { key: 'menu.about',        href: `/${orgSlug}/om-oss` },
    { key: 'menu.courses',      href: `/${orgSlug}/courses` },
    { key: 'menu.projects',     href: `/${orgSlug}/projects` },
  ] as const

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit mt-10 sm:mt-16 sm:scale-110 lg:scale-125">
      {items.map(({ key, href }) => (
        <Link key={key} href={href}>
          <CardButton>{t(key)}</CardButton>
        </Link>
      ))}
    </section>
  )
}
