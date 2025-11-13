import { Code2, Laptop, Brain, Bug, Palette, Sparkles, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive websites using React.js, Node.js, and Express.js with modern frontend and backend basics",
      gradient: "from-primary to-secondary",
      features: ["Responsive Design", "Modern Tech Stack", "Performance Optimized"],
      link: "https://vinaykumbar17.wordpress.com/",
    },
    {
      icon: Laptop,
      title: "Software Development",
      description:
        "Creating Java & Python applications with modular design and efficient problem-solving approaches",
      gradient: "from-secondary to-accent",
      features: ["Modular Architecture", "Clean Code", "Scalable Solutions"],
      link: "https://github.com/VinayKumbar17?tab=repositories&q=software",
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Implementing simple ML models for academic research and exploring foundational AI concepts",
      gradient: "from-accent to-primary",
      features: ["ML Models", "NLP", "Data Analysis"],
      link: "https://github.com/VinayKumbar17/AI-ML-Projects",
    },
    {
      icon: Bug,
      title: "Project Support",
      description:
        "Providing assistance in coding, testing, debugging, and comprehensive project documentation",
      gradient: "from-primary via-secondary to-accent",
      features: ["Code Review", "Testing", "Documentation"],
      link: "https://linkedin.com/in/vinay-kumbar-0549a4388",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing neat, user-friendly web interfaces with focus on modern aesthetics and usability",
      gradient: "from-secondary to-primary",
      features: ["User-Centric", "Modern Design", "Interactive"],
      link: "https://www.figma.com/design/O11BBV4TuC8qo00QPdt7yQ/13-08-25?m=auto&t=Yq7ByLjVx1F6OQaP-6",
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 px-4 overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm 
                          rounded-full text-primary text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>What I Can Do</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What <span className="gradient-primary bg-clip-text">I Offer</span>
          </h2>

          <div className="w-20 sm:w-24 h-1 mt-6 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive development services from web applications to AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl 
                         p-6 sm:p-7 shadow-soft hover:shadow-glow hover:-translate-y-2 
                         transition-smooth animate-slide-up border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                              group-hover:opacity-5 transition-smooth`}></div>

              {/* Horizontal Layout (Icon LEFT, Text RIGHT) */}
              <div className="relative z-10 flex gap-4">

                {/* ICON */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} 
                              rounded-2xl flex items-center justify-center flex-shrink-0 
                              shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-smooth`}
                >
                  <service.icon className="text-white" size={30} />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">

                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-foreground
                                   border border-border/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Explore Link */}
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 
                               group-hover:opacity-100 transition-smooth hover:underline"
                  >
                    <span>Explore</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                  </a>
                </div>
              </div>

              {/* Decorative Glow */}
              <div
                className={`absolute -bottom-3 -right-3 w-20 sm:w-24 h-20 sm:h-24 
                            bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20 
                            group-hover:opacity-30 transition`}
              ></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
