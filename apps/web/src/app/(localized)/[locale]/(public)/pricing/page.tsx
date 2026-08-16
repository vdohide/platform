import { PricingPage } from "../_comp/pricing-page";
import type { LocalizedPageProps } from "@/i18n/metadata";
import { createPageMetadata } from "@/i18n/metadata";

export const dynamic = "force-static";

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    pathname: "/pricing",
    title: "Video Hosting Pricing | VdoHide",
    description:
      "Start with free unlimited ad-supported video hosting, or choose paid plans from $15 per TB with ad-free playback, adaptive HLS, CDN delivery, analytics, and API access.",
  });
}

export default function Page() {
  return <PricingPage />;
}
