import {
  BarChart3,
  CloudUpload,
  Code2,
  Gauge,
  Globe2,
  ShieldCheck,
} from "lucide-react"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  DarkPanel,
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
    pathname: "/features",
    title: "Video Hosting Features | VdoHide",
    description:
      "Upload, transcode, protect, analyze, and deliver 1080p adaptive HLS video from one VdoHide workflow.",
    keywords: [
      "video hosting features",
      "adaptive HLS",
      "secure video embed",
      "video analytics",
      "video API",
    ],
  })
}

const features = [
  {
    icon: CloudUpload,
    eyebrow: "Ingest",
    title: "Uploads that keep moving",
    description:
      "Bring a local file or remote URL into one managed workflow. Large uploads can resume instead of starting over after a connection drop.",
    tags: ["File upload", "Remote URL", "Resumable"],
  },
  {
    icon: Gauge,
    eyebrow: "Processing",
    title: "Adaptive quality, automatically",
    description:
      "VdoHide prepares web-ready HLS renditions up to 1080p so the player can choose the right quality for each connection.",
    tags: ["1080p", "HLS", "Auto quality"],
  },
  {
    icon: Globe2,
    eyebrow: "Delivery",
    title: "Video closer to every viewer",
    description:
      "Popular segments are delivered from nearby edge locations for faster starts and fewer interruptions across regions.",
    tags: ["Edge cached", "Global", "Fast starts"],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Protection",
    title: "Control where video plays",
    description:
      "Protect source files, restrict embeds by domain, and keep private video out of places where it does not belong.",
    tags: ["Domain rules", "Secure embeds"],
  },
  {
    icon: BarChart3,
    eyebrow: "Insights",
    title: "Analytics without another tool",
    description:
      "Follow plays, watch behavior, devices, countries, and delivery volume from the same place you manage content.",
    tags: ["Audience", "Devices", "Bandwidth"],
  },
  {
    icon: Code2,
    eyebrow: "Automation",
    title: "API-first when you need it",
    description:
      "Create videos from your application, automate remote uploads, and react to processing events with REST APIs and webhooks.",
    tags: ["REST API", "Webhooks", "Remote upload"],
  },
] as const

export default function FeaturesPage() {
  return (
    <>
      <MarketingHero
        eyebrow="VdoHide features"
        title="Everything between upload and play."
        description="One considered workflow for storage, processing, delivery, player security, analytics, and automation."
      >
        <ProductPanel label="Processing pipeline" title="product-launch.mp4">
          <div className="space-y-3">
            {[
              ["Original secured", "Complete"],
              ["Adaptive HLS", "1080p · 720p · 480p"],
              ["Global delivery", "Ready at the edge"],
            ].map(([label, value], index) => (
              <div
                className="flex items-center justify-between gap-5 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] p-4"
                key={label}
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid size-7 place-items-center rounded-full bg-[var(--m-brand-soft)] font-mono text-[9px] text-[var(--m-brand-ink)]">
                    0{index + 1}
                  </span>
                  <LocalizedText text={label ?? ""} />
                </span>
                <span className="text-right text-[10px] text-[var(--m-faint)]">
                  <LocalizedText text={value ?? ""} />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--m-surface-subtle)]">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--m-brand)] to-[#ff8a82]" />
          </div>
        </ProductPanel>
      </MarketingHero>

      <StatStrip
        items={[
          { value: "1080p", label: "Adaptive playback" },
          { value: "HLS", label: "Web-ready delivery" },
          { value: "Global", label: "Edge-cached streams" },
          { value: "API", label: "Automated workflows" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="One platform"
            title="The full video workflow, without the full video stack."
            description="Use the dashboard when you want simplicity and the API when your product needs complete automation."
          />
          <FeatureGrid items={features} />
        </div>
      </section>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="A simple pipeline"
            title="Three steps from source to stream."
            description="The infrastructure work stays behind the scenes while your team keeps control of the content and experience."
          />
          <StepGrid
            items={[
              {
                title: "Bring the source",
                description:
                  "Upload a file or point VdoHide at a remote URL. The source enters a managed processing workflow.",
              },
              {
                title: "Let VdoHide prepare it",
                description:
                  "Adaptive renditions, manifests, and delivery assets are prepared automatically for web playback.",
              },
              {
                title: "Embed, measure, improve",
                description:
                  "Publish with the player or API, apply access rules, and use analytics to understand the audience.",
              },
            ]}
          />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <DarkPanel
            eyebrow="Built to disappear"
            title="Video infrastructure your team does not have to babysit."
            description="VdoHide turns the repetitive parts of video delivery into one predictable system, leaving your team free to build the product around it."
            items={[
              "No manual encoding ladder",
              "No separate player integration",
              "No delivery configuration maze",
              "No disconnected analytics stack",
            ]}
          />
        </div>
      </section>

      <MarketingCta
        title="Upload once. Be ready everywhere."
        description="Start on the Free plan and move to predictable ad-free delivery when your audience grows."
      />
    </>
  )
}
