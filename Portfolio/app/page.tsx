"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/splash";
import Header from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import Skills from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="min-h-screen">
        {
          splashDone ? (
            <>
              <Header />
              <ProjectsSection />
              <ExperienceSection />
              <Skills/>
              <ContactSection />
              <Footer />
            </>
          ) : (
            <SplashScreen onComplete={()=>setSplashDone(true)}/>
          )
        }
    </div>
  );
}