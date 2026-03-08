'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import no from '@/messages/no.json'
import en from '@/messages/en.json'

export type Locale = 'no' | 'en'

const COOKIE_NAME = 'locale'
const MESSAGES = { no, en } as const

type Messages = typeof no
export type TranslationKey = keyof Messages

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string
}

export const LanguageContext = createContext<LanguageContextType>({
  locale: 'no',
  setLocale: () => {},
  t: (key) => key,
})

export function LanguageProvider({
  children,
  initialLocale = 'no',
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  // Read cookie on mount (client-side)
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)locale=([^;]+)/)
    if (match && (match[1] === 'no' || match[1] === 'en')) {
      setLocaleState(match[1])
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    // Set cookie (1 year, SameSite=Lax)
    document.cookie = `${COOKIE_NAME}=${next};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`
  }, [])

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>): string => {
      let msg: string = MESSAGES[locale][key] ?? MESSAGES['no'][key] ?? key
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          msg = msg.replace(`{${k}}`, String(v))
        }
      }
      return msg
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

/** Convenience hook – same as useLanguage but only returns t */
export function useTranslation() {
  const { t, locale } = useContext(LanguageContext)
  return { t, locale }
}

/** Server-side helper: read locale from cookie string */
export function getLocaleFromCookieString(cookieHeader: string | null): Locale {
  if (!cookieHeader) return 'no'
  const match = cookieHeader.match(/(?:^|;\s*)locale=([^;]+)/)
  if (match && (match[1] === 'no' || match[1] === 'en')) return match[1]
  return 'no'
}
