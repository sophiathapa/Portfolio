import { FaFigma, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <section className="relative px-15 py-24  bg-secondary overflow-hidden">
      <div className="absolute inset-0 blur-3xl bg-pink-800 opacity-30"></div>

      <div className=" relative grid grid-cols-2  z-10">
        <div className="flex items-center justify-center ">
          <div className="p-10">
            <img src="quote.png"></img>
          </div>
        </div>

        <div className="flex flex-col  gap-12 p-10">
          <div className=" text-start">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              ABOUT <span className="text-primary">ME</span>
            </h2>
          </div>

          <div className="bg-primary w-120 p-6 text-black font-display text-lg font-medium rounded-3xl shadow-xl ">
            <p>
              I'm a frontend developer crafting experiences where creativity
              meets technology. I turn ideas into visually striking, responsive,
              and interactive interfaces that don't just work they feel right.
            </p>
            <p>
              Blending clean code with strong UI design, I focus on details,
              motion, and usability to build modern web experiences that stand
              out and leave an impact.
            </p>
          </div>

          <div className="">
            <div className="text-white font-display text-lg font-medium">
              Technical Skills
            </div>
            <div className="flex mt-10 gap-6">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <IoLogoJavascript className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <FaReact className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <SiExpress className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <FaNodeJs className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <SiMongodb className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <FaPython className="text-black text-4xl" />
              </div>
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <FaFigma className="text-black text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
