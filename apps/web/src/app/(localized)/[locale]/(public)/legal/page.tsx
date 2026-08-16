import { Link } from "@/i18n/navigation"
import {
  ArrowRight,
  FileCheck2,
  Fingerprint,
  Scale,
  ShieldAlert,
} from "lucide-react"

import { LocalizedText } from "@/components/i18n/localized-text"
import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/legal",
    title: "Legal Center | VdoHide",
    description:
      "Read the VdoHide Terms of Service, Content Policy, Privacy Policy, and copyright and DMCA process.",
  })
}

const documents = [
  {
    href: "/legal/terms",
    icon: FileCheck2,
    label: "Terms of Service",
    description:
      "The rules, responsibilities, service terms, warranty disclaimers, and liability limits that apply when you use VdoHide.",
  },
  {
    href: "/legal/content-policy",
    icon: ShieldAlert,
    label: "Content Policy",
    description:
      "Rules for adult content, consent, performer age, copyright, safety, restricted material, and enforcement.",
  },
  {
    href: "/legal/privacy",
    icon: Fingerprint,
    label: "Privacy Policy",
    description:
      "What information VdoHide collects, why it is used, how it is shared, and the choices available to you.",
  },
  {
    href: "/legal/dmca",
    icon: Scale,
    label: "DMCA & Copyright",
    description:
      "How copyright owners can report material and how uploaders can submit a valid counter-notification.",
  },
] as const

export default function LegalPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="marketing-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-55" />
      <div className="pointer-events-none absolute -top-44 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_68%)] blur-3xl" />

      <section className="mx-auto max-w-[1200px] px-5 pt-20 pb-14 text-center sm:px-8 sm:pt-28 sm:pb-20">
        <p className="font-mono text-[10px] font-semibold tracking-[.2em] text-[var(--m-brand-ink)] uppercase">
          <LocalizedText text="VdoHide legal" />
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-[-.06em] text-balance sm:text-6xl lg:text-7xl">
          <LocalizedText text="Clear terms for a platform built on trust." />
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-pretty text-[var(--m-muted)] sm:text-lg">
          <LocalizedText text="These documents explain the relationship between VdoHide, the people who upload video, and the viewers who watch it." />
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-surface)] shadow-[0_30px_90px_rgba(15,17,24,.08)] md:grid-cols-2 lg:grid-cols-4">
          {documents.map((document, index) => {
            const Icon = document.icon
            return (
              <Link
                href={document.href}
                key={document.href}
                className="group relative flex min-h-80 flex-col border-b border-[var(--m-line)] p-7 transition-colors last:border-b-0 hover:bg-[var(--m-surface-subtle)] sm:p-8 md:min-h-[390px] md:border-r lg:border-r lg:border-b-0 lg:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-brand-ink)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] text-[var(--m-faint)]">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-auto pt-16">
                  <h2 className="text-2xl font-semibold tracking-[-.035em]">
                    <LocalizedText text={document.label} />
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--m-muted)]">
                    <LocalizedText text={document.description} />
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[var(--m-text)]">
                    <LocalizedText text="Read document" />
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[var(--m-faint)]">
          <LocalizedText text="These documents are intended to explain VdoHide's current service practices. Mandatory rights under applicable law are not waived." />
        </p>
      </section>
    </div>
  )
}
