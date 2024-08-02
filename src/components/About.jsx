import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-.1"
      className="w-full p-20 bg-pink-500 h-200 rounded-tl-3xl rounded-tr-3xl tect-white"
    >
      <h1 className="font-['Poppins']  text-[4vw] leading-[4.5vw] tracking-tight">
        Welcome to my corner of the web! I’m a curious individual passionate
        about exploring technology, trends, and intriguing conversations. This
        site reflects my journey, showcasing insights and ideas. I’m excited to
        share my thoughts and connect with others who share similar interests.
      </h1>
      <div className="w-full flex border-t-[1px] pt-10 mt-20">
        <div className="w-1/2">
          <h1 className="text-3xl lg:text-6xl">My Resume :</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 mt-10 rounded-full bg-black text-white">
            My Resume
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        {/* <div className="w-1/2 h-[60vh] bg-black rounded-3xl"></div> */}
      </div>
    </div>
  );
};

export default About;
