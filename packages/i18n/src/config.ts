export const locales = ["en", "th"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"
export const localeCookieName = "NEXT_LOCALE"
export const localeCookieMaxAge = 60 * 60 * 24 * 365

export const localeLabels: Record<Locale, string> = {
  en: "English",
  th: "ไทย",
}

export const localeTags: Record<Locale, string> = {
  en: "en-US",
  th: "th-TH",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function normalizeLocale(
  value: string | null | undefined
): Locale | null {
  if (!value) return null

  const normalized = value.trim().toLowerCase()
  if (isLocale(normalized)) return normalized

  const language = normalized.split("-")[0]
  return isLocale(language) ? language : null
}
