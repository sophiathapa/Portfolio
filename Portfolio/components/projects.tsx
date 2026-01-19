import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Samiksha Sansar",
    description: "A mindfulness and meditation app with soothing visuals",
    color: "from-secondary to-light-green",
  },
  {
    title: "Yatri",
    description: "Online boutique for handcrafted Japanese goods",
    color: "from-primary to-pastel-pink",
  },
  {
    title: "Gesture Controlled Virtual Mouse",
    description: "Analytics platform with clean data visualization",
    color: "from-light-green to-secondary",
  },
  {
    title: "Book Recommendaion System",
    description: "Complete branding for a sustainable beauty company",
    color: "from-pastel-pink to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#F9E8EE] py-24">
      <div className="container mx-auto px-6">
        <div className=" flex flex-col text-center mb-16">
          <span className="text-accent font-medium tracking-wide">My Work</span>

          <div className="relative inline-block mt-2">
            {/* Stroke (outside) */}
            <h2
              className="absolute inset-0 font-display text-4xl md:text-5xl font-bold text-transparent
                 [-webkit-text-stroke:10px_white]"
            >
              Featured <span className="font-edwardian text-8xl">P</span>
              <span>rojects</span>
            </h2>

            {/* Fill */}
            <h2 className="relative font-display text-4xl md:text-5xl font-bold text-secondary">
              Featured <span className="font-edwardian text-8xl">P</span>
              <span>rojects</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-15 p-10">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-[#F9DCE6] rounded-3xl">
              <div className="flex flex-col items-center  ">
                <img src="pink_folder.png" className="w-60" />
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mt-1">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 mt-2 max-w-xs text-center">
                  {project.description}
                </p>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
