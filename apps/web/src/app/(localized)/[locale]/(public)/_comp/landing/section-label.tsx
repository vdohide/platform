import { cn } from "@workspace/ui/lib/utils";

import { LocalizedText } from "@/components/i18n/localized-text";

export function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return <p className={cn("text-[11px] font-semibold tracking-[.16em] uppercase", inverse ? "text-[#ff827a]" : "text-[var(--m-brand-ink)]")}><LocalizedText text={children} /></p>;
}
