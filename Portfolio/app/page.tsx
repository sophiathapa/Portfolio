"use client";
import About from "@/components/About";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen text-secondary bg-primary">
      <Navbar />
      <main className="">
        <Header />
        <About/>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
