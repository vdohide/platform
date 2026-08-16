"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

import { LocalizedText, useContentTranslation } from "@/components/i18n/localized-text";

const freeFeatures = [
  "Unlimited video hosting*",
  "1080p adaptive playback",
  "Global delivery",
  "VdoHide player with ads",
] as const;

const paidModes = {
  standard: {
    price: "$15",
    description: "Ad-free video hosting for creators, websites, and growing products.",
    usage: "5× storage",
    usageLabel: "Included egress",
    features: ["No player ads", "1080p adaptive playback", "Full analytics & API", "Secure embeds"],
    cta: "Choose Stream",
  },
  highVolume: {
    price: "$30",
    description: "Predictable ad-free delivery for products with large audiences.",
    usage: "Unlimited*",
    usageLabel: "Included egress",
    features: ["No player ads", "Unlimited egress*", "Custom domains", "Priority processing"],
    cta: "Choose High-volume",
  },
} as const;

function FeatureList({ features, dark = false }: { features: readonly string[]; dark?: boolean }) {
  return (
    <ul className={cn("grid gap-3 text-sm sm:grid-cols-2", dark ? "text-[var(--m-night-muted)]" : "text-[var(--m-muted)]")}>
      {features.map((feature) => (
        <li className="flex items-center gap-2.5" key={feature}>
          <span className={cn("grid size-5 shrink-0 place-items-center rounded-full", dark ? "bg-white/8" : "bg-[var(--m-surface-subtle)]")}>
            <Check className="size-3 text-[var(--m-brand)]" strokeWidth={2.5} />
          </span>
          <LocalizedText text={feature} />
        </li>
      ))}
    </ul>
  );
}

export function PricingPlanCards() {
  const t = useContentTranslation();
  const [isHighVolume, setIsHighVolume] = useState(false);
  const paidPlan = isHighVolume ? paidModes.highVolume : paidModes.standard;

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      <article className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-surface)] p-7 shadow-[0_24px_70px_rgba(15,17,24,.07)] sm:p-10">
        <div className="pointer-events-none absolute -top-28 -right-20 -z-10 size-72 rounded-full bg-[var(--m-brand-soft)] opacity-45 blur-3xl" />
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[.16em] text-[var(--m-faint)] uppercase"><LocalizedText text="For everyone" /></p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-.04em]"><LocalizedText text="Free" /></h3>
          </div>
          <span className="rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] px-3 py-1.5 text-[10px] font-semibold tracking-[.1em] text-[var(--m-muted)] uppercase"><LocalizedText text="With ads" /></span>
        </div>

        <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--m-muted)]"><LocalizedText text="Unlimited video hosting and playback for anyone getting started." /></p>
        <div className="mt-9 flex items-end gap-2">
          <strong className="text-[4rem] leading-none font-semibold tracking-[-.075em] tabular-nums">$0</strong>
          <span className="mb-2 text-xs text-[var(--m-faint)]"><LocalizedText text="forever" /></span>
        </div>

        <div className="my-8 h-px bg-[var(--m-line)]" />
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[.14em] text-[var(--m-faint)] uppercase"><LocalizedText text="Storage & playback" /></p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em]"><LocalizedText text="Unlimited*" /></p>
          </div>
          <span className="text-xs text-[var(--m-faint)]"><LocalizedText text="Fair usage" /></span>
        </div>
        <div className="my-8 h-px bg-[var(--m-line)]" />
        <FeatureList features={freeFeatures} />

        <div className="mt-auto pt-9">
          <Link href="/login" className="group relative flex h-14 items-center justify-between overflow-hidden rounded-full bg-[var(--m-text)] py-1.5 pr-2 pl-6 text-sm font-semibold text-[var(--m-bg)] shadow-[0_14px_34px_rgba(12,14,19,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(12,14,19,.25)]">
            <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
            <span className="relative"><LocalizedText text="Start for free" /></span>
            <span className="relative grid size-10 place-items-center rounded-full bg-white/10 dark:bg-black/10"><ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" /></span>
          </Link>
        </div>
      </article>

      <article className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_90%_0%,rgba(255,98,88,.16),transparent_34%),linear-gradient(145deg,#171a23,#090a0f_72%)] p-7 text-[var(--m-night-text)] shadow-[0_28px_80px_rgba(7,8,12,.25)] sm:p-10">
        <div className="pointer-events-none absolute inset-x-12 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[.16em] text-[#ff8b83] uppercase"><LocalizedText text="For growing products" /></p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-.04em]">Stream</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-[10px] font-semibold tracking-[.1em] text-white/70 uppercase backdrop-blur"><LocalizedText text="Ad-free" /></span>
        </div>

        <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--m-night-muted)]"><LocalizedText text={paidPlan.description} /></p>

        <div className="mt-7 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-black/25 p-1.5" aria-label={t("Stream pricing mode")}>
          <button type="button" aria-pressed={!isHighVolume} onClick={() => setIsHighVolume(false)} className={cn("flex min-w-0 items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition-all duration-300 sm:px-4", !isHighVolume ? "bg-white text-[#11131a] shadow-[0_8px_22px_rgba(0,0,0,.2)]" : "text-white/55 hover:bg-white/[.05] hover:text-white")}>
            <span className="truncate text-xs font-semibold"><LocalizedText text="Standard" /></span><span className="text-[11px] font-medium opacity-65">$15</span>
          </button>
          <button type="button" aria-pressed={isHighVolume} onClick={() => setIsHighVolume(true)} className={cn("flex min-w-0 items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition-all duration-300 sm:px-4", isHighVolume ? "bg-white text-[#11131a] shadow-[0_8px_22px_rgba(0,0,0,.2)]" : "text-white/55 hover:bg-white/[.05] hover:text-white")}>
            <span className="truncate text-xs font-semibold"><LocalizedText text="High-volume" /></span><span className="text-[11px] font-medium opacity-65">$30</span>
          </button>
        </div>

        <div className="mt-8 flex items-end gap-2" aria-live="polite">
          <strong className="text-[4rem] leading-none font-semibold tracking-[-.075em] tabular-nums">{paidPlan.price}</strong>
          <span className="mb-2 text-xs text-[var(--m-night-muted)]"><LocalizedText text="per TB / month" /></span>
        </div>

        <div className="my-8 h-px bg-white/10" />
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[.14em] text-white/45 uppercase"><LocalizedText text={paidPlan.usageLabel} /></p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em]"><LocalizedText text={paidPlan.usage} /></p>
          </div>
          <span className="text-xs text-white/40"><LocalizedText text="Ad-free delivery" /></span>
        </div>
        <div className="my-8 h-px bg-white/10" />
        <FeatureList features={paidPlan.features} dark />

        <div className="mt-auto pt-9">
          <Link href="/login" className="group relative flex h-14 items-center justify-between overflow-hidden rounded-full border border-white/70 bg-gradient-to-b from-white to-[#e7e7e2] py-1.5 pr-2 pl-6 text-sm font-semibold text-[#11131a] shadow-[0_14px_38px_rgba(255,255,255,.12),0_8px_24px_rgba(0,0,0,.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(255,255,255,.18),0_10px_28px_rgba(0,0,0,.35)]">
            <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
            <span className="relative"><LocalizedText text={paidPlan.cta} /></span>
            <span className="relative grid size-10 place-items-center rounded-full bg-[#11131a] text-white shadow-inner"><ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" /></span>
          </Link>
        </div>
      </article>
    </div>
  );
}
