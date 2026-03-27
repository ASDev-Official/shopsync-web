import { useState, useEffect, useRef } from "react";
import { useI18n } from "../i18n/I18nProvider";
import "../styles/StatusBanner.css";

const IMPACT_CONFIG = {
  critical: { bg: "#dc2626", border: "#991b1b", labelKey: "status.impact.critical" },
  major: { bg: "#d97706", border: "#b45309", labelKey: "status.impact.major" },
  minor: { bg: "#ca8a04", border: "#a16207", labelKey: "status.impact.minor" },
  maintenance: {
    bg: "#2563eb",
    border: "#1d4ed8",
    labelKey: "status.impact.maintenance",
  },
  none: { bg: "#10b981", border: "#059669", labelKey: "status.impact.none" },
};

export default function StatusBanner() {
  const [incidents, setIncidents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const bannerRef = useRef(null);
  const { t, locale } = useI18n();

  useEffect(() => {
    fetch("https://shopsync.statuspage.io/api/v2/summary.json")
      .then((res) => res.json())
      .then((data) => {
        const active = (data.incidents || []).filter(
          (i) => i.status !== "resolved" && i.status !== "postmortem"
        );
        setIncidents(active);
        if (active.length > 0) {
          setModalOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  // Keep --banner-height CSS variable in sync so the navbar and content can offset correctly
  useEffect(() => {
    const update = () => {
      const h =
        bannerRef.current && incidents.length > 0
          ? bannerRef.current.getBoundingClientRect().height
          : 0;
      document.documentElement.style.setProperty("--banner-height", `${h}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.documentElement.style.setProperty("--banner-height", "0px");
    };
  }, [incidents]);

  if (!incidents.length) return null;

  const primary = incidents[0];
  const impact = primary.impact || "minor";
  const cfg = IMPACT_CONFIG[impact] || IMPACT_CONFIG.minor;
  const extraCount = incidents.length - 1;

  return (
    <>
      {/* Sticky outage banner */}
      <div
        ref={bannerRef}
        className="status-banner"
        style={{ "--banner-bg": cfg.bg, "--banner-border": cfg.border }}
        role="alert"
        aria-live="polite"
      >
        <div className="status-banner__inner">
          <span className="status-banner__icon" aria-hidden="true">
            ⚠️
          </span>
          <span className="status-banner__text">
            <strong>{t(cfg.labelKey)}:</strong> {primary.name}
            {" — "}
            <span className="status-banner__status">
              {formatStatus(primary.status, t)}
            </span>
            {extraCount > 0 && (
              <span className="status-banner__extra">
                {" "}
                {extraCount > 1
                  ? t("status.banner.extra.other", { count: extraCount })
                  : t("status.banner.extra.one", { count: extraCount })}
              </span>
            )}
          </span>
          <button
            className="status-banner__btn"
            onClick={() => setModalOpen(true)}
          >
            {t("status.banner.viewDetails")}
          </button>
          <a
            href="https://status.shopsync.aadish.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="status-banner__btn status-banner__btn--link"
          >
            {t("status.banner.statusPage")}
          </a>
        </div>
      </div>

      {/* Outage detail modal */}
      {modalOpen && (
        <div
          className="status-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          role="presentation"
        >
          <div
            className="status-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="status-modal-title"
          >
            <div
              className="status-modal__header"
              style={{ "--modal-header-bg": cfg.bg }}
            >
              <div className="status-modal__header-content">
                <span className="status-modal__header-icon" aria-hidden="true">
                  ⚠️
                </span>
                <h2 id="status-modal-title" className="status-modal__title">
                  {t("status.modal.title")}
                </h2>
              </div>
              <button
                className="status-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label={t("status.modal.closeAria")}
              >
                ✕
              </button>
            </div>

            <div className="status-modal__body">
              {incidents.map((incident) => {
                const icfg =
                  IMPACT_CONFIG[incident.impact] || IMPACT_CONFIG.minor;
                return (
                  <div key={incident.id} className="status-modal__incident">
                    <div className="status-modal__incident-meta">
                      <h3 className="status-modal__incident-name">
                        {incident.name}
                      </h3>
                      <div className="status-modal__badges">
                        <span
                          className="status-modal__badge"
                          style={{ "--badge-bg": icfg.bg }}
                        >
                          {t(icfg.labelKey)}
                        </span>
                        <span className="status-modal__badge status-modal__badge--status">
                          {formatStatus(incident.status, t)}
                        </span>
                      </div>
                    </div>

                    {incident.incident_updates?.length > 0 && (
                      <div className="status-modal__updates">
                        {incident.incident_updates.slice(0, 4).map((update) => (
                          <div
                            key={update.id}
                            className="status-modal__update"
                          >
                            <time
                              className="status-modal__update-time"
                              dateTime={update.created_at}
                            >
                              {formatDate(update.created_at, locale)}
                            </time>
                            <p className="status-modal__update-body">
                              {update.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {incident.shortlink && (
                      <a
                        href={incident.shortlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="status-modal__incident-link"
                      >
                        {t("status.modal.fullIncidentDetails")}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="status-modal__footer">
              <a
                href="https://status.shopsync.aadish.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="status-modal__statuspage-link"
              >
                {t("status.modal.viewStatusPage")}
              </a>
              <button
                className="status-modal__close-btn"
                onClick={() => setModalOpen(false)}
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function formatStatus(status, t) {
  const map = {
    investigating: t("status.state.investigating"),
    identified: t("status.state.identified"),
    monitoring: t("status.state.monitoring"),
    resolved: t("status.state.resolved"),
    postmortem: t("status.state.postmortem"),
  };
  return map[status] || status;
}

function formatDate(dateStr, locale) {
  return new Date(dateStr).toLocaleString(locale, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
