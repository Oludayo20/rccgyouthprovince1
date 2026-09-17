import type { Metadata } from "next";
import classNames from "classnames";
import AppFooter from "../components/app/AppFooter";
import NotFound from "../components/app/NotFound";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "Sorry, we couldn't find the page you're looking for on the RCCG Youth Province 1 (YP1) website.",
  path: "/404",
  noindex: true,
});

export default function NotFoundPage() {
  return (
    <div
      className={classNames(
        "min-h-screen",
        "w-full",
        "bg-[#FAFAFC]",
        "flex",
        "flex-col",
        "items-center",
        "justify-center"
      )}
    >
      <NotFound />
      <AppFooter />
    </div>
  );
}
