import { useEffect } from "react";
import { Globe, Handshake } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import "../styles/Contact.css";

function Contact() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("contact.meta.title");
  }, [t]);

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>{t("contact.hero.title")}</h1>
        <p>{t("contact.hero.subtitle")}</p>
      </div>

      <section className="contact-main">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{t("contact.connect.title")}</h2>
            <p>{t("contact.connect.desc")}</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="method-content">
                  <h3>{t("contact.github.title")}</h3>
                  <p>{t("contact.github.desc")}</p>
                  <a
                    href="https://github.com/ASDev-Official/shopsync"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.github.cta")}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="method-content">
                  <h3>{t("contact.issues.title")}</h3>
                  <p>{t("contact.issues.desc")}</p>
                  <a
                    href="https://github.com/ASDev-Official/shopsync/issues"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.issues.cta")}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="method-content">
                  <h3>{t("contact.email.title")}</h3>
                  <p>{t("contact.email.desc")}</p>
                  <a
                    href="mailto:support@shopsync.aadish.dev"
                    className="method-link"
                  >
                    support@shopsync.aadish.dev →
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Globe size={24} />
                </div>
                <div className="method-content">
                  <h3>{t("contact.localization.title")}</h3>
                  <p>{t("contact.localization.desc")}</p>
                  <a
                    href="https://hosted.weblate.org/projects/asdev-official/shopsync-web-landing/"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.localization.cta")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contribute-section">
            <div className="contribute-card">
              <h2>
                <Handshake
                  size={32}
                  style={{ display: "inline", marginRight: "0.5rem" }}
                />{" "}
                {t("contact.contribute.title")}
              </h2>
              <p>{t("contact.contribute.desc")}</p>
              <ul className="contribute-list">
                <li>
                  <strong>{t("contact.contribute.code")}</strong>{" "}
                  {t("contact.contribute.codeDesc")}
                </li>
                <li>
                  <strong>{t("contact.contribute.docs")}</strong>{" "}
                  {t("contact.contribute.docsDesc")}
                </li>
                <li>
                  <strong>{t("contact.contribute.translations")}</strong>{" "}
                  {t("contact.contribute.translationsDesc")}
                </li>
                <li>
                  <strong>{t("contact.contribute.design")}</strong>{" "}
                  {t("contact.contribute.designDesc")}
                </li>
                <li>
                  <strong>{t("contact.contribute.testing")}</strong>{" "}
                  {t("contact.contribute.testingDesc")}
                </li>
                <li>
                  <strong>{t("contact.contribute.spread")}</strong>{" "}
                  {t("contact.contribute.spreadDesc")}
                </li>
              </ul>
              <div className="contribute-buttons">
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CONTRIBUTING.md"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.contribute.guide")}
                </a>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CODE-OF-CONDUCT.md"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.contribute.coc")}
                </a>
              </div>
            </div>

            <div className="community-card">
              <h3>{t("contact.community.title")}</h3>
              <p>{t("contact.community.desc")}</p>
              <div className="community-badges">
                <a
                  href="https://github.com/ASDev-Official/shopsync/stargazers"
                  className="badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/stars/ASDev-Official/shopsync?style=social"
                    alt={t("contact.community.stars")}
                  />
                </a>
                <a
                  href="https://github.com/ASDev-Official/shopsync/watchers"
                  className="badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/watchers/ASDev-Official/shopsync?style=social"
                    alt={t("contact.community.watchers")}
                  />
                </a>
                <a
                  href="https://github.com/ASDev-Official/shopsync/forks"
                  className="badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/forks/ASDev-Official/shopsync?style=social"
                    alt={t("contact.community.forks")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="security-content">
          <h2>🔒 {t("contact.security.title")}</h2>
          <p>{t("contact.security.desc")}</p>
          <a
            href="https://github.com/ASDev-Official/shopsync/blob/main/SECURITY.md"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.security.cta")}
          </a>
        </div>
      </section>

      <section className="faq-preview">
        <h2>{t("contact.faq.title")}</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>{t("contact.faq.free.title")}</h3>
            <p>{t("contact.faq.free.desc")}</p>
          </div>
          <div className="faq-item">
            <h3>{t("contact.faq.platforms.title")}</h3>
            <p>{t("contact.faq.platforms.desc")}</p>
          </div>
          <div className="faq-item">
            <h3>{t("contact.faq.bug.title")}</h3>
            <p>{t("contact.faq.bug.desc")}</p>
          </div>
          <div className="faq-item">
            <h3>{t("contact.faq.code.title")}</h3>
            <p>{t("contact.faq.code.desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
