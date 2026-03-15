'use client'

import Link from 'next/link'
import { useTranslation } from '@/providers/LanguageProvider'

interface Props {
  superAdmin: boolean
  studioUrl: string
}

export function AdminSidebar({ superAdmin, studioUrl }: Props) {
  const { t } = useTranslation()

  return (
    <nav
      aria-label={t('admin.nav.ariaLabel')}
      className="w-60 flex-shrink-0 bg-[#C2D8DA] flex flex-col p-4 gap-1 overflow-y-auto"
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
