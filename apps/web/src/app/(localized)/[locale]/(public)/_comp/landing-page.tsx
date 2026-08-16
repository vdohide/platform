import { MarketingFooter, MarketingHeader } from "./marketing-shell";
import {
  AudienceSection,
  DevelopersSection,
  FaqSection,
  type FaqItem,
  FeaturesSection,
  GetStartedSection,
  HeroSection,
  HowItWorksSection,
  NetworkSection,
  PricingSection,
} from "./landing";

export function LandingPage({ faqs }: { faqs: FaqItem[] }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--m-bg)] text-[var(--m-text)]">
      <MarketingHeader />
      <HeroSection />
      <AudienceSection />
      <HowItWorksSection />
      <FeaturesSection />
      <NetworkSection />
      <PricingSection />
      <DevelopersSection />
      <FaqSection faqs={faqs} />
      <GetStartedSection />
      <MarketingFooter />
    </main>
  );
}
