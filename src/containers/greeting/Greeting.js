import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import {greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState("api");

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className={`greet-main ${isDark ? "dark-theme" : "light-theme"}`} id="greeting">
      <div className="greeting-container">
        <Fade bottom duration={800} distance="30px">
          <div className="greeting-content">
            {/* ── Profile Photo Card ── */}
            <div className="profile-photo-card">
              <div className="profile-card-header">
                <div className="profile-avatar-ring">
                  <div className="profile-avatar-inner">
                    <img
                      src="/arun.png"
                      alt="Arun Kumar Verma"
                      className="profile-avatar-img"
                    />
                  </div>
                </div>
                <div className="profile-card-info">
                  <div className="profile-available-dot">
                    <span className="dot-green-sm"></span>
                    <span>Available for hire</span>
                  </div>
                  <h3 className="profile-card-name">{greeting.name}</h3>
                  <span className="profile-card-role font-mono">{greeting.role}</span>
                </div>
              </div>
              <div className="profile-card-stats">
                <div className="profile-stat">
                  <span className="stat-num">2+</span>
                  <span className="stat-lbl">Years Exp</span>
                </div>
                <div className="profile-stat-divider"></div>
                <div className="profile-stat">
                  <span className="stat-num">6+</span>
                  <span className="stat-lbl">Projects</span>
                </div>
                <div className="profile-stat-divider"></div>
                <div className="profile-stat">
                  <span className="stat-num">5+</span>
                  <span className="stat-lbl">Tech Stacks</span>
                </div>
              </div>
            </div>

            <h1 className="greeting-title">
              Hi, I'm <span className="highlight-name">{greeting.name}</span>
            </h1>

            <div className="greeting-role">
              <span className="role-prefix">&gt; </span>
              <span className="role-text">{greeting.role}</span>
              <span className="typing-cursor">_</span>
            </div>

            <p className="greeting-description">
              {greeting.subTitle}
            </p>

            <div className="hero-cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-layer-group"></i> View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i> Contact Me
              </a>
              <a
                href="/Arunverma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-download"></i> Resume
              </a>
            </div>

            <div className="hero-socials">
              <span className="social-label">Connect:</span>
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={`mailto:${socialMediaLinks.gmail}`}
                className="hero-social-link"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </Fade>

        {/* Developer Profile + Terminal Visual */}
        <Fade right duration={900} distance="40px">
          <div className="hero-terminal-wrapper">

            {/* ── Terminal Window ── */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-tabs">
                  <button
                    className={`tab-btn ${activeTab === "api" ? "active" : ""}`}
                    onClick={() => setActiveTab("api")}
                  >
                    <i className="fab fa-node-js tab-icon"></i> server.ts
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "auth" ? "active" : ""}`}
                    onClick={() => setActiveTab("auth")}
                  >
                    <i className="fas fa-shield-alt tab-icon"></i> auth.rbac.js
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "deploy" ? "active" : ""}`}
                    onClick={() => setActiveTab("deploy")}
                  >
                    <i className="fas fa-server tab-icon"></i> deploy.sh
                  </button>
                </div>
              </div>

              <div className="terminal-body font-mono">
                {activeTab === "api" && (
                  <pre className="code-block">
                    <code>
                      <span className="token-keyword">import</span> express, &#123; Request, Response &#125; <span className="token-keyword">from</span> <span className="token-string">'express'</span>;{"\n"}
                      <span className="token-keyword">import</span> &#123; verifyToken, authorizeRole &#125; <span className="token-keyword">from</span> <span className="token-string">'./middleware/auth'</span>;{"\n"}
                      <span className="token-keyword">import</span> &#123; HotelService &#125; <span className="token-keyword">from</span> <span className="token-string">'./services/hotel'</span>;{"\n\n"}
                      <span className="token-comment">{"// Full Stack REST API Endpoint"}</span>{"\n"}
                      router.<span className="token-function">post</span>(
                        <span className="token-string">'/api/v1/bookings'</span>,{"\n"}
                        verifyToken,{"\n"}
                        authorizeRole([<span className="token-string">'ADMIN'</span>, <span className="token-string">'MANAGER'</span>]),{"\n"}
                        <span className="token-keyword">async</span> (req: Request, res: Response) =&gt; &#123;{"\n"}
                        {"  "}<span className="token-keyword">const</span> result = <span className="token-keyword">await</span> HotelService.<span className="token-function">createBooking</span>(req.body);{"\n"}
                        {"  "}<span className="token-keyword">return</span> res.<span className="token-function">status</span>(201).<span className="token-function">json</span>(&#123;{"\n"}
                        {"    "}success: <span className="token-boolean">true</span>,{"\n"}
                        {"    "}data: result,{"\n"}
                        {"    "}gateway: <span className="token-string">'Razorpay_Verified'</span>{"\n"}
                        {"  "}&#125;);{"\n"}
                      &#125;);
                    </code>
                  </pre>
                )}

                {activeTab === "auth" && (
                  <pre className="code-block">
                    <code>
                      <span className="token-comment">{"// Role-Based Access Control (RBAC)"}</span>{"\n"}
                      <span className="token-keyword">export const</span> <span className="token-function">authorizeRole</span> = (allowedRoles: string[]) =&gt; &#123;{"\n"}
                      {"  "}<span className="token-keyword">return</span> (req: AuthRequest, res: Response, next: NextFunction) =&gt; &#123;{"\n"}
                      {"    "}<span className="token-keyword">if</span> (!req.user || !allowedRoles.<span className="token-function">includes</span>(req.user.role)) &#123;{"\n"}
                      {"      "}<span className="token-keyword">return</span> res.<span className="token-function">status</span>(403).<span className="token-function">json</span>(&#123;{"\n"}
                      {"        "}error: <span className="token-string">'AccessDenied: Insufficient Permissions'</span>{"\n"}
                      {"      "}&#125;);{"\n"}
                      {"    "}&#125;{"\n"}
                      {"    "}<span className="token-function">next</span>();{"\n"}
                      {"  "}&#125;;{"\n"}
                      &#125;;
                    </code>
                  </pre>
                )}

                {activeTab === "deploy" && (
                  <pre className="code-block">
                    <code>
                      <span className="token-comment"># Production VPS Deployment Script</span>{"\n"}
                      $ nginx -t &amp;&amp; systemctl reload nginx{"\n"}
                      $ pm2 reload ecosystem.config.js --env production{"\n"}
                      $ docker compose -f docker-compose.prod.yml up -d{"\n\n"}
                      <span className="token-string">[✓] Redis Cache Connected :6379</span>{"\n"}
                      <span className="token-string">[✓] MySQL / PostgreSQL / MongoDB Pools Online</span>{"\n"}
                      <span className="token-string">[✓] Zero Downtime Deployment: SUCCESS</span>
                    </code>
                  </pre>
                )}
              </div>

              <div className="terminal-footer">
                <div className="footer-status">
                  <span className="status-live-dot"></span>
                  <span>API Gateway 200 OK</span>
                </div>
                <div className="footer-stats">
                  <span>Latency: 18ms</span>
                  <span>Node.js v20 LTS</span>
                </div>
              </div>
            </div>

            {/* Floating feature pills */}
            <div className="floating-badge badge-1">
              <i className="fab fa-node-js colored"></i> Node.js &amp; Express
            </div>
            <div className="floating-badge badge-2">
              <i className="devicon-mysql-plain colored"></i> MySQL, MongoDB &amp; PostgreSQL
            </div>
            <div className="floating-badge badge-3">
              <i className="devicon-react-original colored"></i> Next.js &amp; React
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
