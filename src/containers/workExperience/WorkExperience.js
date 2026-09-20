import React, {useContext} from "react";
import "./WorkExperience.scss";
import {workExperiences, educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <section className={`experience-section ${isDark ? "dark-exp" : "light-exp"}`} id="experience">
      <div className="experience-container-main">
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">Track Record</span>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              Engineering impact across commercial products, e-commerce, and business listings.
            </p>
          </div>
        </Fade>

        {/* Modern Vertical Timeline */}
        <div className="experience-timeline">
          {workExperiences.experience.map((card, idx) => (
            <Fade bottom duration={750} delay={idx * 100} key={idx}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {idx < workExperiences.experience.length - 1 && (
                    <div className="marker-line"></div>
                  )}
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <span className="role-title">{card.role}</span>
                      <h3 className="company-name">{card.company}</h3>
                      {card.location && (
                        <span className="company-location">
                          <i className="fas fa-map-marker-alt"></i> {card.location}
                        </span>
                      )}
                    </div>
                    <span className="timeline-date-badge font-mono">
                      <i className="far fa-calendar-alt"></i> {card.date}
                    </span>
                  </div>

                  <p className="timeline-desc">{card.desc}</p>

                  {card.descBullets && (
                    <ul className="timeline-bullets">
                      {card.descBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="bullet-point">
                          <span className="bullet-indicator">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Education Highlight Cards */}
        {educationInfo.display && (
          <Fade bottom duration={800} distance="25px">
            <div className="education-timeline-wrapper">
              <h3 className="education-block-title">
                <i className="fas fa-graduation-cap"></i> Education &amp; Academic Foundation
              </h3>
              <div className="education-cards-grid">
                {educationInfo.schools.map((school, sIdx) => (
                  <div className="education-card-modern" key={sIdx}>
                    <div className="edu-top">
                      <span className="edu-duration font-mono">{school.duration}</span>
                      <h4 className="edu-degree">{school.subHeader}</h4>
                      <p className="edu-school">{school.schoolName}</p>
                      {school.collegeName && (
                        <p className="edu-college font-mono">{school.collegeName}</p>
                      )}
                    </div>
                    <p className="edu-desc">{school.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        )}
      </div>
    </section>
  );
}
