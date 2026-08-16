import { ArrowRight, ChevronRight } from "lucide-react"

import { buttonVariants } from "@workspace/ui/components"
import { cn } from "@workspace/ui/lib/utils"

import {
  LocalizedText,
  useContentTranslation,
} from "@/components/i18n/localized-text"
import { Link } from "@/i18n/navigation"

function HeroVideo() {
  const t = useContentTranslation()

  return (
    <div className="relative mx-auto max-w-[1100px]">
      <div className="absolute -inset-x-10 -bottom-10 h-64 bg-[radial-gradient(ellipse_at_center,rgba(228,61,53,.18),transparent_68%)] blur-2xl" />
      <div className="relative aspect-video overflow-hidden rounded-[22px] border border-[#30333d] bg-[#08090d] shadow-[0_42px_100px_rgba(8,10,16,.32)]">
        <iframe
          className="absolute inset-0 size-full"
          src="https://www.youtube-nocookie.com/embed/G7FlVvKn7tE?rel=0"
          title={t("VdoHide video hosting preview")}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
      <div className="marketing-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] opacity-70" />
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,61,53,.09),transparent_68%)]" />
      <div className="mx-auto max-w-[920px] text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--m-line)] bg-[var(--m-surface)] px-3 py-1.5 text-xs font-medium text-[var(--m-muted)] shadow-sm transition-colors hover:border-[var(--m-line-strong)]"
        >
          <span className="size-1.5 rounded-full bg-[var(--m-brand)]" />
          <LocalizedText text="Free unlimited hosting with ads" />{" "}
          <ChevronRight className="size-3.5" />
        </Link>
        <h1 className="mt-7 text-[3.25rem] leading-[.98] font-semibold tracking-[-.065em] text-balance sm:text-[4.6rem] lg:text-[5.35rem]">
          <LocalizedText text="Video hosting for every website and app." />
        </h1>
        <p className="mx-auto mt-7 max-w-[680px] text-lg leading-8 text-pretty text-[var(--m-muted)] sm:text-xl">
          <LocalizedText text="Upload once. VdoHide converts your video, stores it securely, and streams it fast to viewers anywhere." />
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-xl bg-[var(--m-brand)] px-6 text-white shadow-[0_10px_30px_rgba(228,61,53,.22)] hover:bg-[var(--m-brand-hover)] sm:w-auto"
            )}
          >
            <LocalizedText text="Host a video free" />{" "}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/pricing"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full rounded-xl border-[var(--m-line-strong)] bg-[var(--m-surface)] px-6 text-[var(--m-text)] hover:bg-[var(--m-surface-subtle)] sm:w-auto"
            )}
          >
            <LocalizedText text="See pricing" />
          </Link>
        </div>
        <p className="mt-5 text-xs text-[var(--m-faint)]">
          <LocalizedText text="No credit card · Unlimited free plan with ads · Ad-free from $15/TB" />
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-[1200px] sm:mt-20">
        <HeroVideo />
      </div>
    </section>
  )
}
