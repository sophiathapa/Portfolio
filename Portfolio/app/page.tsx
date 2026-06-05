import { ExperienceSection } from "@/components/experience-section";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation";
import Header from "@/components/header";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Header />
        <ExperienceSection />
        <ContactSection />
        <Footer />
    </div>
  );
}
