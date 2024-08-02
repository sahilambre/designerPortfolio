import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 bg-yellow-300 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-yellow-500 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          className="text-[16vw] leading-none font-['Helvetica'] uppercase pt-10-mb-10 font-semibold pr-20"
        >
          I code. I Code. I Code. I Code. I code. I Code. I Code. I Code. I
          code. I Code. I Code. I Code. I code. I Code. I Code. I Code. I code.
          I Code. I Code. I Code.
        </motion.h1>

        <motion.h1
          initial={{ x: 1 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[15vw] leading-none font-['Helvetica'] uppercase pt-10-mb-10 font-semibold pr-20"
        >
          I Code.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
