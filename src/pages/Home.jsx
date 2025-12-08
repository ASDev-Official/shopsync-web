import { Link } from "react-router-dom";
import { useEffect } from "react";
import { RefreshCw, WifiOff, Users, Trash2, Moon, Watch } from "lucide-react";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    document.title = "ShopSync - Shared Shopping Lists";
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <img src="/shopsync.png" alt="ShopSync" className="hero-logo" />
            <span className="hero-title-text">ShopSync</span>
          </h1>
          <p className="hero-subtitle">
            Share shopping lists with family and friends in real-time
          </p>
          <p className="hero-description">
            The intuitive Flutter app that simplifies shared shopping
            experiences. Create, manage, and sync shopping lists effortlessly
            across all your devices.
          </p>
          <div className="hero-buttons">
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
              href="https://app.shopsync.aadish.dev"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Launch Web App
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="devices-showcase">
            <div className="device-image">
              <img src="/phone.png" alt="ShopSync Mobile App" />
            </div>
            <div className="device-image">
              <img src="/watch.png" alt="ShopSync WearOS" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <h2 className="section-title">Why Choose ShopSync?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <RefreshCw size={48} />
            </div>
            <h3>Real-time Sync</h3>
            <p>
              Changes appear instantly across all devices. Never miss an update
              from your family.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <WifiOff size={48} />
            </div>
            <h3>Offline Access</h3>
            <p>
              Access your lists anytime, anywhere. Changes sync automatically
              when you're back online.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={48} />
            </div>
            <h3>Multi-user Collaboration</h3>
            <p>
              Share lists with family and friends. Everyone stays on the same
              page.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Trash2 size={48} />
            </div>
            <h3>Recycle Bin</h3>
            <p>
              Accidentally deleted something? Restore items from the recycle bin
              easily.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Moon size={48} />
            </div>
            <h3>Dark Mode</h3>
            <p>
              Easy on the eyes with beautiful dark and light themes that suit
              your preference.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Watch size={48} />
            </div>
            <h3>WearOS Integration</h3>
            <p>
              Access your shopping lists right from your wrist. Check items off
              without pulling out your phone.
            </p>
          </div>
        </div>
        <div className="cta-section">
          <Link to="/features" className="btn btn-outline">
            Explore All Features →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">Trusted by Users Worldwide</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Free & Open Source</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Cloud Sync</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Lists & Items</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Ready to Simplify Your Shopping?</h2>
        <p>
          Join thousands of users who trust ShopSync for their shopping needs
        </p>
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
          <Link to="/about" className="btn btn-outline btn-lg">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
