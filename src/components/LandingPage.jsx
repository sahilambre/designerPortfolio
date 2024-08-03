import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#ff6347",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

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
            whileHover={{ scale: 1.1 }}
            className="text-4xl lg:text-6xl text-center leading-none font-['Founders_Grotesk_Text'] cursor-progress"
          >
            Hello
          </motion.h1>
        </div>
        <div className="masker mt-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            whileHover={{ scale: 1.2 }}
            className="text-6xl lg:text-9xl text-center leading-none font-['Founders_Grotesk_Text'] cursor-progress "
          >
            Sahil Ambre.
          </motion.h1>
        </div>
        <div className="masker mt-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            whileHover={{ scale: 1.1 }}
            className="text-3xl lg:text-6xl text-center leading-none font-['Founders_Grotesk_Text'] cursor-progress"
          >
            Software Developer
          </motion.h1>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-100 py-10">
        <ul className="flex justify-evenly w-full max-w-lg mx-auto py-5">
          <motion.li
            className="flex items-center gap-2"
            variants={linkVariants}
            whileHover="hover"
          >
            <a
              href="https://www.linkedin.com/in/sahilambre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              LinkedIn
              <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
                <FaArrowUp />
              </span>
            </a>
          </motion.li>
          <motion.li
            className="flex items-center gap-2"
            variants={linkVariants}
            whileHover="hover"
          >
            <a
              href="https://github.com/sahilambre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Github
              <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
                <FaArrowUp />
              </span>
            </a>
          </motion.li>
          <motion.li
            className="flex items-center gap-2"
            variants={linkVariants}
            whileHover="hover"
          >
            <a
              href="https://x.com/_sahilambre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              X
              <span className="rounded-full border-[1px] p-1 transform rotate-[45deg]">
                <FaArrowUp />
              </span>
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
