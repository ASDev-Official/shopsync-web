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
import { useI18n } from "../i18n/I18nProvider";
import "../styles/About.css";

function About() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("about.meta.title");
  }, [t]);

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>{t("about.hero.title")}</h1>
        <p>{t("about.hero.subtitle")}</p>
      </div>

      <section className="about-story">
        <div className="story-content">
          <h2>{t("about.story.title")}</h2>
          <p>{t("about.story.p1")}</p>
          <p>{t("about.story.p2")}</p>
        </div>
      </section>

      <section className="about-mission">
        <h2>{t("about.mission.title")}</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={48} />
            </div>
            <h3>{t("about.mission.simplicity.title")}</h3>
            <p>{t("about.mission.simplicity.desc")}</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <Handshake size={48} />
            </div>
            <h3>{t("about.mission.together.title")}</h3>
            <p>{t("about.mission.together.desc")}</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">
              <Globe size={48} />
            </div>
            <h3>{t("about.mission.open.title")}</h3>
            <p>{t("about.mission.open.desc")}</p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>{t("about.tech.title")}</h2>
        <p className="tech-intro">{t("about.tech.intro")}</p>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">
              <Smartphone size={48} />
            </div>
            <h4>Flutter</h4>
            <p>{t("about.tech.flutter")}</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Flame size={48} />
            </div>
            <h4>Firebase</h4>
            <p>{t("about.tech.firebase")}</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Target size={48} />
            </div>
            <h4>Dart</h4>
            <p>{t("about.tech.dart")}</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <RefreshCw size={48} />
            </div>
            <h4>Provider</h4>
            <p>{t("about.tech.provider")}</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Cloud size={48} />
            </div>
            <h4>Cloud Firestore</h4>
            <p>{t("about.tech.firestore")}</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <Palette size={48} />
            </div>
            <h4>Material Design 3</h4>
            <p>{t("about.tech.material")}</p>
          </div>
        </div>
      </section>

      <section className="open-source">
        <div className="open-source-content">
          <h2>🌟 {t("about.open.title")}</h2>
          <p>{t("about.open.desc")}</p>
          <div className="open-source-stats">
            <div className="stat">
              <div className="stat-value">GNU GPL v3.0</div>
              <div className="stat-label">{t("about.open.license")}</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">{t("about.open.free")}</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                <Globe size={48} />
              </div>
              <div className="stat-label">{t("about.open.contributors")}</div>
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
              {t("about.open.viewGitHub")}
            </a>
            <a
              href="https://github.com/ASDev-Official/shopsync/blob/main/CONTRIBUTING.md"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.open.contribute")}
            </a>
          </div>
        </div>
      </section>

      <section className="localization">
        <h2>
          <Globe size={32} className="inline-icon" /> {t("about.localization.title")}
        </h2>
        <p>{t("about.localization.desc")}</p>
        <a
          href="https://hosted.weblate.org/projects/asdev-official/shopsync-web-landing/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("about.localization.cta")}
        </a>
      </section>

      <section className="platforms">
        <h2>{t("about.platforms.title")}</h2>
        <div className="platform-grid">
          <div className="platform-card">
            <div className="platform-icon">
              <Smartphone size={64} />
            </div>
            <h3>{t("about.platform.android")}</h3>
            <p>{t("about.platform.android.desc")}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt={t("common.googlePlayAlt")}
                style={{ height: "50px", marginTop: "0.5rem" }}
              />
            </a>
          </div>
          <div className="platform-card">
            <div className="platform-icon">
              <Watch size={64} />
            </div>
            <h3>{t("about.platform.wear")}</h3>
            <p>{t("about.platform.wear.desc")}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt={t("common.googlePlayAlt")}
                style={{ height: "50px", marginTop: "0.5rem" }}
              />
            </a>
          </div>
          <div className="platform-card">
            <div className="platform-icon">
              <Globe size={64} />
            </div>
            <h3>{t("about.platform.web")}</h3>
            <p>{t("about.platform.web.desc")}</p>
            <a
              href="https://app.shopsync.aadish.dev"
              className="platform-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.platform.web.launch")}
            </a>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>{t("about.cta.title")}</h2>
        <p>{t("about.cta.desc")}</p>
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
          <a
            href="https://github.com/ASDev-Official/shopsync"
            className="btn btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.cta.source")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
