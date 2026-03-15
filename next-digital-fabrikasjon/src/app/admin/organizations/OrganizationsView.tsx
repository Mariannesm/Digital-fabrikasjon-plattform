'use client'

import { useTranslation } from '@/providers/LanguageProvider'
import { OrgRow } from './OrgRow'
import { OrgForm } from './OrgForm'

interface Organization {
  _id: string
  name: string
  slug: { current: string }
  url: string
  active: boolean
}

interface Props {
  organizations: Organization[]
}

export function OrganizationsView({ organizations }: Props) {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">{t('admin.orgTitle')}</h1>

      {/* Create new org */}
      <div className="mb-8 rounded-2xl bg-[#C2D8DA] px-6 py-5">
        <h2 className="mb-3 text-base font-bold text-[#214C50]">{t('admin.orgCreate')}</h2>
        <OrgForm />
      </div>

      {/* Org table */}
      {organizations.length === 0 ? (
        <p className="text-gray-500">{t('admin.organizations.noOrgs')}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">{t('admin.organizations.colName')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.organizations.colSlug')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.organizations.colUrl')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colStatus')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colAction')}</th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <OrgRow
                  key={org._id}
                  _id={org._id}
                  name={org.name}
                  slug={org.slug?.current ?? ''}
                  url={org.url ?? ''}
                  active={org.active ?? false}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
