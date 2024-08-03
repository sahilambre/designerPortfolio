import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const About = () => {
  const filePath = "/resume.pdf";

  const downloadResume = () => {
    fetch(filePath)
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const element = document.createElement("a");
        element.href = url;
        const date = new Date();
        const formattedDate =
          date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
        element.download = "Sahil Mukesh Ambre Resume" + formattedDate + ".pdf"; // Updated filename
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full p-20 bg-pink-500 h-200 rounded-tl-3xl rounded-tr-3xl text-white"
    >
      <h1 className="font-['Poppins'] text-[4vw] leading-[4.5vw] tracking-tight">
        Welcome to my corner of the web! I'm a{" "}
        <motion.span
          initial={{ textDecoration: "none" }}
          animate={{ textDecoration: "underline" }}
          whileHover={{ scale: 1.1, color: "#111" }}
          transition={{ duration: 0.3 }}
        >
          curious individual
        </motion.span>{" "}
        passionate about exploring{" "}
        <motion.span
          initial={{ textDecoration: "none" }}
          animate={{ textDecoration: "underline" }}
          whileHover={{ scale: 1.1, color: "#111" }}
          transition={{ duration: 0.3 }}
        >
          technology
        </motion.span>
        , trends, and intriguing conversations. This site reflects my journey,
        showcasing{" "}
        <motion.span
          initial={{ textDecoration: "none" }}
          animate={{ textDecoration: "underline" }}
          whileHover={{ scale: 1.1, color: "#111" }}
          transition={{ duration: 0.3 }}
        >
          insights and ideas
        </motion.span>
        . I'm excited to share my thoughts and connect with others who share
        similar interests.
      </h1>
      <div className="w-full flex border-t-[1px] pt-10 mt-20">
        <div className="w-1/2">
          <h1 className="text-3xl lg:text-6xl">My Resume :</h1>
          <motion.button
            className="flex uppercase gap-10 items-center px-10 py-6 mt-10 rounded-full bg-black text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume} // Add onClick handler
          >
            <span className="flex items-center gap-6 font-['Poppins']">
              Download
              <motion.div
                className="w-3 h-3 bg-zinc-100 rounded-full flex items-center justify-center"
                initial={{ scale: 2.5 }}
                animate={{ rotate: "360deg" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowDown color="black" />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
