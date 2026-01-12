import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer