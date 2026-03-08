'use client'

import { useState } from 'react'
import { createOrganization, updateOrganization } from './actions'

interface OrgFormProps {
  /** If provided, form is in edit mode */
  orgId?: string
  initialName?: string
  initialUrl?: string
  onDone?: () => void
}

export function OrgForm({ orgId, initialName = '', initialUrl = '', onDone }: OrgFormProps) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const isEdit = !!orgId

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    try {
      if (isEdit) {
        await updateOrganization(orgId, formData)
      } else {
        await createOrganization(formData)
        ;(e.target as HTMLFormElement).reset()
      }
      onDone?.()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ukjent feil')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-3">
        <input
          name="name"
          type="text"
          defaultValue={initialName}
          placeholder="Organisasjonsnavn"
          required
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#214C50]"
        />
        <input
          name="url"
          type="url"
          defaultValue={initialUrl}
          placeholder="https://eksempel.no"
          required
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#214C50]"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-[#214C50] px-4 py-2 text-sm font-bold text-white hover:bg-[#488B90] transition disabled:opacity-50"
        >
          {loading ? '…' : isEdit ? 'Lagre' : 'Opprett'}
        </button>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition"
          >
            Avbryt
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  )
}
