import classNames from "classnames";
import Head from "next/head";
import AppFooter from "../components/app/AppFooter";
import NotFound from "../components/app/NotFound";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>SetMaker - Page Not Found</title>
      </Head>
      <div
        className={classNames(
          "min-h-screen",
          "max-w-xl",
          "mx-auto",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "p-4"
        )}
      >
        <NotFound />
        <AppFooter />
      </div>
    </>
  );
}
