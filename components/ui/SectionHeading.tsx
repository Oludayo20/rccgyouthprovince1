import classNames from "classnames";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={classNames(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6EFE]">
        {label}
      </span>
      <h2 className="text-2xl font-bold text-[#0B0B12] md:text-4xl">
        {title}
      </h2>
      <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#4C6EFE] to-[#FEC340]" />
    </Reveal>
  );
}
