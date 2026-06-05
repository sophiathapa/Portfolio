"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Feb 2026 — May 2026",
    role: "Backend Intern",
    company: "Wolfmatrix",
    companyUrl: "https://example.com",
    description:
      "Lead development of customer-facing applications using React, Next.js, and Node.js. Implemented microservices architecture that improved system reliability by 40%. Mentoring junior developers and conducting code reviews.",
    technologies: ["Node.js", "Nest.js", "PostgreSQL", "React", "Next.js", "TypeScript"],
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "Frontend Intern",
    company: "Aster Innovations",
    companyUrl: "https://example.com",
    description:
      "Built responsive web applications and component libraries using React and Vue.js. Collaborated with UX designers to implement pixel-perfect designs. Reduced page load times by 60% through optimization techniques.",
    technologies: ["React", "JavaScript", "Figma", "Git"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest uppercase text-primary"
            >
              Career Path
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-4 mb-6"
            >
              Professional Experience
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-primary/20 mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:-translate-x-1/2 z-10 ring-4 ring-primary" />

                  {/* Date (desktop) */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      index % 2 === 0 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"
                    }`}
                  >
                    <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/50 border border-secondary/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Date (mobile) */}
                      <span className="md:hidden text-sm font-mono text-muted-foreground block mb-2">
                        {exp.period}
                      </span>

                      <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors mb-3 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} className="text-xs text-black">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
