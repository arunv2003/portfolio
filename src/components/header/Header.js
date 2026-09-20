import React, {useContext, useState, useEffect} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, socialMediaLinks} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${isDark ? "dark-menu header header-fixed" : "header header-fixed"} ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
        <a href="#greeting" className="logo" onClick={closeMenu}>
          <span className="code-bracket">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="code-bracket">/&gt;</span>
          <span className="status-badge" title="Available for hire">
            <span className="status-dot"></span>
          </span>
        </a>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={e => setMenuOpen(e.target.checked)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={`${isDark ? "dark-menu menu" : "menu"}`}>
          <li>
            <a href="#greeting" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#architecture" onClick={closeMenu}>
              Architecture
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="nav-actions">
            <a
              href="/Arunverma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              onClick={closeMenu}
            >
              <i className="fas fa-file-download"></i> Resume
            </a>
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-icon"
              title="GitHub Profile"
              onClick={closeMenu}
            >
              <i className="fab fa-github"></i>
            </a>
            <div className="theme-toggle-wrapper">
              <ToggleSwitch />
            </div>
          </li>
        </ul>
      </header>
  );
}

export default Header;

