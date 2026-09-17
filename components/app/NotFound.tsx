"use client";

import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLProps } from "react";
import Button from "../ui/Button";
import GradientOrbs from "../ui/GradientOrbs";
import Reveal from "../ui/Reveal";

interface NotFoundProps extends HTMLProps<HTMLDivElement> {
  headline?: string;
  explanation?: string;
  onHome?: () => void;
}

export default function NotFound({
  headline = "Page not found",
  explanation = "Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.",
  onHome,
  className,
  ...rest
}: NotFoundProps) {
  const router = useRouter();
  if (!onHome) onHome = () => router.replace("/");

  return (
    <div
      className={classNames(
        "relative flex w-full flex-1 flex-col items-center justify-center gap-6 overflow-hidden px-6 py-20 text-center",
        className
      )}
      {...rest}
    >
      <GradientOrbs />

      <Reveal className="relative z-10">
        <Image
          src="/images/logo-main.png"
          alt="YP1"
          width={80}
          height={80}
          className="mx-auto h-16 w-16 object-contain"
        />
      </Reveal>

      <Reveal delay={0.1} className="relative z-10">
        <span className="text-8xl font-extrabold bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent md:text-9xl">
          404
        </span>
      </Reveal>

      <Reveal delay={0.2} className="relative z-10 max-w-md">
        <h1 className="text-2xl font-bold text-[#0B0B12] md:text-3xl">
          {headline}
        </h1>
        <p className="mt-3 text-gray-600">{explanation}</p>
      </Reveal>

      <Reveal delay={0.3} className="relative z-10">
        <Button onClick={onHome}>Back to home</Button>
      </Reveal>
    </div>
  );
}
