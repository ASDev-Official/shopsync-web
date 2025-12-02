import { useEffect } from "react";
import {
  Target,
  Handshake,
  Globe,
  Heart,
  Flame,
  Palette,
  Cloud,
  Watch,
  Smartphone,
  RefreshCw,
} from "lucide-react";
import "../styles/About.css";

function About() {
  useEffect(() => {
    document.title = "About - ShopSync";
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About ShopSync</h1>
        <p>Making shopping together simple, seamless, and social</p>
      </div>

      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            ShopSync was born from a simple need: better coordination in
            household shopping. Too often, family members would buy duplicate
            items or forget what was needed, leading to wasted time, money, and
            food.
          </p>
          <p>
            We built ShopSync to solve this problem with a clean, intuitive app
            that makes shared shopping lists effortless. Whether you're
            coordinating with your family, planning a party with friends, or
            managing supplies with roommates, ShopSync keeps everyone on the
            same page.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={48} />
            </div>
            <h3>Simplicity First</h3>
            <p>
              We believe shopping lists should be simple. No complicated
              features, no cluttered interfaces—just a clean, intuitive app that
              works.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <Handshake size={48} />
            </div>
            <h3>Better Together</h3>
            <p>
              Shopping is often a collaborative activity. We make it easy for
              families and friends to coordinate effortlessly.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <Globe size={48} />
            </div>
            <h3>Open & Accessible</h3>
            <p>
              ShopSync is free, open-source, and accessible to everyone. We're
              committed to transparency and community-driven development.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Built with Modern Technology</h2>
        <p className="tech-intro">
          ShopSync leverages cutting-edge technologies to deliver a fast,
          reliable, and beautiful experience across all platforms.
        </p>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">
              <Smartphone size={48} />
            </div>
            <h4>Flutter</h4>
            <p>Cross-platform framework for beautiful native experiences</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Flame size={48} />
            </div>
            <h4>Firebase</h4>
            <p>Real-time database and cloud infrastructure</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Target size={48} />
            </div>
            <h4>Dart</h4>
            <p>Modern, optimized language for mobile development</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <RefreshCw size={48} />
            </div>
            <h4>Provider</h4>
            <p>State management for reactive updates</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Cloud size={48} />
            </div>
            <h4>Cloud Firestore</h4>
            <p>NoSQL cloud database for real-time sync</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Palette size={48} />
            </div>
            <h4>Material Design 3</h4>
            <p>Modern design system for intuitive interfaces</p>
          </div>
        </div>
      </section>

      <section className="open-source">
        <div className="open-source-content">
          <h2>🌟 Open Source & Community Driven</h2>
          <p>
            ShopSync is proudly open source under the MIT License. We believe in
            transparency, collaboration, and giving back to the developer
            community.
          </p>
          <div className="open-source-stats">
            <div className="stat">
              <div className="stat-value">MIT</div>
              <div className="stat-label">License</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                <Globe size={48} />
              </div>
              <div className="stat-label">Global Contributors</div>
            </div>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/ASDev-Official/shopsync"
              className="btn btn-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://github.com/ASDev-Official/shopsync/blob/main/CONTRIBUTING.md"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </div>
        </div>
      </section>

      <section className="localization">
        <h2>
          <Globe size={32} className="inline-icon" /> Help Us Localize
        </h2>
        <p>
          We're working to make ShopSync available in multiple languages. Help
          translate ShopSync into your language and make it accessible to
          millions more!
        </p>
        <a
          href="https://crowdin.com/project/as-shopsync"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute to Translations
        </a>
      </section>

      <section className="platforms">
        <h2>Available Everywhere</h2>
        <div className="platform-grid">
          <div className="platform-card">
            <div className="platform-icon">
              <Smartphone size={64} />
            </div>
            <h3>Android</h3>
            <p>Native app on Google Play Store</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                style={{ height: "50px", marginTop: "0.5rem" }}
              />
            </a>
          </div>
          <div className="platform-card">
            <div className="platform-icon">
              <Watch size={64} />
            </div>
            <h3>WearOS</h3>
            <p>Quick access on your smartwatch</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                style={{ height: "50px", marginTop: "0.5rem" }}
              />
            </a>
          </div>
          <div className="platform-card">
            <div className="platform-icon">
              <Globe size={64} />
            </div>
            <h3>Web</h3>
            <p>Access from any browser</p>
            <a
              href="https://app.shopsync.aadish.dev"
              className="platform-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch →
            </a>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join our community and simplify your shopping experience today</p>
        <div className="cta-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              style={{ height: "60px" }}
            />
          </a>
          <a
            href="https://github.com/ASDev-Official/shopsync"
            className="btn btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
