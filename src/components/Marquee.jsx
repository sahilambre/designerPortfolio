import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 bg-yellow-300 rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-yellow-500 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1 className="text-[16vw] leading-none font-['Helvetica'] uppercase pt-10-mb-10 font-semibold">
          I code.
        </h1>
        <h1 className="text-[15vw] leading-none font-['Helvetica'] uppercase pt-10-mb-10 font-semibold">
          I Code.
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
