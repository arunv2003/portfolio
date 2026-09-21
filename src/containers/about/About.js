import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./About.scss";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);

  if (!aboutSection.display) {
    return null;
  }

  return (
    <section className={`about-section ${isDark ? "dark-about" : "light-about"}`} id="about">
      <div className="about-container">
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">Professional Overview</span>
            <h2 className="section-title">{aboutSection.title}</h2>
            <p className="section-subtitle">{aboutSection.subtitle}</p>
          </div>
        </Fade>

        <div className="about-grid">
          <Fade left duration={800} distance="30px">
            <div className="about-narrative-card">
              <div className="card-badge">
                <i className="fas fa-terminal"></i> Engineer Mindset
              </div>
              <p className="narrative-text">
                {aboutSection.description}
              </p>
              <div className="narrative-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Full Lifecycle Engineering:</strong> From wireframing React interfaces to containerizing backend services on Linux.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Security, Auth &amp; Data Protection:</strong> Granular RBAC, JWT &amp; OAuth 2.0, Bcrypt hashing, API rate limiting, CORS/Helmet headers, input sanitization, and secure HMAC webhook verification.</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Reliability &amp; Scale:</strong> Scalable relational schemas, NoSQL caching, and zero-downtime PM2/Nginx deployments.</span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right duration={800} distance="30px">
            <div className="about-stats-cards">
              {aboutSection.stats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon-wrapper">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-title">{stat.title}</h3>
                    <p className="stat-desc">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
