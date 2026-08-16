import { ArrowUpRight, BadgeDollarSign, LifeBuoy, Scale } from "lucide-react"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  MarketingCta,
  MarketingHero,
  ProductPanel,
  SectionHeader,
  StepGrid,
} from "../../_comp/marketing-detail"
import { LocalizedText } from "@/components/i18n/localized-text"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/contact",
    title: "Contact VdoHide | Sales, Support & Legal",
    description:
      "Contact VdoHide about High-volume video hosting, product support, account questions, legal notices, or content reports.",
  })
}

const contacts = [
  {
    icon: BadgeDollarSign,
    label: "Sales",
    email: "sales@vdohide.com",
    description:
      "High-volume pricing, migration planning, commercial requirements, and product fit.",
  },
  {
    icon: LifeBuoy,
    label: "Support",
    email: "support@vdohide.com",
    description:
      "Account access, billing, uploads, processing, playback, and technical questions.",
  },
  {
    icon: Scale,
    label: "Legal & safety",
    email: "legal@vdohide.com",
    description:
      "Legal notices, privacy requests, copyright, abuse reports, and content-policy concerns.",
  },
] as const

export default function ContactPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Contact VdoHide"
        title="Reach the right part of the team."
        description="Tell us whether you are evaluating the platform, operating an account, or reporting a legal or safety concern."
        primary={{ href: "mailto:sales@vdohide.com", label: "Email sales" }}
        secondary={{ href: "/report-abuse", label: "Report abuse" }}
      >
        <ProductPanel label="Contact routing" title="How can we help?">
          <div className="space-y-3">
            {contacts.map(({ icon: Icon, label, email }) => (
              <a
                className="group flex items-center justify-between gap-5 rounded-2xl border border-[var(--m-line)] bg-[var(--m-bg)] px-4 py-4 transition-all hover:border-[var(--m-line-strong)] hover:bg-[var(--m-surface-subtle)]"
                href={"mailto:" + email}
                key={email}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className="grid size-8 place-items-center rounded-xl bg-[var(--m-brand-soft)] text-[var(--m-brand-ink)]">
                    <Icon className="size-4" />
                  </span>
                  <LocalizedText text={label} />
                </span>
                <ArrowUpRight className="size-4 text-[var(--m-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </ProductPanel>
      </MarketingHero>

      <section className="border-y border-[var(--m-line)] bg-[var(--m-surface)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Direct channels"
            title="A clear address for each kind of conversation."
            description="Include the account email, relevant video or request ID, and enough context to route your message safely. Never email passwords, API secrets, full card numbers, or identity documents unless instructed through an authorized secure process."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {contacts.map(({ icon: Icon, label, email, description }) => (
              <a
                className="group flex min-h-[300px] flex-col rounded-[26px] border border-[var(--m-line)] bg-[var(--m-bg)] p-7 shadow-[0_18px_50px_rgba(15,17,24,.05)] transition-all hover:-translate-y-1 hover:border-[var(--m-line-strong)] hover:shadow-[0_28px_65px_rgba(15,17,24,.1)] sm:p-8"
                href={"mailto:" + email}
                key={email}
              >
                <span className="grid size-12 place-items-center rounded-2xl border border-[var(--m-line)] bg-[var(--m-surface)] text-[var(--m-brand-ink)]">
                  <Icon className="size-5" />
                </span>
                <div className="mt-auto pt-12">
                  <p className="text-xl font-semibold tracking-[-.03em]">
                    <LocalizedText text={label} />
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--m-muted)]">
                    <LocalizedText text={description} />
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">
                    {email}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="For High-volume teams"
            title="Give us enough context to make the first conversation useful."
            description="A short, concrete description is more useful than a long procurement document at the start."
          />
          <StepGrid
            items={[
              {
                title: "Describe the workload",
                description:
                  "Share approximate stored video, monthly delivery, regions, upload method, and expected audience growth.",
              },
              {
                title: "Name the controls",
                description:
                  "Tell us about domains, privacy, user-generated content, custom branding, or compliance constraints.",
              },
              {
                title: "Set the next decision",
                description:
                  "Explain whether you are comparing providers, planning a migration, or validating a new product.",
              },
            ]}
          />
        </div>
      </section>

      <MarketingCta
        eyebrow="High-volume video"
        title="Bring the workload. We will help map the path."
        description="Email the sales channel with your expected storage, playback, regions, and launch timeline."
        primary={{
          href: "mailto:sales@vdohide.com",
          label: "sales@vdohide.com",
        }}
        secondary={{ href: "/pricing", label: "Review pricing" }}
      />
    </>
  )
}
