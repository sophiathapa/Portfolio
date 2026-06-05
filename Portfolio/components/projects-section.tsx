"use client"

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";


const projects = [
  {
    id: 1,
    title: "Yatri",
    description:
      "A comprehensive cloud management platform with real-time analytics, automated scaling, and multi-cloud integration. Built with focus on performance and accessibility.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Samiksha Sansar",
    description:
      "Cross-platform mobile app for tracking carbon footprint with AI-powered recommendations and community challenges. Gamified approach to environmental awareness.",
    image: "/images/project-2.jpg",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "TensorFlow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Gesture Controlled Virtual Mouse",
    description:
      "Real-time collaborative coding environment with integrated video chat, version control, and AI code assistance. Supporting multiple programming languages.",
    image: "/images/project-3.jpg",
    technologies: ["React", "WebRTC", "Socket.io", "Redis", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Book Recommendaion System",
    description:
      "Personal finance management app with budgeting tools, expense tracking, and investment portfolio analysis with beautiful data visualizations.",
    image: "/images/project-4.jpg",
    technologies: ["Vue.js", "D3.js", "Firebase", "Plaid API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "HealthMate AI",
    description:
      "AI-powered health companion providing personalized workout plans, nutrition advice, and mental wellness tracking with data privacy at its core.",
    image: "/images/project-5.jpg",
    technologies: ["Python", "FastAPI", "React", "OpenAI", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "ArtisanMarket",
    description:
      "E-commerce platform connecting local artisans with global customers. Features include live auctions, custom orders, and secure payment processing.",
    image: "/images/project-6.jpg",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "Algolia"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

const filters = ["All", "Frontend", "Backend", "Full Stack", "Mobile"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24">
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
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-4 mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            />
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">{project.title[0]}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card text-card-foreground rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <IoLogoGithub className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          {!showAll && projects.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="group"
              >
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
