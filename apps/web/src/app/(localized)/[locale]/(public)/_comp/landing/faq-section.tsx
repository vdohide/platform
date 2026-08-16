import { Plus } from "lucide-react";

import { LocalizedText } from "@/components/i18n/localized-text";

import { SectionLabel } from "./section-label";

export type FaqItem = { question: string; answer: string };

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionLabel>Common questions</SectionLabel>
          <h2 className="mt-4 max-w-md text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl"><LocalizedText text="Answers, without the fine print." /></h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[var(--m-muted)]"><LocalizedText text="Everything you need to know before hosting your first video with VdoHide." /></p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--m-line)] bg-[var(--m-surface)] px-4 py-2.5 text-xs font-medium text-[var(--m-muted)] shadow-sm">
            <span className="size-1.5 rounded-full bg-[var(--m-brand)] shadow-[0_0_0_4px_var(--m-brand-soft)]" />
            <LocalizedText text="Clear answers. No hidden setup." />
          </div>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <details
              className="group overflow-hidden rounded-[20px] border border-[var(--m-line)] bg-[var(--m-surface)] px-5 shadow-[0_10px_30px_rgba(15,17,24,.035)] transition-all duration-300 open:border-[var(--m-line-strong)] open:shadow-[0_20px_50px_rgba(15,17,24,.075)] hover:border-[var(--m-line-strong)] sm:px-7"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-xl py-6 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[var(--m-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--m-surface)] sm:gap-5">
                <span className="font-mono text-[10px] text-[var(--m-faint)]">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1 text-sm font-semibold tracking-[-.01em] sm:text-base"><LocalizedText text={faq.question} /></span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-muted)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--m-brand)] group-open:bg-[var(--m-brand)] group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <div className="grid grid-cols-[auto_1fr] gap-4 pb-7 sm:gap-5">
                <span className="w-[1.25rem]" aria-hidden="true" />
                <p className="max-w-2xl border-t border-[var(--m-line)] pt-5 text-sm leading-7 text-[var(--m-muted)]"><LocalizedText text={faq.answer} /></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
