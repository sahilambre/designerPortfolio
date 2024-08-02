import React from "react";
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-white pt-1 flex flex-col justify-between">
      <div className="flex-grow flex flex-col justify-center items-center px-20">
        <div className="masker">
          <h1 className="text-4xl  lg:text-7xl text-center leading-none font-['Founders_Grotesk_Text']">
            Hello.
          </h1>
        </div>
        <div className="masker mt-4">
          <h1 className="text-6xl lg:text-9xl text-center leading-none font-['Founders_Grotesk_Text']">
            Sahil Ambre.
          </h1>
        </div>
        <div className="masker mt-4">
          <h1 className="text-3xl lg:text-6xl text-center leading-none font-['Founders_Grotesk_Text']">
            Software Developer
          </h1>
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
