import type { Metadata } from "next";
import JsonLd from "../components/app/JsonLd";
import HomeContent from "../components/home/HomeContent";
import { churchJsonLd, websiteJsonLd } from "../data/structuredData";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "RCCG Youth Province 1 (YP1) | Youth Church in Amuwo-Odofin, Lagos",
  description:
    "RCCG Youth Province 1 (YP1) is a vibrant youth church community hosted at RCCG Jesus Palace in Amuwo-Odofin, Lagos. Join our worship services, PSF Worldwide programs, and outreach initiatives for young people.",
  keywords: [
    "RCCG church Amuwo-Odofin",
    "youth church near me Lagos",
    "RCCG Jesus Palace service times",
    "join RCCG youth ministry",
  ],
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={[churchJsonLd, websiteJsonLd]} />
      <HomeContent />
    </>
  );
}
