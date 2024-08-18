import React from "react";
import { motion } from "framer-motion";
import exampleImage1 from "../../src/assets/bloggy.png";
import exampleImage2 from "../../src/assets/Writeit.png";
import exampleImage4 from "../../src/assets/jobspotlight.png";
import exampleImage3 from "../../src/assets/Sidekick.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full py-20 lg:mt-20">
      <div className="w-full px-20 border-b-[0.5px] pb-8">
        <motion.h1
          className="text-black text-4xl lg:text-6xl font-['Poppins'] tracking-tight flex justify-center"
          initial={{ opacity: 0, y: 20, color: "#000" }} // Initial state
          animate={{ opacity: 1, y: 0, color: "#000" }} // Final state
          whileHover={{
            y: -10, // Bounce effect
            color: "#ff6347", // Change color on hover
            transition: {
              y: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
              color: { duration: 0.3 },
            },
          }}
          transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration and easing
        >
          My Projects.
        </motion.h1>
      </div>
      <div className="px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 px-0">
          <div className="card w-full">
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{
                scale: 1.05, // Slightly enlarge the whole container
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mr-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, color: "#ff6347" }}
                transition={{ duration: 0.3 }}
              >
                Bloggy
              </motion.h3>
              <a
                href="https://github.com/sahilambre/bloggy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="text-3xl" // Increased size of the icon
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.div>
              </a>
            </motion.div>
            <motion.img
              src={exampleImage1}
              alt="Example 1"
              className="w-full h-auto object-cover rounded-3xl"
              whileHover={{
                scale: 0.8, // Scale down
                rotate: -5, // Slight rotation
                transition: { duration: 0.3 },
              }}
            />
          </div>
          <div className="card w-full">
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{
                scale: 1.05, // Slightly enlarge the whole container
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mr-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, color: "#ff6347" }}
                transition={{ duration: 0.3 }}
              >
                Write.it
              </motion.h3>
              <a
                href="https://github.com/sahilambre/Blog-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="text-3xl" // Increased size of the icon
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.div>
              </a>
            </motion.div>
            <motion.img
              src={exampleImage2}
              alt="Example 2"
              className="w-full h-auto object-cover rounded-3xl"
              whileHover={{
                scale: 0.8, // Scale down
                rotate: -5, // Slight rotation
                transition: { duration: 0.3 },
              }}
            />
          </div>
          <div className="card w-full">
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{
                scale: 1.05, // Slightly enlarge the whole container
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mr-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, color: "#ff6347" }}
                transition={{ duration: 0.3 }}
              >
                SIDEKICK
              </motion.h3>
              <a
                href="https://github.com/sahilambre/CS555-FinalProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="text-3xl" // Increased size of the icon
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.div>
              </a>
            </motion.div>
            <motion.img
              src={exampleImage3}
              alt="Example 3"
              className="w-full h-auto object-cover rounded-3xl"
              whileHover={{
                scale: 0.8, // Scale down
                rotate: -5, // Slight rotation
                transition: { duration: 0.3 },
              }}
            />
          </div>
          <div className="card w-full">
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{
                scale: 1.05, // Slightly enlarge the whole container
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mr-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, color: "#ff6347" }}
                transition={{ duration: 0.3 }}
              >
                Job-Spotlight
              </motion.h3>
              <a
                href="https://github.com/sahilambre/CS546-Group-26-Final-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="text-3xl" // Increased size of the icon
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.div>
              </a>
            </motion.div>
            <motion.img
              src={exampleImage4}
              alt="Example 4"
              className="w-full h-auto object-cover rounded-3xl"
              whileHover={{
                scale: 0.8, // Scale down
                rotate: -5, // Slight rotation
                transition: { duration: 0.3 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
