import classNames from "classnames";
import { ReactNode } from "react";
import GradientOrbs from "../ui/GradientOrbs";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export default function PageHero({
  kicker,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <div
      className={classNames(
        "relative overflow-hidden px-6 pt-36 pb-16 text-center md:pt-44 md:pb-24",
        className
      )}
    >
      <GradientOrbs />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-[#0B0B12] md:text-[4rem]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.3} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </div>
  );
}
