"use client";

import { useState } from "react";
import { Check, HardDrive } from "lucide-react";

import { Input } from "@workspace/ui/components";
import { cn } from "@workspace/ui/lib/utils";

import { LocalizedText } from "@/components/i18n/localized-text";

type Plan = "standard" | "highVolume";

const quickStorageValues = [1, 5, 10] as const;

export function PricingCalculator() {
  const [plan, setPlan] = useState<Plan>("standard");
  const [storage, setStorage] = useState(1);
  const safeStorage = Math.max(0, storage);
  const isHighVolume = plan === "highVolume";
  const rate = isHighVolume ? 30 : 15;
  const estimate = safeStorage * rate;

  return (
    <div className="grid overflow-hidden rounded-[28px] border border-[var(--m-line)] bg-[var(--m-surface)] shadow-[0_24px_70px_rgba(15,17,24,.07)] lg:grid-cols-[1.05fr_.95fr]">
      <div className="p-7 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-brand-ink)]"><HardDrive className="size-4.5" /></span>
          <div><p className="text-[10px] font-semibold tracking-[.14em] text-[var(--m-faint)] uppercase"><LocalizedText text="Usage input" /></p><p className="mt-1 text-sm font-semibold"><LocalizedText text="Average monthly storage" /></p></div>
        </div>

        <fieldset className="mt-9">
          <legend className="mb-3 text-xs font-semibold text-[var(--m-muted)]"><LocalizedText text="Stream mode" /></legend>
          <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface-subtle)] p-1.5">
            <button type="button" aria-pressed={!isHighVolume} className={cn("flex items-center justify-between rounded-xl px-4 py-3 text-left text-xs transition-all duration-300", !isHighVolume ? "bg-[var(--m-surface)] font-semibold text-[var(--m-text)] shadow-[0_7px_20px_rgba(15,17,24,.08)]" : "text-[var(--m-muted)] hover:text-[var(--m-text)]")} onClick={() => setPlan("standard")}>
              <LocalizedText text="Standard" /> <span className="text-[11px] opacity-60">$15</span>
            </button>
            <button type="button" aria-pressed={isHighVolume} className={cn("flex items-center justify-between rounded-xl px-4 py-3 text-left text-xs transition-all duration-300", isHighVolume ? "bg-[var(--m-surface)] font-semibold text-[var(--m-text)] shadow-[0_7px_20px_rgba(15,17,24,.08)]" : "text-[var(--m-muted)] hover:text-[var(--m-text)]")} onClick={() => setPlan("highVolume")}>
              <LocalizedText text="High-volume" /> <span className="text-[11px] opacity-60">$30</span>
            </button>
          </div>
        </fieldset>

        <label className="mt-8 grid gap-3 text-xs font-semibold text-[var(--m-muted)]" htmlFor="storage-tb">
          <LocalizedText text="Storage in TB" />
          <div className="relative">
            <Input id="storage-tb" type="number" min="0" step="0.1" value={storage} onChange={(event) => setStorage(Number(event.target.value))} className="h-14 rounded-2xl border-[var(--m-line-strong)] bg-[var(--m-bg)] pr-16 text-lg font-semibold tabular-nums shadow-inner" />
            <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-xs font-medium text-[var(--m-faint)]">TB</span>
          </div>
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          {quickStorageValues.map((value) => (
            <button type="button" className="rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] px-3 py-1.5 text-[10px] font-medium text-[var(--m-muted)] transition-colors hover:border-[var(--m-line-strong)] hover:text-[var(--m-text)]" onClick={() => setStorage(value)} key={value}>{value} TB</button>
          ))}
        </div>
      </div>

      <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_85%_0%,rgba(255,98,88,.16),transparent_36%),linear-gradient(145deg,#171a23,#090a0f_72%)] p-7 text-[var(--m-night-text)] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-x-12 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div>
          <div className="flex items-center justify-between gap-4"><p className="text-[10px] font-semibold tracking-[.14em] text-white/45 uppercase"><LocalizedText text="Estimated monthly cost" /></p><span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-[10px] font-semibold text-white/65"><LocalizedText text={isHighVolume ? "HIGH-VOLUME" : "STANDARD"} /></span></div>
          <p className="mt-8 text-[4.5rem] leading-none font-semibold tracking-[-.075em] tabular-nums">${estimate.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p className="mt-3 text-xs text-[var(--m-night-muted)]">{safeStorage.toLocaleString()} TB × ${rate} / TB / month</p>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/8"><Check className="size-3 text-[#ff827a]" /></span>
            <div><p className="font-semibold">{isHighVolume ? <LocalizedText text="Unlimited playback included*" /> : <>{(safeStorage * 5).toLocaleString()} TB <LocalizedText text="playback included" /></>}</p><p className="mt-2 text-xs leading-5 text-[var(--m-night-muted)]"><LocalizedText text={isHighVolume ? "Subject to fair usage for genuine video playback." : "Five times your average monthly storage, included."} /></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
