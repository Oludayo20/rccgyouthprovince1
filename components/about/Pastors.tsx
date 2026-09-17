"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pastors } from "../../data/pastors";
import SectionHeading from "../ui/SectionHeading";
import { staggerContainer, staggerItem } from "../ui/motion";

const Pastors: React.FC = () => {
  return (
    <div>
      <SectionHeading label="Leadership" title="Meet Our Pastor" align="center" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer()}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {pastors.map((pst) => (
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group relative w-full max-w-sm mx-auto overflow-hidden rounded-[2rem] border border-black/5 shadow-lg"
            key={pst.id}
          >
            <Image
              src={pst.pic}
              alt={pst.name}
              width={480}
              height={560}
              className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="text-lg font-bold">{pst.name}</h3>
              <p className="mt-1 text-sm text-white/80">{pst.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pastors;
