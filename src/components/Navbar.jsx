import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

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

  const logoVariants = {
    animate: {
      opacity: [1, 0.8, 1],
      textShadow: [
        "0 0 5px rgba(0, 0, 0, 0)",
        "0 0 15px rgba(0, 0, 0, 0.2)",
        "0 0 5px rgba(0, 0, 0, 0)",
      ],
      y: [0, 4, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-8 flex justify-between items-center transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white bg-opacity-5 backdrop-blur-md`}
    >
      <motion.div
        className="logo  text-4xl font-['Founders_Grotesk_Text'] cursor-crosshair"
        variants={logoVariants}
        animate="animate"
        style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0)" }} // Initial textShadow
      >
        Sahil.
      </motion.div>
      {/* <div className="links flex gap-10">
        {["About", "Projects", "Work", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            className="text-xl hidden sm:block md:block font-light font-['Founders_Grotesk_Text'] cursor-crosshair"
            variants={linkVariants}
            whileHover="hover"
          >
            {item}
          </motion.a>
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;
