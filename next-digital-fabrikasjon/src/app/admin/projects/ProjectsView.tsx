'use client'

import { useTransition } from 'react'
import { useTranslation } from '@/providers/LanguageProvider'
import { adminUpdateProjectStatus } from '@/lib/project/actions'

interface ProjectRow {
  _id: string
  title: string
  slug: { current: string }
  status: string
  organization: { name: string; slug: { current: string } }
  _createdAt: string
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-gray-100 text-gray-700',
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-700',
}

interface Props {
  projects: ProjectRow[]
}

function ActionButtons({ projectId, status }: { projectId: string; status: string }) {
  const { t } = useTranslation()
  const [isPending, startTransition] = useTransition()

  function handleApprove() {
    startTransition(() => {
      adminUpdateProjectStatus(projectId, 'approved')
    })
  }

  function handleReject() {
    startTransition(() => {
      adminUpdateProjectStatus(projectId, 'rejected')
    })
  }

  return (
    <td className="px-4 py-3 flex gap-2">
      {status !== 'approved' && (
        <button
          onClick={handleApprove}
          disabled={isPending}
          className="rounded-lg bg-green-600 px-3 py-1 text-xs font-bold text-white hover:bg-green-700 transition disabled:opacity-50"
        >
          {t('project.approve')}
        </button>
      )}
      {status !== 'rejected' && (
        <button
          onClick={handleReject}
          disabled={isPending}
          className="rounded-lg bg-red-600 px-3 py-1 text-xs font-bold text-white hover:bg-red-700 transition disabled:opacity-50"
        >
          {t('project.reject')}
        </button>
      )}
    </td>
  )
}

export function ProjectsView({ projects }: Props) {
  const { t } = useTranslation()

  const STATUS_LABELS: Record<string, string> = {
    draft: t('project.status.draft'),
    pending: t('project.status.pending'),
    approved: t('project.status.approved'),
    rejected: t('project.status.rejected'),
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#214C50] mb-8">{t('nav.projects')}</h1>

      {projects.length === 0 ? (
        <p className="text-gray-500">{t('admin.noProjects')}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#C2D8DA] text-[#214C50]">
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colTitle')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.projects.colOrg')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colStatus')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.projects.colCreated')}</th>
                <th className="px-4 py-3 text-left font-semibold">{t('admin.colAction')}</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-gray-600">{p.organization?.name ?? '–'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        STATUS_COLORS[p.status] ?? 'bg-gray-100'
                      }`}
                    >
                      {STATUS_LABELS[p.status] ?? p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(p._createdAt).toLocaleDateString('nb-NO')}
                  </td>
                  <ActionButtons projectId={p._id} status={p.status} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
