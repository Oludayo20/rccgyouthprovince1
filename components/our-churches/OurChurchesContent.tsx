"use client";

import { FiMapPin } from "react-icons/fi";
import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Stat from "../ui/Stat";
import ViewerLayout from "../../layouts/viewer";

export default function OurChurchesContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="Parishes"
          title={
            <>
              One province,{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                60+ churches
              </span>
            </>
          }
          description="RCCG Youth Province 1 is led by Pastor Oluwagbemileke (Leke) Adeboye, Provincial Pastor of YP1. Our provincial headquarters is RCCG Jesus Palace in Amuwo-Odofin, Lagos."
        />

        <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
          <Reveal className="grid grid-cols-2 gap-6 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:grid-cols-3 md:p-12">
            <Stat value={60} suffix="+" label="Churches" align="center" />
            <Stat value={500} suffix="k+" label="Members" align="center" />
            <Stat value={16} suffix="" label="Years" align="center" />
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#4C6EFE]/10 to-[#7C5CFC]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] text-white">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B0B12] md:text-2xl">
                    RCCG Jesus Palace
                  </h3>
                  <p className="mt-1 font-semibold text-[#4C6EFE]">
                    Provincial Headquarters, YP1
                  </p>
                  <p className="mt-3 text-gray-600">
                    30 Rafiu Babatunde Tinubu Way, Apple Junction,
                    Amuwo-Odofin, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl text-gray-600">
              A full, searchable directory of YP1 parishes is coming soon. In
              the meantime, reach out to us and we&apos;ll help you find a
              YP1 church near you.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Find a church near you</Button>
            </div>
          </Reveal>
        </section>
      </div>
    </ViewerLayout>
  );
}
