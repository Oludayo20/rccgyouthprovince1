import type { Metadata } from "next";
import JsonLd from "../../components/app/JsonLd";
import ContactContent from "../../components/contact/ContactContent";
import { churchJsonLd } from "../../data/structuredData";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with RCCG Youth Province 1 (YP1). Visit us at RCCG Jesus Palace, 30 Rafiu Babatunde Tinubu Way, Apple Junction, Amuwo-Odofin, Lagos, or reach us by phone and email.",
  keywords: [
    "contact RCCG Youth Province 1",
    "RCCG Jesus Palace address",
    "RCCG church Amuwo-Odofin contact",
    "RCCG YP1 phone number",
  ],
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd data={churchJsonLd} />
      <ContactContent />
    </>
  );
}
