import React from "react";

const Header = () => {
  return (
    <section id="landPage" className=" min-h-screen px-15 py-5 bg-primary">

      <img src="star 1.png" alt="star1" className="absolute mt-30 w-[60px]" />

      <img
        src="star 2.png"
        alt="star2"
        className="absolute mt-53 ml-165 w-[40px]"
      />

      <img
        src="star 3.png"
        alt="star3"
        className="absolute mt-25 ml-85 w-[43px]"
      />

      <img
        src="star 4.png"
        alt="star4"
        className="absolute mt-65 ml-140 w-[40px]"
      />

      <img src="portfolio.png" alt="Portfolio" className="abosolute mt-65 w-[450]" />
      <div className="text-xl text-black font-display mt-1">
        Crafting complete digital experiences with code and creativity.
      </div>
    </section>
  );
};

export default Header;
