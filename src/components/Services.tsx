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
      link: "https://vinaykumbar17.wordpress.com/", // 🔗 example link
    },
    {
      icon: Laptop,
      title: "Software Development",
      description:
        "Creating Java & Python applications with modular design and efficient problem-solving approaches",
      gradient: "from-secondary to-accent",
      features: ["Modular Architecture", "Clean Code", "Scalable Solutions"],
      link: "https://github.com/VinayKumbar17?tab=repositories&q=software", // 🔗 your software dev projects
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Implementing simple ML models for academic research and exploring foundational AI concepts",
      gradient: "from-accent to-primary",
      features: ["ML Models", "NLP", "Data Analysis"],
      link: "https://github.com/VinayKumbar17/AI-ML-Projects", // 🔗 your AI repo or notebook
    },
    {
      icon: Bug,
      title: "Project Support",
      description:
        "Providing assistance in coding, testing, debugging, and comprehensive project documentation",
      gradient: "from-primary via-secondary to-accent",
      features: ["Code Review", "Testing", "Documentation"],
      link: "https://linkedin.com/in/vinay-kumbar-0549a4388", // 🔗 contact / support page
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing neat, user-friendly web interfaces with focus on modern aesthetics and usability",
      gradient: "from-secondary to-primary",
      features: ["User-Centric", "Modern Design", "Interactive"],
      link: "https://www.figma.com/design/O11BBV4TuC8qo00QPdt7yQ/13-08-25?m=auto&t=Yq7ByLjVx1F6OQaP-6", // 🔗 or your design showcase link
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>What I Can Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What <span className="gradient-primary bg-clip-text">I Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services from web applications to AI solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-slide-up border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-smooth`}
                >
                  <service.icon className="text-white" size={32} />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* ✅ Clickable "Explore" link */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-smooth hover:underline"
                >
                  <span>Explore</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-smooth"
                  />
                </a>
              </div>

              {/* Corner decoration */}
              <div
                className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-smooth`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
