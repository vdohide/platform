import { cookies } from "next/headers"
import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import {
  defaultLocale,
  localeCookieName,
  normalizeLocale,
  type Locale,
} from "@workspace/i18n/config"

import { routing } from "./routing"

const commonLoaders = {
  en: () => import("@workspace/i18n/locales/en.json").then((item) => item.default),
  th: () => import("@workspace/i18n/locales/th.json").then((item) => item.default),
} satisfies Record<Locale, () => Promise<unknown>>

const webLoaders = {
  en: () => import("./locales/en.json").then((item) => item.default),
  th: () => import("./locales/th.json").then((item) => item.default),
} satisfies Record<Locale, () => Promise<unknown>>

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale
  let locale: Locale

  if (hasLocale(routing.locales, requestedLocale)) {
    locale = requestedLocale
  } else {
    // Routes outside [locale] (for example the future dashboard) use the
    // account preference cookie and intentionally remain unprefixed.
    const cookieLocale = normalizeLocale(
      (await cookies()).get(localeCookieName)?.value
    )
    locale = cookieLocale ?? defaultLocale
  }

  const [shared, web] = await Promise.all([
    commonLoaders[locale](),
    webLoaders[locale](),
  ])

  return {
    locale,
    messages: {
      shared,
      ...(web as object),
    },
  }
})
