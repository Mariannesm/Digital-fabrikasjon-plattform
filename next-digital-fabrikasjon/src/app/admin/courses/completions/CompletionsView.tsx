'use client'

import { useTranslation } from '@/providers/LanguageProvider'

interface CompletionRow {
  _id: string
  courseSlug: string
  email: string
  score: number
  total: number
  passed: boolean
  completedAt: string
  organizationSlug: string
}

interface OrgOption {
  slug: string
  name: string
}

interface Props {
  rows: CompletionRow[]
  organizations: OrgOption[]
  currentOrg: string | undefined
  superAdmin: boolean
}

export default function CompletionsView({ rows, organizations, currentOrg, superAdmin }: Props) {
  const { t, locale } = useTranslation()

  const rowCountKey = rows.length === 1 ? 'admin.completions.rowCount' : 'admin.completions.rowCountPlural'

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl font-bold text-[#214C50]">{t('admin.completions.title')}</h1>

        {superAdmin && (
          <form method="GET" className="flex items-center gap-2">
            <label htmlFor="org-filter" className="text-sm font-semibold text-[#214C50]">
              {t('admin.completions.orgFilter')}
            </label>
            <select
              id="org-filter"
              name="org"
              defaultValue={currentOrg ?? ''}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#488B90]"
            >
              <option value="">{t('admin.completions.allOrgs')}</option>
              {organizations.map((o) => (
                <option key={o.slug} value={o.slug}>{o.name}</option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-lg bg-[#214C50] px-4 py-2 text-sm font-semibold text-white hover:bg-[#488B90] transition"
            >
              {t('admin.completions.filter')}
            </button>
          </form>
        )}
      </div>

      {rows.length === 0 ? (
        <p className="text-gray-500">{t('admin.noCompletions')}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colEmail')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colCourse')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colResult')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colPassed')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colDate')}</th>
                {superAdmin && (
                  <th className="px-4 py-3 text-left font-semibold">{t('admin.colOrg')}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3 font-medium">{row.courseSlug}</td>
                  <td className="px-4 py-3">
                    {row.score}/{row.total} ({Math.round((row.score / row.total) * 100)}%)
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      row.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'
                    }`}>
                      {row.passed ? t('admin.passed.yes') : t('admin.passed.no')}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {row.completedAt
                      ? new Date(row.completedAt).toLocaleDateString(locale === 'en' ? 'en-GB' : 'nb-NO')
                      : '–'}
                  </td>
                  {superAdmin && (
                    <td className="px-4 py-3 text-gray-500">{row.organizationSlug}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-gray-400">{t(rowCountKey, { n: rows.length })}</p>
        </div>
      )}
    </div>
  )
}
