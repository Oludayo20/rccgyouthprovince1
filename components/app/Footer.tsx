// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Logo and Social Media */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Youth Province 1"
                width={160}
                height={70}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">Youth Province 1</h2>

              <div className="flex space-x-2 pr-4 items-center">
                <Link
                  href="https://facebook.com/rccgyp1"
                  className="text-white"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link href="https://twitter.com/rccgyp1" className="text-white">
                  <FaTwitter size={20} />
                </Link>
                <Link
                  href="https://instagram.com/rccgyp1"
                  className="text-white"
                >
                  <FaInstagram size={20} />
                </Link>
                <p className="">@rccgyp1</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Go to Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Go to</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/home" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-gray-300">
                  Give
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Communities */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Communities</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/churches" className="hover:text-gray-300">
                  YP1 Churches near you
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Others */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Others</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/radio" className="hover:text-gray-300">
                  PSF Radio
                </Link>
              </li>
              <li>
                <Link href="/counselling" className="hover:text-gray-300">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/app" className="hover:text-gray-300">
                  PSF Mobile App
                </Link>
              </li>
              <li>
                <Link href="/stream" className="hover:text-gray-300">
                  Live Stream
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Contact Us */}
          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3" />
                <span>+234 810 000 0000</span>
              </li>
              <li className="flex items-start">
                <FaRegEnvelope className="mt-1 mr-3" />
                <span>rccgyp1@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 h-8 w-8" />
                <span>
                  YP1 HQ, 30 Rafiu Babatunde Tinubu way, Apple Junction,
                  Amuwo-Odofin, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#4C6EFE] py-2 text-center text-white text-sm">
        <p>©Copyright 2024, All Rights Reserved | Designed by YP1 Media</p>
      </div>
    </footer>
  );
};

export default Footer;
