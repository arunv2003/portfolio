import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Architecture.scss";
import {architectureSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Architecture() {
  const {isDark} = useContext(StyleContext);

  if (!architectureSection.display) {
    return null;
  }

  const icons = [
    "fas fa-desktop",
    "fas fa-network-wired",
    "fas fa-cogs",
    "fas fa-database",
    "fas fa-exchange-alt",
    "fas fa-cloud-upload-alt"
  ];

  return (
    <section className={`architecture-section ${isDark ? "dark-arch" : "light-arch"}`} id="architecture">
      <div className="architecture-container">
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">End-to-End Pipeline</span>
            <h2 className="section-title">{architectureSection.title}</h2>
            <p className="section-subtitle">{architectureSection.subtitle}</p>
          </div>
        </Fade>

        <div className="architecture-flow-wrapper">
          {architectureSection.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <Fade bottom duration={700} delay={idx * 100}>
                <div className="architecture-node-card">
                  <div className="node-top-bar">
                    <span className="node-step-number">0{step.step}</span>
                    <div className="node-icon-wrapper">
                      <i className={icons[idx] || "fas fa-cube"}></i>
                    </div>
                  </div>

                  <h3 className="node-title">{step.title}</h3>
                  <div className="node-tech-pill font-mono">{step.tech}</div>
                  <p className="node-desc">{step.desc}</p>
                </div>
              </Fade>

              {idx < architectureSection.steps.length - 1 && (
                <div className="flow-connector" aria-hidden="true">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
