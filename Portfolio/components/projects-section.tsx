"use client"

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";


const projects = [
  {
    id: 1,
    title: "Samiksha Sansar",
    description:
      "This is a MERN-based web platform where readers can explore books, read detailed information, leave comments, like books, and get intelligent recommendations based on their preferences.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Node.js", "Express", "Mongodb", "JWT"],
    liveUrl: null,
    githubUrl: "https://github.com/sophiathapa/Samiksha-Sansar",
    featured: true,
  },
  {
    id: 2,
    title: "Yatri",
    description:
      "Yatri is a comprehensive bus and vehicle management system designed to streamline bus operations, from route creation and fare assignment to real-time tracking and passenger reservations. The platform includes a dedicated admin panel, user-friendly dashboards for drivers and passengers, and a phased development roadmap to introduce new features.",
    image: "/images/project-1.jpg",
    technologies: ["React", "Node.js", "Express", "Mongodb", "Tailwind CSS", "JWT", "Leaflet"],
    liveUrl: null,
    githubUrl: "https://github.com/kaylinkhanal/yatri",
    featured: true,
  },
  {
    id: 3,
    title: "Gesture Controlled Virtual Mouse",
    description:
      "A computer-vision powered virtual mouse system that uses hand gestures to control mouse movements, clicks, and interactions removing the need for a physical mouse. Built using Python, OpenCV, Tensorflow, and PyAutoGUI, this project demonstrates the use of real-time hand tracking and gesture recognition.",
    image: "/images/project-3.jpg",
    technologies: ["Python", "OpenCV", "PyAutoGUI", "NumPy", "Tensorflow", "Imutils", "Keras"],
    liveUrl: null,
    githubUrl: "https://github.com/sophiathapa/Virtual-Mouse",
    featured: true,
  },
  {
    id: 4,
    title: "Book Recommendaion System",
    description:
      "A hybrid book recommendation system that combines collaborative filtering and content-based filtering techniques to provide personalized book suggestions. The system analyzes user preferences, reading patterns, and book attributes to deliver accurate and relevant recommendations, enhancing the overall user experience.",
    image: "/images/project-4.jpg",
    technologies: ["Python", "Numpy", "Pandas",  "TF-IDF", "Cosine Similarity", "Collaborative Filtering"],
    liveUrl: null,
    githubUrl: "",
    featured: false,
  },
  
]


export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 bg-secondary text-secondary-foreground">
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
              className="w-20 h-1 bg-gradient-to-r from-primary to-primary/20 mx-auto rounded-full"
            />
          </div>


          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white/20 border border-secondary rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">{project.title[0]}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/80 text-foreground rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} live`}
                    >
                      <LuGithub className="w-6 h-6" />
                    </motion.a>
                    {/* <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card text-card-foreground rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a> */}
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
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {/* {project.technologies.length > 4 && (
                      <Badge className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )} */}
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
