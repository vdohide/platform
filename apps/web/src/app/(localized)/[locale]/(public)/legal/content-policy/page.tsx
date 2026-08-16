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
    pathname: "/legal/content-policy",
    title: "Content Policy | VdoHide",
    description:
      "Rules for content hosted on VdoHide, including adult content, consent, age, copyright, safety, and prohibited material.",
  })
}

export default function ContentPolicyPage() {
  return (
    <LegalDocument
      eyebrow="Content Policy"
      title="Clear boundaries for every upload."
      description="VdoHide can host lawful adult content, but every upload must respect age, consent, copyright, safety, and the laws that apply to the uploader, viewers, and VdoHide."
    >
      <LegalCallout tone="important">
        Adult content is not automatically prohibited. It is allowed only when
        every depicted person is an adult, participation and distribution are
        consensual, the uploader holds all necessary rights, the content is
        properly restricted, and the activity is lawful. Content involving
        minors, exploitation, non-consensual sexual material, or copyright
        piracy is prohibited.
      </LegalCallout>

      <LegalSection number="01" title="Scope of this Policy">
        <p>
          This Policy applies to videos, audio, live or recorded streams,
          thumbnails, previews, captions, titles, metadata, links, domains, API
          activity, and other material uploaded to or delivered through VdoHide.
          It forms part of the{" "}
          <Link
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href="/legal/terms"
          >
            Terms of Service
          </Link>
          .
        </p>
        <p>
          Uploaders are responsible for evaluating the laws that apply where
          they operate and where their content is made available. A plan,
          payment, privacy setting, or successful upload does not mean VdoHide
          has reviewed or approved the content.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Conditions for adult content">
        <p>
          Sexually explicit or adult-oriented content may be hosted only when
          all of the following conditions are satisfied:
        </p>
        <LegalList>
          <LegalListItem>
            every person depicted was at least 18 years old and had reached the
            legal age required in the place of production when the content was
            created;
          </LegalListItem>
          <LegalListItem>
            every person gave informed, voluntary, and specific consent to the
            acts depicted, recording, publication, and forms of distribution
            being used;
          </LegalListItem>
          <LegalListItem>
            consent has not been withdrawn where withdrawal creates a legal
            obligation to stop distribution, and no contractual or legal
            restriction prohibits the upload;
          </LegalListItem>
          <LegalListItem>
            the uploader owns the content or holds valid licenses covering
            hosting, transcoding, public performance, display, and online
            distribution;
          </LegalListItem>
          <LegalListItem>
            the content is labeled accurately as adult material and protected by
            the age, geographic, domain, visibility, and access controls
            required by applicable law and this Policy;
          </LegalListItem>
          <LegalListItem>
            the producer and uploader maintain age, identity, consent, model
            release, and recordkeeping documentation required by law.
          </LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection number="03" title="Age, identity, and consent records">
        <p>
          VdoHide may require an uploader to provide evidence of identity,
          ownership or license, performer age, consent, release terms, and any
          legally required records before or after content is made available.
          Failure to provide reliable evidence within the requested period may
          result in restriction or removal.
        </p>
        <p>
          Producers subject to 18 U.S.C. §§ 2257–2257A or similar laws are
          responsible for required age verification, records, labeling, and
          inspections. VdoHide does not assume those producer obligations by
          hosting content.
        </p>
        <LegalCallout>
          Do not email copies of identity documents, performer records, or other
          highly sensitive information unless VdoHide has specifically requested
          them through an authorized secure process. A normal support or legal
          email may not be appropriate for identity documents.
        </LegalCallout>
      </LegalSection>

      <LegalSection
        number="04"
        title="Prohibited sexual and exploitative content"
      >
        <p>
          The following content or activity is prohibited without exception:
        </p>
        <LegalList>
          <LegalListItem>
            child sexual abuse material (CSAM), sexualized material involving a
            minor, grooming, enticement, or any content that exploits or
            endangers a child;
          </LegalListItem>
          <LegalListItem>
            content presented as depicting a minor in a sexual context,
            including sexualized age-play, school-child framing, or misleading
            age labels intended to portray an adult performer as a child;
          </LegalListItem>
          <LegalListItem>
            non-consensual intimate imagery, hidden-camera or voyeuristic
            material, stolen private recordings, sexual extortion, or content
            published beyond the consent given by a depicted person;
          </LegalListItem>
          <LegalListItem>
            sexual deepfakes, face swaps, synthetic likenesses, or manipulated
            intimate material made or distributed without the depicted
            person&apos;s verifiable permission;
          </LegalListItem>
          <LegalListItem>
            sexual violence presented as real, trafficking, coercion,
            incapacitation, exploitation, or material that promotes or
            facilitates those acts;
          </LegalListItem>
          <LegalListItem>
            bestiality, necrophilia, extreme physical harm, or other sexual
            material prohibited by applicable law;
          </LegalListItem>
          <LegalListItem>
            disclosure of a depicted person&apos;s identity, address, contact
            information, or other sensitive information without lawful basis and
            permission.
          </LegalListItem>
        </LegalList>
        <p>
          Claims that a depicted person is 18 or that a scene is fictional do
          not prevent action where the content, context, metadata, or available
          evidence creates a reasonable safety or legal concern.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Copyrighted films, clips, and JAV">
        <p>
          Commercial adult films, including JAV titles, are protected by
          copyright in the same way as other films. You may upload a complete
          movie, scene, compilation, trailer, or clip only when you own the
          relevant rights, have a license that permits online hosting and
          streaming, or the use is otherwise lawful.
        </p>
        <p>
          Purchasing a video, paying for a subscription, possessing a physical
          copy, finding a file online, removing a watermark, translating a
          title, or crediting the studio does not by itself grant redistribution
          rights. Re-encoding, cropping, mirroring, or dividing a film into
          parts does not avoid this rule.
        </p>
        <p>
          VdoHide may remove reported or apparently infringing content and take
          action against repeat infringers. Copyright owners and uploaders can
          use the notice and counter-notification process in the{" "}
          <Link
            className="font-semibold text-[var(--m-text)] underline underline-offset-4"
            href="/legal/dmca"
          >
            DMCA & Copyright Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection number="06" title="Labels and access controls">
        <p>
          Adult material must be labeled accurately before it is published or
          embedded. Uploaders must use available age gates, privacy settings,
          domain restrictions, geographic controls, and other safeguards where
          required. Explicit previews or thumbnails must not be placed in a
          general-audience context where viewers would encounter them without
          warning.
        </p>
        <p>
          Uploaders may not disguise adult content with misleading metadata,
          place it in a non-adult category to avoid controls, expose it through
          an unrestricted embed when restrictions are required, or attempt to
          bypass a VdoHide safety measure.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Reports, safety, and preservation">
        <p>
          Reports should include the exact video or embed URL, the nature of the
          concern, relevant timestamps, and enough information for VdoHide to
          evaluate it. Do not download, copy, or forward suspected CSAM or other
          illegal material in order to report it; provide the location and
          surrounding information instead.
        </p>
        <p>
          VdoHide may restrict access while reviewing a report, preserve
          relevant account and technical records, and report information to
          competent authorities or designated reporting organizations when
          required or permitted by law. Emergency or child-safety reports may be
          handled without advance notice to the account holder.
        </p>
        <LegalContact subject="Content safety report" />
      </LegalSection>

      <LegalSection number="08" title="Moderation and enforcement">
        <p>
          VdoHide may use reports, trusted notices, hashes, automated signals,
          metadata, technical evidence, and human review to enforce this Policy.
          We do not undertake a general obligation to monitor every upload, and
          the absence of immediate action does not mean content is permitted.
        </p>
        <p>
          Depending on severity, history, and risk, action may include a
          warning, age or geographic restriction, disabling embeds, suspending
          processing or delivery, removing content, preserving evidence,
          limiting account features, or suspending or terminating accounts.
          Severe child-safety, exploitation, or non-consensual-content
          violations may result in immediate permanent termination.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Appeals">
        <p>
          An account holder may appeal an enforcement decision by identifying
          the affected content, explaining why the decision was incorrect, and
          providing reliable rights, age, consent, or contextual evidence.
          VdoHide may decline repetitive, abusive, fraudulent, or legally
          prohibited appeals.
        </p>
        <p>
          An appeal does not automatically restore content and does not replace
          the statutory DMCA counter-notification process for copyright claims.
        </p>
        <LegalContact subject="Content policy appeal" />
      </LegalSection>

      <LegalSection number="10" title="Responsibility and changes">
        <p>
          Uploaders remain responsible for their content, records, viewers,
          access configuration, and legal compliance. VdoHide&apos;s review,
          restriction, or failure to detect a violation does not certify the
          content as lawful and does not transfer the uploader&apos;s
          obligations to VdoHide. The disclaimers and liability limits in the
          Terms of Service apply to enforcement under this Policy to the extent
          permitted by law.
        </p>
        <p>
          We may update this Policy as law, safety practices, or the Service
          changes. Material changes will be communicated by a reasonable method
          where appropriate.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Contact">
        <p>
          Use the contact below for policy questions, non-emergency safety
          reports, or appeals. Copyright notices should follow the DMCA &
          Copyright Policy. If someone is in immediate danger, contact the
          appropriate local emergency or law-enforcement service first.
        </p>
        <LegalContact subject="Content Policy inquiry" />
      </LegalSection>
    </LegalDocument>
  )
}
