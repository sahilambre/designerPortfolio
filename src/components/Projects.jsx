import React from "react";
import exampleImage1 from "../../src/assets/dummy.png";
import exampleImage2 from "../../src/assets/dummy.png";
import exampleImage3 from "../../src/assets/dummy.png";
import exampleImage4 from "../../src/assets/dummy.png";
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="w-full py-40">
      <div className="w-full px-20 border-b-[0.5px] pb-8">
        <h1 className="text-black text-4xl lg:text-6xl font-['Poppins'] tracking-tight">
          My Projects.
        </h1>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 px-10">
          <div className="card w-full">
            <h3 className="text-center text-2xl font-semibold mb-4">
              Project 1
            </h3>
            <img
              src={exampleImage1}
              alt="Example 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="card w-full">
            <h3 className="text-center text-2xl font-semibold mb-4">
              Project 2
            </h3>
            <img
              src={exampleImage2}
              alt="Example 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="card w-full">
            <h3 className="text-center text-2xl font-semibold mb-4">
              Project 3
            </h3>
            <img
              src={exampleImage3}
              alt="Example 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="card w-full">
            <h3 className="text-center text-2xl font-semibold mb-4">
              Project 4
            </h3>
            <img
              src={exampleImage4}
              alt="Example 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
