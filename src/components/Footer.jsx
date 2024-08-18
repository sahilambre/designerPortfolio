import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-speed="-.1"
      className="w-full bg-lime-400 text-black font-['Poppins'] py-8 px-4"
    >
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        {/* Let's Connect Section */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-light mb-2">Let's Connect</h2>
          <p className="text-lg mb-4">Feel free to reach out to me!</p>
          <motion.a
            href="mailto:sahil01ambre@gmail.com"
            className="text-sky-900 hover:underline"
          >
            sahil01ambre@gmail.com
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-4 justify-center"
        >
          <a
            href="https://linkedin.com/in/sahilambre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sahilambre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
      <div className="text-center text-black mt-6">
        <p>
          &copy; {new Date().getFullYear()} Sahil Mukesh Ambre. All rights
          reserved 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;
