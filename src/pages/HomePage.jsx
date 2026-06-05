import { ArrowRight, Code2, Download, Mail, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { ScreenshotGallery } from '../components/ScreenshotGallery'
import { featuredTech, projects, skills } from '../data/projects'

const pdfPath = '/docs/Loay_Asaad_Portfolio_Projects_Detailed.pdf'

export function HomePage() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Full-stack products, mobile apps, backend systems</p>
            <h1>Loay Asaad</h1>
            <p className="hero-title">Full-Stack & Mobile Developer</p>
            <p className="hero-intro">
              I build complete real-world applications from mobile apps and web frontends to backend APIs, admin dashboards,
              authentication, databases, real-time features, and deployment-ready product flows.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#contact">
                Contact Me <Mail size={18} aria-hidden="true" />
              </a>
              <a className="button ghost" href={pdfPath} download>
                Portfolio PDF <Download size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="tech-strip" aria-label="Core technologies">
              {featuredTech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Portfolio summary">
            <div className="summary-card main-summary">
              <p className="summary-label">Product Range</p>
              <h2>6 complete project stories</h2>
              <p>Education, driving, prayer times, real-time quizzes, AI data tools, and cinema operations.</p>
            </div>
            <div className="summary-grid">
              <div className="summary-card">
                <strong>Mobile</strong>
                <span>Flutter, widgets, notifications, subscriptions</span>
              </div>
              <div className="summary-card">
                <strong>Backend</strong>
                <span>Spring Boot, Node.js, JWT, WebSocket APIs</span>
              </div>
              <div className="summary-card">
                <strong>Admin</strong>
                <span>Dashboards for content, users, reports, offers</span>
              </div>
              <div className="summary-card">
                <strong>Data</strong>
                <span>PostgreSQL, Firebase, MySQL, SQLite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="Featured work" title="Projects Built Like Products">
            Each project is presented as a working system with users, workflows, backend logic, data, and operational controls.
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Product surfaces</p>
            <h2>Mobile, admin, backend, and dashboard views</h2>
            <p>
              Each project includes a visual area for the product surfaces that matter most: user apps, admin panels, dashboards,
              real-time rooms, analytics, and management workflows.
            </p>
          </div>
          <ScreenshotGallery images={projects[0].images} />
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="Technical stack" title="Skills Across the Product Stack">
            The strongest theme across the work is complete product delivery: interfaces, secure APIs, data modeling, dashboards,
            notifications, purchases, and real-time behavior.
          </SectionHeading>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <article className="skill-card" key={skillGroup.group}>
                <h3>{skillGroup.group}</h3>
                <div className="badge-row">
                  {skillGroup.items.map((skill) => (
                    <span className="badge" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section" id="about">
        <div className="container about-section">
          <div>
            <p className="eyebrow">About</p>
            <h2>Practical software, not only screens</h2>
          </div>
          <div className="about-copy">
            <p>
              I am a Full-Stack and Mobile Developer focused on building practical software products. My projects include
              educational platforms, real-time quiz systems, prayer-time applications, driving education tools, AI-powered data
              exploration, and management systems.
            </p>
            <p>
              I am a Computer Science graduate from the University of Haifa.
            </p>
            <p>
              I enjoy working across the full stack, from clean user interfaces to secure APIs, databases, admin dashboards,
              authentication, real-time communication, payments, notifications, and deployment-ready architectures.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's talk about full-stack product work</h2>
            <p>
              Available for roles and projects involving mobile apps, backend systems, admin dashboards, and real product workflows.
              You can reach me directly at <a href="mailto:loai.isam.asaad@gmail.com">loai.isam.asaad@gmail.com</a>.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:loai.isam.asaad@gmail.com" aria-label="Write email to loai.isam.asaad@gmail.com">
              Write Email <Send size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <Code2 size={18} aria-hidden="true" />
            </a>
            <a className="button ghost" href="https://www.linkedin.com/in/loay-asaad/" target="_blank" rel="noreferrer">
              LinkedIn <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container next-projects">
          <h2>Explore Projects</h2>
          <div className="case-study-links">
            {projects.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.slug}>
                {project.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

