import type { Metadata } from "next";
import BlogContent from "../../components/blog/BlogContent";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Read the latest news, announcements, and events from RCCG Youth Province 1 (YP1), hosted at RCCG Jesus Palace in Amuwo-Odofin, Lagos.",
  keywords: [
    "RCCG YP1 news",
    "RCCG YP1 events",
    "RCCG Jesus Palace updates",
    "RCCG youth church blog",
  ],
  path: "/blog",
});

export default function Page() {
  return <BlogContent />;
}
