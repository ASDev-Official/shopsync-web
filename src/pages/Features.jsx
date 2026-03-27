import { useEffect } from "react";
import {
  RefreshCw,
  WifiOff,
  Users,
  Trash2,
  Moon,
  Sun,
  Smartphone,
  Monitor,
  Zap,
  UserPlus,
  RotateCcw,
} from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import "../styles/Features.css";

function Features() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("features.meta.title");
  }, [t]);

  return (
    <div className="features-page">
      <div className="features-hero">
        <h1>{t("features.hero.title")}</h1>
        <p>{t("features.hero.subtitle")}</p>
      </div>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">{t("features.sync.badge")}</div>
            <h2>
              <RefreshCw
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              {t("features.sync.title")}
            </h2>
            <p>{t("features.sync.desc")}</p>
            <ul className="feature-list">
              <li>{t("features.sync.bullet1")}</li>
              <li>{t("features.sync.bullet2")}</li>
              <li>{t("features.sync.bullet3")}</li>
              <li>{t("features.sync.bullet4")}</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="sync-demo">
              <div className="device-card">
                <div className="device-header">
                  <Smartphone
                    size={20}
                    style={{ display: "inline", marginRight: "0.3rem" }}
                  />{" "}
                  {t("features.sync.phone")}
                </div>
                <div className="sync-item">{t("features.sync.addMilk")}</div>
              </div>
              <div className="sync-arrow">
                <Zap size={32} />
              </div>
              <div className="device-card">
                <div className="device-header">
                  <Monitor
                    size={20}
                    style={{ display: "inline", marginRight: "0.3rem" }}
                  />{" "}
                  {t("features.sync.web")}
                </div>
                <div className="sync-item">{t("features.sync.updated")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt">
        <div className="feature-detail reverse">
          <div className="feature-visual">
            <div className="offline-demo">
              <div className="offline-card">
                <div className="offline-icon">
                  <WifiOff size={64} />
                </div>
                <h4>{t("features.offline.noConnection")}</h4>
                <p>{t("features.offline.keepWorking")}</p>
                <div className="offline-badge">{t("features.offline.autoSync")}</div>
              </div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">{t("features.offline.badge")}</div>
            <h2>
              <WifiOff
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              {t("features.offline.title")}
            </h2>
            <p>{t("features.offline.desc")}</p>
            <ul className="feature-list">
              <li>{t("features.offline.bullet1")}</li>
              <li>{t("features.offline.bullet2")}</li>
              <li>{t("features.offline.bullet3")}</li>
              <li>{t("features.offline.bullet4")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">{t("features.collab.badge")}</div>
            <h2>
              <Users
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              {t("features.collab.title")}
            </h2>
            <p>{t("features.collab.desc")}</p>
            <ul className="feature-list">
              <li>{t("features.collab.bullet1")}</li>
              <li>{t("features.collab.bullet2")}</li>
              <li>{t("features.collab.bullet3")}</li>
              <li>{t("features.collab.bullet4")}</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="collab-demo">
              <div className="user-avatar">
                <UserPlus size={32} />
              </div>
              <div className="user-avatar">
                <Users size={32} />
              </div>
              <div className="user-avatar">
                <UserPlus size={32} />
              </div>
              <div className="shared-list">
                <h4>{t("features.collab.groceryList")}</h4>
                <p>{t("features.collab.groceryStats")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt">
        <div className="feature-detail reverse">
          <div className="feature-visual">
            <div className="recycle-demo">
              <div className="trash-icon">
                <Trash2 size={64} />
              </div>
              <div className="restore-action">
                <span>{t("features.recycle.restore")}</span>
                <div className="restore-arrow">
                  <RotateCcw size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">{t("features.recycle.badge")}</div>
            <h2>
              <Trash2
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              {t("features.recycle.title")}
            </h2>
            <p>{t("features.recycle.desc")}</p>
            <ul className="feature-list">
              <li>{t("features.recycle.bullet1")}</li>
              <li>{t("features.recycle.bullet2")}</li>
              <li>{t("features.recycle.bullet3")}</li>
              <li>{t("features.recycle.bullet4")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">{t("features.theme.badge")}</div>
            <h2>
              <Moon
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              {t("features.theme.title")}
            </h2>
            <p>{t("features.theme.desc")}</p>
            <ul className="feature-list">
              <li>{t("features.theme.bullet1")}</li>
              <li>{t("features.theme.bullet2")}</li>
              <li>{t("features.theme.bullet3")}</li>
              <li>{t("features.theme.bullet4")}</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="theme-demo">
              <div className="theme-card light">
                <div className="theme-header">
                  <Sun
                    size={20}
                    style={{ display: "inline", marginRight: "0.3rem" }}
                  />{" "}
                  {t("features.theme.light")}
                </div>
                <div className="theme-preview"></div>
              </div>
              <div className="theme-card dark">
                <div className="theme-header">
                  <Moon
                    size={20}
                    style={{ display: "inline", marginRight: "0.3rem" }}
                  />{" "}
                  {t("features.theme.dark")}
                </div>
                <div className="theme-preview"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-features">
        <h2>{t("features.more.title")}</h2>
        <div className="feature-tags">
          <div className="tag">{t("features.tag.location")}</div>
          <div className="tag">{t("features.tag.notifications")}</div>
          <div className="tag">{t("features.tag.share")}</div>
          <div className="tag">{t("features.tag.icons")}</div>
          <div className="tag">{t("features.tag.widgets")}</div>
          <div className="tag">{t("features.tag.wear")}</div>
          <div className="tag">{t("features.tag.language")}</div>
          <div className="tag">{t("features.tag.auth")}</div>
          <div className="tag">{t("features.tag.analytics")}</div>
          <div className="tag">{t("features.tag.updates")}</div>
        </div>
      </section>

      <section className="features-cta">
        <h2>{t("features.cta.title")}</h2>
        <p>{t("features.cta.subtitle")}</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/google-play-badge.png"
            alt={t("common.googlePlayAlt")}
            style={{ height: "60px", cursor: "pointer" }}
          />
        </a>
      </section>
    </div>
  );
}

export default Features;
