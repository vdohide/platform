import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@workspace/ui/components"
import { cn } from "@workspace/ui/lib/utils"

import { LocalizedText } from "@/components/i18n/localized-text"

export function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-32"
    >
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-[var(--m-night-line)] bg-[var(--m-night)] px-7 py-16 text-center text-[var(--m-night-text)] sm:px-12 sm:py-20">
        <div className="marketing-noise absolute inset-0 opacity-[.035]" />
        <div className="absolute -top-40 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[var(--m-brand)]/20 blur-[100px]" />
        <div className="absolute -right-28 -bottom-36 size-80 rounded-full bg-[#7184d8]/10 blur-[90px]" />
        <div className="relative mx-auto max-w-[760px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs text-[var(--m-night-muted)]">
            <span className="size-1.5 rounded-full bg-[var(--m-brand)]" />
            <LocalizedText text="Free to start · No credit card" />
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-.055em] text-balance sm:text-6xl">
            <LocalizedText text="Ready to bring your next video to life?" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--m-night-muted)] sm:text-lg">
            <LocalizedText text="Upload once and let VdoHide prepare, protect, and deliver it everywhere." />
          </p>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative mt-9 h-12 overflow-hidden rounded-xl border border-white/45 bg-[linear-gradient(135deg,#f8f6f0_0%,#dedbd3_55%,#f3f1eb_100%)] px-6 text-[#17181d] shadow-[0_10px_28px_rgba(0,0,0,.24),inset_0_1px_0_rgba(255,255,255,.85)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,.38),0_0_0_1px_rgba(255,255,255,.16),inset_0_1px_0_rgba(255,255,255,.95)] hover:brightness-105 active:translate-y-0"
            )}
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/55 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[520%]" />
            <span className="relative z-10 flex items-center gap-2">
              <LocalizedText text="Start for free" />{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
