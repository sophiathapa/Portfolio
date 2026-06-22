"use client";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/splash";
import Header from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import Skills from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("splashDone") === "true";
    setSplashDone(already);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !splashDone) return;

    const hash = window.location.hash;
    if (!hash) return;

    // Small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [hydrated, splashDone]);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashDone", "true");
    setSplashDone(true);
  };

  // Don't render anything until we've checked sessionStorage
  if (!hydrated) return null;
  
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
            <SplashScreen onComplete={handleSplashComplete}/>
          )
        }
    </div>
  );
}