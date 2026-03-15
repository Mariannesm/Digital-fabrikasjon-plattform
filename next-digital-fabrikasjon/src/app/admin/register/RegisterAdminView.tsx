'use client'

import { useTranslation } from '@/providers/LanguageProvider'
import { RegisterAdminForm } from './RegisterAdminForm'

interface Organization {
  _id: string
  name: string
  slug: { current: string }
}

interface Props {
  organizations: Organization[]
}

export function RegisterAdminView({ organizations }: Props) {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-2">{t('admin.registerTitle')}</h1>
      <p className="mb-8 text-sm text-gray-500">
        {t('admin.register.note')}
      </p>

      <RegisterAdminForm organizations={organizations} />
    </div>
  )
}
