import { Check } from "lucide-react";

import { LocalizedText } from "@/components/i18n/localized-text";

import { DeveloperCodeEditor } from "../developer-code-editor";
import { SectionLabel } from "./section-label";

export function DevelopersSection() {
  return (
    <section id="developers" className="scroll-mt-20 border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><SectionLabel>For developers</SectionLabel><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl"><LocalizedText text="One API. Use it in your language." /></h2></div><div><p className="max-w-xl text-lg leading-8 text-[var(--m-muted)]"><LocalizedText text="Create videos, automate uploads, and connect processing events with the tools your team already uses." /></p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--m-muted)]">{["REST API", "Webhooks", "Remote upload"].map((item) => <span className="flex items-center gap-2" key={item}><Check className="size-4 text-[var(--m-brand)]" /><LocalizedText text={item} /></span>)}</div></div></div>
        <div className="mt-12"><DeveloperCodeEditor /></div>
      </div>
    </section>
  );
}
