"use client";

import { useState } from "react";
import Footer from "../app/Footer";
import Navbar from "../app/Navbar";
import DetailsSection from "./DetailsSection";
import EventsSection from "./EventsSection";
import GiveSection from "./GiveSection";
import HeroSection from "./HeroSection";
import NewsLetter from "./Newsletter";

export default function HomeContent() {
  const [current, setCurrent] = useState("#");
  return (
    <div>
      <Navbar current={current} />

      <HeroSection onScroll={() => setCurrent("#hero")} />

      <DetailsSection onScroll={() => setCurrent("#about-us")} />

      <GiveSection onScroll={() => setCurrent("#give")} />

      <EventsSection onScroll={() => setCurrent("#events")} />

      <NewsLetter onScroll={() => setCurrent("#newsletter")} />

      <Footer />
    </div>
  );
}
