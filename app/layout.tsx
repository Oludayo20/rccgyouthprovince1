import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import "../styles/globals.css";
import { SITE_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} (YP1) | Youth Church in Amuwo-Odofin, Lagos`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "RCCG Youth Province 1 (YP1) is a youth-focused province of The Redeemed Christian Church of God, hosted at RCCG Jesus Palace in Amuwo-Odofin, Lagos.",
  icons: {
    icon: "/images/logo-bg.png",
    apple: "/images/logo-bg.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4C6EFE",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
