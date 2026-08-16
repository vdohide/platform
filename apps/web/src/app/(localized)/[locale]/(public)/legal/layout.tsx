import type { ReactNode } from "react"
import { Link } from "@/i18n/navigation"

import {
  LocalizedNavigation,
  LocalizedText,
} from "@/components/i18n/localized-text"
import { LegalTranslationNotice } from "@/components/i18n/legal-translation-notice"

import { MarketingFooter, MarketingHeader } from "../_comp/marketing-shell"

const legalNavigation = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/content-policy", label: "Content" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/dmca", label: "DMCA" },
] as const

export const dynamic = "force-static"

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--m-bg)] text-[var(--m-text)]">
      <MarketingHeader />
      <div className="border-b border-[var(--m-line)] bg-[var(--m-surface)]">
        <div className="mx-auto flex h-12 max-w-[1200px] items-center gap-5 overflow-x-auto px-5 sm:px-8">
          <Link
            href="/legal"
            className="shrink-0 text-xs font-semibold text-[var(--m-text)]"
          >
            <LocalizedText text="Legal" />
          </Link>
          <span className="h-4 w-px shrink-0 bg-[var(--m-line)]" />
          <LocalizedNavigation
            className="flex items-center gap-5"
            label="Legal navigation"
          >
            {legalNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 text-xs font-medium text-[var(--m-muted)] transition-colors hover:text-[var(--m-text)]"
              >
                <LocalizedText text={item.label} />
              </Link>
            ))}
          </LocalizedNavigation>
        </div>
      </div>
      <LegalTranslationNotice />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  )
}
