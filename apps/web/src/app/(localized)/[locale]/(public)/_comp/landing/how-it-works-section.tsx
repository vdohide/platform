import { CloudUpload, Gauge, Play } from "lucide-react";

import { LocalizedText } from "@/components/i18n/localized-text";

import { SectionLabel } from "./section-label";

const steps = [
  { n: "01", eyebrow: "Bring your content", icon: CloudUpload, title: "Upload your video", copy: "Choose a file or give us a remote URL. Large uploads continue safely if the connection drops." },
  { n: "02", eyebrow: "We handle the work", icon: Gauge, title: "We prepare every quality", copy: "VdoHide automatically creates adaptive HLS versions for fast playback on any connection." },
  { n: "03", eyebrow: "Ready for viewers", icon: Play, title: "Embed and stream", copy: "Copy one embed code or use the API. Your video is delivered globally and tracked automatically." },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl"><LocalizedText text="From file to playback, beautifully simple." /></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--m-muted)]"><LocalizedText text="No encoding settings, delivery configuration, or custom player work required." /></p>
        </div>

        <div className="relative mt-14 hidden grid-cols-3 lg:grid">
          <div className="pointer-events-none absolute top-5 right-[16.666%] left-[16.666%] h-px bg-gradient-to-r from-[var(--m-line)] via-[var(--m-line-strong)] to-[var(--m-line)]" />
          {steps.map(({ n }) => (
            <div className="relative flex justify-center" key={n}>
              <span className="z-10 grid size-10 place-items-center rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] font-mono text-[10px] text-[var(--m-muted)] shadow-[0_6px_18px_rgba(15,17,24,.06)]">{n}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:mt-5 lg:grid-cols-3">
          {steps.map(({ n, eyebrow, icon: Icon, title, copy }) => (
            <article
              className="group relative isolate flex min-h-[310px] flex-col overflow-hidden rounded-[26px] border border-[var(--m-line)] bg-[var(--m-surface)] p-7 shadow-[0_20px_55px_rgba(15,17,24,.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--m-line-strong)] hover:shadow-[0_30px_75px_rgba(15,17,24,.11)] sm:p-8"
              key={n}
            >
              <div className="pointer-events-none absolute -top-20 -right-16 -z-10 size-56 rounded-full bg-[var(--m-brand-soft)] opacity-35 blur-3xl transition-transform duration-700 group-hover:scale-110" />
              <div className="flex items-center justify-between gap-5">
                <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-brand-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,.55)] transition-transform duration-500 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full border border-[var(--m-line)] bg-[var(--m-bg)] px-3 py-1.5 font-mono text-[10px] text-[var(--m-faint)] lg:hidden"><LocalizedText text="STEP" /> {n}</span>
              </div>

              <div className="mt-10 h-px bg-[var(--m-line)] transition-colors duration-500 group-hover:bg-[var(--m-line-strong)]" />
              <div className="mt-8">
                <p className="text-[10px] font-semibold tracking-[.15em] text-[var(--m-brand-ink)] uppercase"><LocalizedText text={eyebrow} /></p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-.03em]"><LocalizedText text={title} /></h3>
                <p className="mt-3 text-sm leading-6 text-[var(--m-muted)]"><LocalizedText text={copy} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
