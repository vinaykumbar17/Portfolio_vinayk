import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2, Sparkles, Award, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const stats = [
    { value: "8.44", label: "CGPA", icon: Award },
    { value: "640+", label: "Hours Internship", icon: Code2 },
    { value: "2+", label: "Projects", icon: Sparkles },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-5 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-5 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Available for Opportunities</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="gradient-primary bg-clip-text inline-block hover:scale-105 transition-smooth cursor-default">
                  Vinay Kumbar
                </span>
              </h1>

              <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
                <div className="h-px w-12 bg-border"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold">
                  Aspiring Software Engineer
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm">
              <span className="px-4 py-2 bg-card rounded-full border border-border shadow-soft">
                🤖 AI & ML Enthusiast
              </span>
              <span className="px-4 py-2 bg-card rounded-full border border-border shadow-soft">
                💻 Full Stack Developer
              </span>
              <span className="px-4 py-2 bg-card rounded-full border border-border shadow-soft">
                🎨 Creative Problem Solver
              </span>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Final-year Computer Science and Engineering student specializing in AI & ML,
              dedicated to creating innovative solutions and continuously learning.
              Blending technology with creativity to build meaningful projects.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-primary/50 transition-smooth hover:-translate-y-1 shadow-soft text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="text-primary mb-2 mx-auto" size={20} />
                  <div className="text-xl sm:text-2xl font-bold bg-clip-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="text-white border-0 shadow-glow hover:scale-105 transition-smooth group"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>

              <a href="/Vinay_Kumbar_CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-primary hover:text-white transition-smooth group"
                >
                  <Download className="mr-2 group-hover:scale-110 transition-smooth" size={20} />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Quick Contact */}
            <div className="flex justify-center lg:justify-start items-center gap-3 pt-2">
              <span className="text-sm text-muted-foreground">Quick contact:</span>
              <a
                href="mailto:vinaykumbar17@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-primary transition-smooth group"
              >
                <Mail size={16} className="text-primary" />
                <span className="text-sm group-hover:text-primary transition-smooth">
                  vinaykumbar17@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full flex justify-center animate-slide-up lg:animate-float">
            <div className="relative z-10 w-64 sm:w-80 md:w-full max-w-md">
              <div className="gradient-hero rounded-[2.5rem] p-1 shadow-glow">
                <div className="bg-background rounded-[2.2rem] p-3 sm:p-4">
                  <img
                    src={profilePicture}
                    alt="Vinay Kumbar - Portfolio"
                    className="rounded-[2rem] w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 left-0 sm:-left-6 z-20 animate-float">
                <div className="bg-card backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-glow border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Code2 className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-sm sm:text-lg font-bold">AI & ML</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Specialist</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 right-0 sm:-right-6 z-20 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-card backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-glow border border-secondary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-xl flex items-center justify-center">
                      <Sparkles className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-sm sm:text-lg font-bold">Creative</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Innovator</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -top-6 -right-6 w-20 sm:w-28 h-20 sm:h-28 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div className="absolute top-1/2 -right-10 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
