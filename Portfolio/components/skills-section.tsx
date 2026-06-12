"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import StackIcon from "tech-stack-icons";

type Skill = { name: string; angle: number };

const CATEGORIES = [
      { name: "react",       angle: 60  },
      { name: "typescript",  angle: 110 },
      { name: "tailwindcss", angle: 160 },
      { name: "nextjs2",     angle: 210 },
      { name: "nodejs",    angle: 10  },
      { name: "expressjs", angle: 60  },
      { name: "python",    angle: 110 },
      { name: "nestjs",    angle: 160 },
      { name: "postgresql", angle: -60 },
      { name: "mongodb",    angle: 10  },
];


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium tracking-widest uppercase text-primary"
            >
              Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold mt-4 mb-6"
            >
              Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-primary/20 mx-auto rounded-full"
            />
          </div>
          <div className="relative mx-auto" style={{ width: 500, height: 500 }}>
            {/* Center dot (optional) */}
            {CATEGORIES.map((skill, index) => {
              const angle = (index / CATEGORIES.length) * Math.PI * 2;
              const x = Math.cos(angle) * 200; // radius = 200
              const y = Math.sin(angle) * 200;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{  scale: 1.1 }}
                  className="absolute flex justify-center items-center bg-white w-20 h-20 p-2 rounded-xl shadow-lg hover:scale-6"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,  // 32px = half of w-16 (64px)
                    top:  `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  <StackIcon name={skill.name} className="w-15 h-15" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;