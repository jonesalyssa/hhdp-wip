import React, { useMemo, useState, useEffect } from "react";
import "./Portfolio.css";

// --------------------------------------
// IMPORT ALL PORTFOLIO IMAGES
// --------------------------------------

const imageModules = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

// --------------------------------------
// YOUTUBE VIDEO LINKS
// Replace these with your actual links.
// --------------------------------------

const videoLinks = {
  Video1: "https://youtu.be/u1qbaJrt-R8",
  Video2: "https://youtu.be/JFz7sDVZ4QM",
  Video3: "https://youtu.be/7jAmnT6NHpU",
  Video4: "https://youtu.be/AzKAXt3eGoo",
};

// --------------------------------------
// PORTFOLIO CATEGORIES
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

  const selected = selectedIndex !== null ? filtered[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction) => {
    setSelectedIndex((current) => {
      if (current === null || filtered.length === 0) {
        return null;
      }

      return (current + direction + filtered.length) % filtered.length;
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
  }, [selectedIndex, filtered.length]);

  return (
    <main className="portfolio-page">
      {/* =========================================
          PORTFOLIO HERO
      ========================================= */}

      <section className="portfolio-hero">
        <div className="portfolio-hero-inner">
          <p className="portfolio-eyebrow">HILL & HAVEN / SELECTED WORK</p>

          <h1>
            Proof is in
            <br />
            <em>the Making.</em>
          </h1>

          <div className="portfolio-hero-bottom">
            <p>
              From the first spark of an idea to the final finishing touch. A
              collection of things we've brought to life.
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
            {filtered.map((project, index) => (
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
                    setSelectedIndex(index);
                  }
                }}
                aria-label={
                  project.type === "video"
                    ? `Watch ${titles[project.category]}`
                    : `View ${titles[project.category]} project`
                }
              >
                {/* IMAGE / VIDEO COVER */}

                <img
                  src={project.src}
                  alt={`${titles[project.category]} portfolio piece`}
                  loading="lazy"
                />

                {/* TILE OVERLAY */}

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
            Good ideas deserve great execution. Let's make something worth
            looking at.
          </p>

          <a href="/#contact" className="portfolio-cta-button">
            LET'S GET TO WORK <span>↗</span>
          </a>
        </div>
      </section>

      {/* =========================================
          PORTFOLIO DISCLAIMER
      ========================================= */}

      <section className="portfolio-disclaimer">
        <div className="portfolio-disclaimer-inner">
          <p className="portfolio-disclaimer-label">PORTFOLIO DISCLAIMER</p>

          <p className="portfolio-disclaimer-text">
            This portfolio represents creative work produced by Hill & Haven's
            principal throughout her professional career. Not all projects were
            completed under Hill & Haven Digital Production, LLC. Work created
            through previous employment or independent engagements is included
            to demonstrate professional experience and creative capabilities.
          </p>
        </div>
      </section>

      {/* =========================================
          IMAGE LIGHTBOX
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
                {selectedIndex + 1} / {filtered.length}
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
