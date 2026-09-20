import React, { useContext, useState } from "react";
import "./Contact.scss";
import { contactInfo, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your Name, Email, and Message.");
      return;
    }

    const mailtoUrl = `mailto:${contactInfo.email_address}?subject=${encodeURIComponent(
      formData.subject || "Project Inquiry from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className={`contact-section ${isDark ? "dark-contact" : "light-contact"}`} id="contact">
      <div className="contact-container-main">
        <Fade bottom duration={800} distance="20px">
          <div className="section-header">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">{contactInfo.title}</h2>
            <p className="section-subtitle">{contactInfo.subtitle}</p>
          </div>
        </Fade>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <Fade left duration={800} distance="30px">
            <div className="contact-info-panel">
              <div className="status-pill">
                <span className="dot-green"></span>
                <span>Open for Full-Time Roles &amp; Freelance Inquiries</span>
              </div>

              <h3 className="panel-title">Let's discuss your next project</h3>
              <p className="panel-desc">
                Whether you are looking to architect an end-to-end full-stack web application, develop high-performance backend REST APIs, design relational database schemas, or deploy to a production Linux VPS, I'm ready to bring your vision to life.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${contactInfo.email_address}`} className="channel-item">
                  <div className="channel-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Email</span>
                    <span className="channel-value">{contactInfo.email_address}</span>
                  </div>
                </a>

                {contactInfo.number && (
                  <a href={`tel:${contactInfo.number}`} className="channel-item">
                    <div className="channel-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="channel-text">
                      <span className="channel-label">Phone</span>
                      <span className="channel-value">{contactInfo.number}</span>
                    </div>
                  </a>
                )}

                <div className="channel-item non-clickable">
                  <div className="channel-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-social-row">
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className="social-btn"
                  title="Send Direct Email"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade right duration={800} distance="30px">
            <div className="contact-form-card">
              <h3 className="form-title">
                <i className="fas fa-paper-plane"></i> Send a Direct Message
              </h3>

              {submitted && (
                <div className="form-success-banner">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you! Your email client has been opened to complete sending.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group form-group-row" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", gap: "8px" }}>
                  <label htmlFor="name" className="form-label" style={{ width: "82px", minWidth: "82px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "nowrap" }}>
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="form-input"
                    style={{ flex: "1 1 auto", width: "100%", minWidth: 0 }}
                  />
                </div>

                <div className="form-group form-group-row" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", gap: "8px" }}>
                  <label htmlFor="email" className="form-label" style={{ width: "82px", minWidth: "82px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "nowrap" }}>
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    required
                    className="form-input"
                    style={{ flex: "1 1 auto", width: "100%", minWidth: 0 }}
                  />
                </div>

                <div className="form-group form-group-row" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", gap: "8px" }}>
                  <label htmlFor="subject" className="form-label" style={{ width: "82px", minWidth: "82px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "nowrap" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Opportunity / Project Discussion"
                    className="form-input"
                    style={{ flex: "1 1 auto", width: "100%", minWidth: 0 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project, timeline, or job requirement..."
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
