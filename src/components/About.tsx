import { Code2, Lightbulb, Target, Heart, Quote, Sparkles } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Target,
      title: "Determined",
      description: "Committed to achieving goals with persistence and focus",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Lightbulb,
      title: "Curious",
      description: "Always eager to learn and explore new technologies",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Code2,
      title: "Passionate Learner",
      description: "Continuously improving skills and embracing challenges",
      gradient: "from-accent to-primary"
    },
    {
      icon: Heart,
      title: "Creative",
      description: "Blending technology with artistic expression",
      gradient: "from-primary via-secondary to-accent"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-10 sm:-left-20 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 sm:-right-20 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Get to Know Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">
            My <span className="gradient-primary bg-clip-text">Journey</span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Card */}
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft border border-border/50 mb-12 animate-slide-up hover:shadow-glow transition-smooth">
            <div className="absolute -top-4 -left-4 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 gradient-primary rounded-2xl flex items-center justify-center rotate-12 shadow-glow">
              <Quote className="text-white" size={26} />
            </div>

            <div className="space-y-5 sm:space-y-6 pt-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Hey there! I'm <span className="text-primary font-semibold">Vinay Kumbar</span> — a final-year Computer Science and Engineering (AI & ML) student who loves learning, creating, and improving a little more each day.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey started with a Diploma in Computer Science, where I discovered my passion for technology and problem-solving. This foundation led me to specialize in AI & ML during my B.E., diving deeper into the fascinating world of artificial intelligence and machine learning.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Beyond code, I'm inspired by filmmaking and storytelling — believing that every line of code and every frame tells a story. This creative perspective shapes how I approach both technical challenges and innovative solutions.
              </p>
            </div>

            {/* Decorative gradient line */}
            <div className="mt-6 sm:mt-8 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>

          {/* Traits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <div
                key={trait.title}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-slide-up border border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${trait.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${trait.gradient} rounded-xl flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth`}
                  >
                    <trait.icon className="text-white" size={22} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {trait.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 w-12 sm:w-16 h-12 sm:h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-smooth"></div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-14 sm:mt-16 relative">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 sm:p-10 md:p-12 backdrop-blur-sm border border-border/50 shadow-soft">
              <div className="text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12 gradient-secondary rounded-full flex items-center justify-center shadow-glow">
                  <Sparkles className="text-white animate-pulse" size={20} />
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic text-foreground pt-4">
                  "Every line of code and every frame I dream of tells a story."
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
