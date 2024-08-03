import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-['Poppins'] py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        {/* Let's Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-light mb-2">Let's Connect</h2>
          <p className="text-lg mb-4">Feel free to reach out to me!</p>
          <a
            href="mailto:sahil01ambre@gmail.com"
            className="text-blue-400 hover:underline"
          >
            sahil01ambre@gmail.com
          </a>
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
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sahilambre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Sahil Mukesh Ambre. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
