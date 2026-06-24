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
      "Contributed to the development of backend systems for logistics and shipment management platforms. Designed and implemented a Role-Based Access Control (RBAC) system, developed staff hierarchy management features, and optimized critical workflows. Worked on resolving production issues and improving the performance, scalability, and reliability of core business operations.",
    technologies: ["Node.js", "Nest.js", "PostgreSQL", "React", "TypeScript"],
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "Frontend Intern",
    company: "Aster Innovations",
    companyUrl: "https://example.com",
    description:
      "Built responsive and interactive user interfaces using React.js while ensuring a seamless experience across devices. Developed reusable components, integrated APIs, and collaborated with the team to deliver dynamic features that improved usability, consistency, and overall application performance.",
    technologies: ["React", "JavaScript", "Figma", "Git", "Next.js"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

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
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/25 md:-translate-x-1/2" />

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
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary/80 rounded-full -translate-x-1/2 md:-translate-x-1/2 z-10 ring-4 ring-primary/80" />

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
                      className="bg-card border border-card-border/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
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
                        className="inline-flex items-center gap-1 text-primary transition-colors mb-3 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} className="text-xs">
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
