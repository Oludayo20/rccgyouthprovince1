import type { Metadata } from "next";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
} from "./site";

interface PageMetadataInput {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS]));

  return {
    // Home's title already contains the site name, so it bypasses the root
    // layout's title template instead of doubling up ("X | Y | Y").
    title: title.includes(SITE_NAME) ? { absolute: title } : title,
    description,
    keywords: allKeywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      description,
      url,
      locale: "en_NG",
      images: [{ url: image, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      description,
      images: [image],
    },
  };
}
