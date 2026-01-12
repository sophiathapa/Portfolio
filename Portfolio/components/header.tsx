import React from 'react'

const Header = () => {
  return (
     <section id="landPage" className=" relative min-h-screen overflow-hidden">
         
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 w-200 h-full size-18 rounded-full bg-radial from-pink-500 from-40% to-green-500"></div> */}

            <div className="relative flex flex-col items-center p-5 z-10 mt-15">
              <span className="  text-l mb-8">Hello, I'm</span>
              <h1 className=" text-7xl font-bold flex flex-col  " style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
                Full Stack
                <span className="text-[#78A2D2] mt-5 ">Developer</span>
              </h1>
              <div className="text-center  text-xl mt-8">
                Crafting beautiful digital experiences with a passion for
                minimal <br></br>
                design and meaningful interactions.
              </div>
              <div className="flex gap-10 p-5 mt-10">
                <button className=" bg-[#810A24] text-secondary rounded-full p-3 ">
                  View My Work
                </button>
                <button className="bg-[#78A2D2] text-secondary rounded-full p-3">
                  Get in Touch
                </button>
              </div>
            </div>
         
        </section>
  )
}

export default Header