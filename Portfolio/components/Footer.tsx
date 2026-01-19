import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-semibold text-secondary">
            Portfolio
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sophiathapa/"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FaLinkedinIn className="text-secondary text-3xl" />
            </a>
            <a
              href="https://github.com/sophiathapa"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <IoLogoGithub className="text-secondary text-3xl" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
