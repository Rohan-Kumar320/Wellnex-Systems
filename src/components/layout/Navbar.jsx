import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/WS-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Features", "Apps", "Contact"];

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#050515]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Wellnex Systems logo" className="w-10 h-10 rounded-md object-contain" />
          <div>
            <div className="text-cyan-400 font-bold leading-none">Wellnex</div>
            <div className="text-xs text-gray-300 -mt-0.5">Systems</div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-200">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={(e) => handleNav(e, item.toLowerCase())} className="hover:text-cyan-400 transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="#waitlist" onClick={(e) => handleNav(e, "waitlist")} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-xl transform transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30">
            Get Early Access
          </a>
        </div>

        <button className="md:hidden text-gray-200" onClick={() => setMenuOpen((s) => !s)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <motion.ul initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="md:hidden bg-[#050515]/95 text-gray-200 space-y-4 px-6 py-6 text-center">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={(e) => handleNav(e, item.toLowerCase())} className="block py-2 text-lg hover:text-cyan-400">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#waitlist" onClick={(e) => handleNav(e, "waitlist")} className="inline-block mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
              Get Early Access
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
