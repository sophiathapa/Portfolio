import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="flex justify-between px-5 py-2">
          <span className=" text-secondary text-2xl font-display font-bold">
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