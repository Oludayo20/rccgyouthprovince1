"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  align?: "left" | "center";
}

export default function Stat({
  value,
  suffix = "",
  label,
  align = "left",
}: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className={align === "center" ? "text-center" : "text-left"}>
      <span className="block bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="mt-2 block text-sm uppercase tracking-wide text-gray-500">
        {label}
      </span>
    </div>
  );
}
