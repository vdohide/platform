import { LandingPage } from "../_comp/landing-page";
import type { LocalizedPageProps } from "@/i18n/metadata";
import {
  createPageMetadata,
  getContentTranslator,
} from "@/i18n/metadata";

export const dynamic = "force-static";

const siteUrl = "https://vdohide.com";
const description =
  "Upload, transcode, and stream video with adaptive HLS, a global CDN, secure embeds, analytics, and a powerful API. Start free with VdoHide.";

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    pathname: "/",
    title: "Free Video Hosting & HLS Streaming | VdoHide",
    description,
    keywords: [
      "free video hosting",
      "HLS streaming",
      "video CDN",
      "private video hosting",
      "video embed",
      "video API",
    ],
  });
}

const faqs = [
  {
    question: "How quickly can I publish a video?",
    answer:
      "Upload a file or provide a remote URL. VdoHide processes it automatically and gives you a responsive embed as soon as the video is ready.",
  },
  {
    question: "Which video formats are supported?",
    answer:
      "You can upload common video formats and files up to 10 GB. They are converted into web-ready HLS streams with multiple quality levels.",
  },
  {
    question: "Can I use VdoHide on my own website?",
    answer:
      "Yes. Copy the responsive embed code into your site, or use a custom domain for a more fully branded playback experience.",
  },
  {
    question: "Is there an API for automated workflows?",
    answer:
      "Yes. The REST API supports uploads, file management, analytics, and webhook integrations for automated video workflows.",
  },
];

export default async function Page({ params }: LocalizedPageProps) {
  const { locale } = await params;
  const translate = await getContentTranslator(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "VdoHide",
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#application`,
        name: "VdoHide",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        url: siteUrl,
        description: translate(description),
        inLanguage: locale,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: translate(item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: translate(item.answer),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage faqs={faqs} />
    </>
  );
}
