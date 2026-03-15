'use client'

import { useState } from 'react'
import { createAdminUser } from './actions'
import { useTranslation } from '@/providers/LanguageProvider'

interface Organization {
  _id: string
  name: string
  slug: { current: string }
}

interface Props {
  organizations: Organization[]
}

export function RegisterAdminForm({ organizations }: Props) {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'ADMIN' | 'SUPER_ADMIN'>('ADMIN')
  const [orgId, setOrgId] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (role === 'ADMIN' && !orgId) {
      setError(t('admin.register.adminOrgRequired'))
      return
    }

    setLoading(true)
    try {
      await createAdminUser({
        email,
        password,
        role,
        organizationId: role === 'ADMIN' ? orgId : null,
      })
      setSuccess(
        t('admin.register.successMessage')
          .replace('{email}', email)
          .replace('{role}', role)
      )
      setEmail('')
      setPassword('')
      setOrgId('')
      setRole('ADMIN')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t('common.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold text-[#214C50]">
          {t('admin.fieldEmail')}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#214C50]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-semibold text-[#214C50]">
          {t('admin.fieldPassword')}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          className="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#214C50]"
        />
        <p className="text-xs text-gray-500">{t('admin.fieldPasswordNote')}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="role" className="text-sm font-semibold text-[#214C50]">
          {t('admin.fieldRole')}
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'ADMIN' | 'SUPER_ADMIN')}
          className="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#214C50]"
        >
          <option value="ADMIN">{t('admin.register.roleAdmin')}</option>
          <option value="SUPER_ADMIN">{t('admin.register.roleSuperAdmin')}</option>
        </select>
      </div>

      {role === 'ADMIN' && (
        <div className="flex flex-col gap-1">
          <label htmlFor="org" className="text-sm font-semibold text-[#214C50]">
            {t('admin.fieldOrg')} <span className="text-red-500">*</span>
          </label>
          <select
            id="org"
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
            required={role === 'ADMIN'}
            className="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#214C50]"
          >
            <option value="">{t('admin.selectOrg')}</option>
            {organizations.map((org) => (
              <option key={org._id} value={org._id}>
                {org.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-[#214C50] px-8 py-3 text-base font-bold text-white shadow hover:bg-[#488B90] transition disabled:opacity-50"
      >
        {loading ? t('admin.creating') : t('admin.createAdmin.btn')}
      </button>
    </form>
  )
}
