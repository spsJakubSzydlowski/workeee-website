// Public origin of this site, without a trailing slash. Canonical URLs, the
// sitemap, robots.txt and social previews are all built from it.
//
// Set NEXT_PUBLIC_SITE_URL to the production domain. Without it, a Vercel
// deployment falls back to the project's production domain and local
// development to localhost.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000")
).replace(/\/+$/, "");

export const SITE_NAME = "Workeee";

export const SITE_TITLE = "Workeee: projekty a úkoly pro tým";

export const SITE_DESCRIPTION =
  "Týmová nástěnka s projekty, úkoly, komentáři a přílohami. Open source pod licencí MIT, nasadíte ji na vlastní Convex a Vercel a za členy týmu neplatíte.";

export const REPOSITORY_URL = "https://github.com/Mixer159/Workeee";

export const LICENSE_URL = `${REPOSITORY_URL}/blob/main/LICENSE`;

// Preview image for shared links, 1200x630, served from public/.
export const SOCIAL_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Workeee: týmová nástěnka, která běží u vás",
};

// Open Graph fields shared by every page. A page's own openGraph object
// replaces the inherited one as a whole, image included, so pages spread
// this in.
export const OPEN_GRAPH_BASE = {
  type: "website",
  locale: "cs_CZ",
  siteName: SITE_NAME,
  images: [SOCIAL_IMAGE],
};
