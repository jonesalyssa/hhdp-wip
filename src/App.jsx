import React, { useState } from "react";

import "./App.css";

import brandMark from "./assets/HHCircle.png";

import contactPattern from "./assets/ContactPattern.png";

import studioCows from "./assets/HHVertical2.png";

import aboutPattern from "./assets/HHTopography.png";

import creativeImg from "./assets/CreativeDirection.png";

import contentImg from "./assets/Content.png";

import commsImg from "./assets/Comms.png";

import webImg from "./assets/Web.png";

import videoImg from "./assets/Video.png";

import printImg from "./assets/Print.png";

import timberPic from "./assets/TimberPic.png";

import Packages from "./Packages";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const services = [
  {
    number: "Creative Direction",

    title: "We Dig Big Ideas",

    text: "Campaign concepts, brand direction, and creative strategy that strike gold.",

    image: creativeImg,
  },

  {
    number: "Digital Content",

    title: "Know The Current",

    text: "Social graphics, digital ads, email campaigns, and content that reels your audience in.",

    image: contentImg,
  },

  {
    number: "Written Communications",

    title: "Words With Roots",

    text: "Op-eds, press releases, articles, and policy messaging grounded in a real understanding of the issues.",

    image: commsImg,
  },

  {
    number: "Video & Storytelling",

    title: "Get The Reaction You're Looking For",

    text: "Video production, interviews, reels, editing, and motion graphics with some serious creative energy.",

    image: videoImg,
  },

  {
    number: "Web & Interactive",

    title: "Web Pages That Land",

    text: "Websites, landing pages, and interactive experiences built to make your message land.",

    image: webImg,
  },

  {
    number: "Print & Merchandise",

    title: "Not Your Average Print",

    text: "Direct mail, brochures, signage, and branded merchandise that stand out from the herd.",

    image: printImg,
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
  const [formStatus, setFormStatus] = useState("idle");

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    formData.set("form-name", "hill-haven-contact");

    setFormStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      form.reset();

      setFormStatus("success");
    } catch (error) {
      console.error("Netlify contact form error:", error);

      setFormStatus("error");
    }
  };

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

          <a href="#work">In the News</a>

          <a href="#about">Studio</a>

          <a href="#contact">Contact</a>
        </nav>

        <div className="header-socials">
          {/* INSTAGRAM */}

          <a
            href="https://instagram.com/hillhaven.jsx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />

              <circle cx="12" cy="12" r="4" />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/company/hill-and-haven-digital-production-llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="3" />

              <path d="M7 10v7" />

              <path d="M7 7v.01" />

              <path d="M11 17v-7" />

              <path d="M11 13a3 3 0 0 1 6 0v4" />
            </svg>
          </a>
        </div>

        {/* <a className="header-cta" href="#contact">

          Start a project

          <ArrowIcon />

        </a> */}
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"></p>

            <h1>
              The Creative Resource
              <span>for Natural Resources.</span>
            </h1>
          </div>
        </section>
        {/* DESCRIPTION */}
        <section className="description">
          <div className="description-text">
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

            <br />

            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Let's break ground
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
        {/* STATEMENT */}
        <section className="statement">
          <div className="statement-text">
            <p>
              Natural resource management, conservation, and production are
              complex issues. Your messaging shouldn't be an added challenge.
              Work with a partner who understands the industries, policies, and
              people behind your mission.
            </p>
          </div>

          <div className="statement-image">
            <img src={timberPic} alt="Timber and forestry" />
          </div>
        </section>
        {/* SERVICES */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Our Services</p>

            <h2>A Deep Reserve of Creative Capabilities</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
                style={{
                  "--service-image": `url("${service.image}")`,
                }}
              >
                <div className="service-number">{service.number}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-line" />
              </article>
            ))}
          </div>
        </section>
        {/* ABOUT / STUDIO */}
        <section className="about-section" id="about">
          <div
            className="studio-pattern"
            style={{ backgroundImage: `url(${aboutPattern})` }}
            aria-hidden="true"
          />

          <div className="studio-photo">
            <img src={studioCows} alt="Cattle in a rural landscape" />
          </div>

          <div className="about-copy">
            <p className="eyebrow">THE STUDIO</p>

            <h2>
              Good Work. No Bull.
              <span>Not Our First Rodeo.</span>
            </h2>

            <p>
              Hill & Haven is an independent creative studio specializing in
              digital production, design, storytelling, and communications.
            </p>

            <p>
              From Capitol Hill to the communities and industries shaping the
              country, we help organizations communicate complex ideas with
              clarity, creativity, and purpose.
            </p>

            <p>
              Our approach is straightforward: thoughtful strategy, strong
              creative, and hands-on execution. Every project gets the attention
              it deserves, whether it's a single graphic or a complete digital
              campaign.
            </p>
          </div>
        </section>
        IN THE NEWS
        <section className="news-section" id="work">
          <div className="news-header">
            <div>
              <p className="eyebrow">IN THE NEWS</p>
              <h2>From the Field.</h2>
            </div>

            <p className="news-intro">
              Perspectives on natural resources, energy, conservation, and the
              policies shaping the land we depend on.
            </p>
          </div>

          <div className="news-grid">
            {[
              {
                category: "ENERGY & ENVIRONMENT",
                publication: "RealClear Energy",
                date: "October 14, 2026",
                title: "I'm an Environmentalist, and I Won't Abandon Coal",
                excerpt:
                  "A perspective on responsible coal production, conservation, and the future of natural resource management.",
                url: "https://www.realclearenergy.org/articles/2026/10/14/im_an_environmentalist_and_i_wont_abandon_coal_1211731.html",
              },
              // {
              //   category: "CONSERVATION",
              //   publication: "Publication Coming Soon",
              //   date: "Coming Soon",
              //   title: "More From the Field",
              //   excerpt:
              //     "Exploring the intersection of environmental stewardship, public policy, and the people who depend on our natural resources.",
              //   url: "",
              // },
              // {
              //   category: "NATURAL RESOURCES",
              //   publication: "Publication Coming Soon",
              //   date: "Coming Soon",
              //   title: "The Next Chapter",
              //   excerpt:
              //     "Thoughtful commentary on the decisions shaping America's land, energy, and natural resource future.",
              //   url: "",
              // },
            ].map((article, index) => (
              <article className="news-card" key={index}>
                <div className="news-card-top">
                  <span className="news-category">{article.category}</span>
                  <span className="news-date">{article.date}</span>
                </div>

                <div className="news-card-content">
                  <p className="news-publication">{article.publication}</p>

                  <h3>{article.title}</h3>

                  <p className="news-excerpt">{article.excerpt}</p>
                </div>

                {article.url && (
                  <a
                    className="news-link"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ ARTICLE
                    <ArrowIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        {/* PROCESS */}
        <section className="process-section">
          <div className="section-heading">
            <p className="eyebrow">HOW WE WORK</p>

            <h2>From First Cut To Final Finish.</h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>

              <h3>Survey The Land.</h3>

              <p>
                We start with the audience, objective, constraints, and what the
                work actually needs to accomplish.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>

              <h3>Strike Gold.</h3>

              <p>
                We turn the strategy into a strong visual and verbal direction
                before overproducing the wrong thing.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>

              <h3>Get Our Hands Dirty.</h3>

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
            <div className="contact-heading">
              <p className="eyebrow light">LET'S BREAK GROUND</p>

              <h2>
                Have a project
                <span>in mind?</span>
              </h2>

              <p className="contact-description">
                Tell us a little about what you're working on. We'd love to hear
                from you.
              </p>
            </div>

            <form
              className="contact-form"
              name="hill-haven-contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleContactSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="hill-haven-contact"
              />

              {/* NAME AND ORGANIZATION */}

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Name *</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-organization">Organization</label>

                  <input
                    id="contact-organization"
                    type="text"
                    name="organization"
                    placeholder="Your organization"
                    autoComplete="organization"
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="form-field">
                <label htmlFor="contact-email">Email Address *</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* MESSAGE */}

              <div className="form-field">
                <label htmlFor="contact-message">Your Message *</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Type your message..."
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}

              <button
                className="contact-submit"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}

                <ArrowIcon />
              </button>

              {/* SUCCESS MESSAGE */}

              {formStatus === "success" && (
                <p className="form-feedback" role="status">
                  Thank you! Your message has been sent.
                </p>
              )}

              {/* ERROR MESSAGE */}

              {formStatus === "error" && (
                <p className="form-feedback" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
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
