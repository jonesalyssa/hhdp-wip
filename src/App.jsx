import React from "react";
import "./App.css";

import brandMark from "./assets/HHCircle.png";
import hhPattern from "./assets/HHPattern_Repeating.png";
import contactPattern from "./assets/HHVertical.png";

const services = [
  {
    number: "01",
    title: "Creative Direction",
    text: "Campaign creative, brand direction, visual systems, and concept development built to make your message feel cohesive everywhere it appears.",
  },
  {
    number: "02",
    title: "Digital Production",
    text: "Social graphics, digital ads, email creative, web assets, presentations, rapid-response content, and polished production for fast-moving teams.",
  },
  {
    number: "03",
    title: "Video & Storytelling",
    text: "Short-form video, field production, interviews, reels, documentary-style storytelling, editing, motion graphics, and content built for distribution.",
  },
  {
    number: "04",
    title: "Web & Interactive",
    text: "Modern React websites, landing pages, campaign microsites, interactive tools, and custom digital experiences that look sharp and work cleanly.",
  },
];

const work = [
  {
    category: "PUBLIC AFFAIRS",
    title: "Issue Advocacy",
    text: "Creative built to translate complicated policy into clear, persuasive public-facing communications.",
  },
  {
    category: "POLITICAL",
    title: "Campaign Creative",
    text: "Fast, disciplined design and production for candidates, organizations, coalitions, and persuasion programs.",
  },
  {
    category: "PRODUCTION",
    title: "Field Storytelling",
    text: "Photo and video production that brings people, places, industries, and policy stories to life.",
  },
  {
    category: "DIGITAL",
    title: "Web Experiences",
    text: "Purpose-built sites and interactive digital products that feel more custom than canned.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
    >
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function App() {
  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hill & Haven home">
          <span className="brand-mark">
            <img src={brandMark} alt="" />
          </span>

          <span className="brand-name">Hill & Haven</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project
          <ArrowIcon />
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">DIGITAL PRODUCTION + CREATIVE STUDIO</p>

            <h1>
              Built for messages
              <span>that need to move.</span>
            </h1>

            <p className="hero-intro">
              Hill & Haven is a creative production studio for campaigns,
              causes, organizations, and brands that need sharp ideas,
              disciplined execution, and work that actually gets noticed.
              Whether you're on Capitol Hill or working from your own haven, we
              help turn big ideas into compelling creative that moves people.
              <br />
              <br />
              With specialized experience in messaging for natural resources,
              energy, conservation, and rural policy, we’re especially at home
              helping organizations working at the intersection of people,
              policy, and the land.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Work with us
                <ArrowIcon />
              </a>

              <a className="text-link" href="#work">
                See what we do
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div
              className="pattern-panel-main"
              style={{ backgroundImage: `url(${hhPattern})` }}
            />

            <div className="hero-label">
              <span>HILL</span>
              <span>&</span>
              <span>HAVEN</span>
            </div>

            <div className="hero-index">01 / STUDIO</div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <div className="statement-kicker">WHAT WE BELIEVE</div>

          <p>
            Good creative should do more than look good. It should make an idea
            easier to understand, harder to ignore, and more likely to move
            someone.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">CAPABILITIES</p>
            <h2>One studio. A lot of range.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-line" />
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div
            className="about-visual"
            style={{ backgroundImage: `url(${hhPattern})` }}
          >
            <div className="about-monogram">
              <img src={brandMark} alt="" />
            </div>
          </div>

          <div className="about-copy">
            <p className="">THE STUDIO</p>

            <h2>
              Small enough to care.
              <span>Experienced enough to handle it.</span>
            </h2>

            <p>
              Hill & Haven Digital Production, LLC is an independent creative
              studio operating under the trade name Hill & Haven.
            </p>

            <p>
              The studio brings together strategy, design, video, digital
              production, and web development for clients who need senior-level
              thinking without the layers of a traditional agency.
            </p>

            <p>
              The work is grounded in a simple idea: understand the audience,
              respect the message, sweat the details, and make something people
              want to pay attention to.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section">
          <div className="section-heading">
            <p className="eyebrow">HOW WE WORK</p>

            <h2>Clear process. No agency theater.</h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>

              <h3>Get the point.</h3>

              <p>
                We start with the audience, objective, constraints, and what the
                work actually needs to accomplish.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>

              <h3>Build the idea.</h3>

              <p>
                We turn the strategy into a strong visual and verbal direction
                before overproducing the wrong thing.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>

              <h3>Make it real.</h3>

              <p>
                Design, production, editing, development, revisions, delivery.
                Fast when it needs to be. Detailed when it matters.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow light">LET'S MAKE SOMETHING GOOD</p>

            <h2>
              Have a project in mind?
              <span>Tell us what you're building.</span>
            </h2>

            <a className="contact-button" href="mailto:hello@hillandhaven.com">
              hello@hillandhaven.com
              <ArrowIcon />
            </a>
          </div>

          <div
            className="contact-pattern"
            style={{ backgroundImage: `url(${contactPattern})` }}
            aria-hidden="true"
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>
          <div className="footer-brand">
            <img src={brandMark} alt="" />
            <span>Hill & Haven</span>
          </div>

          <p>Creative direction. Digital production. Storytelling.</p>
        </div>

        <div className="footer-meta">
          <p>Hill & Haven Digital Production, LLC</p>
          <p>Operating as Hill & Haven</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">Studio</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
