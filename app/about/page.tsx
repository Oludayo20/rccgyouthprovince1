import type { Metadata } from "next";
import AboutContent from "../../components/about/AboutContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about RCCG Youth Province 1 (YP1) — our vision, mission, and history, led by Pastor Oluwagbemileke (Leke) Adeboye, Provincial Pastor of YP1 and PSF Coordinator Worldwide.",
  keywords: [
    "about RCCG Youth Province 1",
    "RCCG YP1 vision and mission",
    "Pastor Oluwagbemileke Adeboye",
    "Pastor Leke Adeboye YP1",
    "RCCG Jesus Palace history",
  ],
  path: "/about",
});

export default function Page() {
  return <AboutContent />;
}
