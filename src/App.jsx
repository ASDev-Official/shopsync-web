import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StatusBanner from "./components/StatusBanner";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;

    if (!pathname.startsWith("/docs")) {
      return;
    }

    if (pathname.startsWith("/docs/index.html")) {
      return;
    }

    if (/\.[^/]+$/.test(pathname)) {
      return;
    }

    const docsPath = pathname.endsWith("/") ? `${pathname}index.html` : `${pathname}/index.html`;
    window.location.replace(`${docsPath}${search}${hash}`);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <StatusBanner />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
