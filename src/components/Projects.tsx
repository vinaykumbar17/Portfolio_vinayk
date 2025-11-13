import { Brain, Wallet, ExternalLink, Calendar, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Agentic AI for Video Summarization",
      description:
        "AI system that summarizes videos and generates subtitles using NLP + machine learning.",
      period: "Feb 2025 – Nov 2025",
      status: "Major Project",
      technologies: ["Python", "NLP", "AI Frameworks", "ML"],
      gradient: "from-primary to-secondary",
      highlights: ["NLP Integration", "Subtitle Generation", "Automated Processing"],
    },
    {
      icon: Wallet,
      title: "Student Budget Tracker",
      description:
        "A clean budgeting tool helping students track expenses and analyze monthly finances.",
      period: "Jan 2024 – Feb 2024",
      status: "Hackathon Project",
      technologies: ["React", "JS", "Node.js", "Database"],
      gradient: "from-secondary to-accent",
      highlights: ["Expense Tracking", "Analytics Dashboard", "Budget Management"],
    },
  ];

  return (
    <section id="projects" className="relative py-16 px-4 bg-muted/30 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-4">
            <GitBranch className="w-4 h-4" />
            <span>My Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-primary bg-clip-text">Projects</span>
          </h2>

          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:-translate-y-1 transition-smooth relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}
              ></div>

              {/* ✔ TOP: ICON + TITLE SIDE BY SIDE */}
              <div className="flex items-start gap-4 mb-3">

                {/* ICON */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-smooth flex-shrink-0`}
                >
                  <project.icon size={32} className="text-white" />
                </div>

                {/* TITLE + STATUS + DATE */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 flex-wrap mt-1 text-xs sm:text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold text-xs">
                      {project.status}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {project.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              {/* HIGHLIGHTS */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-medium"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/50 border border-border/50 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <Button variant="outline" className="group/btn mt-1">
                View Details
                <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-smooth" />
              </Button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
