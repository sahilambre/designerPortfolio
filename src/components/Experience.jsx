import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, color: "#555" },
  visible: {
    opacity: 1,
    color: "#000",
    transition: {
      duration: 5,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HighlightedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.span variants={staggerContainer} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Experience = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full min-h-[60vh] flex flex-col items-center bg-black pt-10 lg:mt-20"
    >
      <div className="w-full px-5 lg:px-20 border-b-[0.5px] pb-8">
        <motion.h1
          className="text-white text-4xl lg:text-6xl font-['Poppins'] tracking-tight flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -10,
            color: "#ff6347",
            transition: {
              y: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
              color: { duration: 0.3 },
            },
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Experience.
        </motion.h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center px-8 py-10 space-y-10 lg:space-y-0 lg:space-x-20">
        <motion.div
          className="flex flex-col items-center text-center border border-gray-300 rounded-3xl p-8 bg-white shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out px-4"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h2
            className="text-2xl lg:text-3xl font-semibold text-gray-800 mt-4"
            whileHover={{ scale: 1.1, color: "#ff6347" }}
            transition={{ duration: 0.3 }}
          >
            Dezegnolics Pvt Ltd.
          </motion.h2>
          <motion.p
            className="max-w-md text-gray-600 mt-2 mb-4"
            whileHover={{ scale: 1.06, color: "#555" }}
            transition={{ duration: 0.3 }}
          >
            <HighlightedText text="At Dezignolics Pvt. Ltd., Mumbai, India, I extensively trained in AI/ML concepts using Python. Achieved a 15% accuracy boost in house price prediction models through meticulous tuning and a 35% performance enhancement via advanced data processing and feature engineering." />
          </motion.p>
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ scale: 1.02, color: "#555" }}
            transition={{ duration: 0.3 }}
          >
            February 2021 - July 2021
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center border border-gray-300 rounded-3xl p-8 bg-white shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out sm:px-4"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h2
            className="text-2xl lg:text-3xl font-semibold text-gray-800 mt-4"
            whileHover={{ scale: 1.1, color: "#ff6347" }}
            transition={{ duration: 0.3 }}
          >
            Trivia Softwares
          </motion.h2>
          <motion.p
            className="max-w-md text-gray-600 mt-2 mb-4"
            whileHover={{ scale: 1.06, color: "#555" }}
            transition={{ duration: 0.3 }}
          >
            <HighlightedText text="At Trivia Softwares, Mumbai, India, I led Python application projects, integrating GUI and database connectivity. Developed a Student Management System using Tkinter, enhancing efficiency by 20% through intuitive design and functional implementation." />
          </motion.p>
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ scale: 1.02, color: "#555" }}
            transition={{ duration: 0.3 }}
          >
            December 2019 - March 2020
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
