import { Brain, Wallet, Users, ExternalLink, Calendar, Sparkles, GitBranch, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Agentic AI for Automated Video Summarization",
      description: "AI-powered system to automatically summarize videos and generate accurate subtitles using advanced NLP and AI frameworks",
      period: "Feb 2025 - Nov 2025",
      status: "Major Project",
      teamSize: 4,
      mentor: "Professor Ravindra Patil",
      technologies: ["Python", "NLP", "AI Frameworks", "Machine Learning"],
      gradient: "from-primary to-secondary",
      highlights: ["Automated Processing", "NLP Integration", "Subtitle Generation"]
    },
    {
      icon: Wallet,
      title: "Student Budget Tracker",
      description: "User-friendly budgeting application designed to help students manage their finances and track spending effectively",
      period: "Jan 2024 - Feb 2024",
      status: "Hackathon Project",
      event: "Avinya Hackathon 2024",
      technologies: ["JavaScript", "React", "Node.js", "Database"],
      gradient: "from-secondary to-accent",
      highlights: ["Budget Management", "Expense Tracking", "Analytics Dashboard"]
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" />
            <span>My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-primary bg-clip-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative projects showcasing technical expertise and creative problem-solving
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-glow transition-smooth animate-slide-up border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-smooth`}>
                    <project.icon className="text-white" size={48} />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold`}>
                          {project.status}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          {project.period}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-smooth">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {project.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span key={highlight} className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-xs font-medium">
                            ✓ {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-medium border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="group/btn">
                      View Details
                      <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-smooth" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
