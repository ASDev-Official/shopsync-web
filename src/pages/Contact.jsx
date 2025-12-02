import { useEffect } from "react";
import { Globe, Handshake } from "lucide-react";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact - ShopSync";
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions, feedback, or want to contribute? We'd love to hear
          from you!
        </p>
      </div>

      <section className="contact-main">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Connect With Us</h2>
            <p>
              ShopSync is an open-source project built by the community. Whether
              you're a user with feedback or a developer wanting to contribute,
              we welcome your involvement!
            </p>

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
                  <h3>GitHub</h3>
                  <p>Report bugs, request features, or contribute code</p>
                  <a
                    href="https://github.com/ASDev-Official/shopsync"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Repository →
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
                  <h3>GitHub Issues</h3>
                  <p>The best way to report bugs or request features</p>
                  <a
                    href="https://github.com/ASDev-Official/shopsync/issues"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open an Issue →
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
                  <h3>Email</h3>
                  <p>For general inquiries and support</p>
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
                  <h3>Localization</h3>
                  <p>Help translate ShopSync into your language</p>
                  <a
                    href="https://crowdin.com/project/as-shopsync"
                    className="method-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribute on Crowdin →
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
                Want to Contribute?
              </h2>
              <p>
                ShopSync is open source and we welcome contributions from
                developers of all skill levels. Here's how you can help:
              </p>
              <ul className="contribute-list">
                <li>
                  <strong>Code Contributions:</strong> Fix bugs, add features,
                  or improve performance
                </li>
                <li>
                  <strong>Documentation:</strong> Help improve our docs and
                  tutorials
                </li>
                <li>
                  <strong>Translations:</strong> Translate the app into your
                  language
                </li>
                <li>
                  <strong>Design:</strong> Create icons, graphics, or improve
                  the UI/UX
                </li>
                <li>
                  <strong>Testing:</strong> Report bugs and test new features
                </li>
                <li>
                  <strong>Spread the Word:</strong> Share ShopSync with friends
                  and family
                </li>
              </ul>
              <div className="contribute-buttons">
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CONTRIBUTING.md"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing Guide
                </a>
                <a
                  href="https://github.com/ASDev-Official/shopsync/blob/main/CODE-OF-CONDUCT.md"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </a>
              </div>
            </div>

            <div className="community-card">
              <h3>Join Our Community</h3>
              <p>
                Stay updated with the latest news, updates, and discussions
                about ShopSync.
              </p>
              <div className="community-badges">
                <a
                  href="https://github.com/ASDev-Official/shopsync/stargazers"
                  className="badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/github/stars/ASDev-Official/shopsync?style=social"
                    alt="GitHub stars"
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
                    alt="GitHub watchers"
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
                    alt="GitHub forks"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="security-content">
          <h2>🔒 Security</h2>
          <p>
            Found a security vulnerability? Please don't open a public issue.
            Instead, refer to our security policy for responsible disclosure.
          </p>
          <a
            href="https://github.com/ASDev-Official/shopsync/blob/main/SECURITY.md"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Security Policy
          </a>
        </div>
      </section>

      <section className="faq-preview">
        <h2>Quick Answers</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Is ShopSync really free?</h3>
            <p>
              Yes! ShopSync is completely free and open source under the MIT
              License.
            </p>
          </div>
          <div className="faq-item">
            <h3>Which platforms are supported?</h3>
            <p>
              Android phones, WearOS watches, and web browsers. iOS support
              coming soon!
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I report a bug?</h3>
            <p>
              Open an issue on our GitHub repository with details about the
              problem.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I contribute code?</h3>
            <p>Absolutely! Check our Contributing Guide to get started.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
