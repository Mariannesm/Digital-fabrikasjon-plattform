'use client'

import { useActionState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginUserSchema } from '@/lib/validation/login'
import { signIn } from '@/lib/supabase/user'
import { Button } from "@/components/ui/Button"
import { z } from 'zod'

type FormState = { error?: string }
type LoginFormData = z.infer<typeof loginUserSchema>

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    signIn,
    { error: undefined }
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginUserSchema),
    mode: 'onChange',
  })

  const onSubmit = handleSubmit((data) => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  })

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-6"
      noValidate
    >
      {/* email */}
      <div>
        <label className="block text-sm font-medium mb-1">E-post</label>
        <input
          {...register("email")}
          type="email"
          placeholder="olanordmann@hiof.no"
          className="w-full rounded-md px-4 py-2 border bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* password */}
      <div>
        <label className="block text-sm font-medium mb-1">Passord</label>
        <input
          {...register("password")}
          type="password"
          placeholder="••••••••"
          className="w-full rounded-md px-4 py-2 border bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {state?.error && (
        <p className="text-center text-red-600 font-medium rounded bg-red-50 py-2">
          {state.error}
        </p>
      )}

      <Button
        type="submit"
        pendingText="Logger inn..."
        disabled={isPending}
      >
        Logg inn
      </Button>
    </form>
  )
}