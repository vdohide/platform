import type { ReactNode } from "react"

import { MarketingFooter, MarketingHeader } from "../_comp/marketing-shell"

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--m-bg)] text-[var(--m-text)]">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  )
}
