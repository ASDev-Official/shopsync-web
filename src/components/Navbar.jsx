import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import "../styles/Navbar.css";

const LANGUAGE_AUTONYM_OVERRIDES = {
  "zh-hans": "简体中文",
  "zh-hant": "繁體中文",
  "pt-br": "Português (Brasil)",
  "pt-pt": "Português (Portugal)",
};

function normalizeLocaleTag(code) {
  const candidate = String(code || "").replace(/_/g, "-");
  try {
    return Intl.getCanonicalLocales(candidate)[0] || candidate;
  } catch {
    return candidate;
  }
}

function formatLanguageCode(code) {
  const normalized = normalizeLocaleTag(code);
  return normalized
    .split("-")
    .map((part) => part.toUpperCase())
    .join("-");
}

function getLanguageAutonym(code) {
  const normalized = normalizeLocaleTag(code);
  const lower = normalized.toLowerCase();

  if (LANGUAGE_AUTONYM_OVERRIDES[lower]) {
    return LANGUAGE_AUTONYM_OVERRIDES[lower];
  }

  try {
    const languageNames = new Intl.DisplayNames([normalized], {
      type: "language",
    });
    const autonym = languageNames.of(normalized);
    if (autonym) {
      return autonym;
    }

    const languageSubtag = normalized.split("-")[0];
    return languageNames.of(languageSubtag) || formatLanguageCode(code);
  } catch {
    return formatLanguageCode(code);
  }
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { t, locale, setLocale, availableLocales, localeProgress } = useI18n();
  const languageMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/shopsync.png" alt="ShopSync" className="logo-image" />
          <span className="logo-text">ShopSync</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={closeMenu}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/features"
            className={`nav-link ${isActive("/features")}`}
            onClick={closeMenu}
          >
            {t("nav.features")}
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about")}`}
            onClick={closeMenu}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact")}`}
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </Link>
          <a href="/docs/" className="nav-link">
            {t("nav.docs")}
          </a>
          <div className="nav-language-dropdown" ref={languageMenuRef}>
            <button
              type="button"
              className="nav-language-trigger"
              aria-label={t("nav.languageAria")}
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              onClick={() => setIsLangOpen((open) => !open)}
            >
              <span className="nav-language-trigger-row">
                <span className="nav-language-trigger-code">
                  {formatLanguageCode(locale)}
                </span>
                <span className="nav-language-trigger-percent">
                  {localeProgress[locale] ?? 0}%
                </span>
              </span>
            </button>

            {isLangOpen && (
              <div
                className="nav-language-menu"
                role="listbox"
                aria-label={t("nav.languageAria")}
              >
                {availableLocales.map((code) => {
                  const progress = localeProgress[code] ?? 0;
                  const active = code === locale;

                  return (
                    <button
                      key={code}
                      type="button"
                      role="option"
                      aria-selected={active}
                      className={`nav-language-option ${active ? "active" : ""}`}
                      onClick={() => {
                        setLocale(code);
                        setIsLangOpen(false);
                        closeMenu();
                      }}
                    >
                      <div className="nav-language-option-row">
                        <span className="nav-language-option-label">
                          {getLanguageAutonym(code)}
                        </span>
                        <span className="nav-language-option-percent">
                          {progress}%
                        </span>
                      </div>
                      <div className="nav-language-progress-track" aria-hidden="true">
                        <span
                          className="nav-language-progress-fill"
                          style={{ width: `${progress}%` }}
                        ></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <img
              src="/google-play-badge.png"
              alt={t("common.googlePlayAlt")}
              style={{ height: "40px" }}
            />
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
