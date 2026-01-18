export const ROUTES = {
  home: '/',
  menu: '/meny',
  onboarding: '/onboarding',
  login: '/admin/login',
  register: '/admin/login',
} as const;

export const ROOT_PAGES = [ROUTES.home, ROUTES.menu, ROUTES.login] as string[];