'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { projectLoginSchema, type ProjectLoginData } from '@/lib/validation/projectLogin'
import { loginToProject } from '@/lib/project/auth'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/providers/LanguageProvider'

interface Props {
  organizationSlug: string
}

export default function ProjectLoginForm({ organizationSlug }: Props) {
  const router = useRouter()
  const { t } = useTranslation()
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[420px] flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="login-slug" className="sr-only">Prosjektnavn</label>
        <input
          {...register('slug')}
          id="login-slug"
          placeholder="Prosjektnavn (slug)"
          aria-required="true"
          aria-describedby={errors.slug ? 'login-slug-error' : undefined}
          className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 text-left"
        />
        {errors.slug && (
          <p id="login-slug-error" role="alert" className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="login-password" className="sr-only">{t('project.fieldPassword')}</label>
        <div className="relative">
          <input
            {...register('password')}
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            placeholder={t('project.fieldPassword')}
            aria-required="true"
            aria-describedby={errors.password ? 'login-password-error' : undefined}
            className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 pr-10 text-left"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
            aria-label={showPassword ? t('project.hidePassword') : t('project.showPassword')}
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
          <p id="login-password-error" role="alert" className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {serverError && (
        <p role="alert" aria-live="polite" className="text-sm text-red-600 text-center">{serverError}</p>
      )}

      <div className="flex justify-center mt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t('common.loading') : t('project.loginBtn')}
        </Button>
      </div>
    </form>
  )
}
