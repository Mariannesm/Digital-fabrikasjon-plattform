'use client'

import Link from 'next/link'
import { useTranslation } from '@/providers/LanguageProvider'

interface Props {
  superAdmin: boolean
  studioUrl: string
  userEmail: string
  userRole: string
}

export function AdminNav({ superAdmin, studioUrl, userEmail, userRole }: Props) {
  const { t } = useTranslation()

  return (
    <>
      {/* Top bar */}
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
          <span className="text-sm text-white opacity-80">
            {userEmail} · {userRole}
          </span>
        </div>
      </header>

      {/* Sidebar */}
      <nav
        aria-label="Admin-navigasjon"
        className="w-60 flex-shrink-0 bg-[#C2D8DA] flex flex-col p-4 gap-1"
      >
        <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
          {t('nav.content')}
        </p>
        <NavLink href="/admin">{t('nav.dashboard')}</NavLink>
        <NavLink href="/admin/projects">{t('nav.projects')}</NavLink>
        <NavLink href="/admin/courses/completions">{t('nav.courseCompletions')}</NavLink>

        <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
          {t('nav.administration')}
        </p>
        {superAdmin && <NavLink href="/admin/organizations">{t('nav.organizations')}</NavLink>}
        <NavLink href="/admin/register">{t('nav.newAdmin')}</NavLink>

        <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
          {t('nav.editor')}
        </p>
        <a
          href={studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#488B90] hover:text-white transition"
        >
          <span>{t('nav.pageBuilder')}</span>
          <span className="text-xs opacity-60">↗</span>
        </a>
      </nav>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#488B90] hover:text-white transition"
    >
      {children}
    </Link>
  )
}
