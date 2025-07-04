import { ShoppingCart, CheckSquare, BarChart3, ExternalLink, Github } from "lucide-react"
import { Project } from "../lib/types"

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    icon: "shopping_cart",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Responsive web application for project management with real-time collaboration features.",
    technologies: ["Angular", "Laravel", "Oracle", "CSS3"],
    icon: "task_alt",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Interactive dashboard with data visualization and analytics built with modern frameworks.",
    technologies: ["Vue.js", "PHP", "JavaScript", "Bootstrap"],
    icon: "dashboard",
    liveDemo: "#",
    github: "#",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "shopping_cart":
      return <ShoppingCart size={64} />
    case "task_alt":
      return <CheckSquare size={64} />
    case "dashboard":
      return <BarChart3 size={64} />
    default:
      return <BarChart3 size={64} />
  }
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-animate">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{getIcon(project.icon)}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link">
                    <ExternalLink size={16} style={{ marginRight: "5px" }} />
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link">
                    <Github size={16} style={{ marginRight: "5px" }} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
