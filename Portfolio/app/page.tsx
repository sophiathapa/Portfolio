import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="p-5">
        <div className="flex justify-between">
          <span>Portfolio</span>
          <div className="flex gap-10">
            <span>About</span>
            <span>Projects</span>
            <span>Skills</span>
            <span>Contact</span>
          </div>
        </div>
      </nav>
      <main className="flex flex-col gap-50 p-5">
        <section id="landPage">
          <div className="flex flex-col items-center gap-5">
            Hello, I'm
            <h1 className=" text-2xl flex flex-col">
              Full Stack Developer
              <span>Sophia Thapa Magar</span>
            </h1>
            <div className="text-center">
              Crafting beautiful digital experiences with a passion for minimal
              design and meaningful interactions.
            </div>
            <div className="flex gap-10">
              <button className=" bg-red-400 rounded-full p-2">
                View My Work
              </button>
              <button className=" bg-red-400 rounded-full p-2">
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="grid grid-cols-2">
            <div> hehe</div>
            <div className="flex flex-col gap-5">
              About Me
              <h1 className="text-2xl"> Designing with purpose</h1>
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

        <section id="projects">
          <div className="flex flex-col items-center">
            My Work
            <h1 className="text-2xl">Featured Projects </h1>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              Mobile Design Bloom App A mindfulness and meditation app with
              soothing visuals
            </div>

            <div>
              E-Commerce Sakura Shop Online boutique for handcrafted Japanese
              goods
            </div>

            <div>
              Web Application Zenith Dashboard Analytics platform with clean
              data visualization
            </div>
            <div>
              Brand Identity Flora Brand Complete branding for a sustainable
              beauty company
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="flex flex-col items-center">
            Expertise
            <h1 className="text-2xl"> What I Do Best</h1>
          </div>

          <div className="grid grid-cols-4">
            <div>
              UI/UX Design Creating intuitive interfaces that delight users
            </div>

            <div>
              Figma Sketch Adobe XD Development Building responsive, performant
              web applications
            </div>
            <div>
              React TypeScript Tailwind Brand Identity Crafting cohesive visual
              identities for brands
            </div>

            <div>
              Illustrator Photoshop InDesign Motion Design Bringing interfaces
              to life with smooth animations After Effects Framer Lottie
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="flex flex-col items-center">
            Get in Touch
            <h1 className="text-2xl">Let's Work Together </h1>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              I'm always excited to connect with new people and explore creative
              opportunities. Whether you have a project in mind or just want to
              say hello, feel free to reach out!
              <div>
                Email sophia.thapa55@gmail.com <br></br>
                Location Jhamsikhel, Lalitpur
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button className="rounded-full bg-red-400 p-2">
                Send Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
