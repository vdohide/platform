import type { LocalizedPageProps } from "@/i18n/metadata"
import { createPageMetadata } from "@/i18n/metadata"

import {
  LEGAL_EMAIL,
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
    pathname: "/legal/dmca",
    title: "DMCA & Copyright Policy | VdoHide",
    description:
      "How to report alleged copyright infringement on VdoHide and submit a DMCA counter-notification.",
  })
}

export default function DmcaPage() {
  return (
    <LegalDocument
      eyebrow="DMCA & Copyright"
      title="A clear process for copyright reports."
      description="VdoHide respects copyright and reviews properly submitted reports concerning video or other material available through the Service."
    >
      <LegalCallout tone="important">
        Only a copyright owner or an authorized representative should submit a
        takedown notice. Knowingly making a material misrepresentation may
        result in liability. Consider fair use, licensing, public domain, and
        other lawful uses before sending a notice.
      </LegalCallout>

      <LegalSection number="01" title="Before submitting a notice">
        <p>
          If the material appears on a third-party website using a VdoHide
          embed, you may also contact the website operator. A complete report
          helps us locate the exact material and evaluate the request
          efficiently.
        </p>
        <p>
          This process is for copyright claims. Reports involving safety,
          privacy, impersonation, trademarks, or other concerns should be
          clearly identified in a separate message to the legal contact.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Copyright takedown notice">
        <p>
          A notice under 17 U.S.C. § 512(c)(3) should be sent to{" "}
          <a
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href={`mailto:${LEGAL_EMAIL}`}
          >
            {LEGAL_EMAIL}
          </a>{" "}
          and include all of the following:
        </p>
        <LegalList>
          <LegalListItem>
            A physical or electronic signature of the copyright owner or a
            person authorized to act for the owner.
          </LegalListItem>
          <LegalListItem>
            Identification of the copyrighted work claimed to be infringed, or a
            representative list if one notice covers multiple works at a single
            online location.
          </LegalListItem>
          <LegalListItem>
            Identification of the allegedly infringing material and information
            reasonably sufficient for VdoHide to locate it, preferably the
            complete VdoHide video, embed, or page URL and any relevant
            timestamp.
          </LegalListItem>
          <LegalListItem>
            Your name, organization if applicable, mailing address, telephone
            number, and email address.
          </LegalListItem>
          <LegalListItem>
            A statement that you have a good-faith belief that use of the
            material in the complained-of manner is not authorized by the
            copyright owner, its agent, or the law.
          </LegalListItem>
          <LegalListItem>
            A statement that the information in the notice is accurate and,
            under penalty of perjury, that you are the copyright owner or
            authorized to act for the owner.
          </LegalListItem>
        </LegalList>
        <p>
          We may forward the notice, including contact information, to the
          uploader or account holder and may provide it to transparency or
          legal-reporting services where lawful. Do not include information that
          is unnecessary for the claim.
        </p>
        <LegalContact subject="DMCA takedown notice" />
      </LegalSection>

      <LegalSection number="03" title="What happens after a notice">
        <p>
          VdoHide may request missing information, investigate, remove or
          disable access to the identified material, and notify the affected
          account holder. A notice that lacks required information may not be
          effective, but we may still take appropriate action based on the
          information available.
        </p>
        <p>
          Removal is not a determination by a court that infringement occurred.
          The uploader may have the right to submit a counter-notification.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Counter-notification">
        <p>
          If you believe material was removed or disabled because of mistake or
          misidentification, you may send a counter-notification to{" "}
          <a
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href={`mailto:${LEGAL_EMAIL}`}
          >
            {LEGAL_EMAIL}
          </a>
          . A valid counter-notification under 17 U.S.C. § 512(g)(3) should
          include:
        </p>
        <LegalList>
          <LegalListItem>Your physical or electronic signature.</LegalListItem>
          <LegalListItem>
            Identification of the material removed or disabled and the location
            where it appeared before removal, including the relevant URL.
          </LegalListItem>
          <LegalListItem>
            A statement under penalty of perjury that you have a good-faith
            belief the material was removed or disabled because of mistake or
            misidentification.
          </LegalListItem>
          <LegalListItem>
            Your name, mailing address, and telephone number.
          </LegalListItem>
          <LegalListItem>
            A statement consenting to the jurisdiction of the appropriate U.S.
            Federal District Court specified by § 512(g)(3), and accepting
            service of process from the person who submitted the original notice
            or that person&apos;s agent.
          </LegalListItem>
        </LegalList>
        <p>
          We may send the counter-notification to the original claimant. Where
          the statutory process applies, material may be restored no sooner than
          10 and no later than 14 business days after receipt unless the
          claimant informs us that a qualifying court action has been filed.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Repeat infringers">
        <p>
          In appropriate circumstances, VdoHide will terminate accounts of users
          who are determined to be repeat infringers. We may also restrict or
          terminate accounts for serious or repeated rights violations even when
          individual reports do not result in a formal legal determination.
        </p>
        <p>
          We consider the completeness and credibility of notices,
          counter-notifications, court decisions, retractions, patterns of
          conduct, and other relevant circumstances. We may reject attempts to
          manipulate or abuse the reporting process.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Misrepresentation and abuse">
        <p>
          Under 17 U.S.C. § 512(f), a person who knowingly materially
          misrepresents that material is infringing, or that material was
          removed by mistake or misidentification, may be liable for damages.
          Fraudulent, abusive, automated, or bad-faith reports may be rejected
          and may result in account or legal action.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Notices outside the United States">
        <p>
          Rights owners outside the United States may use the same contact and
          should identify the country, legal right, exact material, basis for
          the claim, and requested action. VdoHide may process a report under
          applicable local law, the DMCA procedure, or another appropriate
          process.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Designated-agent status">
        <LegalCallout>
          Publishing an email address alone does not complete a U.S. DMCA agent
          designation. Eligibility for the safe-harbor limitations in 17 U.S.C.
          § 512 may require VdoHide&apos;s operator to publish the agent&apos;s
          full registered name, physical address, telephone number, and email,
          and to register and maintain the same information with the U.S.
          Copyright Office. This Policy does not represent that those conditions
          have already been completed.
        </LegalCallout>
        <p>
          Until full registered details are published here, {LEGAL_EMAIL} is
          VdoHide&apos;s operational contact for copyright reports. The operator
          should not describe this address as a registered designated agent
          unless registration is current and the public details match the
          Copyright Office directory.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Contact">
        <p>
          Use a clear subject line such as &quot;DMCA Takedown Notice&quot; or
          &quot;DMCA Counter-Notification.&quot; Submitting duplicate messages
          can delay review.
        </p>
        <LegalContact subject="Copyright inquiry" />
      </LegalSection>
    </LegalDocument>
  )
}
