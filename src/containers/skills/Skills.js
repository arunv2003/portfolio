import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [activeCategory, setActiveCategory] = useState("Backend");
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!skillsSection.display) {
    return null;
  }

  // Engineering capability insights & live architecture code for each category
  const categoryDetails = {
    Backend: {
      tag: "Core Specialization",
      accent: "#10b981",
      badgeClass: "badge-backend",
      summary: "Designing high-concurrency Node.js and Express services with modular controller architectures, robust validation, and stateful/stateless auth.",
      capabilities: [
        "RESTful API design with structured controller-service-repository pattern",
        "Stateless token authentication using JWT, HTTP-only cookies & Bcrypt hashing",
        "Granular Role-Based Access Control (RBAC) middleware for multi-tenant users",
        "Real-time bidirectional event communication with Socket.IO",
        "Request sanitization, input validation & rate-limiting with express-rate-limit"
      ],
      packages: ["Node.js", "Express.js", "NestJS", "JWT", "Socket.IO", "Bcrypt", "Cors", "Helmet"],
      codeFilename: "server/routes/api.routes.js",
      codeSnippet: `// Modular Express Route with RBAC & Auth Guard
const router = require("express").Router();
const { verifyJWT, checkRole } = require("../middleware/auth");
const { validateOrder } = require("../middleware/validator");
const orderController = require("../controllers/order.controller");

router.post(
  "/api/orders/checkout",
  verifyJWT,
  checkRole(["customer", "business"]),
  validateOrder,
  orderController.handleCheckout
);

router.get("/api/admin/metrics", verifyJWT, checkRole(["admin"]), orderController.getAnalytics);

module.exports = router;`
    },
    Database: {
      tag: "Data Architecture",
      accent: "#f59e0b",
      badgeClass: "badge-database",
      summary: "Architecting normalized relational schemas, type-safe ORM layers, NoSQL document stores, and in-memory caching for sub-millisecond retrieval.",
      capabilities: [
        "Relational schema modeling, foreign keys, index optimization & MySQL transactions",
        "Modern type-safe schema definitions and automated migrations with Drizzle ORM",
        "Document schema modeling and aggregation pipelines using MongoDB & Mongoose",
        "High-speed caching layer, session store & pub-sub queues with Redis",
        "Connection pooling and query execution time profiling"
      ],
      packages: ["MySQL", "Drizzle ORM", "MongoDB", "PostgreSQL", "Redis", "Mongoose"],
      codeFilename: "server/db/schema.drizzle.js",
      codeSnippet: `// Drizzle ORM Relational Schema Definition
import { mysqlTable, serial, varchar, decimal, timestamp, int } from "drizzle-orm/mysql-core";

export const orders = mysqlTable("orders", {
  id: serial("id").primaryKey(),
  userId: int("user_id").notNull(),
  orderNumber: varchar("order_number", { length: 32 }).notNull().unique(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 24 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});`
    },
    Frontend: {
      tag: "User Experience",
      accent: "#38bdf8",
      badgeClass: "badge-frontend",
      summary: "Engineering responsive, performant user interfaces with React, Next.js, and utility-first styling systems that wow users on all screen sizes.",
      capabilities: [
        "Modular component-driven architecture with clean reusable design patterns",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG) with Next.js",
        "Predictable application state management via Redux Toolkit and Context API",
        "Pixel-perfect responsive design systems using Tailwind CSS and CSS Modules",
        "Enterprise-grade dashboard component integrations with Ant Design & MUI"
      ],
      packages: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI", "Ant Design"],
      codeFilename: "client/src/hooks/useCartCheckout.jsx",
      codeSnippet: `// Custom React Hook for Checkout Flow
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

export function useCartCheckout() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const initiatePayment = async (orderPayload) => {
    setLoading(true);
    const res = await api.post("/api/checkout", orderPayload);
    dispatch(clearCart());
    setLoading(false);
    return res.data;
  };

  return { initiatePayment, loading, count: cartItems.length };
}`
    },
    "Tools & DevOps": {
      tag: "Infrastructure",
      accent: "#818cf8",
      badgeClass: "badge-devops",
      summary: "Managing production Linux VPS servers, setting up Nginx reverse proxies, orchestrating zero-downtime PM2 clusters, and managing Git CI/CD.",
      capabilities: [
        "Linux VPS provisioning, SSH security, firewall (UFW) and server hardening",
        "Nginx reverse proxy, SSL/TLS certificate automation with Let's Encrypt & Certbot",
        "Process lifecycle, memory management & zero-downtime reloads using PM2",
        "Docker containerization of Node.js services and isolated local dev environments",
        "Version control workflows, branching strategies, and Vercel cloud integrations"
      ],
      packages: ["Linux VPS", "Nginx", "PM2", "Docker", "Git", "GitHub Actions", "Vercel"],
      codeFilename: "deploy/nginx.conf",
      codeSnippet: `# Nginx Reverse Proxy with SSL Termination
server {
    listen 443 ssl http2;
    server_name api.nutflix.in;

    ssl_certificate /etc/letsencrypt/live/nutflix.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nutflix.in/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
    },
    Integrations: {
      tag: "Services & APIs",
      accent: "#ec4899",
      badgeClass: "badge-integrations",
      summary: "Connecting enterprise third-party APIs for seamless e-commerce transactions, automated courier dispatch, and instant transactional messaging.",
      capabilities: [
        "Razorpay checkout orders creation, client payment verification & cryptographic HMAC webhook validation",
        "Shiprocket logistics integration for automated AWB generation, pickup requests & real-time courier tracking",
        "MSG91 SMS gateway integration for transactional OTPs and order status alerts",
        "Idempotent webhook handlers preventing double processing of critical transactions"
      ],
      packages: ["Razorpay", "Shiprocket", "MSG91", "Crypto HMAC", "Axios"],
      codeFilename: "server/services/razorpay.service.js",
      codeSnippet: `// Razorpay Webhook Cryptographic Verification
const crypto = require("crypto");

function verifyRazorpayWebhook(rawBody, signature, secret) {
  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  if (expectedSig !== signature) {
    throw new Error("Invalid Razorpay webhook signature detected!");
  }
  return true;
}

module.exports = { verifyRazorpayWebhook };`
    }
  };

  // Reorder categories: Backend & Database first
  const categoryOrder = ["Backend", "Database", "Frontend", "Tools & DevOps", "Integrations"];
  const orderedCategories = [...skillsSection.categories].sort((a, b) => {
    return categoryOrder.indexOf(a.name) - categoryOrder.indexOf(b.name);
  });

  const activeData = categoryDetails[activeCategory] || categoryDetails["Backend"];
  const currentCategoryObj = orderedCategories.find(c => c.name === activeCategory) || orderedCategories[0];

  // Marquee badges across top technologies
  const marqueeItems = [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Drizzle ORM", icon: "fas fa-database", isFa: true },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Redis", icon: "devicon-redis-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    { name: "Linux VPS", icon: "devicon-linux-plain" },
    { name: "Nginx", icon: "devicon-nginx-original colored" },
    { name: "PM2", icon: "fas fa-cogs", isFa: true },
    { name: "Razorpay", icon: "fas fa-credit-card", isFa: true },
    { name: "Socket.IO", icon: "devicon-socketio-original" },
    { name: "Docker", icon: "devicon-docker-plain colored" }
  ];

  const handleCopyCode = (text, idx) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section className={`skills-command-center ${isDark ? "dark-skills" : "light-skills"}`} id="skills">
      <div className="skills-inner-container">
        {/* Section Header */}
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">Technical Competencies</span>
            <h2 className="section-title">Developer Stack &amp; Capabilities</h2>
            <p className="section-subtitle">
              Specialized in production-grade backend engineering, relational &amp; NoSQL data architecture, modern React interfaces, and cloud server orchestration.
            </p>
          </div>
        </Fade>

        {/* Dynamic Infinite Marquee Ribbon */}
        <Fade bottom duration={800} delay={100} distance="15px">
          <div className="tech-marquee-wrapper" aria-label="Core Technology Ticker">
            <div className="tech-marquee-track">
              {marqueeItems.concat(marqueeItems).map((tech, idx) => (
                <div className="marquee-pill" key={idx}>
                  <i className={`${tech.icon} ${tech.isFa ? "fa-icon" : ""}`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Interactive Studio Workspace */}
        <div className="skills-studio-console">
          {/* Top Console Bar with Segmented Category Nav */}
          <div className="console-header-bar">
            <div className="console-window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="console-prompt-text font-mono">
                stack:~/arun-kumar-verma$
              </span>
            </div>

            <div className="console-category-nav">
              {orderedCategories.map((cat, idx) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`category-pill-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.name)}
                  >
                    <i className={cat.icon}></i>
                    <span>{cat.name}</span>
                    {isActive && <span className="active-glow-indicator"></span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Console Main Body: Two Columns (Fluid Tech Badge Cloud + Architecture Inspector) */}
          <div className="console-body">
            {/* Column 1: Fluid Tech Pill Cloud */}
            <div className="tech-cloud-column">
              <div className="column-header">
                <div className="category-meta-tag">
                  <span className={`status-pill ${activeData.badgeClass}`}>{activeData.tag}</span>
                  <span className="pill-count font-mono">{currentCategoryObj.skills.length} Technologies</span>
                </div>
                <h3 className="category-heading">{activeCategory} Ecosystem</h3>
                <p className="category-summary-desc">{activeData.summary}</p>
              </div>

              {/* Fluid Glow Badges (NO boxy cards!) */}
              <div className="fluid-tech-pills-cloud">
                {currentCategoryObj.skills.map((skill, sIdx) => {
                  return (
                    <div className="fluid-tech-badge" key={sIdx}>
                      <div className="badge-icon-wrap">
                        <i className={skill.iconClass}></i>
                      </div>
                      <span className="badge-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Capability Checklist */}
              <div className="engineering-capabilities">
                <h4 className="capabilities-title">
                  <i className="fas fa-check-double text-emerald"></i>
                  <span>Production Capabilities &amp; Standards</span>
                </h4>
                <ul className="capabilities-list">
                  {activeData.capabilities.map((cap, cIdx) => (
                    <li key={cIdx}>
                      <span className="bullet-indicator">▸</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Architecture Inspector & Code Snippet */}
            <div className="code-inspector-column">
              <div className="code-inspector-card">
                <div className="inspector-title-bar">
                  <div className="file-info">
                    <i className="far fa-file-code file-icon"></i>
                    <span className="file-path font-mono">{activeData.codeFilename}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn font-mono"
                    onClick={() => handleCopyCode(activeData.codeSnippet, activeCategory)}
                    title="Copy snippet"
                  >
                    {copiedIndex === activeCategory ? (
                      <>
                        <i className="fas fa-check"></i>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <i className="far fa-copy"></i>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="code-editor-viewport font-mono">
                  <pre>
                    <code>{activeData.codeSnippet}</code>
                  </pre>
                </div>

                <div className="inspector-footer">
                  <div className="footer-label font-mono">
                    <i className="fas fa-cubes"></i> Core Stack:
                  </div>
                  <div className="footer-tags">
                    {activeData.packages.map((pkg, pIdx) => (
                      <span className="pkg-tag font-mono" key={pIdx}>
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
