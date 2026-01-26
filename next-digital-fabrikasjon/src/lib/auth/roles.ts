// Rolle-konstanter (matcher Supabase profiles-tabellen)
export const ROLES = {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]

// Rolle-hierarki (høyere tall = mer tilgang)
const ROLE_HIERARCHY: Record<string, number> = {
  [ROLES.ADMIN]: 1,
  [ROLES.SUPER_ADMIN]: 2,
}

/**
 * Sjekk om bruker har minst en gitt rolle
 * @example hasMinimumRole(user.role, ROLES.ADMIN) // true hvis admin eller super_admin
 */
export function hasMinimumRole(userRole: string | null, requiredRole: Role): boolean {
  if (!userRole) return false
  const userLevel = ROLE_HIERARCHY[userRole] ?? 0
  const requiredLevel = ROLE_HIERARCHY[requiredRole] ?? 0
  return userLevel >= requiredLevel
}

/**
 * Sjekk om bruker er admin eller høyere
 */
export function isAdmin(role: string | null): boolean {
  return hasMinimumRole(role, ROLES.ADMIN)
}

/**
 * Sjekk om bruker er super admin
 */
export function isSuperAdmin(role: string | null): boolean {
  return role === ROLES.SUPER_ADMIN
}