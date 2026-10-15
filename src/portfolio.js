/* Arun Kumar Verma - Full Stack Developer Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1200
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Arun Kumar Verma",
  name: "Arun Kumar Verma",
  role: "Full Stack Developer",
  title: "Arun Kumar Verma",
  badge: "Available for Full Stack & Backend Projects",
  subTitle:
    "Full Stack Developer specializing in building scalable web applications, robust backend systems, REST APIs, database-driven applications, and production-ready solutions.",
  resumeLink: "/Arun_Kumar_Verma_Resume.pdf",
  resumeDriveBackup:
    "https://docs.google.com/document/d/1w6vn8AO222_DwfmGXMvJ7NJAmX7txl172ux-JQ9O-KQ/edit?tab=t.0",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/arunv2003",
  linkedin: "https://www.linkedin.com/in/arun-kumar-verma-796435286/",
  gmail: "arunv2074@gmail.com",
  phone: "+919648792390",
  location: "Okhla Phase 1 Delhi, India",
  display: true
};

// About Section
const aboutSection = {
  title: "About Me",
  subtitle: "Engineering Scalable Systems from Schema to Production",
  description:
    "I am a passionate Full Stack Developer with strong expertise in modern JavaScript and TypeScript ecosystems, backend architecture, relational & NoSQL databases, RESTful APIs, and secure role-based systems. I take pride in engineering end-to-end applications—translating complex business requirements into high-performance web frontends and rock-solid, production-ready server infrastructures.",
  stats: [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description: "MERN Stack, Next.js, and high-converting responsive interfaces.",
      icon: "fas fa-layer-group"
    },
    {
      id: "backend",
      title: "Backend Focused",
      description: "Node.js, Express.js, and NestJS microservices and API gateways.",
      icon: "fas fa-server"
    },
    {
      id: "api",
      title: "REST API & RBAC",
      description: "Secure JWT auth, OAuth, granular roles, and clean modular routes.",
      icon: "fas fa-shield-alt"
    },
    {
      id: "deployment",
      title: "Production Deployment",
      description: "Linux VPS, Nginx reverse proxy, PM2 process manager, and CI/CD.",
      icon: "fas fa-cloud-upload-alt"
    }
  ],
  display: true
};

// Categorized Skills Section
const skillsSection = {
  title: "Technical Skills & Technologies",
  subTitle:
    "A comprehensive toolset for architecting, building, and deploying modern full-stack web applications.",

  categories: [
    {
      name: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "React.js", iconClass: "devicon-react-original colored" },
        { name: "Next.js", iconClass: "devicon-nextjs-plain" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
        { name: "Redux", iconClass: "devicon-redux-original colored" },
        { name: "Context API", iconClass: "devicon-react-original colored" },
        { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
        { name: "Material UI", iconClass: "devicon-materialui-plain colored" },
        { name: "Ant Design", iconClass: "devicon-antdesign-plain colored" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" }
      ]
    },
    {
      name: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
        { name: "Express.js", iconClass: "devicon-express-original" },
        { name: "NestJS", iconClass: "devicon-nestjs-plain colored" },
        { name: "REST APIs", iconClass: "fas fa-network-wired" },
        { name: "Socket.IO", iconClass: "devicon-socketio-original" },
        { name: "JWT", iconClass: "fas fa-key" },
        { name: "OAuth", iconClass: "fas fa-shield-alt" },
        { name: "Authentication", iconClass: "fas fa-user-lock" },
        { name: "RBAC", iconClass: "fas fa-users-cog" }
      ]
    },
    {
      name: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
        { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
        { name: "Sequelize", iconClass: "devicon-sequelize-plain colored" },
        { name: "Drizzle ORM", iconClass: "fas fa-database" },
        { name: "Redis", iconClass: "devicon-redis-plain colored" }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", iconClass: "devicon-git-plain colored" },
        { name: "GitHub", iconClass: "devicon-github-original" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
        { name: "CI/CD", iconClass: "fas fa-sync-alt" },
        { name: "Linux", iconClass: "devicon-linux-plain" },
        { name: "VPS", iconClass: "fas fa-server" },
        { name: "Nginx", iconClass: "devicon-nginx-original colored" },
        { name: "PM2", iconClass: "fas fa-cogs" },
        { name: "Vercel", iconClass: "devicon-vercel-original" },
        { name: "Cloud", iconClass: "fas fa-cloud" },
        { name: "Deployment", iconClass: "fas fa-rocket" },
        { name: "Terminal", iconClass: "devicon-bash-plain" },
        { name: "Postman", iconClass: "devicon-postman-plain colored" }
      ]
    },
    {
      name: "Integrations",
      icon: "fas fa-plug",
      skills: [
        { name: "Razorpay", iconClass: "fas fa-credit-card" },
        { name: "Shiprocket", iconClass: "fas fa-shipping-fast" },
        { name: "MSG91", iconClass: "fas fa-comment-dots" }
      ]
    }
  ],

  highlights: [
    "Backend Architecture & RESTful API Engineering",
    "Database Schema Modeling & Relational/NoSQL Optimization",
    "Authentication, Authorization & Role-Based Access Control (RBAC)",
    "Payment Gateway (Razorpay) & Logistics (Shiprocket) Integration",
    "Real-time Event-Driven Communication with Socket.IO",
    "Production Server Deployment via Linux VPS, Nginx & PM2",
    "Git/GitHub Collaborative Workflows & CI/CD Pipelines"
  ],

  softwareSkills: [
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-chevron-right" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true
};

// Architecture Section: What I Build
const architectureSection = {
  title: "System Architecture & Engineering Flow",
  subtitle: "How I architect and deliver reliable end-to-end software solutions",
  steps: [
    {
      step: 1,
      title: "Frontend Applications",
      tech: "React.js • Next.js • Tailwind CSS • Redux",
      desc: "Interactive, accessible, mobile-first web applications with state synchronization and smooth user experiences."
    },
    {
      step: 2,
      title: "REST APIs & Gateways",
      tech: "Node.js • Express.js • NestJS • Postman",
      desc: "Clean modular controllers, request validation, rate limiting, and well-documented RESTful endpoints."
    },
    {
      step: 3,
      title: "Business Logic & Security",
      tech: "JWT • OAuth • RBAC • Middleware",
      desc: "Robust domain logic, fine-grained role-based permissions, data encryption, and secure session flows."
    },
    {
      step: 4,
      title: "Database Layer",
      tech: "MongoDB • PostgreSQL • Drizzle ORM • Redis",
      desc: "Optimized schema design, indexed queries, relational integrity, caching strategies, and data persistence."
    },
    {
      step: 5,
      title: "Third-party Integrations",
      tech: "Razorpay • Shiprocket • MSG91 • Cloudinary",
      desc: "Webhook verification, payment processing, logistics tracking, SMS gateways, and cloud asset management."
    },
    {
      step: 6,
      title: "Deployment & Production",
      tech: "Linux VPS • Nginx • PM2 • Docker • Vercel",
      desc: "SSL certificates, reverse proxy routing, automated restarts, log rotation, zero-downtime releases, and CI/CD."
    }
  ],
  display: true
};

// Featured Full Stack Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "PRODUCTION-READY FULL STACK APPLICATIONS & LIVE COMMERCIAL PLATFORMS",
  projects: [
    {
      projectName: "Hotel Management System (Chacha Vatiza Hotels)",
      badge: "Hospitality Cloud Platform",
      // projectDesc:
      //   "High-performance cloud operating system for hotels automating front desk reservations, guest billing, multi-property revenue management, and live housekeeping operations.",
      images: [
        {
          url: "/images/projects/chacha-vatiza/hotel_hero.png",
          caption: "Hero & High-Performance Hospitality Cloud OS"
        },
        {
          url: "/images/projects/chacha-vatiza/hotel_dashboard.png",
          caption: "Real-time SaaS Admin & Revenue Analytics Dashboard"
        },
        {
          url: "/images/projects/chacha-vatiza/hotel_features.png",
          caption: "Front Desk, Housekeeping & Centralized Operations Grid"
        },
        {
          url: "/images/projects/chacha-vatiza/hotel_pricing.png",
          caption: "Transparent Multi-tier SaaS Subscription Plans"
        },
        {
          url: "/images/projects/chacha-vatiza/hotel_reviews.png",
          caption: "Verified Hotelier Testimonials & Trust Validation"
        }
      ],
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Razorpay"
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/arunv2003",
          icon: "fab fa-github"
        },
        {
          name: "Live Demo",
          url: "https://hotels-management-system-frontend.vercel.app",
          icon: "fas fa-external-link-alt"
        }
      ]
    },
    {
      projectName: "Nutflix - Premium Dry Fruits Platform",
      badge: "Production Commercial Platform",
      // projectDesc:
      //  "Live commercial e-commerce platform for premium dry fruits and artisanal Tanzanian produce, featuring online store ordering, franchise partner onboarding, and logistics delivery.",
      images: [
        {
          url: "/images/projects/nutflix/nutclick_hero.png",
          caption: "Storefront Hero & Tanzanian Artisanal Produce"
        },
        {
          url: "/images/projects/nutflix/nutclick_products.png",
          caption: "Interactive Product Catalog & Dynamic Pricing"
        },
        {
          url: "/images/projects/nutflix/nutclick_about.png",
          caption: "Quality, Freshness & Direct Sourcing Value"
        },
        {
          url: "/images/projects/nutflix/nutclick_dashboard.png",
          caption: "Admin Sales Revenue & Order Fulfillment Dashboard"
        }
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "REST APIs"
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/arunv2003",
          icon: "fab fa-github"
        },
        {
          name: "Live Demo",
          url: "https://www.nut-flix.in/",
          icon: "fas fa-external-link-alt"
        }
      ]
    },
    {
      projectName: "Green Garden - Residential Society Management System",
      badge: "Residential Society ERP",
      //  projectDesc:
      //    "Comprehensive cloud operating system for residential societies automating flat directories, resident records, security gate visitors, maintenance billing, and committee helpdesk.",
      images: [
        {
          url: "/images/projects/green-garden/greengarden_dashboard.png",
          caption: "Secretary Operations Center & Real-Time Dashboard"
        },
        {
          url: "/images/projects/green-garden/greengarden_residents.png",
          caption: "Society Residents & Flat Allocation Directory"
        },
        {
          url: "/images/projects/green-garden/greengarden_master.png",
          caption: "Society Master & Tower / Block Architecture"
        }
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "REST APIs"
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/arunv2003",
          icon: "fab fa-github"
        },
        {
          name: "Live Demo",
          url: "https://green-garden.arunverma.online/",
          icon: "fas fa-external-link-alt"
        }
      ]
    },
    {
      projectName: "Krishna Shop - E-Commerce Store",
      badge: "Modern E-Commerce Store",
      //  projectDesc:
      //   "Fast, interactive online shopping application built with React and Vite, featuring smooth product browsing, category filtering, cart management, and seamless mobile checkout.",
      images: [
        {
          url: "/images/projects/krishna-shop/forever_hero.png",
          caption: "Storefront Hero & Latest Fashion Arrivals"
        },
        {
          url: "/images/projects/krishna-shop/forever_collection.png",
          caption: "Latest Collections & Dynamic Product Grid"
        },
        {
          url: "/images/projects/krishna-shop/forever_auth.png",
          caption: "Secure Customer Registration & Authentication"
        }
      ],
      techStack: [
        "React.js",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Vercel"
      ],
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/arunv2003",
          icon: "fab fa-github"
        },
        {
          name: "Live Demo",
          url: "https://krishna-shop-hs5z.vercel.app/",
          icon: "fas fa-external-link-alt"
        }
      ]
    }
  ],
  display: true
};

// Work Experience Section (Accurate from Resume)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "Namami Infotech India Pvt. Ltd.",
      location: "Okhla Phase 1, New Delhi, India",
      date: "July 2025 – Present",
      desc: "Architecting and developing full-stack web applications, business platforms, and backend services supporting business discovery and customer engagement.",
      descBullets: [
        "Contributed to core production projects including 'Nut-flix.in' and 'Society Management System' using MERN stack and Next.js.",
        "Engineered scalable backend REST services to handle high-performance, multi-category business requirements.",
        "Collaborated closely with cross-functional teams to model database schemas, implement role-based access, and optimize application throughput."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Gahmar Admark Solutions Pvt. Ltd. (GASPL)",
      location: "Chinhat, Lucknow, Uttar Pradesh",
      date: "April 2024 – June 2025",
      desc: "Architecting and developing full-stack web applications, business platforms, and backend services supporting business discovery and customer engagement.",
      descBullets: [
        "Contributed to core production projects including 'Happening Bazar Ads', 'web.gamsgroup.in', and 'Vendor Listings Website' using MERN stack and Next.js.",
        "Engineered scalable backend REST services for the Happening App and Vendor App to handle multi-category business listings.",
        "Collaborated closely with cross-functional teams to model database schemas, implement role-based access, and optimize application throughput."
      ]
    },
    {
      role: "Social Media & E-Commerce Intern",
      company: "Hanumant Technology Pvt Ltd",
      location: "Aliganj, Lucknow, Uttar Pradesh",
      date: "Nov 2024 – May 2025",
      desc: "Completed a 6-month intensive internship focusing on e-commerce catalog operations, digital content distribution, and customer outreach.",
      descBullets: [
        "Supported live product listings, pricing updates, inventory accuracy, and content synchronization across the e-commerce platform.",
        "Created, scheduled, and published promotional content for social media channels including Facebook and Instagram.",
        "Gained hands-on experience working directly with live client requirements, customer interactions, and business workflows."
      ]
    }
  ]
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
      collegeName: "R.R. Institute of Modern Technology, Lucknow",
      subHeader: "Bachelor of Technology (Information Technology)",
      duration: "2021 – 2025",
      desc: "Focused on computer science fundamentals, data structures, algorithms, database management, and modern full-stack web architectures.",
      descBullets: [
        "Strong practical proficiency in MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js.",
        "Hands-on coursework in Database Design (SQL & NoSQL), Object-Oriented Programming (OOP), and Operating Systems.",
        "Developed end-to-end full-stack projects applying industry best practices and clean code design."
      ]
    },
    {
      schoolName: "Maharshi Arvind Vidhya Mandir, Kushinagar",
      subHeader: "Intermediate (Mathematics)",
      duration: "April 2020 – March 2021",
      desc: "Completed Intermediate education with Mathematics, building a strong academic foundation in analytical problem-solving and logic.",
      descBullets: [
        "Studied Algebra, Calculus, Trigonometry, and Statistics.",
        "Developed structured analytical thinking and quantitative reasoning."
      ]
    },
    {
      schoolName: "Maharshi Arvind Vidhya Mandir, Kushinagar",
      subHeader: "High School (Science)",
      duration: "July 2018 – March 2019",
      desc: "Completed High School education with distinction in Science and Mathematics.",
      descBullets: [
        "Core subjects: Mathematics, Physics, Chemistry, and English.",
        "Built a strong base for computer science and higher engineering education."
      ]
    }
  ]
};

// Tech Stack Proficiency Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Engineering & REST APIs",
      progressPercentage: "92%",
      description: "Node.js, Express.js, NestJS, REST APIs, JWT, RBAC, Socket.IO"
    },
    {
      Stack: "Database Architecture",
      progressPercentage: "88%",
      description: "MongoDB, MySQL, PostgreSQL, Drizzle ORM, Redis"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "85%",
      description: "React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Redux"
    },
    {
      Stack: "Deployment & DevOps",
      progressPercentage: "80%",
      description: "Linux VPS, Nginx, PM2, Docker, CI/CD, Git, GitHub, Postman, Vercel"
    }
  ],
  displayCodersrank: false
};

// Open Source Configuration
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Contact Info
const contactInfo = {
  title: "Let's Build Something Great",
  subtitle:
    "Have a project in mind, need a full-stack engineer, or want to discuss backend architectures? Feel free to reach out directly.",
  number: "+91 9648792390",
  email_address: "arunv2074@gmail.com",
  location: "Okhla Phase 1 Delhi, India",
  availability: "Open to Full-Time Roles & Freelance Opportunities"
};

// Achievements Section
const achievementSection = {
  title: emoji("Certifications & Achievements 🏆"),
  subtitle: "Continuous learning, recognized competencies, and practical benchmarks.",
  achievementsCards: [
    {
      title: "MERN Stack Web Development",
      subtitle:
        "Mastery in building end-to-end applications with MongoDB, Express, React, and Node.js.",
      footerLink: []
    },
    {
      title: "RESTful API & Database Architecture",
      subtitle:
        "Comprehensive knowledge in relational schema design, query optimization, and secure API gateways.",
      footerLink: []
    },
    {
      title: "Production Deployment on Linux VPS",
      subtitle:
        "Experience configuring Linux servers, Nginx reverse proxies, SSL certificates, and PM2 process orchestration.",
      footerLink: []
    }
  ],
  display: false
};

// Blog Section
const blogSection = {
  title: "Tech Articles & Insights",
  subtitle: "Sharing practical engineering experiences, backend tips, and architecture patterns.",
  displayMediumBlogs: "false",
  blogs: [
    {
      title: "Architecting Secure Authentication with JWT & RBAC in Node.js",
      description:
        "A practical guide to structuring role-based authorization middleware and token refreshment in production Express applications.",
      url: "https://github.com/arunv2003"
    },
    {
      title: "Deploying MERN Applications on a Linux VPS with Nginx and PM2",
      description:
        "Step-by-step walkthrough of configuring reverse proxy routing, environment isolation, and zero-downtime restarts.",
      url: "https://github.com/arunv2003"
    }
  ],
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const twitterDetails = {
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my detailed professional resume",
  display: true
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  aboutSection,
  splashScreen,
  skillsSection,
  architectureSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
