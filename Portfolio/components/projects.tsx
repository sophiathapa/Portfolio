import React from "react";

const projects = [
  {
    title: "Bloom App",
    description: "A mindfulness and meditation app with soothing visuals",
    color: "from-secondary to-light-green",
  },
  {
    title: "Sakura Shop",
    description: "Online boutique for handcrafted Japanese goods",
    color: "from-primary to-pastel-pink",
  },
  {
    title: "Zenith Dashboard",
    description: "Analytics platform with clean data visualization",
    color: "from-light-green to-secondary",
  },
  {
    title: "Flora Brand",
    description: "Complete branding for a sustainable beauty company",
    color: "from-pastel-pink to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wide">My Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-black">
            Featured <span className="text-secondary">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.color} p-8 flex items-end`}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {/* <ExternalLink className="w-5 h-5 text-primary-foreground" /> */}
                </div>
                <div className="relative z-10">
                  <span className="text-primary-foreground/70 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mt-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 mt-2 max-w-xs">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
