import { cookies } from 'next/headers'
import no from '@/messages/no.json'
import en from '@/messages/en.json'
import type { TranslationKey, Locale } from '@/providers/LanguageProvider'

const MESSAGES = { no, en } as const

/**
 * Server-side translations – bruk i Server Components og Server Actions.
 * Client Components bruker useTranslation() fra LanguageProvider.
 */
export async function getTranslations() {
  const cookieStore = await cookies()
  const raw = cookieStore.get('locale')?.value
  const locale: Locale = raw === 'en' ? 'en' : 'no'
  const messages = MESSAGES[locale]

  function t(key: TranslationKey, vars?: Record<string, string | number>): string {
    let msg: string = messages[key] ?? MESSAGES.no[key] ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        msg = msg.replace(`{${k}}`, String(v))
      }
    }
    return msg
  }

  return { t, locale }
}
