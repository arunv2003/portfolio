import React, {useContext} from "react";
import "./SplashScreen.css";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className={`splash-container ${isDark ? "dark-splash" : "light-splash"}`}>
      <div className="splash-card">
        {/* Avatar with Elegant Multilayered Animations */}
        <div className="splash-avatar-container">
          <div className="splash-ambient-aura"></div>
          <div className="splash-orbit-ring"></div>
          <div className="splash-spinner-border"></div>
          <div className="splash-avatar-frame">
            <img
              src="/arun.png"
              alt={greeting.name}
              className="splash-avatar-img"
            />
          </div>
        </div>

        {/* Name & Styled Role */}
        <div className="splash-text-group">
          <h1 className="splash-name">{greeting.name}</h1>
          <div className="splash-role-wrapper">
            <span className="splash-role-line left" aria-hidden="true"></span>
            <span className="splash-role">{greeting.role}</span>
            <span className="splash-role-line right" aria-hidden="true"></span>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="splash-progress-track">
          <div className="splash-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
