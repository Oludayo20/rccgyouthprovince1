"use client";

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import Navbar from "../app/Navbar";
import PageHero from "../app/PageHero";
import Button from "../ui/Button";
import Kicker from "../ui/Kicker";
import Reveal from "../ui/Reveal";
import ViewerLayout from "../../layouts/viewer";
import { events } from "../../data/event";

const jambInitiative = events.find((event) => event.id === "2");

export default function CsrContent() {
  return (
    <ViewerLayout navbar={<Navbar linkColor={true} />}>
      <div className="bg-[#FAFAFC]">
        <PageHero
          kicker="CSR"
          title={
            <>
              Impact beyond{" "}
              <span className="bg-gradient-to-r from-[#4C6EFE] to-[#7C5CFC] bg-clip-text text-transparent">
                the walls
              </span>{" "}
              of the church
            </>
          }
          description="As part of our commitment to societal impact, YP1 runs outreach initiatives that support young people and families in Amuwo-Odofin and its surrounding communities."
        />

        {jambInitiative && (
          <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <Reveal className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-xl">
                  <Image
                    src={jambInitiative.image}
                    alt={jambInitiative.title}
                    width={640}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className="w-full lg:w-1/2">
                <Kicker>Flagship program</Kicker>
                <h2 className="mt-4 text-2xl font-bold text-[#0B0B12] md:text-4xl">
                  {jambInitiative.title}
                </h2>
                <p className="mt-5 leading-relaxed text-gray-600">
                  {jambInitiative.description}
                </p>
              </Reveal>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-6 pb-24">
          <Reveal className="flex flex-col items-center rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] text-white">
              <FiHeart size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#0B0B12] md:text-2xl">
              More outreach on the way
            </h3>
            <p className="mt-3 max-w-lg text-gray-600">
              More outreach and social impact programs will be published here
              as they launch. If you&apos;d like to partner with us or
              benefit from an upcoming initiative, reach out to us.
            </p>
            <Button href="/contact" className="mt-8">
              Contact us
            </Button>
          </Reveal>
        </section>
      </div>
    </ViewerLayout>
  );
}
