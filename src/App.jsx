
import { motion } from "framer-motion";
import "./App.css";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Automate your daily tasks and complete your work faster than ever.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    description:
      "Your data stays protected with modern security and privacy features.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Understand your business performance with powerful insights.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for getting started.",
    features: ["Basic features", "1 project", "Community support"],
  },
  {
    name: "Professional",
    price: "$19",
    description: "For growing teams and businesses.",
    features: ["All features", "Unlimited projects", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For large teams and organizations.",
    features: ["Advanced analytics", "Team collaboration", "Premium support"],
  },
];

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">N</span>
          Nova
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>

        <a href="#pricing" className="nav-button">
          Get Started ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="announcement">
            ✨ Introducing Nova 2.0
          </div>

          <h1>
            Work smarter.
            <br />
            <span>Grow faster.</span>
          </h1>

          <p>
            The all-in-one platform to manage your projects,
            automate your workflow, and grow your business
            without the complexity.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="primary-button">
              Start for free →
            </a>

            <a href="#features" className="secondary-button">
              Explore features
            </a>
          </div>

          <div className="hero-info">
            <span>✓ No credit card required</span>
            <span>✓ Free forever plan</span>
          </div>
        </motion.div>

        {/* DASHBOARD PREVIEW */}
        <motion.div
          className="dashboard"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="dashboard-top">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="dashboard-label">
              Nova Dashboard
            </span>

            <span className="dashboard-status">
              ● Live
            </span>
          </div>

          <div className="dashboard-body">

            <div className="dashboard-sidebar">
              <div className="sidebar-logo">N</div>
              <div className="sidebar-item active">▦</div>
              <div className="sidebar-item">◫</div>
              <div className="sidebar-item">◷</div>
              <div className="sidebar-item">⚙</div>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-heading">
                <div>
                  <h3>Welcome back 👋</h3>
                  <p>Here is your business overview.</p>
                </div>

                <button className="small-button">
                  + New Project
                </button>
              </div>

              <div className="stats">

                <div className="stat-card">
                  <span>Total Revenue</span>
                  <h3>$24,500</h3>
                  <small>↗ 12.5% this month</small>
                </div>

                <div className="stat-card">
                  <span>Active Projects</span>
                  <h3>28</h3>
                  <small>↗ 8 new projects</small>
                </div>

              </div>

              <div className="chart-card">
                <div className="chart-heading">
                  <h4>Revenue Overview</h4>
                  <span>Last 7 days</span>
                </div>

                <div className="chart">
                  {[35, 55, 42, 75, 60, 90, 70, 100, 80, 65, 95, 85].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.05,
                        }}
                      />
                    )
                  )}
                </div>

                <div className="chart-labels">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <div className="trusted">
          Trusted by teams who want to do more
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="features section">

        <div className="section-heading">
          <span className="section-tag">FEATURES</span>

          <h2>
            Everything you need.
            <br />
            <span>All in one place.</span>
          </h2>

          <p>
            Powerful tools designed to simplify your work
            and help your team achieve more.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#pricing">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">

        <div className="section-heading">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>
            Get started in
            <br />
            <span>three simple steps.</span>
          </h2>
        </div>

        <div className="steps">

          <div className="step">
            <span className="step-number">01</span>
            <h3>Create your account</h3>
            <p>
              Sign up in seconds and set up your workspace.
            </p>
          </div>

          <div className="step">
            <span className="step-number">02</span>
            <h3>Organize your work</h3>
            <p>
              Bring your projects, tasks, and team together.
            </p>
          </div>

          <div className="step">
            <span className="step-number">03</span>
            <h3>Grow your business</h3>
            <p>
              Track progress and achieve your goals faster.
            </p>
          </div>

        </div>

      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing section">

        <div className="section-heading">
          <span className="section-tag">PRICING</span>

          <h2>
            Simple pricing.
            <br />
            <span>No surprises.</span>
          </h2>

          <p>
            Choose the plan that works best for you.
          </p>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              {plan.popular && (
                <div className="popular-label">
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.name}</h3>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="plan-price">
                {plan.price}
                <span>/ month</span>
              </div>

              <a
                href="#contact"
                className={
                  plan.popular
                    ? "primary-button plan-button"
                    : "secondary-button plan-button"
                }
              >
                Get Started
              </a>

              <div className="plan-divider"></div>

              <p className="included">What's included:</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">

        <span className="section-tag">CUSTOMER STORIES</span>

        <h2>
          "Nova completely changed the way
          our team works. Everything is
          simpler, faster, and more organized."
        </h2>

        <div className="testimonial-author">
          <div className="author-avatar">A</div>

          <div>
            <h4>Alex Morgan</h4>
            <p>Product Manager</p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section id="contact" className="cta">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">GET STARTED</span>

          <h2>
            Ready to work
            <br />
            <span>smarter?</span>
          </h2>

          <p>
            Join teams using Nova to simplify their workflow
            and achieve more every day.
          </p>

          <a href="#pricing" className="primary-button">
            Start your free trial →
          </a>
        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#" className="logo">
          <span className="logo-icon">N</span>
          Nova
        </a>

        <p>
          © 2026 Nova. All rights reserved.
        </p>

        <div>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

      </footer>

    </div>
  );
}

export default App;
