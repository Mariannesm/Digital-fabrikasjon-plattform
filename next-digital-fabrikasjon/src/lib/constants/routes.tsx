export const ROUTES = {
  home: '/',
  menu: '/meny',
  onboarding: '/onboarding',
  login: '/admin/login',
  register: '/admin/login',
} as const;

export const ROOT_PAGES = [ROUTES.home, ROUTES.menu, ROUTES.login] as string[];

// Sider hvor brukeren kan endre organization
const INSTITUTION_SELECTABLE_PAGES = [ROUTES.home, ROUTES.onboarding] as string[];

export function isInstitutionSelectable(pathname: string | null): boolean {
  return pathname ? INSTITUTION_SELECTABLE_PAGES.includes(pathname) : false;
}