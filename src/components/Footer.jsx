import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/shopsync.png" alt="ShopSync" className="logo-image" />
              <span className="logo-text">ShopSync</span>
            </div>
            <p className="footer-description">
              Share shopping lists with family and friends. Free, open-source,
              and built with ❤️.
            </p>
            <div className="footer-badges">
              <a
                href="https://github.com/ASDev-Official/shopsync/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <img
                  src="https://img.shields.io/github/stars/ASDev-Official/shopsync?style=social"
                  alt="GitHub stars"
                />
              </a>
              <a
                href="https://github.com/ASDev-Official/shopsync/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MIT License"
              >
                <img
                  src="https://img.shields.io/badge/license-MIT-blue"
                  alt="MIT License"
                />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="https://app.shopsync.aadish.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://crowdin.com/project/as-shopsync"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Translations
                </a>
              </li>
              <li>
                <a href="https://shopsync.aadish.dev/docs/">Documentation</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License (MIT)
                </a>
              </li>
              <li>
                <a
                  href="https://aadish.dev/legal/projects/shopsync/privacypolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CODE-OF-CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Security
                </a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} ShopSync. Open source under MIT License.</p>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/ASDev-Official/shopsync"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
