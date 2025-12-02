import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            Home
          </Link>
          <Link
            to="/features"
            className={`nav-link ${isActive("/features")}`}
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about")}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact")}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <img
              src="/google-play-badge.png"
              alt="Get it on Google Play"
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
