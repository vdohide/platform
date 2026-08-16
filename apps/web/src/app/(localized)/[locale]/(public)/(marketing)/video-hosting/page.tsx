import {
  BarChart3,
  CloudUpload,
  Code2,
  Globe2,
  Play,
  ShieldCheck,
} from "lucide-react"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  FeatureGrid,
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
  StatStrip,
  StepGrid,
} from "../../_comp/marketing-detail"
import { LocalizedText } from "@/components/i18n/localized-text"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/video-hosting",
    title: "Video Hosting & Adaptive HLS Streaming | VdoHide",
    description:
      "Host, transcode, embed, and globally stream video with adaptive 1080p HLS, analytics, secure delivery, and predictable pricing.",
    keywords: [
      "video hosting",
      "HLS video hosting",
      "video streaming platform",
      "video CDN",
      "embed video",
    ],
  })
}

export default function VideoHostingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Modern video hosting"
        title="A home for video. A fast path to every viewer."
        description="Upload once and let VdoHide prepare, store, protect, and deliver adaptive video for websites and applications."
      >
        <ProductPanel label="VdoHide player" title="A smoother way to publish">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_35%,#3b2630,#11131a_72%)] shadow-inner">
            <div className="marketing-grid absolute inset-0 opacity-30" />
            <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-semibold tracking-[.12em] text-white/70 uppercase backdrop-blur">
              <LocalizedText text="Adaptive 1080p" />
            </span>
            <span className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/12 text-white shadow-2xl backdrop-blur-xl">
              <Play className="ml-1 size-5 fill-current" />
            </span>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3">
              <span className="size-2 rounded-full bg-white" />
              <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                <span className="block h-full w-[38%] rounded-full bg-white" />
              </span>
              <span className="font-mono text-[9px] text-white/60">00:42</span>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {["Processed", "Protected", "Delivered"].map((item) => (
              <span
                className="rounded-xl border border-[var(--m-line)] bg-[var(--m-bg)] px-2 py-3 text-[10px] text-[var(--m-muted)]"
                key={item}
              >
                <LocalizedText text={item} />
              </span>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <StatStrip
        items={[
          { value: "One", label: "Upload workflow" },
          { value: "Auto", label: "Adaptive quality" },
          { value: "Everywhere", label: "Responsive embed" },
          { value: "Visible", label: "Playback analytics" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="How it works"
            title="From a heavy file to a lightweight experience."
            description="VdoHide handles the path between your source video and a viewer pressing play."
            align="center"
          />
          <StepGrid
            items={[
              {
                title: "Upload or import",
                description:
                  "Choose a local file or provide a remote source URL without building your own ingest service.",
              },
              {
                title: "Process for the web",
                description:
                  "The source is converted into adaptive HLS qualities up to 1080p for changing devices and connections.",
              },
              {
                title: "Publish anywhere",
                description:
                  "Use a responsive embed or API-driven playback and let the delivery network handle audience growth.",
              },
            ]}
          />
        </div>
      </section>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Everything included"
            title="More than a place to keep files."
            description="A complete hosting workflow joins processing, delivery, control, insight, and automation."
          />
          <FeatureGrid
            items={[
              {
                icon: CloudUpload,
                title: "Managed ingest",
                description:
                  "Bring local and remote sources into the same processing pipeline.",
              },
              {
                icon: Globe2,
                title: "Global delivery",
                description:
                  "Serve cached video from a nearby location for faster playback starts.",
              },
              {
                icon: ShieldCheck,
                title: "Embed control",
                description:
                  "Restrict where videos can play and keep source files protected.",
              },
              {
                icon: BarChart3,
                title: "Audience analytics",
                description:
                  "Understand plays, watch behavior, devices, countries, and bandwidth.",
              },
              {
                icon: Code2,
                title: "Developer workflow",
                description:
                  "Automate creation, remote uploads, and processing events through the API.",
              },
              {
                icon: Play,
                title: "Responsive playback",
                description:
                  "Embed a player that fits modern websites and adapts to the viewer.",
              },
            ]}
          />
        </div>
      </section>

      <MarketingCta
        title="Your next video already has a destination."
        description="Create an account, upload a source, and publish with a workflow designed to stay simple."
      />
    </>
  )
}
