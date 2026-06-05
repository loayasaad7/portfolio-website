import { ArrowRight, Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
      </div>

      <div className="badge-row">
        {project.techStack.slice(0, 6).map((tech) => (
          <span className="badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="card-actions">
        <Link className="button primary small" to={`/projects/${project.slug}`}>
          View Case Study <ArrowRight size={16} aria-hidden="true" />
        </Link>
        {project.links.live && (
          <a className="button ghost icon-only" href={project.links.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        )}
        {project.links.github && (
          <a className="button ghost icon-only" href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
            <Code2 size={18} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
