import { GraduationCap, Award, Calendar, TrendingUp } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science & Engineering (AI & ML)",
      institution: "KLS Vishwanathrao Deshpande Institute of Technology, Haliyal",
      period: "2023 - 2026",
      score: "CGPA: 8.44",
      color: "primary",
      link: "https://klsvdit.edu.in/", // 👈 Replace or keep
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "K.H. Kabbur Institute of Engineering, Dharwad",
      period: "2021 - 2023",
      score: "71.74%",
      color: "secondary",
      link: "https://www.khkie.co.in/", // 👈 Replace or keep
    },
    {
      degree: "Secondary Education",
      institution: "St. Theresa English Medium School, Alnavar",
      period: "2016 - 2020",
      score: "83.84%",
      color: "accent",
    },
  ];

  return (
    <section id="education" className="relative py-20 px-4 bg-muted/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Educational Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Academic <span className="gradient-primary bg-clip-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-glow"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 animate-slide-up ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Clickable Card */}
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-card/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-smooth ml-16 md:ml-0 border border-border/50 hover:border-primary/50 transform hover:-translate-y-1 cursor-pointer"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 top-10 w-6 h-6 rounded-full bg-gradient-to-br from-${edu.color} to-${edu.color} transform -translate-x-1/2 ring-4 ring-background shadow-glow group-hover:scale-125 transition-smooth`}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  </div>

                  {/* Card Content */}
                  <div className={`flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br from-${edu.color} to-${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth`}
                    >
                      <GraduationCap className="text-white" size={28} />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div
                        className={`inline-block px-3 py-1 bg-${edu.color}/10 text-${edu.color} rounded-full text-xs font-semibold`}
                      >
                        {index === 0 ? "Current" : "Completed"}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm flex-wrap">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} className="text-primary" />
                          <span className="font-medium">{edu.period}</span>
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                          <Award size={16} className="text-primary" />
                          <span className="font-bold text-foreground">{edu.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div
                    className={`absolute -bottom-2 ${
                      index % 2 === 0 ? "md:-left-2" : "md:-right-2"
                    } -right-2 w-20 h-20 bg-${edu.color}/10 rounded-full blur-xl group-hover:bg-${edu.color}/20 transition-smooth`}
                  ></div>
                </a>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-border/50 shadow-soft animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Academic Excellence</h3>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Consistent academic performance throughout my educational journey, specializing in Computer Science with
              a focus on Artificial Intelligence and Machine Learning technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
