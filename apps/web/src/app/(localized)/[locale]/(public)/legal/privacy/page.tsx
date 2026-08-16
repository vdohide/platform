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
    pathname: "/legal/privacy",
    title: "Privacy Policy | VdoHide",
    description:
      "How VdoHide collects, uses, shares, protects, and retains information when you use its video hosting services.",
  })
}

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy Policy"
      title="Your data, explained plainly."
      description="This Policy describes how VdoHide handles personal information across our websites, accounts, video hosting, playback, APIs, support, and related services."
    >
      <LegalCallout>
        VdoHide is the controller of information used for its own service
        operations. Customers may also use VdoHide to process viewer information
        on their behalf; for that activity, the customer is generally the
        controller and VdoHide acts as its service provider or processor.
      </LegalCallout>

      <LegalSection number="01" title="Information we collect">
        <p>The information collected depends on how you use VdoHide:</p>
        <LegalList>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Account and profile.
            </strong>{" "}
            Name, email address, profile image, country, email-verification
            status, account role, security settings, and authentication
            preferences.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Authentication and session data.
            </strong>{" "}
            Login provider, session and security tokens, IP address, device and
            browser information, user agent, approximate country, login history,
            and two-factor authentication status. Passwords are handled in
            protected form and are not available to us as readable text.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">User Content.</strong>{" "}
            Videos, audio, thumbnails, captions, metadata, titles, descriptions,
            access settings, domain restrictions, and other files or information
            submitted to the Service.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Playback and usage.
            </strong>{" "}
            Requests, page and feature activity, video plays, watch events,
            device and network characteristics, error and diagnostic
            information, referring pages, delivery region, bandwidth, and
            operational logs.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">Transactions.</strong>{" "}
            Plan, billing status, invoices, tax information, and transaction
            identifiers. Complete payment-card details are generally collected
            and processed by the payment provider rather than stored by VdoHide.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">Communications.</strong>{" "}
            Support requests, legal notices, feedback, survey responses, and
            messages sent to us.
          </LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection number="02" title="How we use information">
        <LegalList>
          <LegalListItem>
            provide accounts, authentication, uploads, transcoding, storage,
            playback, delivery, analytics, APIs, billing, and support;
          </LegalListItem>
          <LegalListItem>
            secure the Service, prevent fraud and abuse, enforce access
            controls, investigate incidents, and protect users and the public;
          </LegalListItem>
          <LegalListItem>
            maintain, troubleshoot, measure, and improve performance,
            reliability, accessibility, and product experience;
          </LegalListItem>
          <LegalListItem>
            communicate about transactions, security, service changes, support,
            and—where permitted—products or offers;
          </LegalListItem>
          <LegalListItem>
            moderate content, respond to rights requests and copyright notices,
            enforce our Terms, and comply with law;
          </LegalListItem>
          <LegalListItem>
            create aggregated or de-identified information that is not
            reasonably linked to an individual.
          </LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection number="03" title="Legal bases">
        <p>
          Where data-protection law requires a legal basis, VdoHide relies on
          one or more of the following:
        </p>
        <LegalList>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">Contract.</strong>{" "}
            Processing needed to create your account and provide the Service you
            request.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Legitimate interests.
            </strong>{" "}
            Securing, operating, improving, and understanding the Service;
            preventing abuse; and communicating with users, balanced against
            your rights.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">Consent.</strong> Where
            required for optional cookies, marketing, certain advertising, or
            other specific processing. You may withdraw consent prospectively.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Legal obligation and vital interests.
            </strong>{" "}
            Compliance with law, valid legal process, tax and accounting duties,
            safety, and protection of important interests.
          </LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection number="04" title="Cookies and local storage">
        <p>
          VdoHide uses cookies and similar browser storage for essential
          sessions, account security, two-factor authentication, redirects after
          login, consent choices, theme preferences, and basic product
          functionality. These technologies can also support measurement, fraud
          prevention, and advertising on the Free plan where enabled.
        </p>
        <p>
          You can control non-essential technologies through available consent
          controls and browser settings. Blocking essential cookies may prevent
          login or other core features. Social-login providers may set their own
          cookies when you choose to use them.
        </p>
      </LegalSection>

      <LegalSection number="05" title="How information is disclosed">
        <p>
          We disclose information only as reasonably necessary for the purposes
          described here:
        </p>
        <LegalList>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Infrastructure and service providers.
            </strong>{" "}
            Vendors supporting hosting, storage, transcoding, content delivery,
            security, authentication, email, support, analytics, payment, and
            other operations, under appropriate contractual restrictions.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Your direction and public features.
            </strong>{" "}
            Viewers, websites, applications, team members, or integrations you
            choose. Publicly embedded video and its metadata can be available to
            anyone with access to the page or URL.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">Legal and safety.</strong>{" "}
            Authorities or other parties when we reasonably believe disclosure
            is required by law or necessary to protect rights, safety, security,
            users, or the Service.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-[var(--m-text)]">
              Business transfers.
            </strong>{" "}
            Parties involved in a financing, merger, acquisition,
            reorganization, bankruptcy, or sale of assets, subject to
            confidentiality and applicable law.
          </LegalListItem>
        </LegalList>
        <p>
          VdoHide does not sell personal information for money. We do not use or
          disclose personal information for cross-context behavioral advertising
          unless that practice is described at collection and any choice
          required by law is provided.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Video owners and viewers">
        <p>
          Customers determine which videos they upload, who may watch them, what
          information they collect around an embed, and which access or
          analytics features they enable. If you watch a customer&apos;s video,
          that customer&apos;s privacy notice also applies to its collection and
          use of your information.
        </p>
        <p>
          Customers must provide legally required notices and obtain required
          permissions for their viewers and User Content. VdoHide processes
          viewer information on a customer&apos;s instructions where the
          customer acts as controller.
        </p>
      </LegalSection>

      <LegalSection number="07" title="International transfers">
        <p>
          VdoHide and its providers may process information in countries other
          than where you live. Those countries may have different
          data-protection laws. Where required, we use recognized transfer
          mechanisms and contractual or technical safeguards intended to protect
          the information.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Retention">
        <p>
          We keep personal information only as long as reasonably needed for the
          Service, the purposes described here, or legal, security,
          fraud-prevention, accounting, and dispute requirements. Retention
          depends on the type of information and context.
        </p>
        <LegalList>
          <LegalListItem>
            Account information is generally kept while the account is active
            and for a limited period afterward as needed for recovery, records,
            or legal obligations.
          </LegalListItem>
          <LegalListItem>
            User Content is retained while stored by the customer and is removed
            from active systems after deletion, subject to processing time,
            backups, legal holds, and security needs.
          </LegalListItem>
          <LegalListItem>
            Session, security, delivery, and diagnostic logs are retained for
            periods appropriate to operational and fraud-prevention needs.
          </LegalListItem>
          <LegalListItem>
            De-identified or aggregated information may be retained when it no
            longer reasonably identifies an individual.
          </LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection number="09" title="Security">
        <p>
          We use administrative, technical, and organizational measures designed
          to protect information, including access controls, authentication
          safeguards, encryption where appropriate, monitoring, and restricted
          provider access. No internet service, transmission, or storage system
          is completely secure, so we cannot guarantee absolute security.
        </p>
        <p>
          You are responsible for using strong credentials, enabling available
          security features, protecting API keys, configuring video access
          correctly, and promptly notifying us of suspected compromise.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Your privacy rights">
        <p>
          Depending on where you live, you may have rights to access, know,
          correct, delete, restrict or object to processing, receive a portable
          copy, withdraw consent, opt out of certain sale, sharing, profiling,
          or marketing, and appeal a denied request. You may also complain to a
          competent data-protection authority.
        </p>
        <p>
          We may verify your identity and authority before acting, and legal
          exceptions may apply. Authorized agents may submit requests where law
          permits. We will not discriminate against you for exercising a privacy
          right.
        </p>
        <p>
          For information controlled by a VdoHide customer, contact that
          customer first. We will assist the customer as required by our
          obligations.
        </p>
        <LegalContact subject="Privacy rights request" />
      </LegalSection>

      <LegalSection number="11" title="Children">
        <p>
          VdoHide is not directed to children under 13 and is not intended for
          anyone unable to validly accept the Terms without appropriate
          authorization. We do not knowingly collect personal information from a
          child in violation of applicable law. If you believe a child has
          provided information improperly, contact us so we can investigate and
          take appropriate action.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Changes to this Policy">
        <p>
          We may update this Policy to reflect changes in the Service, vendors,
          technology, or law. We will revise the effective date and provide
          additional notice of material changes where appropriate or legally
          required.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Contact">
        <p>
          Contact us with privacy questions or to exercise a right. Include your
          account email, the nature of your request, and the country or state
          where you live. Do not send passwords, full payment-card numbers, or
          unnecessary sensitive information.
        </p>
        <LegalContact subject="Privacy inquiry" />
      </LegalSection>
    </LegalDocument>
  )
}
