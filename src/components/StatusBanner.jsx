import { useState, useEffect, useRef } from "react";
import "../styles/StatusBanner.css";

const IMPACT_CONFIG = {
  critical: { bg: "#dc2626", border: "#991b1b", label: "Critical Outage" },
  major: { bg: "#d97706", border: "#b45309", label: "Major Outage" },
  minor: { bg: "#ca8a04", border: "#a16207", label: "Minor Outage" },
  maintenance: { bg: "#2563eb", border: "#1d4ed8", label: "Maintenance" },
  none: { bg: "#10b981", border: "#059669", label: "Operational" },
};

export default function StatusBanner() {
  const [incidents, setIncidents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const bannerRef = useRef(null);

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
            <strong>{cfg.label}:</strong> {primary.name}
            {" — "}
            <span className="status-banner__status">
              {formatStatus(primary.status)}
            </span>
            {extraCount > 0 && (
              <span className="status-banner__extra">
                {" "}
                +{extraCount} more incident{extraCount > 1 ? "s" : ""}
              </span>
            )}
          </span>
          <button
            className="status-banner__btn"
            onClick={() => setModalOpen(true)}
          >
            View Details
          </button>
          <a
            href="https://status.shopsync.aadish.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="status-banner__btn status-banner__btn--link"
          >
            Status Page
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
                  Service Status Update
                </h2>
              </div>
              <button
                className="status-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
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
                          {icfg.label}
                        </span>
                        <span className="status-modal__badge status-modal__badge--status">
                          {formatStatus(incident.status)}
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
                              {formatDate(update.created_at)}
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
                        Full incident details →
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
                View Status Page ↗
              </a>
              <button
                className="status-modal__close-btn"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function formatStatus(status) {
  const map = {
    investigating: "Investigating",
    identified: "Identified",
    monitoring: "Monitoring",
    resolved: "Resolved",
    postmortem: "Postmortem",
  };
  return map[status] || status;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
