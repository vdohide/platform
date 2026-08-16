const stats = [
  ["1080p", "Adaptive playback"],
  ["Unlimited*", "Videos on the free plan"],
  ["$15 / TB", "Storage per month"],
  ["5× storage", "Included egress"],
] as const;

export function AudienceSection() {
  return (
    <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 sm:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] gap-px bg-[var(--m-line)] md:grid-cols-[repeat(4,minmax(0,1fr))]">
        {stats.map(([value, label]) => <div className="flex min-h-24 min-w-0 flex-col justify-center bg-[var(--m-surface)] px-5 py-5 sm:px-7" key={label}><p className="text-xl font-semibold tracking-[-.04em] text-[var(--m-text)]"><LocalizedText text={value} /></p><p className="mt-1 text-[11px] text-[var(--m-faint)]"><LocalizedText text={label} /></p></div>)}
      </div>
    </section>
  );
}
import { LocalizedText } from "@/components/i18n/localized-text";
