import { Code, Database, Brain, Wrench, Users, Sparkles, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Java", "JavaScript", "Python", "HTML", "CSS"],
      gradient: "from-primary to-secondary",
      level: "Advanced"
    },
    {
      icon: Code,
      title: "Web Technologies",
      skills: ["React.js", "Node.js", "Express.js"],
      gradient: "from-secondary to-accent",
      level: "Intermediate"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      gradient: "from-accent to-primary",
      level: "Intermediate"
    },
    {
      icon: Brain,
      title: "AI & ML",
      skills: ["Foundational Concepts", "Basic Model Building", "NLP"],
      gradient: "from-primary via-secondary to-accent",
      level: "Learning"
    },
    {
      icon: Wrench,
      title: "Software Concepts",
      skills: ["SDLC", "Data Structures", "Debugging", "Version Control"],
      gradient: "from-secondary to-primary",
      level: "Advanced"
    },
    {
      icon: Users,
      title: "Core Strengths",
      skills: ["Logical Thinking", "Adaptability", "Teamwork", "Curiosity", "Problem Solving"],
      gradient: "from-accent via-primary to-secondary",
      level: "Expert"
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 bg-muted/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Technical Abilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="gradient-primary bg-clip-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning full-stack development, AI/ML, and essential software engineering concepts
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-slide-up border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>
              
              <div className="relative z-10">
                {/* Icon with enhanced gradient */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-smooth`}>
                    <category.icon className="text-white" size={26} />
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${category.gradient} bg-opacity-10 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                    {category.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">{category.title}</h3>
                
                {/* Skills with enhanced styling */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-muted/50 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-smooth cursor-default border border-border/50 hover:border-transparent hover:scale-105 hover:shadow-soft"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner glow */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-smooth`}></div>
              
              {/* Sparkle effect on hover */}
              <Sparkles className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-smooth animate-pulse" size={16} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
