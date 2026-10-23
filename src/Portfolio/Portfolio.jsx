import React, { useMemo, useState, useEffect } from "react";
import "./Portfolio.css";

// --------------------------------------
// IMPORT PORTFOLIO IMAGES
// --------------------------------------

const imageModules = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

// --------------------------------------
// YOUTUBE LINKS
// Replace with your actual video URLs.
// Covers are in src/assets/Video/
// --------------------------------------

const videoLinks = {
  Video1: "https://www.youtube.com/watch?v=VIDEO_ID_1",
  Video2: "https://www.youtube.com/watch?v=VIDEO_ID_2",
  Video3: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  Video4: "https://www.youtube.com/watch?v=VIDEO_ID_4",
};

// --------------------------------------
// CATEGORIES
// --------------------------------------

const categories = [
  { label: "All Work", value: "all" },
  { label: "Social Media", value: "social" },
  { label: "Merchandise", value: "merch" },
  { label: "Print Products", value: "print" },
  { label: "Videos", value: "video" },
];

const categoryFromPath = (path) => {
  if (path.includes("/Social Media Graphics/")) return "social";
  if (path.includes("/Merch/")) return "merch";
  if (path.includes("/Print Products/")) return "print";
  if (path.includes("/Video/")) return "video";
  return null;
};

const titles = {
  social: "Digital & Social",
  merch: "Merchandise",
  print: "Print & Signage",
  video: "Video Production",
};

// --------------------------------------
// BUILD PORTFOLIO COLLECTION
// --------------------------------------

const projects = Object.entries(imageModules)
  .map(([path, src]) => {
    const category = categoryFromPath(path);

    if (!category) return null;

    const filename = path.split("/").pop();
    const name = filename.replace(/\.[^.]+$/, "");

    return {
      id: path,
      src,
      category,
      type: category === "video" ? "video" : "image",
      videoUrl: category === "video" ? videoLinks[name] || null : null,
    };
  })
  .filter(Boolean)
  .sort((a, b) =>
    a.id.localeCompare(b.id, undefined, {
      numeric: true,
    }),
  );

// --------------------------------------
// PORTFOLIO COMPONENT
// --------------------------------------

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = useMemo(() => {
    return activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Only photos are navigated in the lightbox.
  // Video covers open their YouTube links directly.
  const photoProjects = filtered.filter((project) => project.type === "image");

  const selected = selectedIndex !== null ? photoProjects[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction) => {
    setSelectedIndex((current) => {
      if (current === null || photoProjects.length === 0) {
        return null;
      }

      return (
        (current + direction + photoProjects.length) % photoProjects.length
      );
    });
  };

  // --------------------------------------
  // LIGHTBOX KEYBOARD CONTROLS
  // --------------------------------------

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        navigate(1);
      }

      if (event.key === "ArrowLeft") {
        navigate(-1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, photoProjects.length]);

  return (
    <main className="portfolio-page">
      {/* =========================================
          PERSONAL PORTFOLIO HERO
      ========================================= */}

      <section className="portfolio-hero">
        <div className="portfolio-hero-inner">
          <p className="portfolio-eyebrow">ALYSSA JONES / CREATIVE PORTFOLIO</p>

          <h1>
            Proof is in
            <br />
            <em>the Making.</em>
          </h1>

          <div className="portfolio-hero-bottom">
            <p>
              A collection of creative work spanning professional projects,
              independent endeavors, and everything in between. From first
              concepts to final products, here's what I've been making.
            </p>

            <span className="portfolio-hero-mark">↘</span>
          </div>
        </div>
      </section>

      {/* =========================================
          PORTFOLIO GALLERY
      ========================================= */}

      <section className="portfolio-gallery-section">
        <div className="portfolio-gallery-inner">
          {/* FILTER TOOLBAR */}

          <div className="portfolio-toolbar">
            <div className="portfolio-filters">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  className={
                    activeCategory === category.value
                      ? "portfolio-filter active"
                      : "portfolio-filter"
                  }
                  onClick={() => {
                    setActiveCategory(category.value);
                    setSelectedIndex(null);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <span className="portfolio-count">
              {String(filtered.length).padStart(2, "0")} PIECES
            </span>
          </div>

          {/* MASONRY GALLERY */}

          <div className="portfolio-masonry">
            {filtered.map((project) => (
              <button
                className="portfolio-tile"
                key={project.id}
                type="button"
                onClick={() => {
                  if (project.type === "video") {
                    if (project.videoUrl) {
                      window.open(
                        project.videoUrl,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  } else {
                    const photoIndex = photoProjects.findIndex(
                      (photo) => photo.id === project.id,
                    );

                    setSelectedIndex(photoIndex);
                  }
                }}
                aria-label={
                  project.type === "video"
                    ? "Watch video"
                    : `View ${titles[project.category]} project`
                }
              >
                {/* PORTFOLIO IMAGE OR VIDEO COVER */}

                <img
                  src={project.src}
                  alt={`${titles[project.category]} portfolio piece`}
                  loading="lazy"
                />

                {/* OVERLAY - NO FILENAMES */}

                <div className="portfolio-tile-overlay">
                  <div>
                    <span className="portfolio-tile-category">
                      {titles[project.category]}
                    </span>
                  </div>

                  <span className="portfolio-tile-arrow">
                    {project.type === "video" ? "▶" : "↗"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* EMPTY CATEGORY */}

          {filtered.length === 0 && (
            <p className="portfolio-empty">
              Nothing in this collection just yet.
            </p>
          )}
        </div>
      </section>

      {/* =========================================
          PORTFOLIO CTA
      ========================================= */}

      <section className="portfolio-cta">
        <div className="portfolio-cta-inner">
          <p className="portfolio-eyebrow">YOUR TURN</p>

          <h2>
            Got something
            <br />
            <em>in the works?</em>
          </h2>

          <p>
            Like what you see? Through Hill & Haven, I help organizations turn
            ideas into creative materials that communicate, connect, and leave
            an impression.
          </p>

          <a href="/#contact" className="portfolio-cta-button">
            LET'S GET TO WORK <span>↗</span>
          </a>
        </div>
      </section>

      {/* =========================================
          PERSONAL PORTFOLIO ATTRIBUTION
      ========================================= */}

      <section className="portfolio-disclaimer">
        <div className="portfolio-disclaimer-inner">
          <p className="portfolio-disclaimer-label">ABOUT THIS COLLECTION</p>

          <p className="portfolio-disclaimer-text">
            This is a personal portfolio showcasing work I've created throughout
            my professional career and independent creative pursuits. Projects
            featured here may have been completed through previous employment,
            freelance engagements, personal exploration, or Hill & Haven Digital
            Production, LLC. Inclusion does not imply that all work was produced
            for or commissioned through Hill & Haven.
          </p>
        </div>
      </section>

      {/* =========================================
          PHOTO LIGHTBOX
      ========================================= */}

      {selected && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}

          <button
            className="portfolio-lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* PREVIOUS IMAGE */}

          <button
            className="portfolio-lightbox-prev"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          {/* IMAGE CONTENT */}

          <div
            className="portfolio-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={`${titles[selected.category]} portfolio piece`}
            />

            <div className="portfolio-lightbox-caption">
              <span>{titles[selected.category]}</span>

              <span>
                {selectedIndex + 1} / {photoProjects.length}
              </span>
            </div>
          </div>

          {/* NEXT IMAGE */}

          <button
            className="portfolio-lightbox-next"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}
