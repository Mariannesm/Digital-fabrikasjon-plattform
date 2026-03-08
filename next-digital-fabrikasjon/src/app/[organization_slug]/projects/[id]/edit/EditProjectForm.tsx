'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { updateProject } from '@/lib/project/actions'
import { logoutFromProject } from '@/lib/project/auth'

interface Props {
  projectId: string
  projectSlug: string
  organizationSlug: string
  initialTitle: string
  initialImageUrl?: string
}

export default function EditProjectForm({
  projectId,
  projectSlug,
  organizationSlug,
  initialTitle,
  initialImageUrl,
}: Props) {
  const router = useRouter()
  const [imagePreview, setImagePreview] = useState<string | null>(initialImageUrl ?? null)
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setImagePreview(URL.createObjectURL(file))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSaving(true)

    try {
      const formData = new FormData(e.currentTarget)
      await updateProject(projectId, formData)
      router.push(`/${organizationSlug}/projects/${projectId}`)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Noe gikk galt ved lagring')
    } finally {
      setIsSaving(false)
    }
  }

  async function handleLogout() {
    setIsLoggingOut(true)
    await logoutFromProject(projectSlug)
    router.push(`/${organizationSlug}/projects`)
  }

  return (
    <div className="flex justify-center px-4 pb-14 pt-8">
      <div className="w-full max-w-[980px]">
        <p className="font-normal text-lg text-left mb-8">
          Her kan du oppdatere informasjonen på prosjektet ditt. Trykk på lagre når du er ferdig.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:gap-x-10 md:gap-y-4 md:grid-cols-2">
          {/* VENSTRE KOLONNE */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xl text-black text-left mb-3">Prosjektnavn:</label>
              <input
                name="title"
                type="text"
                defaultValue={initialTitle}
                className="bg-gray-200 rounded px-3 py-2 w-full"
                placeholder="Birdhouse"
              />
            </div>

            <div>
              <label className="block text-xl text-black text-left mb-3">
                Prosjektbilde (Utviklet produkt):
              </label>
              <input
                ref={fileInputRef}
                name="coverImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-200 rounded px-3 py-2 w-full text-left hover:bg-gray-300 transition-colors"
              >
                {imagePreview ? '✓ Bilde valgt – klikk for å bytte' : '+ Legg til bilde'}
              </button>
              {imagePreview && (
                <div className="mt-3 relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Forhåndsvisning"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* HØYRE KOLONNE */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xl text-black text-left mb-3">Beskrivelse av prosjektet:</label>
              <textarea
                name="description"
                className="bg-gray-200 rounded px-3 py-2 w-full min-h-[120px]"
                placeholder="(Hva, hvorfor, hvordan)"
              />
            </div>
          </div>

          {error && (
            <div className="md:col-span-2">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          {/* KNAPPER NEDERST */}
          <div className="md:col-span-2 flex justify-center gap-4 mt-6">
            <button
              type="submit"
              disabled={isSaving}
              className="bg-[#E69138] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#d47e20] transition-colors disabled:opacity-60"
            >
              {isSaving ? 'Lagrer...' : 'Lagre'}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="bg-gray-200 text-gray-800 font-semibold px-10 py-3 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-60"
            >
              {isLoggingOut ? '...' : 'Logg ut'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
