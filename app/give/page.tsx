import type { Metadata } from "next";
import GiveContent from "../../components/give/GiveContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Give Online",
  description:
    "Support RCCG Youth Province 1 (YP1) through tithes, offerings, and donations via bank transfer. Give joyfully in obedience to God's word.",
  keywords: [
    "RCCG YP1 give online",
    "RCCG tithe and offering",
    "RCCG YP1 bank account",
    "give to RCCG Jesus Palace",
  ],
  path: "/give",
});

export default function Page() {
  return <GiveContent />;
}
