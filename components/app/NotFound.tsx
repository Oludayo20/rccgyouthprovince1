import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { HTMLProps } from "react";

interface NotFoundProps extends HTMLProps<HTMLDivElement> {
  headline?: string;
  explanation?: string;
  onPrev?: () => void;
  onHome?: () => void;
}

export default function NotFound({
  headline = "Not Found",
  explanation = "Sorry, we're not able to find the page you're looking for.",
  onPrev,
  onHome,
  className,
  ...rest
}: NotFoundProps) {
  const router = useRouter();
  if (!onPrev) onPrev = () => router.back();
  if (!onHome) onHome = () => router.replace("/");

  return (
    <div
      className={classNames(
        "flex",
        "w-full",
        "flex-1",
        "flex-col",
        "gap-4",
        "items-center",
        "justify-center",
        "text-center",
        className
      )}
      {...rest}
    >
      {/* Headline */}
      <div className="text-2xl md:text-3xl font-bold">{headline}</div>
      {/* Explanation */}
      <div>
        {explanation} You can go back to the{" "}
        <a
          className="font-semibold text-emerald-400 cursor-pointer"
          onClick={onPrev}
        >
          previous page
        </a>{" "}
        or go{" "}
        <a
          className="font-semibold text-emerald-400 cursor-pointer"
          onClick={onHome}
        >
          home
        </a>
        .
      </div>
      {/* Image */}
      <Image src="/img/404.png" alt="Not Found" width={576} height={576} />
    </div>
  );
}
