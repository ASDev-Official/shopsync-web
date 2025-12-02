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
import "../styles/Features.css";

function Features() {
  useEffect(() => {
    document.title = "Features - ShopSync";
  }, []);

  return (
    <div className="features-page">
      <div className="features-hero">
        <h1>Powerful Features for Seamless Shopping</h1>
        <p>Discover everything ShopSync has to offer</p>
      </div>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">Core Features</div>
            <h2>
              <RefreshCw
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              Real-time Cloud Synchronization
            </h2>
            <p>
              Experience seamless shopping with instant updates across all your
              devices. When someone in your family adds an item, everyone sees
              it immediately. No more duplicate purchases or forgotten items.
            </p>
            <ul className="feature-list">
              <li>✓ Instant updates across all devices</li>
              <li>✓ Firebase-powered cloud sync</li>
              <li>✓ No manual refresh needed</li>
              <li>✓ See who added what in real-time</li>
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
                  Phone
                </div>
                <div className="sync-item">Add: Milk</div>
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
                  Web
                </div>
                <div className="sync-item">Updated!</div>
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
                <h4>No Connection</h4>
                <p>Keep working normally</p>
                <div className="offline-badge">Auto-sync when online</div>
              </div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">Reliability</div>
            <h2>
              <WifiOff
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              Offline Access Capability
            </h2>
            <p>
              Never let a poor connection stop you from shopping. ShopSync works
              perfectly offline, storing all your changes locally. When you're
              back online, everything syncs automatically.
            </p>
            <ul className="feature-list">
              <li>✓ Full functionality offline</li>
              <li>✓ Local data caching</li>
              <li>✓ Automatic sync when reconnected</li>
              <li>✓ Conflict resolution built-in</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">Collaboration</div>
            <h2>
              <Users
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              Multi-user Collaboration
            </h2>
            <p>
              Shopping is better together. Share lists with family members,
              roommates, or friends. Everyone can add, edit, and check off
              items. Perfect for households, parties, and group events.
            </p>
            <ul className="feature-list">
              <li>✓ Share lists with unlimited users</li>
              <li>✓ See who's editing in real-time</li>
              <li>✓ Google Sign-In integration</li>
              <li>✓ Permission management</li>
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
                <h4>Grocery List</h4>
                <p>3 members • 12 items</p>
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
                <span>Restore Item</span>
                <div className="restore-arrow">
                  <RotateCcw size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">Safety</div>
            <h2>
              <Trash2
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              Recycle Bin
            </h2>
            <p>
              Mistakes happen! Accidentally deleted an important item? No
              problem. ShopSync keeps deleted items in a recycle bin, giving you
              the ability to restore them anytime.
            </p>
            <ul className="feature-list">
              <li>✓ Safe deletion with recovery option</li>
              <li>✓ View deleted items history</li>
              <li>✓ One-tap restore functionality</li>
              <li>✓ Permanent deletion when ready</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-detail">
          <div className="feature-content">
            <div className="feature-badge">Personalization</div>
            <h2>
              <Moon
                size={32}
                style={{ display: "inline", marginRight: "0.5rem" }}
              />{" "}
              Dark/Light Theme Support
            </h2>
            <p>
              Choose the theme that works best for you. ShopSync offers both
              beautiful dark and light modes, designed with Material Design 3
              principles for a modern, comfortable experience.
            </p>
            <ul className="feature-list">
              <li>✓ Elegant dark mode for low-light</li>
              <li>✓ Clean light mode for daytime</li>
              <li>✓ Material Design 3 components</li>
              <li>✓ Smooth theme transitions</li>
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
                  Light
                </div>
                <div className="theme-preview"></div>
              </div>
              <div className="theme-card dark">
                <div className="theme-header">
                  <Moon
                    size={20}
                    style={{ display: "inline", marginRight: "0.3rem" }}
                  />{" "}
                  Dark
                </div>
                <div className="theme-preview"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-features">
        <h2>And Many More Features...</h2>
        <div className="feature-tags">
          <div className="tag">📍 Location Support</div>
          <div className="tag">🔔 Smart Notifications</div>
          <div className="tag">📤 Share Lists Easily</div>
          <div className="tag">🎨 Food Category Icons</div>
          <div className="tag">🏠 Home Screen Widgets</div>
          <div className="tag">⌚ WearOS Support</div>
          <div className="tag">🌍 Multi-language Support</div>
          <div className="tag">🔒 Firebase Authentication</div>
          <div className="tag">📊 Usage Analytics</div>
          <div className="tag">🚀 Regular Updates</div>
        </div>
      </section>

      <section className="features-cta">
        <h2>Experience All These Features Today</h2>
        <p>Free, open-source, and ready to use</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            style={{ height: "60px", cursor: "pointer" }}
          />
        </a>
      </section>
    </div>
  );
}

export default Features;
