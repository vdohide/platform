"use client"

import { Languages } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

import {
  defaultLocale,
  localeCookieMaxAge,
  localeCookieName,
  locales,
  type Locale,
} from "@workspace/i18n/config"

import { usePathname } from "@/i18n/navigation"

export function LanguageSwitcher() {
  const locale = useLocale()
  const messages = useTranslations("shared.language")
  const pathname = usePathname()
  const router = useRouter()

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) return

    const localizedPathname =
      nextLocale === defaultLocale
        ? pathname
        : pathname === "/"
          ? `/${nextLocale}`
          : `/${nextLocale}${pathname}`
    const secure = window.location.protocol === "https:" ? "; Secure" : ""

    document.cookie = `${localeCookieName}=${encodeURIComponent(nextLocale)}; Path=/; Max-Age=${localeCookieMaxAge}; SameSite=Lax${secure}`
    router.replace(
      `${localizedPathname}${window.location.search}${window.location.hash}`,
      { scroll: false }
    )
  }

  return (
    <label className="relative flex h-8 items-center gap-1.5 rounded-lg border border-[var(--m-line)] bg-[var(--m-surface)] px-2 text-[var(--m-muted)] transition-colors hover:bg-[var(--m-surface-subtle)] hover:text-[var(--m-text)]">
      <span className="sr-only">{messages("label")}</span>
      <Languages className="pointer-events-none size-3.5" aria-hidden="true" />
      <select
        className="cursor-pointer appearance-none bg-transparent pr-1 text-[11px] font-semibold tracking-[.04em] uppercase outline-none"
        value={locale}
        aria-label={messages("label")}
        onChange={(event) => changeLocale(event.target.value as Locale)}
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-[var(--m-surface)]">
            {item === "en" ? messages("english") : messages("thai")}
          </option>
        ))}
      </select>
    </label>
  )
}
