import {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react"
import { Link } from "@/i18n/navigation"
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import { LocalizedText } from "@/components/i18n/localized-text"

export const LEGAL_EFFECTIVE_DATE = "August 16, 2026"
export const LEGAL_EMAIL = "legal@vdohide.com"

type LegalDocumentProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

function localizeLegalNode(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    const normalized = node.replace(/\s+/g, " ").trim()
    if (!normalized) return node

    const hasLeadingSpace = /^\s/.test(node)
    const hasTrailingSpace = /\s$/.test(node)

    return (
      <Fragment>
        {hasLeadingSpace ? " " : null}
        <LocalizedText text={normalized} />
        {hasTrailingSpace ? " " : null}
      </Fragment>
    )
  }

  if (Array.isArray(node)) return node.map(localizeLegalNode)
  if (!isValidElement(node)) return node

  const element = node as ReactElement<{ children?: ReactNode }>
  if (element.props.children === undefined) return element

  return cloneElement(
    element,
    undefined,
    localizeLegalNode(element.props.children)
  )
}

export function LegalDocument({
  eyebrow,
  title,
  description,
  children,
}: LegalDocumentProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:gap-16 xl:gap-24">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Link
            href="/legal"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[var(--m-muted)] transition-colors hover:text-[var(--m-text)]"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <LocalizedText text="Legal center" />
          </Link>
          <p className="mt-10 font-mono text-[10px] font-semibold tracking-[.18em] text-[var(--m-brand-ink)] uppercase">
            <LocalizedText text="Document" />
          </p>
          <p className="mt-3 text-sm font-semibold text-[var(--m-text)]">
            <LocalizedText text={title} />
          </p>
          <div className="mt-6 border-t border-[var(--m-line)] pt-6 text-xs leading-6 text-[var(--m-faint)]">
            <p>
              <LocalizedText text="Effective" />{" "}
              <LocalizedText text={LEGAL_EFFECTIVE_DATE} />
            </p>
            <p>
              <LocalizedText text="Last updated" />{" "}
              <LocalizedText text={LEGAL_EFFECTIVE_DATE} />
            </p>
          </div>
          <a
            href={`mailto:${LEGAL_EMAIL}`}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--m-muted)] transition-colors hover:text-[var(--m-text)]"
          >
            {LEGAL_EMAIL}
            <ArrowUpRight className="size-3" />
          </a>
        </aside>

        <article className="min-w-0">
          <header className="border-b border-[var(--m-line)] pb-10 sm:pb-12">
            <p className="font-mono text-[10px] font-semibold tracking-[.18em] text-[var(--m-brand-ink)] uppercase">
              <LocalizedText text={eyebrow} />
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-.055em] text-balance text-[var(--m-text)] sm:text-5xl lg:text-[58px] lg:leading-[1.02]">
              <LocalizedText text={title} />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-pretty text-[var(--m-muted)] sm:text-lg">
              <LocalizedText text={description} />
            </p>
          </header>

          <div className="legal-document mt-10 sm:mt-12">
            {localizeLegalNode(children)}
          </div>
        </article>
      </div>
    </div>
  )
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="scroll-mt-28 border-b border-[var(--m-line)] py-9 first:pt-0 last:border-b-0 sm:py-11">
      <div className="grid gap-3 sm:grid-cols-[48px_1fr] sm:gap-5">
        <span className="font-mono text-[10px] font-semibold tracking-[.1em] text-[var(--m-faint)]">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-semibold tracking-[-.025em] text-[var(--m-text)] sm:text-2xl">
            <LocalizedText text={title} />
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--m-muted)] sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 pl-0">{children}</ul>
}

export function LegalListItem({ children }: { children: ReactNode }) {
  return (
    <li className="grid grid-cols-[8px_1fr] gap-3">
      <span
        className="mt-[11px] size-1.5 rounded-full bg-[var(--m-brand)]"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  )
}

export function LegalCallout({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "important"
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 text-sm leading-7 sm:p-6 sm:text-[15px]",
        tone === "important"
          ? "border-[color-mix(in_srgb,var(--m-brand)_35%,var(--m-line))] bg-[var(--m-brand-soft)] text-[var(--m-text)]"
          : "border-[var(--m-line)] bg-[var(--m-surface-subtle)] text-[var(--m-muted)]"
      )}
    >
      <div className="flex gap-3">
        <ShieldCheck className="mt-1 size-4 shrink-0 text-[var(--m-brand)]" />
        <div>{children}</div>
      </div>
    </div>
  )
}

export function LegalContact({ subject }: { subject: string }) {
  return (
    <a
      href={`mailto:${LEGAL_EMAIL}?subject=${encodeURIComponent(subject)}`}
      className="group mt-2 flex items-center justify-between gap-4 rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface)] p-5 text-[var(--m-text)] shadow-[0_12px_34px_rgba(15,17,24,.05)] transition-all hover:-translate-y-0.5 hover:border-[var(--m-line-strong)] hover:shadow-[0_18px_42px_rgba(15,17,24,.09)] sm:p-6"
    >
      <span>
        <span className="block text-xs font-semibold tracking-[.1em] text-[var(--m-faint)] uppercase">
          <LocalizedText text="Contact VdoHide Legal" />
        </span>
        <span className="mt-1 block font-semibold">{LEGAL_EMAIL}</span>
      </span>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--m-text)] text-[var(--m-bg)]">
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  )
}
