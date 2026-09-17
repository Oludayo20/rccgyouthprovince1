"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiHeart, FiLifeBuoy, FiShield, FiSmile } from "react-icons/fi";
import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import Button from "../ui/Button";
import { staggerContainer, staggerItem } from "../ui/motion";
import ViewerLayout from "../../layouts/viewer";
import { communities } from "../../data/communities";

const icons: Record<string, IconType> = {
  "good-women": FiHeart,
  "excellent-men": FiShield,
  children: FiSmile,
  "christcare-welfare": FiLifeBuoy,
};

export default function CommunitiesContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="Belong"
          title={
            <>
              Find your{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                community
              </span>{" "}
              at YP1
            </>
          }
          description="RCCG Youth Province 1 is made up of several fellowships and community groups that help members grow in faith, find support, and serve together."
        />

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer()}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {communities.map((community) => {
              const Icon = icons[community.id] ?? FiHeart;
              return (
                <motion.div
                  key={community.id}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-black/5 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0B0B12]">
                    {community.name}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {community.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] px-8 py-14 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Want to join a community?
            </h3>
            <p className="mt-3 max-w-lg text-white/80">
              Let&apos;s help you find where you belong. Reach out and
              we&apos;ll connect you with a fellowship near you.
            </p>
            <Button
              href="/contact"
              variant="outline"
              className="mt-8 !border-white !text-white hover:!text-white hover:!bg-white/10"
            >
              Get in touch
            </Button>
          </div>
        </section>
      </div>
    </ViewerLayout>
  );
}
