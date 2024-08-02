import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
      <div className="logo hidden text-4xl sm:block md:block font-['Founders_Grotesk_Text']">
        Sahil.
      </div>
      <div className="links flex gap-10 ">
        {["About", "Projects", "Work", "Contact"].map((item, index) => (
          <a
            key={index}
            className="text-xl  md:text-xl lg:text-xl font-light font-['Founders_Grotesk_Text']"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
