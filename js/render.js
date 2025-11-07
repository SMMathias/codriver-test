export default function renderCoDriver(container = null) {
  // Ensure there is a container to render into
  let root = container || document.getElementById("app");
  if (!root) {
    root = document.createElement("div");
    root.id = "app";
    document.body.appendChild(root);
  }

  root.innerHTML = `
    <div class="site">
      <header class="site-header">
        <a href="#hero">
        <img src="img/codriver.svg" alt="CoDriver home" class="logo" />
        </a>
        <nav class="nav-links">
          <a href="#why" class="nav-link">Why CoDriver</a>
          <a href="#features" class="nav-link">Features</a>
          <a href="#pricing" class="nav-link">Pricing</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <div class="header-actions">
          <button class="btn btn-outline">Login</button>
          <button class="btn btn-primary">Book Demo</button>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </header>

      <section id="hero" class="section-hero">
        <h1 class="hero-title">Turn Every Sales Conversation <br> Into A Winning One</h1>
        <p class="hero-text">
          CoDriver is a real-time sales companion for salespeople in car dealerships.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Book Demo</button>
        </div>
        <div>
        <img class="hero-img" src="../img/ui.svg" alt="UI illustration"></div>
      </section>

      <section id="why" class="section section-why">
        <h3 class="section-title">
          The car buying journey has changed — and so must the way you sell.
        </h3>
        <p class="section-lead">
          Buyers arrive informed, ready to decide, and expect clear, confident answers. Meanwhile, new models and updates appear faster than ever. The challenge isn’t finding information — it’s using the right argument at the right moment.
        </p>
        <div class="info-grid">
          <div class="info-card">
            <h4 class="info-card-title">High Expectations. Clear Answers.</h4>
            <p>Buyers come with questions — and expect expert clarity.</p>
          </div>
          <div class="info-card">
            <h4 class="info-card-title">One Visit. One Chance.</h4>
            <p>Most buyers show up once, ready to decide.</p>
          </div>
          <div class="info-card">
            <h4 class="info-card-title">Competitive Complexity.</h4>
            <p>New brands, trims, and updates appear constantly.</p>
          </div>
        </div>
      </section>

      <section id="features" class="section section-features">
        <h3 class="section-title">From understanding buyers to winning them.</h3>
        <div class="feature-grid">
          ${[
            [
              "Buyer Profiling",
              "Understand what drives each decision. Capture buyer needs, lifestyle, and priorities — instantly.",
            ],
            [
              "Competitor Comparison",
              "Instant clarity on how your model stacks up. See where you win and how to reframe with confidence.",
            ],
            [
              "Product Argumentation",
              "Deliver persuasive, expert-backed arguments supported by real data.",
            ],
            [
              "Presenter Mode",
              "Make every sales conversation a shared experience — in person or online.",
            ],
            [
              "In-the-Moment Guidance",
              "Stay confident when it matters most with smart prompts.",
            ],
            [
              "Smart Next Steps",
              "Keep momentum strong with intelligent next-step suggestions.",
            ],
          ]
            .map(
              ([title, text]) => `
            <div class="feature-card">
              <h4 class="feature-card-title">${title}</h4>
              <p class="feature-card-text">${text}</p>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <section id="pricing" class="section section-pricing">
        <h3 class="section-title">Simple. Scalable. Smart.</h3>
        <p class="section-lead">Three levels to fit every brand, importer, or dealer group.</p>
        <div class="pricing-grid">
          ${[
            [
              "Essential",
              "For teams starting to structure arguments",
              "Access to own models and product arguments. Basic Presenter Mode. Outlook 365 integration.",
            ],
            [
              "Pro",
              "For teams competing in crowded markets",
              "Competitor comparisons, guided suggestions, Presenter Mode, CRM integration.",
            ],
            [
              "Enterprise",
              "For OEMs and importers driving consistency",
              "Multi-brand coverage, brand-trained AI, full CRM integration.",
            ],
          ]
            .map(
              ([plan, sub, features]) => `
            <div class="pricing-card">
              <h4 class="pricing-card-title">${plan}</h4>
              <p class="pricing-card-sub">${sub}</p>
              <p class="pricing-card-text">${features}</p>
              <button class="btn btn-primary">Request Demo</button>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <section id="about" class="section section-about">
        <h3 class="section-title">Built by automotive experts. Designed for modern sales teams.</h3>
        <p class="section-lead">
          CoDriver is developed by EASI’R Labs — combining over a decade of automotive CRM experience with the latest in guided selling. We believe every salesperson deserves the clarity and confidence of a top performer.
        </p>
        <blockquote class="testimonial">
          “With CoDriver, even new hires handle complex buyer questions with confidence. It’s like giving everyone the knowledge of our best salesperson.”
        </blockquote>
        <p class="testimonial-source">— Dealer Principal, Germany</p>
      </section>

      <section id="contact" class="section section-contact">
        <h3 class="section-title">Let’s talk about how CoDriver can work for your network.</h3>
        <p class="section-lead">
          Whether you want to pilot CoDriver with a few dealerships or roll it out brand-wide — we’re here to help.
        </p>
        <form class="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button class="btn btn-primary">Send Message</button>
        </form>
      </section>

      <footer class="site-footer">
        <p>© 2025 CoDriver — All rights reserved</p>
        <p class="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </p>
      </footer>
    </div>
  `;
}
