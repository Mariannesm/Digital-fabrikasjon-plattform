'use client'

import { useTranslation } from '@/providers/LanguageProvider'

interface Props {
  projects: number
  courses: number
  userEmail: string | null
  userRole: string | null
}

export function DashboardView({ projects, courses, userEmail, userRole }: Props) {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">{t('nav.dashboard')}</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label={t('admin.dashboard.projectsLabel')} value={projects} />
        <StatCard label={t('admin.dashboard.coursesLabel')} value={courses} />
      </div>

      <div className="mt-10 text-sm text-gray-500">
        {t('admin.dashboard.loggedInAs')} <strong>{userEmail}</strong> ({userRole})
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#C2D8DA] px-6 py-8 text-center shadow-sm">
      <p className="text-4xl font-extrabold text-[#214C50]">{value}</p>
      <p className="mt-2 text-base font-semibold text-[#214C50]">{label}</p>
    </div>
  )
}
