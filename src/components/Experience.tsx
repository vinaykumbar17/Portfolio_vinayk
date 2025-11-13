import { Briefcase, Calendar, User, CheckCircle2, Clock, Target, Sparkles } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-20 px-4 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-14 sm:-right-20 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-14 sm:-left-20 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full 
                          text-primary text-xs sm:text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-primary bg-clip-text">Experience</span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* MAIN EXPERIENCE CARD */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 
                          shadow-soft hover:shadow-glow transition-smooth animate-slide-up 
                          border border-border/50 overflow-hidden">

            {/* Gradient Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 
                            opacity-0 group-hover:opacity-100 transition-smooth"></div>

            <div className="relative z-10">

              {/* LOGO + TEXT ALWAYS SIDE BY SIDE */}
              <div className="flex flex-row items-start gap-4 sm:gap-6 mb-8">

                {/* Logo Block */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 gradient-primary rounded-2xl 
                                flex items-center justify-center flex-shrink-0 shadow-glow
                                group-hover:scale-110 group-hover:rotate-3 transition-smooth">
                  <Briefcase className="text-white" size={32} />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 
                                  group-hover:opacity-100 transition-smooth"></div>
                </div>

                {/* Text Block */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full 
                                  text-xs sm:text-sm font-semibold mb-3">
                    Internship
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-primary 
                                transition-smooth mb-2">
                    Full Stack Development Intern
                  </h3>

                  {/* Company Name */}
                  <p className="text-base sm:text-lg font-semibold mb-3">
                    <a
                      href="https://www.athreyatechnologies.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary underline underline-offset-4 transition"
                    >
                      Athreya Technologies Pvt. Ltd.
                    </a>
                  </p>

                  {/* Time + Mentor */}
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                    <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                      <Calendar size={16} className="text-primary" />
                      <span className="font-medium">Feb 2025 - June 2025</span>
                    </span>

                    <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                      <User size={16} className="text-primary" />
                      <span className="font-medium">
                        Mrs. Ritu Vernekar (Managing Director)
                      </span>
                    </span>
                  </div>

                </div>
              </div>

              {/* PROJECT HIGHLIGHT */}
              <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl 
                              p-5 sm:p-6 mb-6 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-secondary rounded-xl 
                                  flex items-center justify-center flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      Key Project: Virtual Classroom
                      <Sparkles className="text-primary" size={16} />
                    </h4>

                    <p className="text-muted-foreground leading-relaxed">
                      Contributed to the development of an interactive virtual classroom platform,
                      enhancing user experience and improving collaborative learning features.
                    </p>
                  </div>
                </div>
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                {/* Duration Box */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl 
                                p-5 sm:p-6 border border-border/50 hover:border-primary/50 
                                transition-smooth hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-primary" size={22} />
                    <h5 className="font-semibold">Duration</h5>
                  </div>

                  <p className="text-2xl sm:text-3xl font-bold mb-1">640 Hours</p>
                  <p className="text-sm text-muted-foreground">Hands-on Development</p>
                </div>

                {/* Focus Area Box */}
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl 
                                p-5 sm:p-6 border border-border/50 hover:border-secondary/50 
                                transition-smooth hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-secondary" size={22} />
                    <h5 className="font-semibold">Key Focus Areas</h5>
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      Frontend Development
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      Backend Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      Deployment Assistance
                    </li>
                  </ul>
                </div>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="bg-muted/30 rounded-2xl p-5 sm:p-6 border border-border/50">
                <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  Responsibilities & Learning
                </h5>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base">
                  {[
                    "Developed responsive frontend components using modern web technologies",
                    "Implemented backend API integrations for seamless data flow",
                    "Collaborated with team on deployment & optimization strategies",
                    "Gained practical experience in full-stack development lifecycle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 w-24 sm:w-28 h-24 sm:h-28 
                            bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-smooth"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
