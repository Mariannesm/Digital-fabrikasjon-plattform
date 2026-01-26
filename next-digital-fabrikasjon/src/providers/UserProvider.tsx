'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { UUID } from 'crypto'

type AppUser = {
  id: string
  email: string | null
  role: string | null
  assigned_to: UUID | null
}

type UserContextType = {
  user: AppUser | null
  isLoading: boolean
  refreshUser: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({
  children,
  initialUser
}: {
  children: ReactNode
  initialUser?: AppUser | null
}) {
  const [user, setUser] = useState<AppUser | null>(initialUser ?? null)
  const [isLoading, setIsLoading] = useState(!initialUser)
  const supabase = createClient()

  const loadUser = async () => {
    setIsLoading(true)
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser()

      if (!authUser) {
        setUser(null)
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role, email, assigned_to')
        .eq('id', authUser.id)
        .single()

      setUser({
        id: authUser.id,
        email: authUser.email ?? null,
        role: profile?.role ?? null,
        assigned_to: profile?.assigned_to ?? null,
      })
    } catch (error) {
      console.error('Feil ved lasting av bruker:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!initialUser) {
      loadUser()
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setUser(null)
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        loadUser()
      }
    })

    return () => subscription.unsubscribe()
  }, [initialUser])

  const refreshUser = async () => loadUser()

  return (
    <UserContext.Provider value={{ user, isLoading, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser må brukes innenfor UserProvider')
  }
  return context
}