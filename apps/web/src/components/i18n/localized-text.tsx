import type { ReactNode } from "react"
import { useTranslations } from "next-intl"

import { contentMessageKey } from "@/i18n/content-key"

function useRawContentTranslation() {
  const messages = useTranslations("content")

  return (text: string) => {
    const key = contentMessageKey(text)
    return messages.has(key) ? (messages.raw(key) as string) : text
  }
}

export function LocalizedText({ text }: { text: string }) {
  return useRawContentTranslation()(text)
}

export function useContentTranslation() {
  return useRawContentTranslation()
}

export function LocalizedStatusIcon({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  const t = useContentTranslation()

  return (
    <span className={className} role="img" aria-label={t(label)}>
      {children}
    </span>
  )
}

export function LocalizedNavigation({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  const t = useContentTranslation()

  return (
    <nav className={className} aria-label={t(label)}>
      {children}
    </nav>
  )
}
