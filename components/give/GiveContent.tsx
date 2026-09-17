"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import Navbar from "../app/Navbar";
import GradientOrbs from "../ui/GradientOrbs";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";
import { staggerContainer, staggerItem } from "../ui/motion";
import { accountDetails } from "../../data/accoutDetails";
import ViewerLayout from "../../layouts/viewer";

export default function GiveContent() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(accountNumber);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard access denied — silently ignore, number is still visible to copy manually.
    }
  };

  return (
    <ViewerLayout navbar={<Navbar />}>
      <div
        style={{
          backgroundImage: `url('/images/blue-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="give"
        className="relative min-h-screen w-full overflow-hidden text-white"
      >
        <GradientOrbs variant="dark" />

        <div className="relative z-10 flex flex-col items-center px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <Reveal>
            <Kicker light>Giving</Kicker>
          </Reveal>
          <Reveal delay={0.1} className="max-w-2xl text-center">
            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] md:text-[3.75rem]">
              Pay your tithes, offerings{" "}
              <span className="bg-gradient-to-r from-[#FEC340] to-white bg-clip-text text-transparent">
                and more
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md text-center text-white/80">
              Give according to what you are led to give in obedience to
              God&apos;s word&mdash;2 Corinthians 9:7.
            </p>
          </Reveal>

          {/* Bank showcase */}
          <Reveal delay={0.3} className="mt-14 w-full max-w-md">
            <div className="flex items-center gap-5 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <Image
                src="/images/Bank.png"
                alt="Bank transfer"
                width={72}
                height={72}
                className="h-16 w-16 flex-shrink-0 object-contain"
              />
              <div>
                <p className="font-semibold">Give by bank transfer</p>
                <p className="mt-1 text-sm text-white/70">
                  Tap any account below to copy the number
                </p>
              </div>
            </div>
          </Reveal>

          {/* Accounts grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer(0.06)}
            className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {accountDetails.map((account) => {
              const isCopied = copied === account.accountNumber;
              return (
                <motion.button
                  key={account.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleCopy(account.accountNumber)}
                  className="group flex flex-col items-start rounded-2xl border border-white/15 bg-white/[0.06] p-5 text-left backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 md:p-6"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FEC340] md:text-xs">
                      {account.name}
                    </p>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isCopied ? "check" : "copy"}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.15 }}
                        className="text-white/50 group-hover:text-white"
                      >
                        {isCopied ? (
                          <FiCheck size={16} />
                        ) : (
                          <FiCopy size={14} />
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <p className="mt-2 text-lg font-bold tracking-tight md:text-2xl">
                    {account.accountNumber}
                  </p>
                  <span className="mt-1 text-xs text-white/50">
                    {isCopied ? "Copied!" : "Tap to copy"}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </ViewerLayout>
  );
}
