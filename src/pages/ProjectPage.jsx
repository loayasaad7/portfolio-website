import { ArrowLeft, Code2, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ScreenshotGallery } from '../components/ScreenshotGallery'
import { projects } from '../data/projects'

function DetailBlock({ title, items }) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <Link className="back-link" to="/">
            <ArrowLeft size={18} aria-hidden="true" /> Back to portfolio
          </Link>
          <h1>Project not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="container project-hero-grid">
          <div>
            <Link className="back-link" to="/#projects">
              <ArrowLeft size={18} aria-hidden="true" /> Back to projects
            </Link>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
            <p className="hero-title">{project.tagline}</p>
            <p className="hero-intro">{project.overview}</p>
            <div className="hero-actions">
              {project.links.live && (
                <a className="button primary" href={project.links.live} target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
              {project.links.github && (
                <a className="button primary" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub <Code2 size={18} aria-hidden="true" />
                </a>
              )}
              <a className="button secondary" href="/#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="project-hero-card">
            <p className="summary-label">Tech Stack</p>
            <div className="badge-row">
              {project.techStack.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScreenshotGallery images={project.images} />
        </div>
      </section>

      <section className="section light-section">
        <div className="container project-overview-grid">
          <article className="overview-card">
            <h2>Problem / Purpose</h2>
            <p>{project.purpose}</p>
          </article>
          <article className="overview-card">
            <h2>My Role</h2>
            <p>{project.role}</p>
          </article>
          <article className="overview-card wide">
            <h2>What Makes It Strong</h2>
            <p>{project.challenges.join(' ')}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <DetailBlock title="Main Features" items={project.features} />
          <DetailBlock title="Admin / Operational Features" items={project.adminFeatures} />
          <DetailBlock title="Technical Architecture" items={project.architecture} />
          <DetailBlock title="Key Highlights" items={project.highlights} />
        </div>
      </section>

      <section className="section compact-section">
        <div className="container next-projects">
          <h2>More Projects</h2>
          <div className="case-study-links">
            {projects
              .filter((item) => item.slug !== project.slug)
              .map((item) => (
                <Link key={item.slug} to={`/projects/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
