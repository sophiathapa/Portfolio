"use client";
import { useRouter } from "next/dist/client/components/navigation";
import React from "react";

const Header = () => {
   const router = useRouter();
  return (
    <section id="landPage" className="min-h-screen px-15 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" flex flex-col items-center justify-center">
          <div className="absolute top-80 ml-[-310] w-115 h-115 rounded-full bg-primary"></div>
          <img
            src="sophia.png"
            alt="me"
            className="absolute left-1 bottom-0 w-120 h-160"
          />
        </div>
        <div className="text-xl mt-1 font-display p-5">
          <div className="mt-50 text-9xl font-montecarlo text-primary">
            Sophia
          </div>
          <div className="ml-35 mt-[-10] text-primary text-5xl">
            Thapa Magar
          </div>
          <p className="mt-10 text-lg font-montserrat pr-8">
          A Computer Engineering graduate passionate about crafting elegant, accessible digital experiences. I transform complex problems into simple, beautiful, and intuitive solutions.   
          </p>
          <button  onClick={() => router.push("/resume")}
           className="mt-10 px-6 py-3 bg-secondary text-background font-display text-lg font-medium rounded-full shadow-lg hover:bg-secondary/90 transition duration-300">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
