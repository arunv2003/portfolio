import React, {useState, useEffect, useRef, useCallback} from "react";
import "./ProjectImageSlider.scss";

export default function ProjectImageSlider({images = [], projectName = "Project"}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-scroll effect: advances every 3.6s unless paused by hover
  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3600);
    return () => clearInterval(interval);
  }, [total, isPaused, nextSlide]);

  if (!images || total === 0) return null;

  const resolveUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    const publicUrl = process.env.PUBLIC_URL || "";
    return publicUrl + url;
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div
      className="project-image-showcase"
      ref={sliderRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Browser Chrome Header */}
      <div className="slider-browser-bar">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        {/* <div className="browser-url-pill">
          <i className="fas fa-lock"></i>
          <span className="url-text">
            {currentImg.caption || `${projectName} UI Preview`}
          </span>
        </div> */}
        <div className="slider-utility-actions">
          <button
            type="button"
            className="slider-icon-btn"
            onClick={() => setIsPaused((prev) => !prev)}
            title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
            aria-label="Toggle Auto Scroll"
          >
            <i className={`fas ${isPaused ? "fa-play" : "fa-pause"}`}></i>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images.map((item, idx) => (
            <div className="slider-slide" key={idx}>
              <img
                src={resolveUrl(item.url)}
                alt={item.caption || `${projectName} screenshot ${idx + 1}`}
                loading="lazy"
                className="slider-img"
              />
            </div>
          ))}
        </div>

        {/* Slide Counter Overlay */}
        <div className="slider-counter-badge">
          <span className="counter-current">{currentIndex + 1}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">{total}</span>
        </div>

        {/* Auto Scroll Pulse Indicator */}
        {!isPaused && (
          <div className="live-scroll-status" title="Auto-scrolling live">
            <span className="status-ping"></span>
            <span className="status-label">Auto-scroll Active</span>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {total > 1 && (
        <>
          <button
            type="button"
            className="nav-arrow nav-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="nav-arrow nav-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}

      {/* Pagination Thumbnails / Dots Bar */}
      <div className="slider-pagination-bar">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={`pagination-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(idx);
            }}
            title={img.caption || `Go to slide ${idx + 1}`}
            aria-label={`Slide ${idx + 1}`}
          >
            <span className="dot-progress-fill"></span>
          </button>
        ))}
      </div>
    </div>
  );
}
