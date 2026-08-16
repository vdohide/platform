import { NetworkMap } from "../network-map";
import { LocalizedText } from "@/components/i18n/localized-text";
import { SectionLabel } from "./section-label";

export function NetworkSection() {
  return (
    <section id="network" className="relative isolate flex h-[calc(100svh-4rem)] min-h-[640px] scroll-mt-20 items-center overflow-hidden px-5 py-20 text-[var(--m-night-text)] sm:px-8 sm:py-24">
      <NetworkMap />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="max-w-[520px]">
          <SectionLabel inverse>Global delivery</SectionLabel>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-.05em] sm:text-6xl"><LocalizedText text="Video delivery that feels local." /></h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--m-night-muted)]"><LocalizedText text="Every stream takes the fastest available route, keeping video quick to start and smooth to watch anywhere." /></p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#64d8cb] opacity-50 motion-reduce:animate-none" /><span className="relative inline-flex size-2 rounded-full bg-[#64d8cb]" /></span><LocalizedText text="Global delivery active" /></div>
        </div>
      </div>
      <div className="absolute right-5 bottom-7 z-10 flex items-center gap-4 rounded-lg border border-white/[.08] bg-black/25 px-3 py-2 text-[10px] font-medium tracking-[.08em] text-white/60 uppercase backdrop-blur-sm sm:right-8 sm:bottom-8 sm:gap-5">
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-[2px] bg-[#ff6f67]" /><LocalizedText text="Origin" /></span>
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#64d8cb]" />PoP</span>
        <span className="flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#9aaeff]" /><LocalizedText text="Client" /></span>
        <span className="hidden items-center gap-1.5 sm:flex"><i className="w-3 border-t border-dashed border-[#e8bd72]" /><LocalizedText text="PoP sync" /></span>
      </div>
    </section>
  );
}
