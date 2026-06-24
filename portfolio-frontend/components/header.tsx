"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FileText, MoveDownRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const router = useRouter();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
  const previous = scrollY.getPrevious() ?? 0;
    setIsScrollingDown(current > previous);
  });

  return (
    <section id="home" className="pb-24">
      <motion.div 
        className="relative min-h-screen overflow-hidden max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 md:gap-5">
        <motion.div 
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="relative mt-10 md:mt-0 w-[450px] sm:w-[530px] md:w-[550px] lg:w-[600px] h-[600px] sm:h-full md:h-full lg:h-full">
          <img src="sophia.png" 
            alt="me" 
            className="absolute bootom-0 w-full h-full grayscale-[70%] saturate-125 contrast-110" />
        </motion.div>
        <div className="relative sm:mt-80 flex flex-col gap-5 md:gap-10 ml-10 md:ml-0">
          <motion.div 
            initial={{ opacity: 0, y: 200 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col gap-3 md:gap-10">
            <MoveDownRight />
            <span className="mt-3 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-foreground">Web Developer</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 200 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex items-center justify-center group gap-2 bg-secondary text-secondary-foreground border rounded-lg hover:border-primary/50 w-35 h-10 sm:ml-17 md:ml-26" 
            onClick={() => router.push("/resume")}>
            Resume
            <FileText className="w-5 h-5 group-hover:translate-x-1"/>
          </motion.button>
        </div>
        <motion.div 
          className="absolute mt-125 sm:mt-150  font-roboto text-primary/70 text-semi-bold overflow-hidden whitespace-nowrap" initial={{ opacity: 0, y: 200 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}>
          <motion.div
            className="inline-flex text-7xl sm:text-8xl md:text-9xl lg:text-[130px]"
            animate={ isScrollingDown? {x:["0%","-50%"]} : {x:["-50%","0%"]} }
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <span className="px-10 py-2 md:px-16 tracking-[-5px]">Sophia Thapa Magar</span>
            <span className="">-</span>
            <span className="px-10 py-2 md:px-16 tracking-[-5px]">Sophia Thapa Magar</span>
            <span className="">-</span>
            <span className="px-10 py-2 md:px-16 tracking-[-5px]">Sophia Thapa Magar</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
