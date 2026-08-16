import {
  EyeOff,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ScanSearch,
  ShieldCheck,
} from "lucide-react"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  DarkPanel,
  FeatureGrid,
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
  StatStrip,
} from "../../_comp/marketing-detail"
import { LocalizedText } from "@/components/i18n/localized-text"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/security",
    title: "Secure Video Hosting & Embed Controls | VdoHide",
    description:
      "Protect video sources, restrict embeds by domain, secure accounts with modern authentication, and apply content access controls with VdoHide.",
    keywords: [
      "secure video hosting",
      "private video hosting",
      "domain restricted video",
      "secure video embed",
    ],
  })
}

export default function SecurityPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Security and control"
        title="Make video easy to watch—not easy to misuse."
        description="Protect accounts, keep source files behind the service, and control where embedded video is allowed to play."
        secondary={{ href: "/legal/content-policy", label: "Content policy" }}
      >
        <ProductPanel label="Playback policy" title="members-only-course.mp4">
          <div className="space-y-3">
            {[
              ["Source access", "Protected"],
              ["Allowed domains", "2 domains"],
              ["Public discovery", "Disabled"],
              ["Account 2FA", "Enabled"],
            ].map(([label, value]) => (
              <div
                className="flex items-center justify-between gap-5 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-4"
                key={label}
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <ShieldCheck className="size-4 text-[var(--m-brand-ink)]" />
                  <LocalizedText text={label ?? ""} />
                </span>
                <span className="text-[10px] text-[var(--m-faint)]">
                  <LocalizedText text={value ?? ""} />
                </span>
              </div>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <StatStrip
        items={[
          { value: "2FA", label: "Account protection" },
          { value: "Domain", label: "Embed restrictions" },
          { value: "Private", label: "Visibility controls" },
          { value: "Policy", label: "Content boundaries" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Layered controls"
            title="Protection around the account, source, and player."
            description="Security works best as several small, understandable controls instead of one fragile gate."
          />
          <FeatureGrid
            items={[
              {
                icon: LockKeyhole,
                title: "Protected source files",
                description:
                  "Keep original files behind the managed service rather than exposing a direct storage URL to viewers.",
              },
              {
                icon: ShieldCheck,
                title: "Domain-restricted embeds",
                description:
                  "Choose which websites may embed a video and block playback in places you did not authorize.",
              },
              {
                icon: EyeOff,
                title: "Visibility choices",
                description:
                  "Separate public publishing from content intended for a controlled or private audience.",
              },
              {
                icon: Fingerprint,
                title: "Modern authentication",
                description:
                  "Protect account access with verified email, social login, magic links, sessions, and two-factor authentication.",
              },
              {
                icon: KeyRound,
                title: "API credential hygiene",
                description:
                  "Keep authenticated application workflows separate from public playback and browser-facing code.",
              },
              {
                icon: ScanSearch,
                title: "Policy enforcement",
                description:
                  "Use clear content rules, reporting channels, review, removal, and repeat-infringer action around user uploads.",
              },
            ]}
          />
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <DarkPanel
            eyebrow="Shared responsibility"
            title="The platform protects delivery. You control who should receive it."
            description="VdoHide provides infrastructure controls, while each customer remains responsible for user authorization, age checks, lawful content, and secure application logic."
            items={[
              "Use strong account security",
              "Keep API credentials server-side",
              "Configure domains deliberately",
              "Retain originals and backups",
            ]}
          />
        </div>
      </section>

      <MarketingCta
        title="Build a video experience with boundaries."
        description="Start with secure defaults, apply the controls your audience needs, and review the policy before publishing user content."
        secondary={{ href: "/contact", label: "Discuss your use case" }}
      />
    </>
  )
}
