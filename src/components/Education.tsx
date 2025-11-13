import { GraduationCap, Award, Calendar, TrendingUp } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science & Engineering (AI & ML)",
      institution: "KLS Vishwanathrao Deshpande Institute of Technology, Haliyal",
      period: "2023 - 2026",
      score: "CGPA: 8.44",
      color: "primary",
      link: "https://klsvdit.edu.in/",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "K.H. Kabbur Institute of Engineering, Dharwad",
      period: "2021 - 2023",
      score: "71.74%",
      color: "secondary",
      link: "https://www.khkie.co.in/",
    },
    {
      degree: "Secondary Education",
      institution: "St. Theresa English Medium School, Alnavar",
      period: "2016 - 2020",
      score: "83.84%",
      color: "accent",
    },
  ];

  const colorMap: Record<string, string> = {
    primary: "from-primary to-primary bg-primary text-primary bg-primary/10",
    secondary: "from-secondary to-secondary bg-secondary text-secondary bg-secondary/10",
    accent: "from-accent to-accent bg-accent text-accent bg-accent/10",
  };

  return (
    <section id="education" className="relative py-16 sm:py-20 px-4 bg-muted/30 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-16 left-5 w-40 sm:w-64 md:w-72 h-40 sm:h-64 md:h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-5 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-xs sm:text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Educational Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Academic <span className="gradient-primary bg-clip-text">Journey</span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative">

          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-glow"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-16 last:mb-0 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block group bg-card/50 backdrop-blur-sm rounded-3xl
                  p-6 sm:p-8 shadow-soft transition-smooth border border-border/50
                  hover:shadow-glow hover:-translate-y-1 cursor-pointer

                  /* MOBILE (cards full width) */
                  ml-12 pl-4 pr-4 max-w-full

                  /* DESKTOP (zigzag) */
                  sm:ml-0
                  ${index % 2 === 0 ? "sm:pr-1/2 sm:text-right" : "sm:pl-1/2 sm:ml-auto"}
                `}
              >
                {/* Timeline dot */}
                <div
                  className={`
                    absolute left-6 sm:left-1/2 top-10 w-6 h-6 rounded-full 
                    bg-gradient-to-br ${colorMap[edu.color]}
                    transform -translate-x-1/2 ring-4 ring-background shadow-glow
                    group-hover:scale-125 transition-smooth
                  `}
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                </div>

                {/* Content */}
                <div className={`flex flex-col sm:flex-row items-start gap-6 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                  
                  {/* Icon */}
                  <div
                    className={`
                      relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center
                      shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth
                      bg-gradient-to-br ${colorMap[edu.color]}
                    `}
                  >
                    <GraduationCap className="text-white" size={28} />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-3">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${edu.color}/10 text-${edu.color}`}>
                      {index === 0 ? "Current" : "Completed"}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-smooth">
                      {edu.degree}
                    </h3>

                    <p className="text-muted-foreground font-medium">{edu.institution}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} className="text-primary" />
                        {edu.period}
                      </span>

                      <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                        <Award size={16} className="text-primary" />
                        <span className="font-bold text-foreground">{edu.score}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glow decoration */}
                <div
                  className={`
                    absolute -bottom-2 
                    ${index % 2 === 0 ? "sm:-left-2" : "sm:-right-2"}
                    -right-2 w-14 sm:w-20 h-14 sm:h-20 
                    bg-${edu.color}/10 rounded-full blur-xl 
                    group-hover:bg-${edu.color}/20 transition-smooth
                  `}
                ></div>

              </a>
            </div>
          ))}

        </div>

        {/* Academic Excellence */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 
                        rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-border/50 
                        shadow-soft animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="text-primary" size={24} />
            <h3 className="text-xl sm:text-2xl font-bold">Academic Excellence</h3>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Consistent academic performance throughout my educational journey, specializing in 
            Computer Science with a focus on AI and Machine Learning technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
