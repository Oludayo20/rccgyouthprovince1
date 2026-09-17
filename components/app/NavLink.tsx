"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  linkColor?: boolean;
  fullWidth?: boolean;
  current: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className,
  onClick,
  linkColor = false,
  fullWidth = false,
  current = false,
}) => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const isActive = current || pathname === href;
  const showPill = isActive || hovered;

  return (
    <div
      className={classNames(
        "relative flex items-center justify-center",
        fullWidth && "w-full",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {showPill && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={classNames(
              "absolute inset-0",
              fullWidth ? "rounded-xl" : "rounded-full",
              isActive
                ? "bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] shadow-md shadow-[#4C6EFE]/30"
                : linkColor
                ? "bg-black/5"
                : "bg-white/15"
            )}
          />
        )}
      </AnimatePresence>

      <Link
        href={href}
        onClick={onClick}
        className={classNames(
          "relative z-10 font-semibold text-sm transition-colors duration-200",
          fullWidth ? "block w-full px-4 py-3" : "px-5 py-2.5",
          isActive
            ? "text-white"
            : linkColor
            ? "text-[#0B0B12]/80 hover:text-[#0B0B12]"
            : "text-white/80 hover:text-white"
        )}
      >
        {label}
      </Link>
    </div>
  );
};
