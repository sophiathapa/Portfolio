"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type Skill = { name: string; angle: number };

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#534AB7",
    bg: "#EEEDFE",
    cx: 120,
    cy: 130,
    skills: [
      { name: "React",      angle: -90 },
      { name: "TypeScript", angle: -175 },
      { name: "Tailwind",   angle: 140  },
      { name: "Next.js",    angle: 80  },
    ] as Skill[],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#0F6E56",
    bg: "#E1F5EE",
    cx: 340,
    cy: 350,
    skills: [
      { name: "Node.js",  angle: 90 },
      { name: "Express",  angle: 45  },
      { name: "Python",   angle: 150  },
      { name: "REST API", angle: 240 },
    ] as Skill[],
  },
  {
    id: "database",
    label: "Database",
    color: "#993C1D",
    bg: "#FAECE7",
    cx: 570,
    cy: 230,
    skills: [
      { name: "PostgreSQL", angle: -10  },
      { name: "MongoDB",    angle: 90  },
      { name: "MySQL",      angle: -200 },
    ] as Skill[],
  },
];

const ROOT_CX = 340;
const ROOT_CY = 80;
const BRANCH_LEN = 110;
const SKILL_LEN = 100;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

const SkillBubble = ({
  skill,
  cx,
  cy,
  parentCx,
  parentCy,
  color,
  bg,
  index,
  isInView,
}: {
  skill: Skill;
  cx: number;
  cy: number;
  parentCx: number;
  parentCy: number;
  color: string;
  bg: string;
  index: number;
  isInView: boolean;
}) => {
  const delay = 0.7 + index * 0.08;

  return (
    <g>
      <motion.line
        x1={parentCx}
        y1={parentCy}
        x2={cx}
        y2={cy}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ delay: delay - 0.05, duration: 0.3 }}
      />
      <motion.g
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          delay,
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <circle cx={cx} cy={cy} r="28" fill={bg} stroke={color} strokeWidth="1" />
        {skill.name.length > 8 ? (
          <>
            <text
              x={cx}
              y={cy - 5}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="9"
              fontWeight="500"
              fill={color}
              fontFamily="inherit"
            >
              {skill.name.split(" ")[0]}
            </text>
            <text
              x={cx}
              y={cy + 7}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="9"
              fontWeight="500"
              fill={color}
              fontFamily="inherit"
            >
              {skill.name.split(" ").slice(1).join(" ")}
            </text>
          </>
        ) : (
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="10"
            fontWeight="500"
            fill={color}
            fontFamily="inherit"
          >
            {skill.name}
          </text>
        )}
      </motion.g>
    </g>
  );
};

const CategoryNode = ({
  cat,
  index,
  isInView,
}: {
  cat: (typeof CATEGORIES)[0];
  index: number;
  isInView: boolean;
}) => {
  const catDelay = 0.3 + index * 0.15;

  return (
    <g>
      {/* Connector from root */}
      <motion.line
        x1={ROOT_CX+32}
        y1={ROOT_CY+32}
        x2={cat.cx}
        y2={cat.cy}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ delay: catDelay - 0.1, duration: 0.4 }}
      />

      {/* Category bubble */}
      <motion.g
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          delay: catDelay,
          duration: 0.5,
          type: "spring",
          stiffness: 240,
          damping: 16,
        }}
        style={{ transformOrigin: `${cat.cx}px ${cat.cy}px` }}
      >
        <circle
          cx={cat.cx}
          cy={cat.cy}
          r="38"
          fill={cat.bg}
          stroke={cat.color}
          strokeWidth="1.5"
        />
        <text
          x={cat.cx}
          y={cat.cy}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="13"
          fontWeight="600"
          fill={cat.color}
          fontFamily="inherit"
        >
          {cat.label}
        </text>
      </motion.g>

      {/* Skill nodes */}
      {cat.skills.map((skill, i) => {
        const rad = toRad(skill.angle);
        const sx = cat.cx + Math.cos(rad) * SKILL_LEN;
        const sy = cat.cy + Math.sin(rad) * SKILL_LEN;
        return (
          <SkillBubble
            key={skill.name}
            skill={skill}
            cx={sx}
            cy={sy}
            parentCx={cat.cx}
            parentCy={cat.cy}
            color={cat.color}
            bg={cat.bg}
            index={i + index * 4}
            isInView={isInView}
          />
        );
      })}
    </g>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          {/* Section Header */}
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

          {/* Skill Tree SVG */}
          <svg
            width="100%"
            viewBox="0 0 680 380"
            className="overflow-visible"
            aria-label="Skill tree"
          >
            {/* Root node */}
            <motion.g
              initial={{ opacity: 0, scale: 0.4 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 220, damping: 15 }}
              style={{ transformOrigin: `${ROOT_CX}px ${ROOT_CY}px` }}
            >
              <circle
                cx={ROOT_CX}
                cy={ROOT_CY}
                r="32"
                className="fill-primary/10 stroke-primary"
                strokeWidth="1.5"
              />
              <text
                x={ROOT_CX}
                y={ROOT_CY - 4}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="11"
                fontWeight="600"
                className="fill-primary"
                fontFamily="inherit"
              >
                Tech
              </text>
              <text
                x={ROOT_CX}
                y={ROOT_CY + 9}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="11"
                fontWeight="600"
                className="fill-primary"
                fontFamily="inherit"
              >
                Skills
              </text>
            </motion.g>

            {CATEGORIES.map((cat, i) => (
              <CategoryNode key={cat.id} cat={cat} index={i} isInView={isInView} />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;