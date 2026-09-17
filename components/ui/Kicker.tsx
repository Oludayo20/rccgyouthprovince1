import classNames from "classnames";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function Kicker({ children, className, light }: KickerProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]",
        light
          ? "border-white/20 bg-white/10 text-white backdrop-blur-sm"
          : "border-black/10 bg-black/[0.03] text-[#4C6EFE]",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC]" />
      {children}
    </span>
  );
}
