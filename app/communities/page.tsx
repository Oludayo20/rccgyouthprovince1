import type { Metadata } from "next";
import CommunitiesContent from "../../components/communities/CommunitiesContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Communities & Fellowships",
  description:
    "Discover the fellowships and community groups at RCCG Youth Province 1 (YP1) — Good Women, Excellent Men, Children's Ministry, and Christcare/Welfare — and find where you belong.",
  keywords: [
    "RCCG YP1 fellowships",
    "RCCG Good Women Fellowship",
    "RCCG Excellent Men Fellowship",
    "RCCG Children's Ministry",
    "RCCG Christcare Welfare",
    "join a church community Lagos",
  ],
  path: "/communities",
});

export default function Page() {
  return <CommunitiesContent />;
}
