import { Link } from "@/i18n/navigation"
import {
  AppWindow,
  ArrowRight,
  Code2,
  GalleryVerticalEnd,
  UsersRound,
} from "lucide-react"

import {
  DarkPanel,
  FeatureGrid,
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
  StepGrid,
} from "../../_comp/marketing-detail"
import { LocalizedText } from "@/components/i18n/localized-text"
import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/solutions",
    title: "Video Hosting Solutions | VdoHide",
    description:
      "Video hosting workflows for developers, creators, publishers, and platforms that need adaptive playback, global delivery, and predictable pricing.",
  })
}

export default function SolutionsPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Solutions"
        title="One video foundation. Shaped around your product."
        description="Whether video is your content, your feature, or your entire platform, VdoHide keeps the infrastructure underneath it understandable."
      >
        <ProductPanel
          label="Choose a workflow"
          title="Built around your audience"
        >
          <div className="space-y-3">
            {[
              ["Developers", "API-driven"],
              ["Creators", "Simple publishing"],
              ["Publishers", "Audience delivery"],
              ["Platforms", "User-generated video"],
            ].map(([label, value], index) => (
              <div
                className="group flex items-center justify-between rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-4 transition-colors hover:bg-[var(--m-surface-subtle)]"
                key={label}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className="font-mono text-[9px] text-[var(--m-brand-ink)]">
                    0{index + 1}
                  </span>
                  <LocalizedText text={label ?? ""} />
                </span>
                <span className="text-[10px] text-[var(--m-faint)]">
                  <LocalizedText text={value ?? ""} />
                </span>
              </div>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Built for different teams"
            title="Start with the outcome, not the infrastructure diagram."
            description="Each workflow uses the same upload, processing, delivery, security, and analytics foundation."
          />
          <FeatureGrid
            columns={2}
            items={[
              {
                icon: Code2,
                eyebrow: "Developers",
                title: "Add video to a product",
                description:
                  "Use API-driven uploads, processing events, and controlled playback behind your own application interface.",
                tags: ["REST API", "Webhooks", "Embeds"],
              },
              {
                icon: GalleryVerticalEnd,
                eyebrow: "Creators",
                title: "Publish without a video stack",
                description:
                  "Upload, prepare, and embed content without maintaining encoders, storage rules, and delivery configuration.",
                tags: ["Dashboard", "Adaptive HLS", "Analytics"],
              },
              {
                icon: UsersRound,
                eyebrow: "Publishers",
                title: "Serve growing audiences",
                description:
                  "Deliver editorial and library video globally while following playback, device, country, and bandwidth trends.",
                tags: ["Global delivery", "Audience insight"],
              },
              {
                icon: AppWindow,
                eyebrow: "Platforms",
                title: "Power user-generated video",
                description:
                  "Place a managed video workflow behind communities, membership products, education, or creator tools.",
                tags: ["Remote upload", "Domain rules", "Policy"],
              },
            ]}
          />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="A common foundation"
            title="The workflow stays familiar as the use case changes."
            description="Keep one operational model from the first upload to a product serving viewers across regions."
          />
          <StepGrid
            items={[
              {
                title: "Ingest your way",
                description:
                  "Use the dashboard for direct control or connect uploads to the experience your own users already know.",
              },
              {
                title: "Apply the right controls",
                description:
                  "Choose visibility and domain rules that match public publishing, memberships, or private applications.",
              },
              {
                title: "Learn from playback",
                description:
                  "Use audience and delivery signals to understand which content works and where the experience needs attention.",
              },
            ]}
          />
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <DarkPanel
            eyebrow="Specialized workflow"
            title="Lawful adult video needs stronger boundaries—not a separate video stack."
            description="VdoHide can provide the hosting and delivery foundation while the publisher remains responsible for age verification, consent, rights, viewer access, and local law."
            items={[
              "18+ content policy",
              "Consent and rights requirements",
              "Restricted embeds",
              "Abuse and copyright reporting",
            ]}
          />
          <div className="mt-6 flex justify-end">
            <Link
              href="/solutions/adult-video-hosting"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--m-text)]"
            >
              <LocalizedText text="Explore adult video hosting" />
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingCta
        title="Use the workflow that fits your audience."
        description="Start simple, keep control, and add automation only when your product needs it."
      />
    </>
  )
}
