import classNames from "classnames";
import { HTMLProps, MouseEventHandler } from "react";

interface HeroProps extends HTMLProps<HTMLDivElement> {
  onScroll?: () => void;
}

export default function HeroSection({
  onScroll,
  className,
  ...rest
}: HeroProps) {
  const onEntered: MouseEventHandler<HTMLDivElement> = () => {
    if (onScroll) onScroll();
  };

  return (
    <div
      id="hero"
      onMouseEnter={onEntered}
      className={classNames(
        "relative w-full overflow-hidden py-24 md:py-48 h-screen",
        className
      )}
      {...rest}
    >
      {/* Background Image */}
      <div
        className="absolute w-full left-0 top-0 h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      ></div>

      <div className="relative z-10 mx-auto items-center justify-center text-center py-16 md:py-0">
        <h1 className="md:text-[7rem] text-[4rem] text-white font-bold">
          Leading The Future Now
        </h1>
      </div>
    </div>
  );
}
