import Head from "next/head";
import { PropsWithChildren, ReactNode } from "react";
import FooterAndNewsletter from "../components/app/FooterAndNewsletter";

interface ViewerLayoutProps extends PropsWithChildren {
  navbar?: ReactNode;
}

export default function ViewerLayout({ navbar, children }: ViewerLayoutProps) {
  return (
    <>
      <Head>
        <title>SetMaker - management interface</title>
        <meta
          name="description"
          content="Your imagination is limitless. Give it a new toolkit."
        />
        <link rel="icon" href="/images/logo-bg.png" />
        <meta property="og:image" content={`/images/logo-bg.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <div className="relative min-h-screen w-screen flex flex-col">
        {navbar}
        {children}
        <FooterAndNewsletter />
      </div>
    </>
  );
}
