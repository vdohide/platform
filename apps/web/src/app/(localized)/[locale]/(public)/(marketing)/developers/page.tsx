import { BellRing, CloudDownload, Code2, KeyRound } from "lucide-react"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import { DeveloperCodeEditor } from "../../_comp/developer-code-editor"
import {
  DarkPanel,
  FeatureGrid,
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
} from "../../_comp/marketing-detail"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/developers",
    title: "Video API for Developers | VdoHide",
    description:
      "Create video workflows with the VdoHide REST API, remote uploads, processing webhooks, secure embeds, and playback analytics.",
    keywords: ["video API", "video hosting API", "HLS API", "video webhooks"],
  })
}

export default function DevelopersPage() {
  return (
    <>
      <MarketingHero
        eyebrow="For developers"
        title="One video API. Use it in your language."
        description="Create videos, automate uploads, and connect processing events without building an encoding and delivery platform first."
        secondary={{ href: "#quickstart", label: "Explore the API" }}
      >
        <ProductPanel label="API response" title="POST /v1/videos">
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#0d0f14] p-5 font-mono text-[11px] leading-6 text-[#d4d4d4] shadow-inner sm:text-xs">
            <p>
              <span className="text-[#c586c0]">{"{"}</span>
            </p>
            <p className="pl-5">
              <span className="text-[#9cdcfe]">&quot;id&quot;</span>:{" "}
              <span className="text-[#ce9178]">&quot;vid_8fe2a1&quot;</span>,
            </p>
            <p className="pl-5">
              <span className="text-[#9cdcfe]">&quot;status&quot;</span>:{" "}
              <span className="text-[#ce9178]">&quot;processing&quot;</span>,
            </p>
            <p className="pl-5">
              <span className="text-[#9cdcfe]">&quot;source&quot;</span>:{" "}
              <span className="text-[#ce9178]">&quot;remote_url&quot;</span>
            </p>
            <p>
              <span className="text-[#c586c0]">{"}"}</span>
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-3 text-[10px] text-[var(--m-muted)]">
            <span>201 Created</span>
            <span>application/json</span>
          </div>
        </ProductPanel>
      </MarketingHero>

      <section
        id="quickstart"
        className="scroll-mt-20 border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Quickstart"
            title="The same workflow in the language you already use."
            description="Start from JavaScript, cURL, Go, Python, or shell and keep the editor within one stable frame."
          />
          <div className="mt-12">
            <DeveloperCodeEditor />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Building blocks"
            title="Enough control for a product, not just a dashboard."
            description="Use VdoHide as infrastructure behind your own interface and workflow."
          />
          <FeatureGrid
            columns={2}
            items={[
              {
                icon: Code2,
                title: "REST API",
                description:
                  "Create and manage video resources with familiar authenticated HTTP requests.",
                tags: ["JSON", "Bearer auth"],
              },
              {
                icon: CloudDownload,
                title: "Remote upload",
                description:
                  "Import an existing source URL without routing a large file through your application server.",
                tags: ["Source URL", "Async processing"],
              },
              {
                icon: BellRing,
                title: "Processing events",
                description:
                  "Connect webhooks to the moments your application cares about, such as readiness or failure.",
                tags: ["Webhooks", "Automation"],
              },
              {
                icon: KeyRound,
                title: "Controlled playback",
                description:
                  "Apply domain and visibility rules around the video experience your application creates.",
                tags: ["Domain rules", "Secure embeds"],
              },
            ]}
          />
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <DarkPanel
            eyebrow="API-first"
            title="Build the experience. Leave the video pipeline to us."
            description="Your application decides what users see. VdoHide handles the repeatable path from source file to adaptive playback."
            items={[
              "Create videos programmatically",
              "Import remote sources",
              "React to processing events",
              "Connect playback analytics",
            ]}
          />
        </div>
      </section>

      <MarketingCta
        title="Start with one request. Scale with the same workflow."
        description="Use the dashboard while prototyping and move into the API when your product is ready."
      />
    </>
  )
}
