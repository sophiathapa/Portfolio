"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import StackIcon from "tech-stack-icons";

type Skill = { name: string; angle: number };

const LINES = [
  { techStacks: ["figma", "typescript", "mongodb", "html5", "motion", "figma"], reverse: false },
  { techStacks: ["nextjs2", "clickup", "nestjs", "js", "python", "nextjs2"], reverse: true },
  { techStacks: ["postgresql", "postman", "react", "nodejs", "expressjs", "postgresql"], reverse: false },
  { techStacks: ["redux", "tailwindcss", "github", "vercel", "bootstrap5", "redux"], reverse: true },
];

function TextLine({ techStacks, reverse }: { techStacks: string[]; reverse: boolean }) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 4000], reverse ? ["-20%", "20%"] : ["20%", "-20%"]);

  return (
    <div className="overflow-hidden">
      <motion.div
        style={{
          x,
        }}
      >
        {techStacks.map((word, i) => (
          <StackIcon name={word} key={i}
            variant="dark"
            className="text-white w-12 h-12 sm:ml-4  md:ml-8 lg:ml-10 sm:w-18 sm:h-18 md:w-25 md:h-25 lg:w-30 lg:h-30 p-2" />
        ))}
      </motion.div>
    </div>
  );
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary text-secondary-foreground backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={isInView ? { opacity: 1 } : {}} 
              transition={{ delay: 0.1 }} 
              className="text-sm font-medium tracking-widest uppercase text-primary">
              Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: 0.2 }} 
              className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Tech Stack
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={isInView ? { scaleX: 1 } : {}} 
              transition={{ delay: 0.3, duration: 0.6 }} 
              className="w-20 h-1 bg-gradient-to-r from-primary to-primary/20 mx-auto rounded-full" />
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={isInView ? { y: 0, opacity: 1 } : {}} 
            transition={{ delay: 0.4, duration: 0.6 }} 
            className="flex flex-col items-center gap-3 md:gap-15">
            {LINES.map((line, i) => (
              <TextLine key={i} techStacks={line.techStacks} reverse={line.reverse} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
