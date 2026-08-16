import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

import { LocalizedText } from "@/components/i18n/localized-text";

import { PricingPlanCards } from "../pricing-plan-cards";
import { SectionLabel } from "./section-label";

export function PricingSection() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-.05em] sm:text-5xl"><LocalizedText text="Start free. Upgrade when your audience grows." /></h2>
          </div>
          <Link href="/pricing" className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--m-brand-ink)]">
            <LocalizedText text="See detailed pricing" /> <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12"><PricingPlanCards /></div>
        <p className="mt-5 text-xs leading-5 text-[var(--m-faint)]"><LocalizedText text="*Unlimited usage is subject to fair usage. The Free plan includes advertising in the VdoHide player." /></p>
      </div>
    </section>
  );
}
