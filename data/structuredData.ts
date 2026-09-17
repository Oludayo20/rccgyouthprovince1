import { DEFAULT_OG_IMAGE, SITE_URL } from "../lib/site";

export const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "RCCG Jesus Palace",
  alternateName: "RCCG Youth Province 1 (YP1)",
  description:
    "RCCG Jesus Palace is the provincial headquarters of RCCG Youth Province 1 (YP1), a youth-focused province of The Redeemed Christian Church of God based in Amuwo-Odofin, Lagos.",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: DEFAULT_OG_IMAGE,
  telephone: "+234-810-000-0000",
  email: "rccgyp1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Rafiu Babatunde Tinubu Way, Apple Junction",
    addressLocality: "Amuwo-Odofin",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  founder: {
    "@type": "Person",
    name: "Pastor Oluwagbemileke (Leke) Adeboye",
    jobTitle: "Provincial Pastor, YP1 / PSF Coordinator Worldwide",
  },
  sameAs: [
    "https://facebook.com/rccgyp1",
    "https://twitter.com/rccgyp1",
    "https://instagram.com/rccgyp1",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RCCG Youth Province 1 (YP1)",
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: "RCCG Youth Province 1",
  },
};
