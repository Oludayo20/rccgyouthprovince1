import classNames from "classnames";

interface GradientOrbsProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function GradientOrbs({
  className,
  variant = "light",
}: GradientOrbsProps) {
  return (
    <div
      aria-hidden
      className={classNames(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={classNames(
          "absolute -top-24 -left-20 w-[26rem] h-[26rem] rounded-full blur-[110px]",
          variant === "light" ? "bg-[#4C6EFE]/20" : "bg-[#4C6EFE]/30"
        )}
      />
      <div
        className={classNames(
          "absolute top-1/4 -right-24 w-[24rem] h-[24rem] rounded-full blur-[110px]",
          variant === "light" ? "bg-[#FEC340]/25" : "bg-[#FEC340]/20"
        )}
      />
      <div
        className={classNames(
          "absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full blur-[110px]",
          variant === "light" ? "bg-[#7C5CFC]/15" : "bg-[#7C5CFC]/25"
        )}
      />
    </div>
  );
}
