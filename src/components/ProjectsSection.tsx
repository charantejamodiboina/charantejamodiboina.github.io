import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";


const projects = [
  {
    title: "Single Vendor E-Commerce Platform",
    description:
      "Designed and developed a responsive e-commerce platform with product catalog, shopping workflow, order management, and API-based backend integration.",
    tech: ["React.js", "JavaScript", "REST APIs"],
    github: "https://github.com/charantejamodiboina/django-single-vendor-ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Employee Task Tracker",
    description:
      "A task management platform that enables teams to assign tasks, track progress, and manage status updates with API-driven data synchronization.",
    tech: ["React.js", "Django REST Framework", "MySQL"],
    github: "https://github.com/charantejamodiboina/task-tracker",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    title: "Real-Time Chat System",
    description:
      "Developed an interactive chat module enabling real-time communication between users and support teams with event-driven UI updates.",
    tech: ["React.js", "Bootstrap", "JavaScript", "Firebase"],
    github: null,
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
  },
  {
    title: "Audit Management System",
    description:
      "Built a complete audit workflow interface with signature upload, validation flows, and secure API integrations to streamline audit reporting.",
    tech: ["React.js", "Bootstrap", "JavaScript",],
    github: null,
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&h=400&fit=crop",
  }
];
// {
//   title: "Portfolio Website",
//   description: "A modern, responsive portfolio website showcasing skills and projects with smooth animations and dark theme.",
//   tech: ["React", "TypeScript", "Tailwind CSS"],
//   github: "#",
//   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
// },

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Recent work I've done</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-gradient border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.github ? (
                      <Button variant="heroOutline" size="sm" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="heroOutline"
                        size="sm"
                        className="flex-1 opacity-50 cursor-not-allowed"
                        title="Source code cannot be shared because this is a company project"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Private Code
                      </Button>
                    )}
                    {/* <Button variant="hero" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button> */}
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

export default ProjectsSection;
