import { Link } from "@/i18n/navigation"
import { ArrowRight, Check, Minus, Plus } from "lucide-react"

import {
  LocalizedStatusIcon,
  LocalizedText,
} from "@/components/i18n/localized-text"

import { MarketingFooter, MarketingHeader } from "./marketing-shell"
import { PricingCalculator } from "./pricing-calculator"
import { PricingPlans } from "./pricing-plans"
import { SectionLabel } from "./landing/section-label"

const comparisons = [
  {
    feature: "Video storage",
    free: "Unlimited*",
    standard: "$15 / TB",
    highVolume: "$30 / TB",
  },
  {
    feature: "Video playback",
    free: "Unlimited*",
    standard: "5× storage",
    highVolume: "Unlimited*",
  },
  {
    feature: "Player advertising",
    free: "VdoHide ads",
    standard: "No ads",
    highVolume: "No ads",
  },
  {
    feature: "1080p adaptive HLS",
    free: true,
    standard: true,
    highVolume: true,
  },
  { feature: "Global delivery", free: true, standard: true, highVolume: true },
  { feature: "Analytics", free: "Basic", standard: "Full", highVolume: "Full" },
  { feature: "REST API", free: false, standard: true, highVolume: true },
  { feature: "Custom domains", free: false, standard: false, highVolume: true },
] as const

const faqs = [
  {
    question: "How can the Free plan be unlimited?",
    answer:
      "The Free plan is funded by advertising shown in the VdoHide player. Unlimited storage and playback are for genuine video hosting and remain subject to fair usage.",
  },
  {
    question: "What does 5× included egress mean?",
    answer:
      "If your average monthly storage is 2 TB, Standard mode includes up to 10 TB of video playback delivery that month.",
  },
  {
    question: "What counts as fair usage?",
    answer:
      "VdoHide is designed for hosting and playing video for real viewers. General file distribution, bandwidth resale, automated scraping, illegal content, and abusive traffic are excluded.",
  },
  {
    question: "Can I remove advertising?",
    answer:
      "Yes. Stream is ad-free in both Standard and High-volume modes, starting at $15 per TB per month.",
  },
  {
    question: "Can I switch modes later?",
    answer:
      "Yes. Start free, move to Stream Standard when you need an ad-free player, and enable High-volume when you need unlimited included egress.",
  },
] as const

function ComparisonValue({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <LocalizedStatusIcon
        label="Included"
        className="grid size-6 place-items-center rounded-full bg-[var(--m-brand-soft)]"
      >
        <Check
          className="size-3.5 text-[var(--m-brand-ink)]"
          aria-hidden="true"
        />
      </LocalizedStatusIcon>
    )
  if (value === false)
    return (
      <LocalizedStatusIcon
        label="Not included"
        className="grid size-6 place-items-center rounded-full bg-[var(--m-surface-subtle)]"
      >
        <Minus className="size-3.5 text-[var(--m-faint)]" aria-hidden="true" />
      </LocalizedStatusIcon>
    )
  return (
    <span>
      <LocalizedText text={value} />
    </span>
  )
}

export function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--m-bg)] text-[var(--m-text)]">
      <MarketingHeader />

      <section className="relative isolate px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="marketing-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] opacity-65" />
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_68%)] opacity-70 blur-2xl" />
        <div className="mx-auto max-w-[900px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--m-line)] bg-[var(--m-surface)] px-3 py-1.5 text-xs font-medium text-[var(--m-muted)] shadow-sm">
            <span className="size-1.5 rounded-full bg-[var(--m-brand)]" />
            <LocalizedText text="Simple pricing. No surprises." />
          </span>
          <h1 className="mt-7 text-[3.35rem] leading-[.98] font-semibold tracking-[-.067em] text-balance sm:text-[4.8rem] lg:text-[5.25rem]">
            <LocalizedText text="Pricing that grows with your audience." />
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-pretty text-[var(--m-muted)] sm:text-xl">
            <LocalizedText text="Start free with ads. Move to predictable ad-free pricing only when your product needs it." />
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl overflow-hidden rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface)] shadow-[0_18px_45px_rgba(15,17,24,.06)] sm:grid-cols-3">
            {[
              { value: "$0", label: "Free forever" },
              { value: "$15", label: "Standard / TB" },
              { value: "$30", label: "High-volume / TB" },
            ].map((item) => (
              <div
                className="border-b border-[var(--m-line)] px-5 py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
                key={item.label}
              >
                <p className="text-lg font-semibold tracking-[-.035em]">
                  <LocalizedText text={item.value} />
                </p>
                <p className="mt-1 text-[10px] text-[var(--m-faint)]">
                  <LocalizedText text={item.label} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <PricingPlans />
          <p className="mt-5 text-xs leading-5 text-[var(--m-faint)]">
            <LocalizedText text="*Unlimited usage is subject to fair usage for genuine video hosting and playback. The Free plan displays advertising in the VdoHide player." />
          </p>
        </div>
      </section>

      <section
        id="calculator"
        className="relative isolate scroll-mt-20 overflow-hidden border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_68%)] opacity-40 blur-3xl" />
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Pricing calculator</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] text-balance sm:text-5xl">
              <LocalizedText text="See the number before the invoice." />
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--m-muted)]">
              <LocalizedText text="Enter your average storage and compare Standard with High-volume in real time." />
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <SectionLabel>Plan comparison</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] text-balance sm:text-5xl">
              <LocalizedText text="Know exactly what changes." />
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--m-muted)]">
              <LocalizedText text="One free plan and one paid plan with two delivery modes." />
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[26px] border border-[var(--m-line)] bg-[var(--m-surface)] shadow-[0_20px_60px_rgba(15,17,24,.06)]">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1.35fr_repeat(3,1fr)] border-b border-[var(--m-line)] bg-[var(--m-night)] px-7 py-6 text-xs text-[var(--m-night-text)]">
                <span className="font-semibold">
                  <LocalizedText text="Feature" />
                </span>
                <span>
                  <strong className="block">
                    <LocalizedText text="Free" />
                  </strong>
                  <small className="mt-1 block font-normal text-[var(--m-night-muted)]">
                    $0 <LocalizedText text="forever" />
                  </small>
                </span>
                <span>
                  <strong className="block">
                    <LocalizedText text="Standard" />
                  </strong>
                  <small className="mt-1 block font-normal text-[var(--m-night-muted)]">
                    $15 / TB
                  </small>
                </span>
                <span>
                  <strong className="block">
                    <LocalizedText text="High-volume" />
                  </strong>
                  <small className="mt-1 block font-normal text-[var(--m-night-muted)]">
                    $30 / TB
                  </small>
                </span>
              </div>
              {comparisons.map((row) => (
                <div
                  className="grid grid-cols-[1.35fr_repeat(3,1fr)] items-center border-b border-[var(--m-line)] px-7 py-5 text-sm transition-colors last:border-b-0 hover:bg-[var(--m-surface-subtle)]"
                  key={row.feature}
                >
                  <span className="font-semibold">
                    <LocalizedText text={row.feature} />
                  </span>
                  <span className="text-[var(--m-muted)]">
                    <ComparisonValue value={row.free} />
                  </span>
                  <span className="text-[var(--m-muted)]">
                    <ComparisonValue value={row.standard} />
                  </span>
                  <span className="text-[var(--m-muted)]">
                    <ComparisonValue value={row.highVolume} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative isolate mx-auto grid max-w-[1200px] gap-12 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_85%_0%,rgba(255,98,88,.16),transparent_36%),linear-gradient(145deg,#171a23,#090a0f_72%)] p-8 text-[var(--m-night-text)] shadow-[0_28px_80px_rgba(7,8,12,.22)] sm:p-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold tracking-[.16em] text-[#ff827a] uppercase">
              <LocalizedText text="Fair usage" />
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.045em] text-balance sm:text-4xl">
              <LocalizedText text="Unlimited for video—not general file hosting." />
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
              <span className="font-mono text-[10px] text-white/35">01</span>
              <p className="mt-5 text-sm leading-7 text-[var(--m-night-muted)]">
                <LocalizedText text="Free and High-volume are designed for storing video and playing it for real viewers through VdoHide." />
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.045] p-5">
              <span className="font-mono text-[10px] text-white/35">02</span>
              <p className="mt-5 text-sm leading-7 text-[var(--m-night-muted)]">
                <LocalizedText text="File distribution, bandwidth resale, automated scraping, illegal content, and abusive traffic are excluded." />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>Pricing FAQ</SectionLabel>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-[-.05em] text-balance sm:text-5xl">
              <LocalizedText text="Clear answers before you choose." />
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--m-muted)]">
              <LocalizedText text="No hidden setup fees, confusing units, or surprise delivery charges." />
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <details
                className="group overflow-hidden rounded-[20px] border border-[var(--m-line)] bg-[var(--m-surface)] px-5 shadow-[0_10px_30px_rgba(15,17,24,.035)] transition-all open:border-[var(--m-line-strong)] open:shadow-[0_20px_50px_rgba(15,17,24,.075)] hover:border-[var(--m-line-strong)] sm:px-7"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 rounded-xl py-6 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[var(--m-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--m-surface)] sm:gap-5">
                  <span className="font-mono text-[10px] text-[var(--m-faint)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-semibold sm:text-base">
                    <LocalizedText text={faq.question} />
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-muted)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--m-brand)] group-open:bg-[var(--m-brand)] group-open:text-white">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <div className="grid grid-cols-[auto_1fr] gap-4 pb-7 sm:gap-5">
                  <span className="w-[1.25rem]" aria-hidden="true" />
                  <p className="max-w-2xl border-t border-[var(--m-line)] pt-5 text-sm leading-7 text-[var(--m-muted)]">
                    <LocalizedText text={faq.answer} />
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative isolate mx-auto overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-surface)] px-7 py-14 text-center shadow-[0_24px_70px_rgba(15,17,24,.07)] sm:px-12 sm:py-18">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[520px] -translate-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_66%)] opacity-70" />
          <p className="text-[10px] font-semibold tracking-[.16em] text-[var(--m-brand-ink)] uppercase">
            <LocalizedText text="No credit card required" />
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-.05em] text-balance sm:text-5xl">
            <LocalizedText text="Your first video can be live today." />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--m-muted)]">
            <LocalizedText text="Start on Free and upgrade only when you want an ad-free player or higher-volume delivery." />
          </p>
          <Link
            href="/login"
            className="group relative mx-auto mt-8 flex h-14 max-w-xs items-center justify-between overflow-hidden rounded-full bg-[var(--m-text)] py-1.5 pr-2 pl-6 text-sm font-semibold text-[var(--m-bg)] shadow-[0_14px_34px_rgba(12,14,19,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(12,14,19,.25)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
            <span className="relative">
              <LocalizedText text="Start for free" />
            </span>
            <span className="relative grid size-10 place-items-center rounded-full bg-white/10 dark:bg-black/10">
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
