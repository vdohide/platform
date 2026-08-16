import type { ReactNode } from "react"
import { Link } from "@/i18n/navigation"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Check } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import { LocalizedText } from "@/components/i18n/localized-text"

export type MarketingFeature = {
  icon: LucideIcon
  eyebrow?: string
  title: string
  description: string
  tags?: readonly string[]
}

export function MarketingHero({
  eyebrow,
  title,
  description,
  primary = { href: "/login", label: "Start for free" },
  secondary = { href: "/pricing", label: "See pricing" },
  children,
}: {
  eyebrow: string
  title: string
  description: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
  children: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      <div className="marketing-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_70%)] opacity-80 blur-3xl" />

      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--m-line)] bg-[color-mix(in_srgb,var(--m-surface)_86%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--m-muted)] shadow-sm backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-[var(--m-brand)]" />
            <LocalizedText text={eyebrow} />
          </span>
          <h1 className="mt-7 max-w-3xl text-[3.35rem] leading-[.98] font-semibold tracking-[-.067em] text-balance sm:text-[4.7rem] lg:text-[5.1rem]">
            <LocalizedText text={title} />
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-pretty text-[var(--m-muted)] sm:text-xl">
            <LocalizedText text={description} />
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[var(--m-brand)] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(228,61,53,.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--m-brand-hover)] hover:shadow-[0_18px_42px_rgba(228,61,53,.3)]"
            >
              <LocalizedText text={primary.label} />
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--m-line-strong)] bg-[var(--m-surface)] px-6 text-sm font-semibold text-[var(--m-text)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--m-surface-subtle)] hover:shadow-lg"
            >
              <LocalizedText text={secondary.label} />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-12 -z-10 rounded-full bg-[var(--m-brand-soft)] blur-3xl" />
          {children}
        </div>
      </div>
    </section>
  )
}

export function ProductPanel({
  label,
  title,
  status = "Ready",
  children,
}: {
  label: string
  title: string
  status?: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-surface)] shadow-[0_35px_100px_rgba(15,17,24,.14)]">
      <div className="flex h-12 items-center justify-between border-b border-[var(--m-line)] bg-[var(--m-surface-subtle)] px-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[var(--m-brand)]" />
          <span className="size-2 rounded-full bg-[var(--m-line-strong)]" />
          <span className="size-2 rounded-full bg-[var(--m-line-strong)]" />
        </div>
        <span className="font-mono text-[9px] tracking-[.12em] text-[var(--m-faint)] uppercase">
          <LocalizedText text={label} />
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[10px] font-semibold tracking-[.14em] text-[var(--m-faint)] uppercase">
              <LocalizedText text="Current video" />
            </p>
            <p className="mt-2 text-lg font-semibold tracking-[-.025em]">
              <LocalizedText text={title} />
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] px-3 py-1.5 text-[10px] font-semibold text-[var(--m-muted)]">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <LocalizedText text={status} />
          </span>
        </div>
        <div className="mt-7">{children}</div>
      </div>
    </div>
  )
}

export function StatStrip({
  items,
}: {
  items: readonly { value: string; label: string }[]
}) {
  return (
    <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 sm:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            className="border-r border-b border-[var(--m-line)] px-5 py-7 nth-[2n]:border-r-0 nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:px-8 lg:last:border-r-0 lg:nth-[2n]:border-r"
            key={item.label}
          >
            <p className="text-xl font-semibold tracking-[-.04em] sm:text-2xl">
              <LocalizedText text={item.value} />
            </p>
            <p className="mt-1 text-xs text-[var(--m-faint)]">
              <LocalizedText text={item.label} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <p className="font-mono text-[10px] font-semibold tracking-[.18em] text-[var(--m-brand-ink)] uppercase">
        <LocalizedText text={eyebrow} />
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-.052em] text-balance sm:text-5xl">
        <LocalizedText text={title} />
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 text-[var(--m-muted)] sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          <LocalizedText text={description} />
        </p>
      ) : null}
    </div>
  )
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: readonly MarketingFeature[]
  columns?: 2 | 3
}) {
  return (
    <div
      className={cn(
        "mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-line)] shadow-[0_24px_70px_rgba(15,17,24,.07)]",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map(({ icon: Icon, eyebrow, title, description, tags }, index) => (
        <article
          className="group relative isolate min-h-[310px] overflow-hidden bg-[var(--m-surface)] p-7 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--m-surface)_78%,var(--m-brand-soft))] sm:p-8"
          key={title}
        >
          <div className="pointer-events-none absolute -top-20 -right-16 -z-10 size-56 rounded-full bg-[var(--m-brand-soft)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
          <div className="flex items-start justify-between gap-6">
            <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-brand-ink)] shadow-sm">
              <Icon className="size-5" />
            </span>
            <span className="font-mono text-[9px] text-[var(--m-faint)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-12">
            {eyebrow ? (
              <p className="text-[10px] font-semibold tracking-[.14em] text-[var(--m-brand-ink)] uppercase">
                <LocalizedText text={eyebrow} />
              </p>
            ) : null}
            <h3 className="mt-3 text-xl font-semibold tracking-[-.03em]">
              <LocalizedText text={title} />
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--m-muted)]">
              <LocalizedText text={description} />
            </p>
            {tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    className="rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] px-3 py-1.5 text-[10px] text-[var(--m-muted)]"
                    key={tag}
                  >
                    <LocalizedText text={tag} />
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}

export function StepGrid({
  items,
}: {
  items: readonly { title: string; description: string }[]
}) {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          className="rounded-[24px] border border-[var(--m-line)] bg-[var(--m-surface)] p-7 shadow-[0_16px_45px_rgba(15,17,24,.05)] sm:p-8"
          key={item.title}
        >
          <span className="font-mono text-[10px] text-[var(--m-brand-ink)]">
            <LocalizedText text="STEP" /> {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-8 text-xl font-semibold tracking-[-.03em]">
            <LocalizedText text={item.title} />
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--m-muted)]">
            <LocalizedText text={item.description} />
          </p>
        </article>
      ))}
    </div>
  )
}

export function DarkPanel({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string
  title: string
  description: string
  items: readonly string[]
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_82%_0%,rgba(255,98,88,.17),transparent_38%),linear-gradient(145deg,#171a23,#090a0f_72%)] p-8 text-[var(--m-night-text)] shadow-[0_32px_90px_rgba(7,8,12,.24)] sm:p-12 lg:p-16">
      <div className="marketing-noise pointer-events-none absolute inset-0 -z-10 opacity-[.035]" />
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[.18em] text-[#ff827a] uppercase">
            <LocalizedText text={eyebrow} />
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] text-balance sm:text-5xl">
            <LocalizedText text={title} />
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--m-night-muted)]">
            <LocalizedText text={description} />
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.045] px-4 py-4 text-sm text-[#d7d8dd]"
              key={item}
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/8 text-[#ff827a]">
                <Check className="size-3.5" />
              </span>
              <LocalizedText text={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MarketingCta({
  eyebrow = "Ready when you are",
  title,
  description,
  primary = { href: "/login", label: "Start for free" },
  secondary = { href: "/contact", label: "Talk to us" },
}: {
  eyebrow?: string
  title: string
  description: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="relative isolate mx-auto overflow-hidden rounded-[30px] border border-[var(--m-line)] bg-[var(--m-surface)] px-7 py-16 text-center shadow-[0_28px_80px_rgba(15,17,24,.09)] sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-56 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-[var(--m-brand-soft)] blur-3xl" />
        <p className="font-mono text-[10px] font-semibold tracking-[.18em] text-[var(--m-brand-ink)] uppercase">
          <LocalizedText text={eyebrow} />
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] text-balance sm:text-5xl">
          <LocalizedText text={title} />
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[var(--m-muted)]">
          <LocalizedText text={description} />
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--m-text)] px-6 text-sm font-semibold text-[var(--m-bg)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <LocalizedText text={primary.label} />
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--m-line-strong)] bg-[var(--m-bg)] px-6 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-[var(--m-surface-subtle)]"
          >
            <LocalizedText text={secondary.label} />
          </Link>
        </div>
      </div>
    </section>
  )
}
