import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-white text-black pt-1 flex flex-col justify-between"
    >
      <div className="flex-grow flex flex-col justify-center items-center px-20">
        <div className="masker">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-4xl  lg:text-7xl text-center leading-none font-['Founders_Grotesk_Text']"
          >
            Hello.
          </motion.h1>
        </div>
        <div className="masker mt-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-6xl lg:text-9xl text-center leading-none font-['Founders_Grotesk_Text']"
          >
            Sahil Ambre.
          </motion.h1>
        </div>
        <div className="masker mt-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-3xl lg:text-6xl text-center leading-none font-['Founders_Grotesk_Text']"
          >
            Software Developer
          </motion.h1>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-100 py-10">
        <ul className="flex justify-evenly w-full max-w-lg mx-auto py-5">
          <li className="flex items-center gap-2">
            LinkedIn
            <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
              <FaArrowUp />
            </span>
          </li>
          <li className="flex items-center gap-2">
            Github
            <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
              <FaArrowUp />
            </span>
          </li>
          <li className="flex items-center gap-2">
            Twitter
            <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
              <FaArrowUp />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
