import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    const { scrollRestoration } = window.history;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = scrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (!pathname) return;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    // Run immediately and once again on the next frame for stability.
    scrollToTop();
    const frameId = requestAnimationFrame(scrollToTop);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;