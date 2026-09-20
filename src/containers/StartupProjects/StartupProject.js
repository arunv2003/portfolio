import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  const projects = bigProjects.projects;

  return (
    <section className={`projects-section ${isDark ? "dark-projects" : "light-projects"}`} id="projects">
      <div className="projects-container-main">
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">Production Portfolio</span>
            <h2 className="section-title">{bigProjects.title}</h2>
            <p className="section-subtitle">{bigProjects.subtitle}</p>
          </div>
        </Fade>

        <div className="projects-grid">
          {projects.map((project, i) => {
            return (
              <Fade bottom duration={750} delay={i * 80} key={i}>
                <div className="modern-project-card">
                  <div className="card-top-header">
                    <div className="project-badge">
                      <i className="fas fa-layer-group"></i> {project.badge || "Full Stack Application"}
                    </div>
                    <div className="card-controls">
                      <span className="mini-dot"></span>
                      <span className="mini-dot"></span>
                      <span className="mini-dot"></span>
                    </div>
                  </div>

                  <h3 className="project-heading">{project.projectName}</h3>
                  <p className="project-summary">{project.projectDesc}</p>

                  {/* Main Features */}
                  {project.features && (
                    <div className="features-list-wrapper">
                      <h4 className="features-subheading">
                        <i className="fas fa-check-double"></i> Key Features:
                      </h4>
                      <ul className="features-list">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="feature-item">
                            <span className="bullet-icon">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  {project.techStack && (
                    <div className="tech-stack-row">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  {project.footerLink && (
                    <div className="project-actions-row">
                      {project.footerLink.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`action-btn ${
                            link.name.toLowerCase().includes("live") ||
                            link.name.toLowerCase().includes("demo") ||
                            link.name.toLowerCase().includes("overview")
                              ? "btn-primary-action"
                              : "btn-secondary-action"
                          }`}
                        >
                          <i className={link.icon || "fas fa-external-link-alt"}></i>
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
