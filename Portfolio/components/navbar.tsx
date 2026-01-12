import React from 'react'

const Navbar = () => {
  return (
    
    <nav className=" fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-between p-5">
          <span className=" text-secondary1 text-2xl font-display font-bold">
            Portfolio
          </span>
          <div className="flex gap-10 text-l ">
            <span>About</span>
            <span>Projects</span>
            <span>Skills</span>
            <span>Contact</span>
          </div>
        </div>
      </nav>
  )
}

export default Navbar