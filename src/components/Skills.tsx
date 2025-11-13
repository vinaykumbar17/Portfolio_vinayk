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
    <section id="skills" className="relative py-16 sm:py-20 px-4 bg-muted/30 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-6 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-6 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full 
                          text-primary text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Technical Abilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-primary bg-clip-text">Expertise</span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-4"></div>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A diverse skill set spanning full-stack development, AI/ML, and essential software engineering concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-5 sm:p-6 
                         shadow-soft border border-border/50 hover:shadow-glow hover:-translate-y-2 
                         transition-smooth animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 
                              group-hover:opacity-5 transition-smooth`}></div>

              <div className="relative z-10 flex gap-4">

                {/* Icon Block (LEFT SIDE ALWAYS) */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.gradient} 
                              rounded-2xl flex-shrink-0 flex items-center justify-center shadow-soft
                              group-hover:scale-110 group-hover:rotate-6 transition-smooth`}
                >
                  <category.icon className="text-white" size={26} />
                </div>

                {/* Text Block (RIGHT SIDE ALWAYS) */}
                <div className="flex-1">
                  
                  {/* Level Badge */}
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white/80 
                                rounded-full text-xs font-semibold inline-block mb-2 backdrop-blur-sm`}
                  >
                    {category.level}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-muted/50 backdrop-blur-sm rounded-lg text-sm font-medium 
                                   border border-border/50 hover:bg-gradient-to-r hover:from-primary hover:to-secondary 
                                   hover:text-white hover:border-transparent hover:scale-105 hover:shadow-soft 
                                   transition-smooth cursor-default"
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Decorative Glow */}
              <div
                className={`absolute -bottom-3 -right-3 w-16 sm:w-20 h-16 sm:h-20 
                            bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-20 
                            group-hover:opacity-30 transition`}
              ></div>

              <Sparkles
                className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 
                           transition-smooth animate-pulse"
                size={16}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
