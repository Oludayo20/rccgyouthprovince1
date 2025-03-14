import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Footer from "../components/app/Footer";
import Navbar from "../components/app/Navbar";
import DetailsSection from "../components/home/DetailsSection";
import EventsSection from "../components/home/EventsSection";
import GiveSection from "../components/home/GiveSection";
import HeroSection from "../components/home/HeroSection";
import NewsLetter from "../components/home/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
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
