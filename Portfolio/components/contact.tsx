import React from 'react'

const Contact = () => {
  return (
       <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wide">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-foreground">
              Let's <span className="text-primary">Work Together</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with new people and explore creative
                opportunities. Whether you have a project in mind or just want to
                say hello, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    {/* <Mail className="w-5 h-5 text-primary" /> */}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">sophia.thapa55@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-matcha-light flex items-center justify-center">
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Jhamsikhel, Lalitpur</p>
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact