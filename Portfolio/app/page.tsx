import { ExperienceSection } from "@/components/experience-section";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";
import Skills from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Header />
        <ProjectsSection />
        <ExperienceSection />
        <Skills/>
        <ContactSection />
        <Footer />
    </div>
  );
}
