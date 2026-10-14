import { useState } from "react";
import "./Packages.css";

const packages = [
  {
    category: "Social Media",
    items: [
      {
        id: "social-starter",
        title: "Social Media Starter",
        price: "From $500/month",
        description:
          "Two custom graphics per week with captions, flexible check-in calls, and unlimited revisions.",
      },
      {
        id: "social-custom",
        title: "Custom Social Media Support",
        price: "Custom quote",
        description:
          "Expanded content calendars, campaign assets, and ongoing creative support.",
      },
    ],
  },
  {
    category: "Design & Digital Production",
    items: [
      {
        id: "graphics",
        title: "Custom Graphics",
        price: "Custom quote",
        description:
          "Social graphics, digital advertisements, infographics, and campaign creative.",
      },
      {
        id: "print",
        title: "Print & Event Materials",
        price: "Custom quote",
        description:
          "Mailers, brochures, sponsor signage, event programs, and presentation materials.",
      },
    ],
  },
  {
    category: "Video & Storytelling",
    items: [
      {
        id: "short-video",
        title: "Short-Form Video",
        price: "Custom quote",
        description:
          "Reels, social videos, captions, audio cleanup, and motion graphics.",
      },
      {
        id: "video-production",
        title: "Video Production",
        price: "Custom quote",
        description:
          "Interviews, longer-form storytelling, editing, and production support.",
      },
    ],
  },
  {
    category: "Writing & Communications",
    items: [
      {
        id: "writing",
        title: "Writing & Copywriting",
        price: "Custom quote",
        description:
          "Articles, newsletters, email campaigns, web copy, and other written content.",
      },
      {
        id: "messaging",
        title: "Messaging & Creative Strategy",
        price: "Custom quote",
        description:
          "Message development, content planning, and creative direction.",
      },
    ],
  },
  {
    category: "Web & Interactive",
    items: [
      {
        id: "landing-page",
        title: "Landing Pages",
        price: "Custom quote",
        description:
          "Custom landing pages for campaigns, events, and organizations.",
      },
      {
        id: "website",
        title: "Website Development",
        price: "Custom quote",
        description:
          "Responsive websites, custom React development, and interactive digital experiences.",
      },
    ],
  },
];

export default function Packages() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const togglePackage = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const selectedPackages = packages
    .flatMap((category) => category.items)
    .filter((item) => selected.includes(item.id));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set(
      "selected-packages",
      selectedPackages.map((item) => item.title).join(", "),
    );

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setSelected([]);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try submitting your inquiry again.");
    }
  };

  return (
    <main className="packages-page">
      <section className="packages-hero">
        <span className="packages-eyebrow">
          HILL & HAVEN | CREATIVE SERVICES
        </span>

        <h1>Good work starts with the right tools.</h1>

        <p>
          Every organization has different needs. Explore our creative services,
          select what works for you, and let's build something worth sharing.
        </p>

        <a href="#package-builder" className="packages-hero-button">
          Explore Our Services ↓
        </a>
      </section>

      <section id="package-builder" className="packages-content">
        <div className="packages-section-intro">
          <span className="packages-eyebrow">THE SERVICE MENU</span>
          <h2>Pick what you need.</h2>
          <p>
            Choose one service or several. We'll work with you to develop a
            proposal that fits your goals.
          </p>
        </div>

        {packages.map((category) => (
          <div className="packages-category" key={category.category}>
            <h3>{category.category}</h3>

            <div className="packages-grid">
              {category.items.map((item) => {
                const isSelected = selected.includes(item.id);

                return (
                  <label
                    key={item.id}
                    className={`package-card ${
                      isSelected ? "package-card-selected" : ""
                    }`}
                  >
                    <div className="package-card-top">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => togglePackage(item.id)}
                      />
                      <span className="package-price">{item.price}</span>
                    </div>

                    <h4>{item.title}</h4>
                    <p>{item.description}</p>

                    <span className="package-select-text">
                      {isSelected ? "✓ Added to inquiry" : "+ Add to inquiry"}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="packages-inquiry" id="inquiry">
        <div className="packages-inquiry-inner">
          <div className="packages-section-intro">
            <span className="packages-eyebrow">LET'S GET TO WORK</span>
            <h2>Tell us what you're working on.</h2>
            <p>
              No commitment required. Share a few details and we'll follow up to
              discuss your project.
            </p>
          </div>

          {submitted ? (
            <div className="packages-success" role="status">
              <h3>Inquiry received!</h3>
              <p>
                Thank you for reaching out to Hill & Haven. We'll be in touch.
              </p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form
              name="packages-inquiry"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="packages-form"
            >
              <input type="hidden" name="form-name" value="packages-inquiry" />

              <input
                type="hidden"
                name="selected-packages"
                value={selectedPackages.map((item) => item.title).join(", ")}
              />

              <div className="packages-selected-summary">
                <strong>Your selected services</strong>

                {selectedPackages.length === 0 ? (
                  <p>No services selected yet.</p>
                ) : (
                  <ul>
                    {selectedPackages.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="packages-form-row">
                <label>
                  Your Name *
                  <input name="name" required />
                </label>

                <label>
                  Organization
                  <input name="organization" />
                </label>
              </div>

              <div className="packages-form-row">
                <label>
                  Email Address *
                  <input type="email" name="email" required />
                </label>

                <label>
                  Project Timeline
                  <select name="timeline" defaultValue="">
                    <option value="">Select a timeline</option>
                    <option>As soon as possible</option>
                    <option>Within 2 weeks</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>Just exploring</option>
                  </select>
                </label>
              </div>

              <label>
                Estimated Budget
                <select name="budget" defaultValue="">
                  <option value="">Select a budget</option>
                  <option>Under $500</option>
                  <option>$500–$1,000</option>
                  <option>$1,000–$2,500</option>
                  <option>$2,500–$5,000</option>
                  <option>$5,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label>
                Tell Us About Your Project *
                <textarea
                  name="project-details"
                  rows="5"
                  required
                  placeholder="What are you hoping to accomplish?"
                />
              </label>

              <button
                type="submit"
                className="packages-submit"
                disabled={selected.length === 0}
              >
                Send My Inquiry →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
