'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isSuperAdmin } from '@/lib/auth/roles'

interface CreateAdminUserInput {
  email: string
  password: string
  role: 'ADMIN' | 'SUPER_ADMIN'
  organizationId: string | null
}

export async function createAdminUser(input: CreateAdminUserInput): Promise<void> {
  // Only SUPER_ADMIN can create users
  const caller = await getCurrentUserWithRole()
  if (!caller || !isSuperAdmin(caller.role)) {
    throw new Error('Kun SUPER_ADMIN kan opprette nye admin-brukere')
  }

  const supabase = createAdminClient()

  // Create auth user
  const { data, error: createError } = await supabase.auth.admin.createUser({
    email: input.email,
    password: input.password,
    email_confirm: true,
  })

  if (createError) {
    throw new Error(createError.message)
  }

  const userId = data.user.id

  // Insert profile with role and org assignment
  const { error: profileError } = await supabase.from('profiles').insert({
    id: userId,
    role: input.role,
    assigned_to: input.organizationId ?? null,
  })

  if (profileError) {
    // Clean up the created auth user if profile insert fails
    await supabase.auth.admin.deleteUser(userId)
    throw new Error(`Bruker opprettet, men profil feilet: ${profileError.message}`)
  }
}
