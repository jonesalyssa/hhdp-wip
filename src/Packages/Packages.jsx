import React, { useMemo, useState } from "react";
import "./Packages.css";
import aboutPattern from "../assets/HHTopography.png";

/* =========================================
   ICONS
========================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

/* =========================================
   PACKAGE DATA
========================================= */

const featuredPackage = {
  id: "social-essentials",
  title: "Social Media Essentials",
  price: 400,
  priceLabel: "$400/month",
  includes: [
    "2 custom social graphics per week",
    "1 short-form video edit per week",
    "Captions for all included content",
    "Creative coordination and planning",
    "Client-provided video footage",
  ],
};

const specials = [
  {
    id: "press-publicity",
    number: "01",
    title: "Press & Publicity",
    tagline: "Make Some Waves.",
    description:
      "Get your message out and give people something to talk about.",
    price: 450,
    includes: [
      "1 press release",
      "2 promotional social graphics",
      "2 social captions",
    ],
    bestFor: "Announcements, launches, and major milestones",
  },
  {
    id: "event-sponsorship",
    number: "02",
    title: "Event & Sponsorship",
    tagline: "Make a Landmark Impression.",
    description:
      "Coordinated event creative that helps you stand out from the landscape.",
    price: 585,
    includes: [
      "1 promotional flyer",
      "2 social graphics",
      "1 sponsor sign design",
      "1 promotional email",
    ],
    bestFor: "Conferences, fundraisers, and community events",
  },
  {
    id: "newsletter",
    number: "03",
    title: "Newsletter",
    tagline: "Fresh From the Field.",
    description:
      "Keep your audience informed with professionally designed updates worth opening.",
    price: 270,
    includes: [
      "1 designed email newsletter",
      "Content formatting and layout",
      "1 promotional social graphic",
    ],
    bestFor: "Updates, campaigns, and audience engagement",
  },
  {
    id: "content-repurposing",
    number: "04",
    title: "Content Repurposing",
    tagline: "Reduce. Reuse. Reengage.",
    description: "Give existing content new life across your digital channels.",
    price: 360,
    includes: [
      "2 social graphics",
      "1 carousel",
      "1 short-form video edit",
      "Captions for included content",
    ],
    bestFor: "Articles, reports, interviews, and existing footage",
  },
  {
    id: "website-refresh",
    number: "05",
    title: "Website Refresh",
    tagline: "Give Your Digital Roots Room to Grow.",
    description: "A fresh look for the online home you've already built.",
    price: 675,
    includes: [
      "1 landing page",
      "1 existing page refresh",
      "Basic mobile-responsive styling",
    ],
    bestFor: "Organizations needing a targeted digital update",
  },
];

/* =========================================
   CUSTOM BUILDER DATA
========================================= */

const builderCategories = [
  "All Services",
  "Social & Video",
  "Writing & Email",
  "Print & Events",
  "Web & Digital",
];

const builderServices = [
  {
    id: "social-graphic",
    title: "Social Graphic",
    category: "Social & Video",
    description: "A custom-designed, platform-ready graphic.",
    price: 65,
  },
  {
    id: "carousel",
    title: "Social Carousel",
    category: "Social & Video",
    description: "A multi-slide visual storytelling post.",
    price: 100,
  },
  {
    id: "short-video",
    title: "Short Video Edit",
    category: "Social & Video",
    description: "Short-form editing using client-provided footage.",
    price: 150,
  },
  {
    id: "caption",
    title: "Social Caption",
    category: "Social & Video",
    description: "Platform-ready copy to accompany your content.",
    price: 25,
  },
  {
    id: "press-release",
    title: "Press Release",
    category: "Writing & Email",
    description: "A professionally written announcement.",
    price: 250,
  },
  {
    id: "promo-email",
    title: "Promotional Email",
    category: "Writing & Email",
    description: "A designed marketing or announcement email.",
    price: 125,
  },
  {
    id: "newsletter-design",
    title: "Newsletter",
    category: "Writing & Email",
    description: "A formatted, professionally designed newsletter.",
    price: 200,
  },
  {
    id: "flyer",
    title: "Promotional Flyer",
    category: "Print & Events",
    description: "A print-ready or digital promotional flyer.",
    price: 125,
  },
  {
    id: "sponsor-sign",
    title: "Sponsor Sign",
    category: "Print & Events",
    description: "A branded event or sponsorship sign design.",
    price: 125,
  },
  {
    id: "merch",
    title: "Merchandise Design",
    category: "Print & Events",
    description: "A custom design for branded merchandise.",
    price: 175,
  },
  {
    id: "landing-page",
    title: "Landing Page",
    category: "Web & Digital",
    description: "A focused, responsive landing page.",
    price: 400,
  },
  {
    id: "page-refresh",
    title: "Website Page Refresh",
    category: "Web & Digital",
    description: "A visual and content refresh for one existing page.",
    price: 250,
  },
];

/* =========================================
   FAQ DATA
========================================= */

const faqs = [
  {
    question: "When do these specials expire?",
    answer:
      "Black Friday promotional pricing is available for inquiries submitted by November 27, 2026. Project scope and scheduling are confirmed before work begins.",
  },
  {
    question: "Is the $400 social media package a monthly commitment?",
    answer:
      "Yes. Social Media Essentials is an ongoing monthly service. The promotional rate is offered for the first 12 months, subject to the terms agreed upon before onboarding.",
  },
  {
    question: "Can I combine multiple packages?",
    answer:
      "Absolutely. You can request more than one package or use the custom builder to select individual services.",
  },
  {
    question: "Are revisions included in the package pricing?",
    answer:
      "Yes. Revisions and edits from Hill & Haven are unlimited. However, redesigns may be subject to additional pricing.",
  },
  {
    question: "Do you provide video filming?",
    answer:
      "The featured social package includes editing of client-provided footage. Filming and more extensive video production can be discussed separately.",
  },
  {
    question: "Does submitting an inquiry commit me to anything?",
    answer:
      "No. An inquiry starts the conversation. We confirm availability, deliverables, timelines, and pricing over your choice of phone call, video meeting, or email before any work begins.",
  },
  {
    question: "Can I request something not listed here?",
    answer:
      "Yes. Hill & Haven offers additional creative, digital, writing, and production services. Describe your project in the inquiry form.",
  },
];

/* =========================================
   HELPERS
========================================= */

const formatMoney = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

/* =========================================
   PACKAGES PAGE
========================================= */

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const [quantities, setQuantities] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");

  const selectedServices = useMemo(
    () =>
      builderServices
        .filter((service) => (quantities[service.id] || 0) > 0)
        .map((service) => ({
          ...service,
          quantity: quantities[service.id],
          subtotal: service.price * quantities[service.id],
        })),
    [quantities],
  );

  const customTotal = selectedServices.reduce(
    (sum, service) => sum + service.subtotal,
    0,
  );

  const filteredServices =
    activeCategory === "All Services"
      ? builderServices
      : builderServices.filter(
          (service) => service.category === activeCategory,
        );

  const changeQuantity = (id, change) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, (current[id] || 0) + change),
    }));
  };

  const clearBuilder = () => {
    setQuantities({});
  };

  const scrollToInquiry = () => {
    document.getElementById("inquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const choosePackage = (pkg) => {
    setSelectedPackage(pkg);
    setFormStatus("idle");
    scrollToInquiry();
  };

  const chooseCustomPackage = () => {
    if (selectedServices.length === 0) return;

    setSelectedPackage({
      id: "custom",
      title: "Custom Package",
      price: customTotal,
      priceLabel: formatMoney(customTotal),
      includes: selectedServices.map(
        (service) =>
          `${service.quantity} × ${service.title} — ${formatMoney(
            service.subtotal,
          )}`,
      ),
    });

    setFormStatus("idle");
    scrollToInquiry();
  };

  /* =========================================
     NETLIFY FORM SUBMISSION
     Reuses hill-haven-contact
  ========================================= */

  const handlePackageSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const packageChoice = formData.get("package-choice");
    const originalMessage = formData.get("message") || "";

    const packageDetails = selectedPackage
      ? [
          `Selected package: ${selectedPackage.title}`,
          `Estimated price: ${selectedPackage.priceLabel}`,
          "",
          "Included services:",
          ...selectedPackage.includes.map((item) => `- ${item}`),
        ].join("\n")
      : `Package interest: ${packageChoice || "General inquiry"}`;

    formData.set(
      "message",
      [
        "HILL & HAVEN — PACKAGES PAGE INQUIRY",
        "",
        packageDetails,
        "",
        "PROJECT DETAILS:",
        originalMessage,
      ].join("\n"),
    );

    formData.delete("package-choice");
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
      console.error("Netlify package inquiry error:", error);
      setFormStatus("error");
    }
  };

  return (
    <main className="pkg-page">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="pkg-hero" id="top">
        <div className="pkg-container">
          <div className="pkg-hero-topline">
            <span>HILL & HAVEN DIGITAL PRODUCTION</span>
            <span>BLACK FRIDAY 2026</span>
          </div>

          <div className="pkg-hero-content">
            <p className="pkg-eyebrow">CREATIVE RESOURCES. SPECIAL PRICES.</p>

            <h1>
              A Gold Mine
              <em>of Good Deals.</em>
            </h1>

            <p className="pkg-hero-description">
              Good creative shouldn't be out of reach. For a limited time, we're
              offering special pricing on some of our most-requested services.
              Explore the specials or stake your claim on a custom package.
            </p>

            <div className="pkg-hero-actions">
              <a className="pkg-button pkg-button-orange" href="#featured">
                Explore the Specials
                <ArrowIcon />
              </a>

              <a className="pkg-button pkg-button-outline" href="#builder">
                Stake Your Claim
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="pkg-hero-bottom">
            <span>GOOD WORK. NO BULL.</span>
            <span>OFFERS END NOVEMBER 27, 2026</span>
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURED MONTHLY PACKAGE
      ===================================== */}

      <section className="pkg-featured-section" id="featured">
        <div
          className="pkg-featured-pattern"
          style={{
            backgroundImage: `url(${aboutPattern})`,
          }}
          aria-hidden="true"
        />

        <div className="pkg-container">
          <div className="pkg-section-intro">
            <p className="pkg-eyebrow">THE MAIN EVENT</p>

            <h2>
              Keep the Current
              <br />
              <em>Flowing.</em>
            </h2>
          </div>

          <div className="pkg-featured-card">
            <div className="pkg-featured-left">
              <div className="pkg-featured-badges">
                <span className="pkg-featured-label">BLACK FRIDAY SPECIAL</span>

                <span className="pkg-featured-label secondary">
                  LIMITED TO 6 CLIENTS
                </span>
              </div>

              <p className="pkg-featured-kicker">
                A RENEWABLE SOURCE OF CONTENT
              </p>

              <h3>
                Social Media
                <em>Essentials.</em>
              </h3>

              <p className="pkg-featured-description">
                Keep your content flowing with a steady supply of professionally
                produced creative. Stay visible, engage your audience, and keep
                your message moving without the cost of a full-time creative
                team.
              </p>

              <div className="pkg-featured-price">
                <strong>$400</strong>
                <span>/ MONTH</span>
              </div>

              <p className="pkg-featured-price-note">
                Promotional monthly rate for the first 12 months.
              </p>

              <button
                type="button"
                className="pkg-button pkg-button-orange"
                onClick={() => choosePackage(featuredPackage)}
              >
                Keep the Content Flowing
                <ArrowIcon />
              </button>

              <p className="pkg-featured-deadline">
                Offer closes November 27, 2026.
              </p>
            </div>

            <div className="pkg-featured-right">
              <p className="pkg-mini-heading">WHAT'S INCLUDED EACH WEEK</p>

              <div className="pkg-featured-deliverables">
                <div className="pkg-featured-deliverable">
                  <strong>02</strong>

                  <div>
                    <h4>Social Graphics</h4>
                    <p>
                      Two custom-designed graphics tailored to your
                      organization's message and visual identity.
                    </p>
                  </div>
                </div>

                <div className="pkg-featured-deliverable">
                  <strong>01</strong>

                  <div>
                    <h4>Short Video Edit</h4>
                    <p>
                      One short-form video edited from footage you provide,
                      ready for your digital channels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pkg-featured-extras">
                <p className="pkg-mini-heading">ALSO INCLUDED</p>

                <ul>
                  <li>
                    <CheckIcon />
                    Captions for included content
                  </li>

                  <li>
                    <CheckIcon />
                    Creative coordination and planning
                  </li>

                  <li>
                    <CheckIcon />
                    Consistent branded content
                  </li>
                </ul>
              </div>

              <div className="pkg-featured-math">
                <span>MONTHLY CREATIVE SUPPORT</span>
                <span>6 CLIENT SPOTS AVAILABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          ONE-TIME SPECIALS
      ===================================== */}

      <section className="pkg-specials-section" id="specials">
        <div className="pkg-container">
          <div className="pkg-specials-heading">
            <div>
              <p className="pkg-eyebrow">ONE-TIME PROJECT SPECIALS</p>

              <h2>
                Small Footprint.
                <br />
                <em>Big Impact.</em>
              </h2>
            </div>

            <p>
              You don't need a mountain of deliverables to make an impression.
              These focused creative packages give your next project the
              resources it needs to stand out.
            </p>
          </div>

          <div className="pkg-card-grid">
            {specials.map((pkg) => (
              <article className="pkg-card" key={pkg.id}>
                <div className="pkg-card-top">
                  <span className="pkg-card-number">SPECIAL {pkg.number}</span>

                  <span className="pkg-card-arrow">
                    <ArrowIcon />
                  </span>
                </div>

                <div className="pkg-card-intro">
                  <h3>{pkg.title}</h3>

                  <p className="pkg-card-tagline">{pkg.tagline}</p>

                  <p className="pkg-card-description">{pkg.description}</p>
                </div>

                <div className="pkg-card-price">
                  <span className="pkg-price-label">PACKAGE PRICE</span>

                  <strong>{formatMoney(pkg.price)}</strong>

                  <span className="pkg-price-type">One-time project</span>
                </div>

                <div className="pkg-card-includes">
                  <p className="pkg-mini-heading">WHAT'S INCLUDED</p>

                  <ul>
                    {pkg.includes.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pkg-card-bottom">
                  <p>
                    <strong>BEST FOR</strong>
                    <br />
                    {pkg.bestFor}
                  </p>

                  <button
                    type="button"
                    className="pkg-card-cta"
                    onClick={() =>
                      choosePackage({
                        ...pkg,
                        priceLabel: formatMoney(pkg.price),
                      })
                    }
                  >
                    Stake Your Claim
                    <ArrowIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="pkg-specials-footnote">
            <p>
              Packages are subject to project scope, scheduling, and final
              agreement. Additional services may be quoted separately.
            </p>

            <a href="#builder">
              Explore More Resources
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          STATEMENT
      ===================================== */}

      <section className="pkg-statement">
        <div className="pkg-container">
          <p className="pkg-eyebrow">GOOD WORK. NO BULL.</p>

          <h2>
            Good Creative Is
            <br />
            <em>a Natural Resource.</em>
          </h2>

          <p>
            Every great idea needs the right resources to grow. Whether you're
            telling a story, launching a campaign, or building something new,
            we're here to help you make the most of what you've got.
          </p>

          <a href="#builder">
            Tap Into Your Potential
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* =====================================
          CUSTOM PACKAGE BUILDER
      ===================================== */}

      <section className="pkg-builder-section" id="builder">
        <div className="pkg-container">
          <div className="pkg-builder-heading">
            <div>
              <p className="pkg-eyebrow">YOUR CREATIVE RESOURCES</p>

              <h2>
                Stake
                <br />
                <em>Your Claim.</em>
              </h2>
            </div>

            <p>
              Pick the creative resources your project needs. Mix, match, and
              build a package that's yours from the ground up. Your estimated
              total updates as you go.
            </p>
          </div>

          <div className="pkg-builder-layout">
            {/* SERVICE SELECTOR */}

            <div className="pkg-builder-services">
              <div className="pkg-builder-toolbar">
                <h3>Pick Your Resources</h3>

                <button
                  type="button"
                  className="pkg-text-button"
                  onClick={clearBuilder}
                >
                  Clear All
                </button>
              </div>

              <div className="pkg-category-tabs">
                {builderCategories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={`pkg-tab ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="pkg-service-list">
                {filteredServices.map((service) => {
                  const quantity = quantities[service.id] || 0;

                  return (
                    <div
                      className={`pkg-service-row ${
                        quantity > 0 ? "selected" : ""
                      }`}
                      key={service.id}
                    >
                      <div className="pkg-service-info">
                        <span className="pkg-service-category">
                          {service.category}
                        </span>

                        <h4>{service.title}</h4>

                        <p>{service.description}</p>

                        <span className="pkg-service-price">
                          {formatMoney(service.price)} each
                        </span>
                      </div>

                      <div
                        className="pkg-quantity"
                        aria-label={`${service.title} quantity`}
                      >
                        <button
                          type="button"
                          aria-label={`Remove one ${service.title}`}
                          disabled={quantity === 0}
                          onClick={() => changeQuantity(service.id, -1)}
                        >
                          <MinusIcon />
                        </button>

                        <span>{quantity}</span>

                        <button
                          type="button"
                          aria-label={`Add one ${service.title}`}
                          onClick={() => changeQuantity(service.id, 1)}
                        >
                          <PlusIcon />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LIVE QUOTE */}

            <aside className="pkg-quote-panel">
              <div className="pkg-quote-header">
                <p className="pkg-eyebrow">YOUR CUSTOM PACKAGE</p>

                <h3>
                  Your Resource
                  <br />
                  Reserve.
                </h3>

                <p>All your creative resources, gathered in one place.</p>
              </div>

              <div className="pkg-quote-body">
                {selectedServices.length === 0 ? (
                  <div className="pkg-quote-empty">
                    <span aria-hidden="true">+</span>

                    <p>Untapped Potential.</p>

                    <small>
                      Select a service to start building your resource reserve.
                    </small>
                  </div>
                ) : (
                  <div className="pkg-quote-items">
                    {selectedServices.map((service) => (
                      <div className="pkg-quote-item" key={service.id}>
                        <div>
                          <strong>{service.title}</strong>

                          <span>
                            {service.quantity} × {formatMoney(service.price)}
                          </span>
                        </div>

                        <strong>{formatMoney(service.subtotal)}</strong>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pkg-quote-total">
                  <div>
                    <span>ESTIMATED TOTAL</span>
                    <small>One-time services</small>
                  </div>

                  <strong>{formatMoney(customTotal)}</strong>
                </div>

                <p className="pkg-quote-disclaimer">
                  This is an estimate, not a binding quote. Final pricing and
                  timelines are confirmed before work begins.
                </p>

                <button
                  type="button"
                  className={`pkg-button ${
                    selectedServices.length > 0
                      ? "pkg-button-orange"
                      : "pkg-button-disabled"
                  }`}
                  disabled={selectedServices.length === 0}
                  onClick={chooseCustomPackage}
                >
                  Stake Your Claim
                  <ArrowIcon />
                </button>

                {selectedServices.length > 0 && (
                  <button
                    type="button"
                    className="pkg-clear-button"
                    onClick={clearBuilder}
                  >
                    Start Fresh
                  </button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================
          NETLIFY INQUIRY FORM
      ===================================== */}

      <section className="pkg-inquiry-section" id="inquiry">
        <div className="pkg-container">
          <div className="pkg-inquiry-heading">
            <div>
              <p className="pkg-eyebrow">LET'S BREAK GROUND</p>

              <h2>
                Ready to
                <br />
                <em>Break Ground?</em>
              </h2>
            </div>

            <p>
              Every great project starts somewhere. Tell us what you're working
              on, and we'll help you turn your ideas into something real.
            </p>
          </div>

          <div className="pkg-inquiry-layout">
            {/* LEFT — PACKAGE SUMMARY */}

            <aside className="pkg-inquiry-summary">
              <p className="pkg-mini-heading">YOUR PROJECT</p>

              {selectedPackage ? (
                <>
                  <h3>{selectedPackage.title}</h3>

                  <div className="pkg-inquiry-price">
                    <strong>{selectedPackage.priceLabel}</strong>

                    <span>
                      {selectedPackage.id === "social-essentials"
                        ? "MONTHLY PROMOTIONAL RATE"
                        : "ESTIMATED PROJECT PRICE"}
                    </span>
                  </div>

                  <div className="pkg-inquiry-selection">
                    <p className="pkg-mini-heading">YOUR SELECTION</p>

                    <ul>
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index}>
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="pkg-inquiry-change"
                    onClick={() => {
                      setSelectedPackage(null);
                      setFormStatus("idle");
                    }}
                  >
                    Explore Other Resources
                  </button>
                </>
              ) : (
                <>
                  <h3>Let's Dig Into It.</h3>

                  <p>
                    Have your eye on one of our specials? Or something entirely
                    different? Tell us what you've got in mind.
                  </p>
                </>
              )}

              <p className="pkg-inquiry-note">
                No strings attached. Submitting this form doesn't commit you to
                a purchase. We'll confirm scope, timeline, availability, and
                final pricing before work begins.
              </p>
            </aside>

            {/* RIGHT — NETLIFY CONTACT FORM */}

            <form
              className="pkg-inquiry-form"
              name="hill-haven-contact"
              method="POST"
              data-netlify="true"
              onSubmit={handlePackageSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="hill-haven-contact"
              />

              <div className="pkg-inquiry-form-header">
                <p className="pkg-mini-heading">PROJECT INQUIRY</p>

                <p>* Required fields</p>
              </div>

              {/* NAME AND ORGANIZATION */}

              <div className="pkg-form-row">
                <div className="pkg-form-field">
                  <label htmlFor="pkg-name">Name *</label>

                  <input
                    id="pkg-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="pkg-form-field">
                  <label htmlFor="pkg-organization">Organization</label>

                  <input
                    id="pkg-organization"
                    type="text"
                    name="organization"
                    placeholder="Your organization"
                    autoComplete="organization"
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="pkg-form-field">
                <label htmlFor="pkg-email">Email Address *</label>

                <input
                  id="pkg-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* PACKAGE DROPDOWN */}

              <div className="pkg-form-field">
                <label htmlFor="pkg-selection">
                  What Are You Interested In?
                </label>

                <select
                  id="pkg-selection"
                  name="package-choice"
                  value={selectedPackage?.title || ""}
                  onChange={(event) => {
                    const value = event.target.value;

                    if (!value) {
                      setSelectedPackage(null);
                      return;
                    }

                    if (value === featuredPackage.title) {
                      setSelectedPackage(featuredPackage);
                      return;
                    }

                    const special = specials.find((pkg) => pkg.title === value);

                    if (special) {
                      setSelectedPackage({
                        ...special,
                        priceLabel: formatMoney(special.price),
                      });
                      return;
                    }

                    if (
                      value === "Custom Package" &&
                      selectedServices.length > 0
                    ) {
                      setSelectedPackage({
                        id: "custom",
                        title: "Custom Package",
                        price: customTotal,
                        priceLabel: formatMoney(customTotal),
                        includes: selectedServices.map(
                          (service) =>
                            `${service.quantity} × ${service.title} — ${formatMoney(service.subtotal)}`,
                        ),
                      });
                      return;
                    }

                    setSelectedPackage({
                      id: "other",
                      title: value,
                      priceLabel: "Custom Quote",
                      includes: [],
                    });
                  }}
                >
                  <option value="">Select a package or service</option>

                  <option value="Social Media Essentials">
                    Social Media Essentials — $400/month
                  </option>

                  {specials.map((pkg) => (
                    <option key={pkg.id} value={pkg.title}>
                      {pkg.title} — {formatMoney(pkg.price)}
                    </option>
                  ))}

                  <option value="Custom Package">Custom Package</option>

                  <option value="Other Services">Something Else</option>
                </select>
              </div>

              {/* MESSAGE */}

              <div className="pkg-form-field">
                <label htmlFor="pkg-message">
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="pkg-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your goals, timeline, and what you're looking for..."
                  required
                />
              </div>

              {/* SUBMIT */}

              <button
                className="pkg-button pkg-button-orange pkg-inquiry-submit"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Let's Break Ground"}

                <ArrowIcon />
              </button>

              {formStatus === "success" && (
                <p className="form-feedback" role="status">
                  Your inquiry is in! Thanks for reaching out. We'll be in touch
                  soon.
                </p>
              )}

              {formStatus === "error" && (
                <p className="pkg-inquiry-error" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="pkg-inquiry-privacy">
                No commitment required. We'll review your inquiry and reach out
                to discuss next steps.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================
          FAQ
      ===================================== */}

      <section className="pkg-faq-section">
        <div className="pkg-container">
          <div className="pkg-faq-layout">
            <div className="pkg-faq-heading">
              <p className="pkg-eyebrow">GOOD TO KNOW</p>

              <h2>
                The Lay
                <br />
                <em>of the Land.</em>
              </h2>

              <p>A few things worth knowing before we break ground.</p>
            </div>

            <div className="pkg-faq-list">
              {faqs.map((faq) => (
                <details className="pkg-faq-item" key={faq.question}>
                  <summary>
                    {faq.question}

                    <span className="pkg-faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
