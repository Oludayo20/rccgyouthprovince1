import type { Metadata } from "next";
import OurChurchesContent from "../../components/our-churches/OurChurchesContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Churches",
  description:
    "RCCG Youth Province 1 (YP1) is made up of 60+ parishes led by Pastor Oluwagbemileke (Leke) Adeboye, with our provincial headquarters at RCCG Jesus Palace in Amuwo-Odofin, Lagos.",
  keywords: [
    "RCCG YP1 parishes",
    "RCCG churches near me",
    "RCCG Jesus Palace",
    "RCCG church locator Lagos",
    "RCCG Youth Province 1 headquarters",
  ],
  path: "/our-churches",
});

export default function Page() {
  return <OurChurchesContent />;
}
