"use client";

import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  icon = true,
  className,
  type = "button",
}: ButtonProps) {
  const classes = classNames(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300",
    {
      "bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] text-white shadow-lg shadow-[#4C6EFE]/25 hover:shadow-[#4C6EFE]/40":
        variant === "primary",
      "border border-black/15 text-[#0B0B12] hover:border-[#4C6EFE] hover:text-[#4C6EFE]":
        variant === "outline",
      "text-[#4C6EFE] hover:text-[#7C5CFC]": variant === "ghost",
    },
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <FiArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
