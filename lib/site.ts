export const SITE_URL = "https://rccgyp1.com";
export const SITE_NAME = "RCCG Youth Province 1";
export const SITE_SHORT_NAME = "YP1";
export const TWITTER_HANDLE = "@rccgyp1";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo-bg.png`;

export const DEFAULT_KEYWORDS = [
  "RCCG Youth Province 1",
  "RCCG YP1",
  "RCCG Jesus Palace",
  "youth church Lagos",
  "Amuwo-Odofin church",
  "Redeemed Christian Church of God youth",
  "PSF Worldwide",
  "Pastor Leke Adeboye",
  "Nigerian youth ministry",
];

export function absoluteUrl(path: string = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
