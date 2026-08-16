import { Link } from "@/i18n/navigation"
import {
  BadgeCheck,
  EyeOff,
  FileCheck2,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react"

import {
  DarkPanel,
  FeatureGrid,
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
  StatStrip,
} from "../../../_comp/marketing-detail"
import { LocalizedText } from "@/components/i18n/localized-text"
import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/solutions/adult-video-hosting",
    title: "Adult Video Hosting for Lawful 18+ Content | VdoHide",
    description:
      "A professional video hosting and delivery foundation for lawful adult content with clear age, consent, rights, access, and reporting responsibilities.",
    keywords: [
      "adult video hosting",
      "18+ video hosting",
      "secure adult video streaming",
      "adult HLS hosting",
    ],
  })
}

export default function AdultVideoHostingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Lawful 18+ video"
        title="Professional delivery. Non-negotiable boundaries."
        description="A video infrastructure foundation for lawful adult publishers that can document age, consent, ownership, and appropriate viewer access."
        primary={{ href: "/legal/content-policy", label: "Review the policy" }}
        secondary={{ href: "/contact", label: "Discuss your use case" }}
      >
        <ProductPanel label="Publishing checklist" title="adult-content.mp4">
          <div className="space-y-3">
            {[
              ["All performers 18+", "Required"],
              ["Consent documented", "Required"],
              ["Distribution rights", "Required"],
              ["Audience controls", "Customer managed"],
            ].map(([label, value]) => (
              <div
                className="flex items-center justify-between gap-5 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-4"
                key={label}
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <BadgeCheck className="size-4 text-[var(--m-brand-ink)]" />
                  <LocalizedText text={label ?? ""} />
                </span>
                <span className="text-right text-[10px] text-[var(--m-faint)]">
                  <LocalizedText text={value ?? ""} />
                </span>
              </div>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <StatStrip
        items={[
          { value: "18+", label: "Adults only" },
          { value: "Consent", label: "Documented participation" },
          { value: "Rights", label: "Licensed distribution" },
          { value: "Control", label: "Restricted audience" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="A responsible foundation"
            title="Hosting controls around a policy-led workflow."
            description="Infrastructure can support responsible distribution, but it cannot replace the publisher's legal and safety obligations."
          />
          <FeatureGrid
            items={[
              {
                icon: LockKeyhole,
                title: "Protected sources",
                description:
                  "Keep original files behind the service instead of exposing direct storage locations to every viewer.",
              },
              {
                icon: EyeOff,
                title: "Controlled embeds",
                description:
                  "Apply domain and visibility rules around where content is presented and build age verification into your application.",
              },
              {
                icon: FileCheck2,
                title: "Documented rights",
                description:
                  "Maintain performer age, consent, releases, ownership, licenses, and legally required production records.",
              },
              {
                icon: Scale,
                title: "Copyright process",
                description:
                  "Use a defined notice, counter-notification, and repeat-infringer workflow for movies, JAV titles, clips, and other works.",
              },
              {
                icon: ShieldCheck,
                title: "Safety reporting",
                description:
                  "Give viewers and depicted people a direct path to report exploitation, non-consensual material, or illegal content.",
              },
              {
                icon: BadgeCheck,
                title: "Accurate labeling",
                description:
                  "Mark adult material clearly and keep explicit previews away from general-audience surfaces.",
              },
            ]}
          />
        </div>
      </section>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Clear line"
            title="Lawful adult content is allowed. Exploitation and piracy are not."
            description="The distinction depends on age, voluntary consent, distribution rights, context, access, and applicable law."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[26px] border border-[var(--m-line)] bg-[var(--m-bg)] p-7 sm:p-9">
              <p className="text-[10px] font-semibold tracking-[.16em] text-emerald-600 uppercase dark:text-emerald-400">
                <LocalizedText text="Potentially allowed" />
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-.035em]">
                <LocalizedText text="Documented, consensual, and licensed" />
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--m-muted)]">
                <li>
                  <LocalizedText text="All depicted people are verified adults." />
                </li>
                <li>
                  <LocalizedText text="Creation and distribution are voluntarily consented to." />
                </li>
                <li>
                  <LocalizedText text="The uploader owns or licenses online distribution rights." />
                </li>
                <li>
                  <LocalizedText text="Required records, labels, and access controls are maintained." />
                </li>
              </ul>
            </article>
            <article className="rounded-[26px] border border-[color-mix(in_srgb,var(--m-brand)_35%,var(--m-line))] bg-[var(--m-brand-soft)] p-7 sm:p-9">
              <p className="text-[10px] font-semibold tracking-[.16em] text-[var(--m-brand-ink)] uppercase">
                <LocalizedText text="Never allowed" />
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-.035em]">
                <LocalizedText text="Minors, coercion, non-consent, or infringement" />
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--m-muted)]">
                <li>
                  <LocalizedText text="CSAM, grooming, exploitation, or sexualized minors." />
                </li>
                <li>
                  <LocalizedText text="Hidden-camera, stolen, or non-consensual intimate material." />
                </li>
                <li>
                  <LocalizedText text="Sexual deepfakes created or shared without permission." />
                </li>
                <li>
                  <LocalizedText text="Unlicensed films, JAV titles, scenes, compilations, or clips." />
                </li>
              </ul>
            </article>
          </div>
          <p className="mt-6 text-sm leading-7 text-[var(--m-muted)]">
            <LocalizedText text="Read the complete" />{" "}
            <Link
              className="font-semibold text-[var(--m-text)] underline underline-offset-4"
              href="/legal/content-policy"
            >
              <LocalizedText text="Content Policy" />
            </Link>{" "}
            <LocalizedText text="before uploading or enabling user-generated adult content." />
          </p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <DarkPanel
            eyebrow="Shared responsibility"
            title="VdoHide delivers video. The publisher controls eligibility and access."
            description="Customers remain responsible for performer verification, consent records, age assurance for viewers, licensing, geographic restrictions, and legal compliance."
            items={[
              "Verify performers and rights",
              "Keep required records",
              "Age-check viewers where required",
              "Respond to safety and rights reports",
            ]}
          />
        </div>
      </section>

      <MarketingCta
        eyebrow="Start with policy"
        title="Review the boundaries before choosing the infrastructure."
        description="Confirm that your content, records, viewer controls, and vendors can meet the requirements before publishing."
        primary={{
          href: "/legal/content-policy",
          label: "Read Content Policy",
        }}
        secondary={{ href: "/report-abuse", label: "Report content" }}
      />
    </>
  )
}
