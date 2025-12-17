import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../components/app/Navbar";
import { accountDetails } from "../../data/accoutDetails";
import ViewerLayout from "../../layouts/viewer";
import { NextPageWithLayout } from "../../types/app";

const Give: NextPageWithLayout = () => {
  const containerRef = useRef(null);
  const bankRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const accountVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        delay: i * 0.1, // Sequential delay based on index
      },
    }),
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/blue-bg.png')`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "100vh",
      }}
      ref={containerRef}
      id="give"
      className="h-full py-14 relative flex flex-col text-white md:py-12 lg:py-28 px-8 font-satoshi md:space-x-16"
    >
      <div
        onClick={goBack}
        className="text-white font-bold flex items-center space-x-4 cursor-pointer mt-8 md:mt-0"
      >
        <BiArrowBack size={24} />
        <h1 className="text-white">Go Back</h1>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative flex flex-col items-center justify-center"
      >
        <motion.h1
          variants={headerVariants}
          className="font-bold text-[32px] md:text-[42px] xs:text-[31px] sm:text-[34px] lg:text-[44px]"
        >
          Pay your tithes, Offerings and more!
        </motion.h1>
        <motion.p
          variants={headerVariants}
          className="md:mt-8 mt-4 text-[16px] md:text-[18px]"
        >
          Give according to what you are led to give in obedience to God&apos;s
          word.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="lg:mt-24 mt-10 xs:mt-18 px-0 lg:px-0 md:w-[32rem] h-[30rem] w-[16rem] lg:h-full lg:w-[70vw] xl:w-[60vw] grid grid-rows-6 grid-flow-col md:gap-10 lg:grid-rows-3 lg:grid-flow-col lg:gap-y-16 gap-y-3 gap-x-10 xs:gap-y-10 sm:gap-y-9 xs:gap-x-32 sm:gap-x-44 md:gap-x-44 mb-0"
      >
        {accountDetails.map((account, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={accountVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-start"
          >
            <div className="flex md:w-[15rem] md:h-[3rem] w-[10rem] h-[3rem] items-center">
              <p className="uppercase font-semibold text-[#FEC340] text-[11.7px] lg:text-[18.53px] xs:text-[15px] sm:text-[17px]">
                {account.name}
              </p>
            </div>
            <p className="text-[22.82px] lg:text-[46.13px] xs:text-[27px] sm:text-[30px] font-bold">
              {account.accountNumber}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        ref={bankRef}
        // style={{
        //   y,
        //   rotate: rotation,
        //   filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))",
        // }}
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{
        //   opacity: 1,
        //   scale: 1,
        //   transition: {
        //     duration: 0.8,
        //     ease: "easeOut",
        //   },
        // }}
        className="absolute bottom-[-1.3rem] lg:bottom-[7.5rem] md:bottom-[3.7rem] sm:bottom-[0.5rem] lg:right-24 right-[-0.3rem] lg:w-[351px] lg:h-[379] md:w-[301px] md:h-[309] w-[210px] h-[247px] sm:w-[260px] sm:h-[260px]"
      >
        <motion.div
        // animate={{
        //   y: [0, -10, 0],
        //   rotate: [-2, 2, -2],
        // }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 5,
        //   ease: "easeInOut",
        // }}
        >
          <Image
            src="/images/Bank.png"
            alt="Bank Icon"
            width={419}
            height={20}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

Give.getLayout = (page) => (
  <ViewerLayout navbar={<Navbar />}>{page}</ViewerLayout>
);

export default Give;
