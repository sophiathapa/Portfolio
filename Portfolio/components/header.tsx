import React from "react";

const Header = () => {
  return (
    <section id="landPage" className=" min-h-screen overflow-hidden px-15 py-5">
    
      <img src="star 1.png" alt="star1" className="absolute mt-20 w-[60px]" />

      <img
        src="star 2.png"
        alt="star2"
        className="absolute mt-30 ml-220 w-[40px]"
      />

      <img
        src="star 3.png"
        alt="star3"
        className="absolute mt-19 ml-120 w-[40px]"
      />

      <img
        src="star 4.png"
        alt="star4"
        className="absolute mt-60 ml-190 w-[43px]"
      />

      <img src="portfolio.png" alt="Portfolio" className="abosolute mt-50" />
      <div className="text-xl text-black text-display">
        Crafting complete digital experiences with code and creativity.
      </div>
    </section>
  );
};

export default Header;
