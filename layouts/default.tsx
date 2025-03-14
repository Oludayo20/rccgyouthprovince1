import Head from "next/head";
import { PropsWithChildren } from "react";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>YP1 - RCCG Youth Province 1</title>
        <meta
          name="description"
          content="YP1 is a youth ministry of RCCG Youth Province 1, a church based in Lagos, Nigeria."
        />
        <link rel="icon" href="/images/YP1-Logo-1.png" />
      </Head>
      {children}
    </>
  );
}
