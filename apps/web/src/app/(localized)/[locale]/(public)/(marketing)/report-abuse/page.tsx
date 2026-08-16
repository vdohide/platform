import { Link } from "@/i18n/navigation"
import {
  AlertTriangle,
  ArrowUpRight,
  Copyright,
  FileWarning,
  ShieldAlert,
  UserRoundX,
} from "lucide-react"

import { LEGAL_EMAIL } from "../../_comp/legal-document"
import {
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
    pathname: "/report-abuse",
    title: "Report Abuse or Illegal Content | VdoHide",
    description:
      "Report child-safety concerns, non-consensual intimate material, copyright infringement, illegal content, or other abuse involving VdoHide.",
  })
}

const reportTypes = [
  {
    icon: ShieldAlert,
    title: "Child safety or exploitation",
    subject: "Urgent child safety report",
    description:
      "Suspected CSAM, grooming, sexual exploitation, trafficking, or danger involving a minor.",
  },
  {
    icon: UserRoundX,
    title: "Non-consensual intimate material",
    subject: "Non-consensual intimate content report",
    description:
      "Hidden-camera, stolen private material, sexual deepfakes, extortion, or publication beyond consent.",
  },
  {
    icon: Copyright,
    title: "Copyright infringement",
    subject: "Copyright report",
    description:
      "A video, film, JAV title, clip, or other work uploaded without authorization.",
  },
  {
    icon: FileWarning,
    title: "Other illegal or abusive content",
    subject: "Content abuse report",
    description:
      "Fraud, malware, credible threats, privacy violations, impersonation, or other prohibited activity.",
  },
] as const

export default function ReportAbusePage() {
  const reportEmail =
    "mailto:" +
    LEGAL_EMAIL +
    "?subject=" +
    encodeURIComponent("Content abuse report")

  return (
    <>
      <MarketingHero
        eyebrow="Trust and safety"
        title="Report content that should not be here."
        description="Send the exact location and the nature of the concern. VdoHide can review content faster when a report is specific and does not unnecessarily copy harmful material."
        primary={{ href: reportEmail, label: "Send a report" }}
        secondary={{ href: "/legal/content-policy", label: "Read the policy" }}
      >
        <ProductPanel
          label="Safety report"
          title="What to include"
          status="Open"
        >
          <div className="space-y-3">
            {[
              "Exact video or embed URL",
              "Type of violation",
              "Relevant timestamp",
              "Your safe contact details",
            ].map((item, index) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-4 text-sm"
                key={item}
              >
                <span className="font-mono text-[9px] text-[var(--m-brand-ink)]">
                  0{index + 1}
                </span>
                <LocalizedText text={item} />
              </div>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <section className="border-y border-[color-mix(in_srgb,var(--m-brand)_28%,var(--m-line))] bg-[var(--m-brand-soft)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] gap-4">
          <AlertTriangle className="mt-1 size-5 shrink-0 text-[var(--m-brand-ink)]" />
          <div>
            <p className="font-semibold text-[var(--m-text)]">
              <LocalizedText text="Do not download, copy, or attach suspected CSAM." />
            </p>
            <p className="mt-1 max-w-3xl text-sm leading-7 text-[var(--m-muted)]">
              <LocalizedText text="Send the location and surrounding facts instead. If someone is in immediate danger, contact the appropriate local emergency or law-enforcement service first." />
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Choose the concern"
            title="Route the report with a clear subject."
            description="One complete report is usually more useful than several duplicate messages."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reportTypes.map(({ icon: Icon, title, subject, description }) => (
              <a
                className="group flex min-h-[260px] flex-col rounded-[26px] border border-[var(--m-line)] bg-[var(--m-surface)] p-7 shadow-[0_18px_50px_rgba(15,17,24,.05)] transition-all hover:-translate-y-1 hover:border-[var(--m-line-strong)] hover:shadow-[0_28px_65px_rgba(15,17,24,.1)] sm:p-8"
                href={
                  "mailto:" +
                  LEGAL_EMAIL +
                  "?subject=" +
                  encodeURIComponent(subject)
                }
                key={title}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] text-[var(--m-brand-ink)]">
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-[var(--m-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-auto pt-10">
                  <h2 className="text-xl font-semibold tracking-[-.03em]">
                    <LocalizedText text={title} />
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--m-muted)]">
                    <LocalizedText text={description} />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="A useful report"
            title="Specific enough to locate. Limited to what is necessary."
            description="Do not send passwords, API keys, full payment details, or identity documents through ordinary email."
          />
          <StepGrid
            items={[
              {
                title: "Identify the exact location",
                description:
                  "Include the complete VdoHide video, player, or embed URL and the relevant timestamp when possible.",
              },
              {
                title: "Explain the concern",
                description:
                  "State what rule or right may be violated, who is affected, and whether the issue is urgent.",
              },
              {
                title: "Provide safe contact details",
                description:
                  "Give a reliable way to request clarification while limiting personal information to what is necessary.",
              },
            ]}
          />
          <div className="mt-8 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] p-5 text-sm leading-7 text-[var(--m-muted)] sm:p-6">
            <LocalizedText text="Copyright owners should review the" />{" "}
            <Link
              className="font-semibold text-[var(--m-text)] underline underline-offset-4"
              href="/legal/dmca"
            >
              <LocalizedText text="DMCA & Copyright Policy" />
            </Link>{" "}
            <LocalizedText text="for the elements required in a takedown notice. Privacy requests should follow the" />{" "}
            <Link
              className="font-semibold text-[var(--m-text)] underline underline-offset-4"
              href="/legal/privacy"
            >
              <LocalizedText text="Privacy Policy" />
            </Link>
            .
          </div>
        </div>
      </section>

      <MarketingCta
        eyebrow="Report responsibly"
        title="Send the location, context, and only the information needed."
        description="Reports are reviewed based on the information available, applicable law, and the VdoHide policies."
        primary={{ href: reportEmail, label: LEGAL_EMAIL }}
        secondary={{ href: "/legal/content-policy", label: "Content Policy" }}
      />
    </>
  )
}
