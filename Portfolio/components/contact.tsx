import React from "react";
import { FaFigma } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-primary">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wide">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 ">
              Let's <span className="text-primary">Work Together</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="">
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with new people and explore
                creative opportunities. Whether you have a project in mind or
                just want to say hello, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    {/* <Mail className="w-5 h-5 text-primary" /> */}
                  </div>
                  <div className="flex gap-5">
                    <div className="w-11 rounded-xl bg-primary flex items-center justify-center">
                      <TfiEmail className="text-secondary text-3xl" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">
                        sophia.thapa55@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-matcha-light flex items-center justify-center"></div>
                  <div className="flex gap-5">
                    <div className="w-11 rounded-xl bg-primary flex items-center justify-center">
                      <IoLocationOutline className="text-secondary text-3xl" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        Jhamsikhel, Lalitpur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 p-5 bg-primary rounded-xl placeholder:text-secondary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 p-5 bg-primary placeholder:text-secondary rounded-xl"
                />
                <textarea
                  placeholder="Message"
                  className="w-full h-25 pt-3 px-5 bg-primary rounded-xl placeholder:text-secondary resize-none"
                />
                <button className="w-full h-12 bg-primary rounded-xl text-secondary">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
