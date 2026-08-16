import { Link } from "@/i18n/navigation";
import { ArrowRight, BarChart3, Gauge, Globe2, ShieldCheck } from "lucide-react";

import { LocalizedText } from "@/components/i18n/localized-text";

import { SectionLabel } from "./section-label";

const features = [
  { icon: Gauge, eyebrow: "Playback", title: "Adaptive streaming", copy: "Automatic HLS and multiple quality levels keep playback smooth on every connection.", tags: ["1080p", "HLS", "Auto quality"], span: "lg:col-span-7" },
  { icon: ShieldCheck, eyebrow: "Protection", title: "Secure video delivery", copy: "Protect source files, restrict embeds, and control exactly where videos play.", tags: ["Domain rules", "Secure embeds"], span: "lg:col-span-5" },
  { icon: BarChart3, eyebrow: "Insights", title: "Analytics included", copy: "Understand plays, watch behavior, devices, countries, and delivery volume.", tags: ["Audience", "Bandwidth"], span: "lg:col-span-5" },
  { icon: Globe2, eyebrow: "Delivery", title: "Global edge network", copy: "Cache video closer to viewers for faster starts and fewer interruptions.", tags: ["Edge cached", "Fast starts", "Worldwide"], span: "lg:col-span-7" },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="relative isolate scroll-mt-20 overflow-hidden border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--m-brand-soft),transparent_68%)] opacity-45 blur-3xl" />
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>One platform</SectionLabel>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl"><LocalizedText text="Everything between upload and play." /></h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--m-muted)]"><LocalizedText text="VdoHide replaces a stack of storage, transcoding, delivery, player, security, and analytics tools." /></p>
          </div>
          <Link
            href="/pricing"
            className="group inline-flex h-11 w-fit items-center gap-3 rounded-full border border-[var(--m-line-strong)] bg-[var(--m-bg)] px-5 text-sm font-semibold text-[var(--m-text)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <LocalizedText text="Compare all plans" />
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {features.map(({ icon: Icon, eyebrow, title, copy, tags, span }) => (
            <article
              className={`group relative isolate min-h-[290px] overflow-hidden rounded-[26px] border border-[var(--m-line)] bg-[color-mix(in_srgb,var(--m-bg)_72%,var(--m-surface))] p-7 shadow-[0_18px_50px_rgba(15,17,24,.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--m-line-strong)] hover:shadow-[0_28px_65px_rgba(15,17,24,.1)] sm:p-8 ${span}`}
              key={title}
            >
              <div className="pointer-events-none absolute -top-16 -right-12 -z-10 size-64 rounded-full border border-[var(--m-line)] opacity-60 transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -top-7 -right-3 -z-10 size-40 rounded-full bg-[var(--m-brand-soft)] opacity-55 blur-2xl" />
              <div className="flex items-center justify-between gap-5">
                <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface)] text-[var(--m-brand-ink)] shadow-[0_8px_22px_rgba(15,17,24,.06)]">
                  <Icon className="size-5" />
                </span>
                <span className="text-[10px] font-semibold tracking-[.15em] text-[var(--m-faint)] uppercase"><LocalizedText text={eyebrow} /></span>
              </div>
              <div className="mt-14 max-w-lg">
                <h3 className="text-xl font-semibold tracking-[-.03em]"><LocalizedText text={title} /></h3>
                <p className="mt-3 text-sm leading-6 text-[var(--m-muted)]"><LocalizedText text={copy} /></p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => <span className="rounded-full border border-[var(--m-line)] bg-[var(--m-surface)] px-3 py-1.5 text-[10px] font-medium text-[var(--m-muted)]" key={tag}><LocalizedText text={tag} /></span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
