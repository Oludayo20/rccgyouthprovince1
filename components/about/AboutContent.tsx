"use client";

import Image from "next/image";
import { FiCompass, FiTarget, FiUsers } from "react-icons/fi";
import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Stat from "../ui/Stat";
import ViewerLayout from "../../layouts/viewer";
import Pastors from "./Pastors";

const pillars = [
  {
    icon: FiCompass,
    title: "Our Vision",
    copy: "To raise a generation of youth transformed by God's power—spiritually, mentally, and socially—to impact their world.",
  },
  {
    icon: FiTarget,
    title: "Our Mission",
    copy: "To ignite a deep, personal relationship with God among young people and empower them to discover their purpose.",
  },
  {
    icon: FiUsers,
    title: "Our Community",
    copy: "Dynamic gatherings, life-changing conferences, and outreach initiatives that build young people spiritually and socially.",
  },
];

export default function AboutContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="About YP1"
          title={
            <>
              Youths set out{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                on fire
              </span>{" "}
              for the Gospel
            </>
          }
          description="RCCG Youth Province 1 is a vibrant community of young, purpose-driven Christians committed to living for Christ and making a difference in the world."
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#pastors">Meet the Pastor</Button>
            <Button href="/communities" variant="outline">
              Join a Community
            </Button>
          </div>
        </PageHero>

        {/* Intro */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <Reveal className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-xl">
                <Image
                  src="/images/bus.png"
                  alt="YP1 outreach"
                  width={640}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="w-full lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6EFE]">
                Who we are
              </span>
              <h2 className="mt-4 text-2xl font-bold text-[#0B0B12] md:text-4xl">
                A movement of believers passionate about worship and purpose
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                RCCG Youth Province 1 (YP1) is a youth-focused province of The
                Redeemed Christian Church of God, headquartered at{" "}
                <span className="font-semibold text-[#0B0B12]">
                  RCCG Jesus Palace
                </span>
                , 30 Rafiu Babatunde Tinubu Way, Apple Junction, Amuwo-Odofin,
                Lagos. We are led by{" "}
                <span className="font-semibold text-[#0B0B12]">
                  Pastor Oluwagbemileke (Leke) Adeboye
                </span>
                , Provincial Pastor of YP1 and Coordinator of PSF
                (Pastors&apos; Seed Family) Worldwide.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/5 pt-8">
                <Stat value={60} suffix="+" label="Churches" />
                <Stat value={500} suffix="k+" label="Members" />
                <Stat value={16} suffix="" label="Years" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <SectionHeading
            label="What drives us"
            title="Vision, mission and community"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-black/5 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <pillar.icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0B0B12]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
            <Reveal className="w-full lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6EFE]">
                Our story
              </span>
              <h2 className="mt-4 text-2xl font-bold text-[#0B0B12] md:text-4xl">
                The first youth church of RCCG
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                YP1 is hosted at RCCG Jesus Palace (formerly known as RCCG
                Joseph&apos;s Palace) in Amuwo-Odofin, Lagos&mdash;recognised
                within the mission as the first youth church of The Redeemed
                Christian Church of God. From this base, YP1 has grown into a
                province of 60+ parishes, run under the RCCG PSF structure,
                and continues to host landmark services, conferences, and
                outreach programs for young people across Lagos and beyond.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-xl">
                <Image
                  src="/images/bus.png"
                  alt="YP1 outreach"
                  width={640}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="pastors"
          className="mx-auto max-w-6xl px-6 pb-24 scroll-mt-24"
        >
          <Pastors />
        </section>
      </div>
    </ViewerLayout>
  );
}
