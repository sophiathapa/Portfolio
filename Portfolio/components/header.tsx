"use client";
import { easeInOut, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <section id="home" className="pt-24">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -80 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ type: "spring", stiffness: 150, damping: 80, delay: 0.3, duration: 1.7 }} 
          className="relative w-[200px] sm:w-[280px] md:w-[365px] lg:w-[480px] h-[260px] sm:h-[360px] md:h-[460px] lg:h-[580px]">
          <div className="absolute bottom-0 left-[-100] w-[140%] h-[65%] rounded-t-full bg-primary" />
          <div className="absolute bottom-0 left-[-105] w-[150%] h-[70%] rounded-t-full border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-[-110] w-[160%] h-[75%] rounded-t-full border-r-2 border-t-2 border-primary/50" />
          <img
            src="sophia.png"
            alt="me"
            className="absolute bottom-0 left-1 w-full h-auto"
          />
        </motion.div>
        <div className="flex flex-col items-center gap-5 md:gap-7 lg:gap-10 font-display px-5">
          <div className="mt-10 md:mt-32 lg:mt-50">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-7xl md:text-8xl lg:text-9xl font-montecarlo text-primary">
              Sophia
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2, duration: 0.8 }} 
              className="mt-[-6px] text-primary text-3xl md:text-4xl lg:text-5xl ml-19 md:ml-25 lg:ml-34">
              Thapa Magar
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.7 }} 
            className="text-md lg:text-lg text-center font-montserrat pr-8">
            A Computer Engineering graduate passionate about crafting elegant, accessible digital experiences. I transform complex problems into simple, beautiful, and intuitive solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7}}
            onClick={() => router.push("/resume")}
            className="bg-primary/60 rounded-lg p-2 w-25 h-12 border-primary/50 hover:scale-105 transition-all font-sm"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Header;
