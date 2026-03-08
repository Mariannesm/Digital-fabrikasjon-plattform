'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createProject } from '@/lib/project/actions'

interface Props {
  organizationId: string
  organizationSlug: string
}

export default function RegisterProjectForm({ organizationId, organizationSlug }: Props) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImagePreview(url)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      formData.set('organizationId', organizationId)

      const { slug } = await createProject(formData)
      router.push(`/${organizationSlug}/projects/${slug}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Noe gikk galt')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center mt-10 sm:mt-16 px-4 pb-14">
      <form onSubmit={handleSubmit} className="grid gap-y-5 max-w-[520px] w-full">
        <p className="mb-4 text-lg font-normal">
          Her skal du registrere ditt prosjekt ved å fylle inn informasjon i feltene under:
        </p>

        {/* Prosjektnavn */}
        <div>
          <label className="block text-xl mb-3 text-left">Prosjektnavn:</label>
          <input
            name="title"
            type="text"
            required
            className="bg-gray-200 rounded px-3 py-2 w-full"
            placeholder="Birdhouse"
          />
        </div>

        {/* Prosjektbilde */}
        <div>
          <label className="block text-xl mb-3 text-left">Prosjektbilde:</label>
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

        {/* Beskrivelse */}
        <div>
          <label className="block text-xl mb-3 text-left">Kort beskrivelse:</label>
          <textarea
            name="description"
            className="bg-gray-200 rounded px-3 py-2 w-full min-h-[90px]"
            placeholder="Hva er prosjektet ditt?"
          />
        </div>

        {/* Passord */}
        <div>
          <label className="block text-xl mb-1 text-left">Lag et passord:</label>
          <p className="text-left mb-2 text-sm text-gray-600">
            (Passordet vil være gjeldende for hele gruppen din)
          </p>
          <div className="relative w-full">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={4}
              placeholder="Minst 4 tegn"
              className="bg-gray-200 rounded px-3 py-2 w-full pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
              aria-label={showPassword ? 'Skjul passord' : 'Vis passord'}
            >
              <Image
                src={showPassword ? '/icons/ClosedEye.png' : '/icons/OpenEye.png'}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2xl bg-[#214C50] px-10 py-3 text-lg font-bold text-white shadow-md hover:bg-[#488B90] disabled:opacity-60 transition-colors"
          >
            {isSubmitting ? 'Registrerer...' : 'Registrer prosjektet'}
          </button>
        </div>
      </form>
    </div>
  )
}
