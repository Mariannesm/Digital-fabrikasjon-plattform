'use client'

import { createContext, useContext, ReactNode } from 'react'

type Organization = {
  _id: string
  name: string
  slug: {
    current: string
  }
  icon?: {
    asset?: {
      url: string
    }
    alt?: string
  }
  url: string
}

type OrganizationContextType = {
  organization: Organization
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined)

export function OrganizationProvider({
  children,
  organization
}: {
  children: ReactNode
  organization: Organization
}) {
  return (
    <OrganizationContext.Provider value={{ organization }}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = () => {
  const context = useContext(OrganizationContext)
  if (!context) {
    throw new Error('useOrganization må brukes innenfor OrganizationProvider')
  }
  return context
}
