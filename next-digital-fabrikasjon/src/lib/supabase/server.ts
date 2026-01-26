import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'
import type { UUID } from 'crypto'

type ServerUser = {
  id: string
  email: string | null
  role: string | null
  assigned_to: UUID | null
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignorer feil i Server Components (vanlig)
          }
        },
      },
    }
  )
}

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Refresh token om nødvendig
  await supabase.auth.getUser()

  return response
}

/**
 * Hent innlogget bruker med rolle fra profiles-tabellen
 * Brukes i Server Components for rolle-sjekking
 */
export async function getCurrentUserWithRole(): Promise<ServerUser | null> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('role, assigned_to')
    .eq('id', user.id)
    .single()

  return {
    id: user.id,
    email: user.email ?? null,
    role: profile?.role ?? 'user',
    assigned_to: profile?.assigned_to ?? null,
  }
}