"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, useState } from "react";
import { FiCheckCircle, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const contactDetails = [
  {
    icon: FiMail,
    label: "Email",
    value: "rccgyp1@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone number",
    value: "+234 810 000 0000",
  },
  {
    icon: FiMapPin,
    label: "Address",
    value:
      "RCCG Jesus Palace, 30 Rafiu Babatunde Tinubu Way, Apple Junction, Amuwo-Odofin, Lagos, Nigeria",
  },
];

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-[#FAFAFC] px-4 py-3 text-[#0B0B12] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#4C6EFE] focus:bg-white focus:ring-4 focus:ring-[#4C6EFE]/10";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto flex w-full flex-col items-start justify-between gap-12 p-6 lg:flex-row">
      {/* Left Side - Contact Info */}
      <div className="w-full space-y-6 lg:w-[42%]">
        {contactDetails.map((detail, i) => (
          <Reveal key={detail.label} delay={i * 0.08}>
            <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4C6EFE] to-[#7C5CFC] text-white">
                <detail.icon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {detail.label}
                </h3>
                <p className="mt-1 text-[#0B0B12]">{detail.value}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Right Side - Form */}
      <Reveal delay={0.2} className="w-full lg:w-[54%]">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl md:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <FiCheckCircle size={48} className="text-[#4C6EFE]" />
                <h3 className="mt-4 text-xl font-bold text-[#0B0B12]">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-xs text-gray-600">
                  Thanks for reaching out. Our team will get back to you
                  shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      First name
                    </label>
                    <input type="text" required className={inputClasses} />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Last name
                    </label>
                    <input type="text" required className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </label>
                  <input type="email" required className={inputClasses} />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Phone number
                  </label>
                  <input type="text" className={inputClasses} />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className={inputClasses + " resize-none"}
                  />
                </div>

                <Button type="submit" className="w-full justify-center">
                  Send message
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactForm;
