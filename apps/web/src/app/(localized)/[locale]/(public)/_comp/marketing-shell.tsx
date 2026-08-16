"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Menu, Play, X } from "lucide-react"
import { useTranslations } from "next-intl"

import { cn } from "@workspace/ui/lib/utils"

import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { Link } from "@/i18n/navigation"

import { AuthActions } from "./auth-actions"
import { SmoothSectionLink } from "./smooth-section-link"
import { ThemeToggle } from "./theme-toggle"

const HEADER_HIDE_DISTANCE = 64

export function Logo({ inverse = false }: { inverse?: boolean }) {
  const messages = useTranslations("web.marketing")

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label={messages("homeLabel")}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-[var(--m-brand)] text-white shadow-[0_6px_18px_rgba(228,61,53,.2)]">
        <Play className="ml-0.5 size-3.5 fill-current" />
      </span>
      <span
        className={cn(
          "text-[17px] font-semibold tracking-[-0.035em]",
          inverse ? "text-[var(--m-night-text)]" : "text-[var(--m-text)]"
        )}
      >
        VdoHide
      </span>
    </Link>
  )
}

export function MarketingHeader() {
  const messages = useTranslations("web.marketing")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const upwardDistance = useRef(0)
  const navigation = [
    {
      label: messages("navigation.howItWorks"),
      href: "/#how-it-works",
    },
    { label: messages("navigation.features"), href: "/features" },
    { label: messages("navigation.solutions"), href: "/solutions" },
    { label: messages("navigation.pricing"), href: "/pricing" },
    { label: messages("navigation.developers"), href: "/developers" },
  ] as const

  useEffect(() => {
    lastScrollY.current = window.scrollY

    function handleScroll() {
      const currentScrollY = Math.max(window.scrollY, 0)
      const delta = currentScrollY - lastScrollY.current

      setIsScrolled(currentScrollY > 8)

      if (currentScrollY <= 8) {
        upwardDistance.current = 0
        setIsHeaderVisible(true)
      } else if (delta > 0) {
        upwardDistance.current = 0
        setIsHeaderVisible(true)
      } else if (delta < 0) {
        upwardDistance.current += Math.abs(delta)

        if (upwardDistance.current >= HEADER_HIDE_DISTANCE) {
          setIsHeaderVisible(false)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [isMobileMenuOpen])

  function toggleMobileMenu() {
    setIsHeaderVisible(true)
    setIsMobileMenuOpen((open) => !open)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform",
        isScrolled
          ? "border-[var(--m-line)] bg-[color-mix(in_srgb,var(--m-bg)_90%,transparent)] shadow-[0_10px_30px_rgba(15,17,24,.05)]"
          : "border-transparent bg-[color-mix(in_srgb,var(--m-bg)_78%,transparent)]",
        isHeaderVisible || isMobileMenuOpen
          ? "translate-y-0"
          : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-8 text-[13px] font-medium text-[var(--m-muted)] md:flex"
          aria-label={messages("mainNavigationLabel")}
        >
          {navigation.map((item) => (
            <Link
              className="transition-colors hover:text-[var(--m-text)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="hidden md:block">
            <AuthActions />
          </div>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-lg border border-[var(--m-line)] bg-[var(--m-surface)] text-[var(--m-muted)] transition-colors hover:bg-[var(--m-surface-subtle)] hover:text-[var(--m-text)] md:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? messages("closeMenu")
                : messages("openMenu")
            }
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute inset-x-0 top-full border-b border-[var(--m-line)] bg-[color-mix(in_srgb,var(--m-bg)_96%,transparent)] p-3 shadow-[0_24px_60px_rgba(15,17,24,.16)] backdrop-blur-2xl transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        )}
      >
        <nav
          className="mx-auto grid max-w-[720px] gap-1 rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface)] p-2"
          aria-label={messages("mobileNavigationLabel")}
          onClickCapture={() => setIsMobileMenuOpen(false)}
        >
          {navigation.map((item, index) => (
            <Link
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[var(--m-text)] transition-colors hover:bg-[var(--m-surface-subtle)]"
              href={item.href}
              key={item.href}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[var(--m-faint)]">
                  0{index + 1}
                </span>
                {item.label}
              </span>
              <ArrowRight className="size-4 text-[var(--m-faint)] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
          <div className="mt-1 flex justify-end border-t border-[var(--m-line)] px-2 pt-3 pb-1">
            <AuthActions />
          </div>
        </nav>
      </div>
    </header>
  )
}

export function MarketingFooter() {
  const messages = useTranslations("web.marketing")

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--m-night-line)] bg-[var(--m-night)] px-5 text-[var(--m-night-text)] sm:px-8">
      <div className="pointer-events-none absolute -top-64 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,98,88,.13),transparent_66%)] blur-2xl" />
      <div className="marketing-noise pointer-events-none absolute inset-0 -z-10 opacity-[.035]" />

      <div className="mx-auto max-w-[1200px] py-16 sm:py-20">
        <div className="grid gap-14 border-b border-[var(--m-night-line)] pb-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:pb-16">
          <div>
            <Logo inverse />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-[-.05em] text-balance sm:text-4xl">
              {messages("footer.headline")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--m-night-muted)]">
              {messages("footer.description")}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/login"
              className="group flex h-14 min-w-56 items-center justify-between rounded-full border border-white/70 bg-gradient-to-b from-white to-[#e7e7e2] py-1.5 pr-2 pl-6 text-sm font-semibold text-[#11131a] shadow-[0_14px_38px_rgba(255,255,255,.1),0_8px_24px_rgba(0,0,0,.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(255,255,255,.16),0_10px_28px_rgba(0,0,0,.34)]"
            >
              {messages("footer.startFree")}
              <span className="grid size-10 place-items-center rounded-full bg-[#11131a] text-white">
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-xs">
            <p className="text-xs font-semibold tracking-[.12em] text-white/45 uppercase">
              {messages("footer.eyebrow")}
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--m-night-muted)]">
              {messages("footer.summary")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              {messages("footer.product")}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[var(--m-night-muted)]">
              <SmoothSectionLink
                className="w-fit transition-colors hover:text-white"
                sectionId="how-it-works"
              >
                {messages("navigation.howItWorks")}
              </SmoothSectionLink>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/features"
              >
                {messages("navigation.features")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/video-hosting"
              >
                {messages("footer.videoHosting")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/pricing"
              >
                {messages("navigation.pricing")}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              {messages("footer.solutions")}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[var(--m-night-muted)]">
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/solutions"
              >
                {messages("footer.overview")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/solutions/adult-video-hosting"
              >
                {messages("footer.adultVideoHosting")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/contact"
              >
                {messages("footer.contactSales")}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              {messages("footer.developers")}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[var(--m-night-muted)]">
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/developers"
              >
                {messages("footer.apiOverview")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/security"
              >
                {messages("footer.security")}
              </Link>
              <SmoothSectionLink
                className="w-fit transition-colors hover:text-white"
                sectionId="network"
              >
                {messages("footer.globalNetwork")}
              </SmoothSectionLink>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/contact"
              >
                {messages("footer.contact")}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              {messages("footer.legal")}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[var(--m-night-muted)]">
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/legal/terms"
              >
                {messages("footer.terms")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/legal/privacy"
              >
                {messages("footer.privacy")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/legal/content-policy"
              >
                {messages("footer.contentPolicy")}
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/legal/dmca"
              >
                DMCA
              </Link>
              <Link
                className="w-fit transition-colors hover:text-white"
                href="/report-abuse"
              >
                {messages("footer.reportAbuse")}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--m-night-line)] pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} VdoHide. {messages("footer.rights")}
          </p>
          <p>{messages("footer.closing")}</p>
        </div>
      </div>
    </footer>
  )
}
