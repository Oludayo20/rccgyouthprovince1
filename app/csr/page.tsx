import type { Metadata } from "next";
import CsrContent from "../../components/csr/CsrContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Social Responsibility",
  description:
    "See how RCCG Youth Province 1 (YP1) gives back through outreach and scholarship programs, including the YP1 JAMB Sponsorship & Scholarship initiative for students in Amuwo-Odofin, Lagos.",
  keywords: [
    "RCCG YP1 CSR",
    "YP1 JAMB scholarship",
    "RCCG youth outreach Lagos",
    "community outreach Amuwo-Odofin",
    "church scholarship Nigeria",
  ],
  path: "/csr",
});

export default function Page() {
  return <CsrContent />;
}
