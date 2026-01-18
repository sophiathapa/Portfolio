import React from 'react'

const Skills = () => {
  return (
     <section id="skills" className="px-5 mt-24">
          <div className="flex flex-col items-center gap-5">
            Expertise
            <h1 className="text-6xl font-bold"> What I Do Best</h1>
          </div>

          <div className="grid grid-cols-4 gap-10 mt-10">
            <div className="bg-red-400">
              UI/UX Design Creating intuitive interfaces that delight users
            </div>

            <div className="bg-red-400">789i98
              Figma Sketch Adobe XD Development Building responsive, performant
              web applications
            </div>
            <div className="bg-red-400">
              React TypeScript Tailwind Brand Identity Crafting cohesive visual
              identities for brands
            </div>

            <div className="bg-red-400">
              Illustrator Photoshop InDesign Motion Design Bringing interfaces
              to life with smooth animations After Effects Framer Lottie
            </div>
          </div>
        </section>
  )
}

export default Skills