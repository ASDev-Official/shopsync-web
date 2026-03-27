import { Link } from "react-router-dom";
import { useEffect } from "react";
import { RefreshCw, WifiOff, Users, Trash2, Moon, Watch } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import "../styles/Home.css";

function Home() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("home.meta.title");
  }, [t]);

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
            {t("home.hero.subtitle")}
          </p>
          <p className="hero-description">
            {t("home.hero.description")}
          </p>
          <div className="hero-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt={t("common.googlePlayAlt")}
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
              {t("home.hero.launchWeb")}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="devices-showcase">
            <div className="device-image">
              <img src="/phone.png" alt={t("home.hero.mobileAlt")} />
            </div>
            <div className="device-image">
              <img src="/watch.png" alt={t("home.hero.wearAlt")} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <h2 className="section-title">{t("home.features.title")}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <RefreshCw size={48} />
            </div>
            <h3>{t("home.features.sync.title")}</h3>
            <p>{t("home.features.sync.desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <WifiOff size={48} />
            </div>
            <h3>{t("home.features.offline.title")}</h3>
            <p>{t("home.features.offline.desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={48} />
            </div>
            <h3>{t("home.features.collab.title")}</h3>
            <p>{t("home.features.collab.desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Trash2 size={48} />
            </div>
            <h3>{t("home.features.recycle.title")}</h3>
            <p>{t("home.features.recycle.desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Moon size={48} />
            </div>
            <h3>{t("home.features.theme.title")}</h3>
            <p>{t("home.features.theme.desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Watch size={48} />
            </div>
            <h3>{t("home.features.wear.title")}</h3>
            <p>{t("home.features.wear.desc")}</p>
          </div>
        </div>
        <div className="cta-section">
          <Link to="/features" className="btn btn-outline">
            {t("home.features.cta")}
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">{t("home.stats.title")}</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">{t("home.stats.free")}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">{t("home.stats.cloud")}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">{t("home.stats.lists")}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>{t("home.final.title")}</h2>
        <p>{t("home.final.desc")}</p>
        <div className="cta-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/google-play-badge.png"
              alt={t("common.googlePlayAlt")}
              style={{ height: "60px" }}
            />
          </a>
          <Link to="/about" className="btn btn-outline btn-lg">
            {t("home.final.learnMore")}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
