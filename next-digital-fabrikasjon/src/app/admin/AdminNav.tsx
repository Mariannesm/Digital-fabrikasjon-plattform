'use client'

import Link from 'next/link'
import { useTranslation, useLanguage } from '@/providers/LanguageProvider'

interface Props {
  studioUrl: string
  userEmail: string
  userRole: string
}

export function AdminNav({ studioUrl, userEmail, userRole }: Props) {
  const { t } = useTranslation()
  const { locale, setLocale } = useLanguage()

  return (
    <header className="w-full bg-[#214C50] px-8 py-4 flex items-center justify-between flex-shrink-0">
      <Link href="/" className="text-2xl font-extrabold text-[#E69138]">
        SmartMaking
      </Link>
      <div className="flex items-center gap-6">
        <a
          href={studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#E69138] px-4 py-2 text-sm font-bold text-white hover:bg-[#d47e20] transition"
        >
          {t('nav.pageBuilder')} ↗
        </a>
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as 'no' | 'en')}
          className="rounded-md bg-white/10 border border-white/20 px-2 py-1 text-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#E69138]"
        >
          <option value="no" className="text-black">Norsk</option>
          <option value="en" className="text-black">English</option>
        </select>
        <span className="text-sm text-white opacity-80">
          {userEmail} · {userRole}
        </span>
      </div>
    </header>
  )
}

