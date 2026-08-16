import { Link } from "@/i18n/navigation"

import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  LegalCallout,
  LegalContact,
  LegalDocument,
  LegalList,
  LegalListItem,
  LegalSection,
} from "../../_comp/legal-document"

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params
  return createPageMetadata({
    locale,
    pathname: "/legal/terms",
    title: "Terms of Service | VdoHide",
    description:
      "Terms governing access to and use of VdoHide video hosting, streaming, APIs, and related services.",
  })
}

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Terms of Service"
      title="The agreement for using VdoHide."
      description="These Terms govern your access to VdoHide's websites, video hosting, processing, playback, delivery, APIs, and related services. Please read them before creating an account or uploading content."
    >
      <LegalCallout tone="important">
        By creating an account, purchasing a plan, uploading content, or
        otherwise using the Service, you agree to these Terms and our{" "}
        <Link
          className="font-semibold underline underline-offset-4"
          href="/legal/privacy"
        >
          Privacy Policy
        </Link>{" "}
        and acknowledge that content uploaded to VdoHide must comply with our{" "}
        <Link
          className="font-semibold underline underline-offset-4"
          href="/legal/content-policy"
        >
          Content Policy
        </Link>
        . If you use VdoHide for an organization, you represent that you can
        bind that organization.
      </LegalCallout>

      <LegalSection number="01" title="Who may use the Service">
        <p>
          You must be at least 18 years old, the age of legal majority where you
          live, or authorized by a parent, guardian, school, or organization
          that is legally able to accept these Terms for you. You may not use
          the Service if applicable law prohibits it.
        </p>
        <p>
          Information provided when registering must be accurate and kept
          current. You are responsible for all activity under your account and
          for protecting passwords, API keys, session tokens, and recovery
          methods.
        </p>
      </LegalSection>

      <LegalSection number="02" title="What VdoHide provides">
        <p>
          VdoHide provides tools to upload, import, store, process, transcode,
          secure, manage, embed, analyze, and deliver video. Features, technical
          limits, supported formats, delivery locations, and availability may
          change as the Service evolves.
        </p>
        <p>
          Beta, preview, or experimental features may be changed or withdrawn at
          any time and may be less reliable than generally available features.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Your content and permissions">
        <p>
          You retain ownership of videos, audio, images, captions, metadata,
          code, and other material you submit to the Service (&quot;User
          Content&quot;).
        </p>
        <p>
          You grant VdoHide and its service providers a non-exclusive,
          worldwide, royalty-free license to host, copy, cache, transcode,
          modify solely for technical compatibility, secure, distribute,
          publicly perform, and display User Content only as needed to operate,
          improve, and provide the Service according to your settings. This
          license ends when the content is deleted from active systems, subject
          to reasonable backup, legal, and security retention.
        </p>
        <p>
          You represent that you own or have all permissions required for your
          User Content, including music, performances, trademarks, personal
          information, likenesses, performer age and consent records, and
          distribution rights, and that its use through VdoHide does not violate
          law or another person&apos;s rights.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Acceptable use">
        <p>
          All uploads must comply with the{" "}
          <Link
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href="/legal/content-policy"
          >
            Content Policy
          </Link>
          . Lawful adult content is permitted only when its age, consent,
          rights, labeling, access-control, and recordkeeping requirements are
          satisfied. You may not use VdoHide to create, upload, store, deliver,
          or promote content or activity that:
        </p>
        <LegalList>
          <LegalListItem>
            is illegal, fraudulent, deceptive, defamatory, threatening,
            harassing, exploitative, or violates privacy, publicity,
            intellectual-property, or other rights;
          </LegalListItem>
          <LegalListItem>
            contains child sexual abuse material, sexual exploitation,
            non-consensual intimate material, credible threats, or material that
            facilitates serious harm;
          </LegalListItem>
          <LegalListItem>
            contains malware, destructive code, credential theft, phishing,
            unauthorized surveillance, or attempts to bypass security or access
            controls;
          </LegalListItem>
          <LegalListItem>
            uses the Service primarily for general file distribution, bandwidth
            resale, automated scraping, artificial traffic, ad fraud, or
            activity that degrades the Service for others;
          </LegalListItem>
          <LegalListItem>
            misrepresents identity or affiliation, interferes with the Service,
            probes systems without authorization, or evades an enforcement
            action or usage limit.
          </LegalListItem>
        </LegalList>
        <p>
          You must use reasonable access controls for private or restricted
          material. You may not rely on obscurity of a URL as the only
          protection for highly sensitive content.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Moderation, removal, and account action">
        <p>
          VdoHide may investigate suspected violations and may restrict
          delivery, remove content, preserve evidence, limit features, suspend
          or terminate accounts, or cooperate with lawful authorities when
          reasonably necessary to protect users, the public, third parties, or
          the Service.
        </p>
        <p>
          We may use automated systems and human review, but do not undertake a
          general obligation to monitor all User Content. Where practical and
          lawful, we will provide notice and an opportunity to appeal. Urgent
          safety, fraud, security, legal, or repeat-infringement matters may
          require action without advance notice.
        </p>
      </LegalSection>

      <LegalSection
        number="06"
        title="Plans, advertising, billing, and fair use"
      >
        <p>
          Plan descriptions, included usage, prices, taxes, billing intervals,
          and advertising terms shown at purchase are part of these Terms. The
          Free plan may display advertising in the VdoHide player.
          &quot;Unlimited&quot; features are subject to fair use for genuine
          video hosting and playback and do not permit abuse, bandwidth resale,
          general file delivery, or activity that materially harms the Service.
        </p>
        <p>
          Paid fees are billed in advance unless stated otherwise. You authorize
          the payment provider to charge applicable amounts. Fees are
          non-refundable except where the purchase terms or mandatory law
          require otherwise. We will give reasonable advance notice of material
          recurring price changes where required.
        </p>
        <p>
          If usage is unusually high, abusive, or outside the intended plan, we
          may contact you to optimize delivery, move to an appropriate plan,
          apply documented overage pricing, or reasonably limit the affected
          usage.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Third-party services">
        <p>
          The Service may interoperate with identity providers, payment
          processors, storage and delivery infrastructure, embedded websites, or
          other third-party products. Their services are governed by their own
          terms and policies. VdoHide is not responsible for third-party
          products that it does not control.
        </p>
      </LegalSection>

      <LegalSection number="08" title="VdoHide intellectual property">
        <p>
          VdoHide and its licensors retain all rights in the Service, including
          software, design, branding, documentation, and technology, excluding
          User Content. These Terms give you a limited, non-exclusive,
          non-transferable, revocable right to use the Service as provided; they
          do not transfer ownership.
        </p>
        <p>
          Feedback may be used without restriction or obligation, provided it
          does not identify you publicly without permission.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Copyright complaints">
        <p>
          VdoHide respects intellectual-property rights and responds to
          sufficiently complete copyright notices. The process for notices,
          counter-notifications, and repeat infringers is described in the{" "}
          <Link
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href="/legal/dmca"
          >
            DMCA & Copyright Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection number="10" title="Service changes and availability">
        <p>
          We work to keep VdoHide available, but do not promise uninterrupted,
          error-free, or loss-free operation. Maintenance, network conditions,
          third-party failures, security events, force majeure, and other
          circumstances may affect availability. You are responsible for keeping
          appropriate originals and backups of important User Content.
        </p>
        <p>
          We may change or discontinue features. If a material change
          substantially reduces a paid Service, we will provide notice or a
          commercially reasonable transition where practical, unless urgent
          legal, security, or technical reasons prevent it.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Disclaimers">
        <p>
          To the maximum extent permitted by law, the Service is provided
          &quot;as is&quot; and &quot;as available.&quot; VdoHide disclaims
          implied warranties of merchantability, fitness for a particular
          purpose, non-infringement, title, quiet enjoyment, and any warranty
          arising from course of dealing or usage of trade.
        </p>
        <p>
          We do not warrant that the Service will meet every requirement, that
          content will never be lost or altered, that security controls will
          prevent every incident, or that third-party content and services are
          accurate, safe, or available. Nothing in these Terms excludes a
          warranty or consumer right that cannot lawfully be excluded.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Limitation of liability">
        <LegalCallout tone="important">
          This section allocates risk between you and VdoHide. It applies only
          to the maximum extent permitted by applicable law and does not limit
          liability that cannot legally be limited.
        </LegalCallout>
        <p>
          VdoHide and its affiliates, officers, employees, contractors,
          licensors, and service providers will not be liable for indirect,
          incidental, special, exemplary, punitive, or consequential damages, or
          for lost profits, revenue, business, opportunities, goodwill, use, or
          data, arising from or related to the Service, even if advised that
          such loss was possible.
        </p>
        <p>
          To the maximum extent permitted by law, their total aggregate
          liability for all claims arising from or related to the Service or
          these Terms will not exceed the greater of (a) the amount you paid
          VdoHide for the affected Service during the 12 months before the event
          giving rise to the claim or (b) USD 100.
        </p>
        <p>
          These exclusions and limits do not apply to fraud, willful misconduct,
          gross negligence, death or personal injury caused by negligence, or
          any other liability that applicable law does not allow to be excluded
          or limited. Some jurisdictions do not allow certain exclusions, so
          parts of this section may not apply to you.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Indemnity for business use">
        <p>
          If you use the Service for a business or organization, you will, to
          the extent permitted by law, defend and indemnify VdoHide from
          third-party claims, losses, and reasonable costs arising from your
          User Content, your violation of these Terms, or your infringement of
          another person&apos;s rights. This obligation does not apply to the
          extent a claim was caused by VdoHide&apos;s own breach, negligence, or
          willful misconduct.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Termination and data export">
        <p>
          You may stop using VdoHide and request account deletion. Before
          closing an account, export content and information you need. We may
          terminate or suspend access for material or repeated violations,
          non-payment, security risk, legal requirements, or discontinuation of
          the Service.
        </p>
        <p>
          Provisions that by their nature should survive termination remain
          effective, including ownership, payment obligations, disclaimers,
          liability limits, indemnity, and dispute terms.
        </p>
      </LegalSection>

      <LegalSection number="15" title="Applicable law and disputes">
        <p>
          Mandatory consumer protections and rules determining applicable law
          and competent courts remain unaffected. A separate enterprise order
          may specify governing law, venue, arbitration, service levels, or
          negotiated terms; if it conflicts with these Terms, the signed order
          controls for that order.
        </p>
        <p>
          Before filing a formal claim, you and VdoHide agree to make a
          good-faith effort to resolve the matter by written notice, unless
          urgent relief or mandatory law makes that impractical.
        </p>
      </LegalSection>

      <LegalSection number="16" title="Changes and general terms">
        <p>
          We may update these Terms as the Service or law changes. The effective
          date will be revised, and material changes will be communicated
          through the Service, email, or another reasonable method. Continued
          use after the effective date means you accept the updated Terms where
          permitted by law.
        </p>
        <p>
          If a provision is unenforceable, it will be limited to the minimum
          extent necessary and the rest will remain effective. Failure to
          enforce a provision is not a waiver. You may not transfer these Terms
          without our consent; VdoHide may transfer them as part of a merger,
          acquisition, reorganization, or sale of the relevant business, subject
          to applicable law.
        </p>
      </LegalSection>

      <LegalSection number="17" title="Contact">
        <p>
          Questions about these Terms or a formal legal notice may be sent to
          the address below. Copyright notices should follow the instructions in
          the DMCA & Copyright Policy.
        </p>
        <LegalContact subject="Terms of Service inquiry" />
      </LegalSection>
    </LegalDocument>
  )
}
