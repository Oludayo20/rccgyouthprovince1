"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import Reveal from "../ui/Reveal";
import { staggerContainer, staggerItem } from "../ui/motion";
import ViewerLayout from "../../layouts/viewer";
import { events } from "../../data/event";

const socials = [
  { icon: FiFacebook, href: "https://facebook.com/rccgyp1", label: "Facebook" },
  { icon: FiTwitter, href: "https://twitter.com/rccgyp1", label: "Twitter / X" },
  { icon: FiInstagram, href: "https://instagram.com/rccgyp1", label: "Instagram" },
];

export default function BlogContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="Blog"
          title={
            <>
              News and{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                updates
              </span>{" "}
              from YP1
            </>
          }
          description="We're building out our blog. In the meantime, here are our latest announcements and events."
        />

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer()}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {events.map((event) => (
              <motion.article
                key={event.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#4C6EFE]">
                    <FiCalendar size={14} />
                    {event.date}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#0B0B12]">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#4C6EFE] transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <FiArrowRight size={15} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <Reveal>
            <p className="text-gray-600">
              More articles are on the way. Follow us on social media for the
              latest news, sermons, and stories from YP1.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-[#4C6EFE] transition-all duration-300 hover:-translate-y-1 hover:border-[#4C6EFE] hover:bg-[#4C6EFE] hover:text-white"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </ViewerLayout>
  );
}
