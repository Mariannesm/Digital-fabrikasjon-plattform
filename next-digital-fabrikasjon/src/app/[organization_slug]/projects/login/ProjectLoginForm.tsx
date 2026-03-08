'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { projectLoginSchema, type ProjectLoginData } from '@/lib/validation/projectLogin'
import { loginToProject } from '@/lib/project/auth'
import { Button } from '@/components/ui/Button'

interface Props {
  organizationSlug: string
}

export default function ProjectLoginForm({ organizationSlug }: Props) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectLoginData>({
    resolver: zodResolver(projectLoginSchema),
  })

  async function onSubmit(data: ProjectLoginData) {
    setServerError(null)
    const error = await loginToProject(data.slug, data.password)
    if (error) {
      setServerError(error)
      return
    }
    router.push(`/${organizationSlug}/projects/${data.slug}/edit`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[420px] flex flex-col gap-4">
      <div>
        <input
          {...register('slug')}
          placeholder="Prosjektnavn (slug)"
          className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 text-left"
        />
        {errors.slug && (
          <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
        )}
      </div>

      <div>
        <div className="relative">
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder="Passord"
            className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 pr-10 text-left"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
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
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red-600 text-center">{serverError}</p>
      )}

      <div className="flex justify-center mt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logger inn...' : 'Logg inn'}
        </Button>
      </div>
    </form>
  )
}
