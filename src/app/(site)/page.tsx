import type { Metadata } from "next";
import { Deploy } from "@/components/deploy";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LatestChanges } from "@/components/latest-changes";
import { SourceCode } from "@/components/source-code";
import {
  LICENSE_URL,
  OPEN_GRAPH_BASE,
  REPOSITORY_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...OPEN_GRAPH_BASE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

// Structured data for search engines: the site itself and the app it
// presents. Every value restates something the page already says.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "cs",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "cs",
      license: LICENSE_URL,
      sameAs: REPOSITORY_URL,
      screenshot: `${SITE_URL}/screenshots/board.png`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "CZK" },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        // "<" is escaped so the JSON can never close the script element.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      {/* The hero is white; the sections below alternate between two dark
          greys with light text. */}
      <Hero />
      <Features />
      <Deploy />
      <SourceCode />
      <LatestChanges />
    </main>
  );
}
