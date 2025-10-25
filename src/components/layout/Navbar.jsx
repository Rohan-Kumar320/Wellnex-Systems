import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate as useRouterNavigate } from "react-router-dom";
import logo from "../../assets/images/WS-logo2.png";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar({ navigateWithPreload, debug = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cssVars, setCssVars] = useState({
    navBg: "rgba(5,5,5,0.95)",
    navBgScrolled: "rgba(5,5,5,0.9)",
    text: "#0f172a",
    muted: "#6b7280",
    panel: "#ffffff",
    accentFrom: "#06b6d4",
  });

  const routerNavigate = useRouterNavigate();
  const htmlRef = useRef(typeof document !== "undefined" ? document.documentElement : null);
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // safe navigate helper (keeps your behavior)
  async function safeNavigate(to) {
    if (!to) return;
    if (debug) console.debug("[Navbar] safeNavigate ->", to, { hasProp: typeof navigateWithPreload === "function" });
    setMenuOpen(false);

    if (typeof navigateWithPreload === "function") {
      try {
        await navigateWithPreload(to);
      } catch (err) {
        if (debug) console.error("[Navbar] navigateWithPreload failed, falling back to router navigate", err);
        routerNavigate(to);
      }
      return;
    }

    try {
      routerNavigate(to);
    } catch (err) {
      if (debug) console.error("[Navbar] routerNavigate failed, falling back to location.href", err);
      window.location.href = to;
    }
  }

  const handleWaitlist = useCallback(() => safeNavigate("/waitlist"), []);

  // read css vars from computed style and set them to local state
  const readCssVars = useCallback(() => {
    try {
      const root = document.documentElement;
      const s = getComputedStyle(root);
      const navBg = s.getPropertyValue("--nav-bg").trim() || s.getPropertyValue("--nav-bg-scrolled").trim() || "rgba(5,5,5,0.95)";
      const navBgScrolled = s.getPropertyValue("--nav-bg-scrolled").trim() || navBg;
      const text = s.getPropertyValue("--text").trim() || "#0f172a";
      const muted = s.getPropertyValue("--muted").trim() || "#6b7280";
      const panel = s.getPropertyValue("--panel").trim() || "#ffffff";
      const accentFrom = s.getPropertyValue("--accent-from").trim() || "#06b6d4";

      // set CSS vars state with safe fallback strings
      setCssVars({
        navBg: navBg || "rgba(5,5,5,0.95)",
        navBgScrolled: navBgScrolled || "rgba(255,255,255,0.85)",
        text: text || "#0f172a",
        muted: muted || "#6b7280",
        panel: panel || "#ffffff",
        accentFrom: accentFrom || "#06b6d4",
      });
    } catch (e) {
      if (debug) console.error("[Navbar] readCssVars error", e);
    }
  }, [debug]);

  // on mount, read initial CSS vars and set up an observer for theme changes
  useEffect(() => {
    if (typeof document === "undefined") return;
    readCssVars();

    // observe attribute changes on <html> (data-theme toggles or other attribute updates)
    const root = document.documentElement;
    observerRef.current = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && (m.attributeName === "data-theme" || m.attributeName === "class" || m.attributeName === "style")) {
          // small debounce (next tick) to allow theme toggle to apply variables
          setTimeout(readCssVars, 12);
          break;
        }
      }
    });
    observerRef.current.observe(root, { attributes: true, attributeFilter: ["data-theme", "class", "style"] });

    // also listen to a custom event (if your theme toggler emits one)
    const onThemeEvent = () => setTimeout(readCssVars, 12);
    window.addEventListener("theme:changed", onThemeEvent);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      window.removeEventListener("theme:changed", onThemeEvent);
    };
  }, [readCssVars]);

  // compute nav style using latest CSS var values
  const navStyle = {
    color: cssVars.text,
    backgroundColor: scrolled ? cssVars.navBgScrolled : "transparent",
    WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    borderBottom: scrolled ? `1px solid var(--nav-border)` : "none",
  };

  // mobile overlay style taken from computed CSS var values
  const mobileStyle = {
    background: cssVars.navBg,
    color: cssVars.text,
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Features", to: "/features" },
    { label: "Apps", to: "/apps" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <motion.nav
      style={navStyle}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Wellnex Systems logo" className="w-10 h-10 max-w-full rounded-md object-contain" />
            <div>
              <div className="text-shadow-fuchsia-50 font-bold leading-none text-sm md:text-base">Wellnex</div>
              <div className="text-xs" style={{ color: cssVars.muted, marginTop: -2 }}>Systems</div>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8" style={{ color: cssVars.text }}>
            {navItems.map((item) => (
              <li key={item.to}>
                <button
                  type="button"
                  onClick={() => safeNavigate(item.to)}
                  className="transition-colors duration-200 text-sm hover:text-cyan-400"
                  aria-label={`Go to ${item.label}`}
                  style={{ color: cssVars.text }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={handleWaitlist}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-xl transform-gpu transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
              aria-label="Get Early Access"
              style={{ background: `linear-gradient(90deg, ${cssVars.accentFrom}, ${cssVars.accentFrom})` }}
            >
              Get Early Access
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ color: cssVars.text }}
            >
              <span className="text-xl leading-none" style={{ color: cssVars.text }}>{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="md:hidden fixed left-0 right-0 top-[64px] px-4 py-6 z-40"
          role="menu"
          style={mobileStyle}
        >
          <ul className="space-y-4 text-center" style={{ color: cssVars.text }}>
            {navItems.map((item) => (
              <li key={item.to}>
                <button
                  type="button"
                  onClick={() => safeNavigate(item.to)}
                  className="block w-full py-2 text-lg hover:text-cyan-400 focus:outline-none"
                  aria-label={`Go to ${item.label}`}
                  style={{ color: cssVars.text }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="flex justify-center">
              <ThemeToggle />
            </li>
            <li>
              <button
                type="button"
                onClick={handleWaitlist}
                className="mt-2 inline-block px-6 py-2 rounded-full text-sm font-semibold w-full"
                aria-label="Get Early Access"
                style={{
                  background: `linear-gradient(90deg, ${cssVars.accentFrom}, ${cssVars.accentFrom})`,
                  color: cssVars.panel
                }}
              >
                Get Early Access
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
