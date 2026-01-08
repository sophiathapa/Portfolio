export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black ">
      <nav className=" fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-between p-5">
          <span className="text-matcha text-2xl font-display font-bold">
            Portfolio
          </span>
          <div className="flex gap-10 text-l">
            <span>About</span>
            <span>Projects</span>
            <span>Skills</span>
            <span>Contact</span>
          </div>
        </div>
      </nav>
      <main className="flex flex-col gap-24 ">
        <section id="landPage" className=" relative min-h-screen overflow-hidden">
         
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 w-200 h-full size-18 rounded-full bg-radial from-pink-500 from-40% to-green-500"></div>

            <div className="relative flex flex-col items-center p-5 z-10 mt-15">
              <span className="text-matcha text-l mb-8">Hello, I'm</span>
              <h1 className="text-6xl font-bold flex flex-col ">
                Full Stack
                <span className="text-matcha mt-5 ">Developer</span>
              </h1>
              <div className="text-center text-primary text-2xl mt-8">
                Crafting beautiful digital experiences with a passion for
                minimal <br></br>
                design and meaningful interactions.
              </div>
              <div className="flex gap-10 p-5 mt-10">
                <button className=" bg-matcha text-white rounded-full p-3 ">
                  View My Work
                </button>
                <button className="bg-pink text-white rounded-full p-3">
                  Get in Touch
                </button>
              </div>
            </div>
         
        </section>

        <section id="about"className="px-5">
          <div className="grid grid-cols-2 gap-20">
            <div className="bg-red-400"> hehe</div>
            <div className="flex flex-col gap-5">
              About Me
              <h1 className="text-6xl font-bold"> Designing with purpose</h1>
              <p>
                I'm a passionate designer and developer with over 5 years of
                experience creating digital products that people love. My
                approach combines aesthetic beauty with functional design,
                ensuring every project delivers both visual impact and practical
                value. When I'm not designing, you'll find me exploring nature,
                practicing calligraphy, or discovering new matcha spots around
                the city.
              </p>
              <div className="flex gap-10">
                <div className="">
                  50+ <br></br>
                  Projects Done
                </div>

                <div>
                  5+<br></br>
                  Years Experience
                </div>
                <div>
                  30+<br></br>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 mt-24">
          <div className="flex flex-col items-center gap-5">
            My Work
            <h1 className="text-6xl font-bold">Featured Projects </h1>
          </div>
          <div className="grid grid-cols-2 gap-20 mt-5">
            <div className="bg-red-400">
              Mobile Design Bloom App A mindfulness and meditation app with
              soothing visuals
            </div>

            <div className="bg-red-400">
              E-Commerce Sakura Shop Online boutique for handcrafted Japanese
              goods
            </div>

            <div className="bg-red-400">
              Web Application Zenith Dashboard Analytics platform with clean
              data visualization
            </div>
            <div className="bg-red-400">
              Brand Identity Flora Brand Complete branding for a sustainable
              beauty company
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 mt-24">
          <div className="flex flex-col items-center gap-5">
            Expertise
            <h1 className="text-6xl font-bold"> What I Do Best</h1>
          </div>

          <div className="grid grid-cols-4 gap-10 mt-10">
            <div className="bg-red-400">
              UI/UX Design Creating intuitive interfaces that delight users
            </div>

            <div className="bg-red-400">
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

        <section id="contact" className="px-5 mt-24">
          <div className="flex flex-col items-center gap-5">
            Get in Touch
            <h1 className="text-6xl font-bold">Let's Work Together </h1>
          </div>

          <div className="grid grid-cols-2 gap-20 mt-10">
            <div>
              I'm always excited to connect with new people and explore creative
              opportunities. Whether you have a project in mind or just want to
              say hello, feel free to reach out!
              <div className="flex flex-col mt-10">
                <div>
                  Email : sophia.thapa55@gmail.com 
                </div>
                <div> Location : Jhamsikhel, Lalitpur</div>
       
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button className=" bg-red-400">Send Message</button>
            </div>
          </div>
        </section>

         <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-semibold text-primary">
            Portfolio
          </span>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {/* <Twitter className="w-4 h-4" /> */}
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {/* <Linkedin className="w-4 h-4" /> */}
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {/* <Github className="w-4 h-4" /> */}
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      </main>
    </div>
  );
}
