
import { Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "N-Queen Visualizer",
    description: "Built a web-based visual tool to demonstrate the N-Queen backtracking algorithm, helping users understand this classic computer science problem through interactive visualization.",
    repo: "https://github.com/amritmishra82/n-queen-visualizer",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Food Delivery System in C",
    description: "Console application for placing orders, viewing menus, and generating receipts using C. Features include user authentication, admin panel, and detailed order management.",
    repo: "https://github.com/amritmishra82/food-delivery-c",
    tech: ["C", "Data Structures"]
  }
];

export function ProjectsSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-card animate-fade-in"
            style={{ animationDelay: `${index * 200 + 300}ms` }}
          >
            <h3 className="text-xl font-bold text-portfolio-purple mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-portfolio-light rounded-full text-sm text-portfolio-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Button variant="outline" className="inline-flex items-center gap-2 mt-2" asChild>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> 
                <span>View on GitHub</span>
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
