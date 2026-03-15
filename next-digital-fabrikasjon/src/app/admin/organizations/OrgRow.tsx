'use client'

import { useState } from 'react'
import { toggleOrganizationActive } from './actions'
import { OrgForm } from './OrgForm'
import { useTranslation } from '@/providers/LanguageProvider'

interface OrgRowProps {
  _id: string
  name: string
  slug: string
  url: string
  active: boolean
}

export function OrgRow({ _id, name, slug, url, active }: OrgRowProps) {
  const { t } = useTranslation()
  const [editing, setEditing] = useState(false)
  const [toggling, setToggling] = useState(false)
  const [currentActive, setCurrentActive] = useState(active)

  async function handleToggle() {
    setToggling(true)
    try {
      await toggleOrganizationActive(_id, !currentActive)
      setCurrentActive(!currentActive)
    } finally {
      setToggling(false)
    }
  }

  if (editing) {
    return (
      <tr className="border-b border-gray-200">
        <td colSpan={5} className="px-4 py-3">
          <OrgForm
            orgId={_id}
            initialName={name}
            initialUrl={url}
            onDone={() => setEditing(false)}
          />
        </td>
      </tr>
    )
  }

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{name}</td>
      <td className="px-4 py-3 text-gray-500 text-sm">{slug}</td>
      <td className="px-4 py-3 text-sm">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#488B90] underline hover:text-[#214C50]">
          {url}
        </a>
      </td>
      <td className="px-4 py-3">
        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${currentActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
          {currentActive ? t('admin.orgStatus.active') : t('admin.orgStatus.inactive')}
        </span>
      </td>
      <td className="px-4 py-3 flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="rounded-lg bg-[#C2D8DA] px-3 py-1 text-xs font-bold text-[#214C50] hover:bg-[#488B90] hover:text-white transition"
        >
          {t('admin.orgEdit.btn')}
        </button>
        <button
          onClick={handleToggle}
          disabled={toggling}
          className={`rounded-lg px-3 py-1 text-xs font-bold transition disabled:opacity-50 ${
            currentActive
              ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {toggling ? '…' : currentActive ? t('admin.orgDeactivate.btn') : t('admin.orgActivate.btn')}
        </button>
      </td>
    </tr>
  )
}
