import Head from "next/head";
import { PropsWithChildren, ReactNode } from "react";
import AppFooter from "../components/app/Footer";

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
        <link rel="icon" href="/img/icon-logo.png" />
      </Head>

      <div className="relative min-h-screen w-screen flex flex-col gap-4">
        {navbar}

        {children}
        <AppFooter />
      </div>
    </>
  );
}
