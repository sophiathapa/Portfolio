"use client";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";

const contactInfo = [
    { icon: Mail, value: "sophia.thapa55@gmail.com" },
    { icon: Phone, value: "9869686538" },
    { icon: MapPin, value: "Lalitpur, Nepal" }
];

const resumeDetails = [
  {
    label: "File Size",
    value: "75.2 kB",
  },
  {
    label: "Pages",
    value: "2 Pages",
  },
  {
    label: "Last Updated",
    value: "June 2026",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="py-24">
        <div className="max-w-8xl mx-auto px-15">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="text-5xl text-primary sm:text-6xl text-center font-bold mt-4 mb-6">
            My Resume
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center text-lg mb-10">
            Download or view my professional resume to learn more about my skills, experience, and qualifications.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <motion.a
                href="/Sophia_Resume.pdf"
                download="/Sophia_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6}}
                className="flex justify-center items-center gap-3 bg-primary/60 rounded-lg p-2 w-55 h-15 border-primary/50 hover:scale-105 transition-all font-sm"
                >
                <Download className="w-8 h-8" />
                Download Resume
            </motion.a>
            <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6}}
                onClick={() => window.open("Sophia_Resume.pdf", "_blank")}
                className="flex justify-center items-center gap-3 bg-primary/60 rounded-lg p-2 w-55 h-15 hover:scale-105 border-primary/50 transition-all font-sm"
            >
               <ExternalLink className="w-8 h-8" /> Open On New Tab
            </motion.button>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-5 md:bg-card md:border-1 md:border-card-border/30 rounded-md mt-20 md:p-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 bg-card border-2 border-card-border/30 rounded-md p-5 md:p-10">
                <h2 className="text-xl font-semibold text-primary">Contact Info</h2>
                {contactInfo?.map((info, index) => (
                  <div key={index} className="flex flex-row gap-3 items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs">{info.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 bg-card border-2 border-card-border/30 rounded-md p-10">
                <h2 className="text-xl font-semibold text-primary">Resume Details</h2>
                {resumeDetails?.map((info, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <span className="text-sm">
                      {info.label}: {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center bg-card border-2 border-card-border/30 rounded-md p-10 overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">Resume Preview</h2>
              <object data="Sophia_Resume.pdf" type="application/pdf" height="700px" className="mx-auto w-[200px] sm:w-[500px] md:w-[700px] lg:w-[900px] border-2 border-card-border/30 rounded-md">
                <p>
                  Your browser does not support PDFs.{" "}
                  <a href="Sophia_Resume.pdf" className="text-primary underline">
                    Download the resume
                  </a>
                  .
                </p>
              </object>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Resume;
