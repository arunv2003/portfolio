import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {greeting, socialMediaLinks} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={800} distance="10px">
      <footer className={`modern-footer ${isDark ? "dark-footer" : "light-footer"}`}>
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#greeting" className="footer-logo">
              <span className="code-bracket">&lt;</span>
              <span>{greeting.name}</span>
              <span className="code-bracket">/&gt;</span>
            </a>
            <p className="footer-role">{greeting.role}</p>
          </div>

          <div className="footer-social-links">
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className="footer-social-btn"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="footer-bottom-text">
            <p className="copyright-text">
              &copy; {currentYear} {greeting.name}. All rights reserved.
            </p>
            <p className="footer-tagline">
              Crafted with modern React, clean architecture &amp; passion for high performance.
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
