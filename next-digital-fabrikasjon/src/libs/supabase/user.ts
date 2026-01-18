'use server'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { createClient } from '@/libs/supabase/server'
import { loginUserSchema } from '@/libs/validation/login'

type LoginUserData = z.infer<typeof loginUserSchema>

type FormState = {
  error?: string
  success?: boolean
}

export async function signIn(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const validated = loginUserSchema.safeParse(data)

  if (!validated.success) {
    return {
      error: validated.error.issues[0]?.message || 'Ugyldig input',
    }
  }

  const { email, password } = validated.data

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: error.message }
  }

  redirect('/')

  // Denne linjen blir aldri nådd pga redirect, men TypeScript krever den
  return { success: true }
}