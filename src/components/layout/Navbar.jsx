// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate as useRouterNavigate } from "react-router-dom";
// import logo from "../../assets/images/WS-logo.png";

// export default function Navbar({ navigateWithPreload, debug = false }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const routerNavigate = useRouterNavigate();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const navItems = [
//     { label: "Home", to: "/" },
//     { label: "About", to: "/about" },
//     { label: "Features", to: "/features" },
//     { label: "Apps", to: "/apps" },
//     { label: "Contact", to: "/contact" }
//   ];

//   async function safeNavigate(to) {
//     if (!to) return;
//     if (debug) console.debug("[Navbar] safeNavigate ->", to, { hasProp: typeof navigateWithPreload === "function" });
//     setMenuOpen(false);

//     if (typeof navigateWithPreload === "function") {
//       try {
//         await navigateWithPreload(to);
//       } catch (err) {
//         if (debug) console.error("[Navbar] navigateWithPreload failed, falling back to router navigate", err);
//         routerNavigate(to);
//       }
//       return;
//     }

//     try {
//       routerNavigate(to);
//     } catch (err) {
//       if (debug) console.error("[Navbar] routerNavigate failed, falling back to location.href", err);
//       window.location.href = to;
//     }
//   }

//   const handleWaitlist = () => safeNavigate("/waitlist");

//   return (
//     <motion.nav
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050515]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.45, ease: "easeOut" }}
//       aria-label="Main navigation"
//     >
//       <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-14 md:h-16">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Wellnex Systems logo" className="w-10 h-10 max-w-full rounded-md object-contain" />
//             <div>
//               <div className="text-cyan-400 font-bold leading-none text-sm md:text-base">Wellnex</div>
//               <div className="text-xs text-gray-300 -mt-0.5">Systems</div>
//             </div>
//           </div>

//           <ul className="hidden md:flex items-center gap-8 text-gray-200">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <button
//                   type="button"
//                   onClick={() => safeNavigate(item.to)}
//                   className="hover:text-cyan-400 transition-colors duration-200 text-sm"
//                   aria-label={`Go to ${item.label}`}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="hidden md:flex items-center gap-4">
//             <button
//               type="button"
//               onClick={handleWaitlist}
//               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-xl transform-gpu transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
//               aria-label="Get Early Access"
//             >
//               Get Early Access
//             </button>
//           </div>

//           <button
//             type="button"
//             className="md:hidden inline-flex items-center justify-center p-2 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
//             onClick={() => setMenuOpen((s) => !s)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.18 }}
//           className="md:hidden fixed left-0 right-0 top-[64px] bg-[#050515]/98 text-gray-200 px-4 py-6 z-40"
//           role="menu"
//         >
//           <ul className="space-y-4 text-center">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <button
//                   type="button"
//                   onClick={() => safeNavigate(item.to)}
//                   className="block w-full py-2 text-lg hover:text-cyan-400 focus:outline-none"
//                   aria-label={`Go to ${item.label}`}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 type="button"
//                 onClick={handleWaitlist}
//                 className="mt-2 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold w-full"
//                 aria-label="Get Early Access"
//               >
//                 Get Early Access
//               </button>
//             </li>
//           </ul>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate as useRouterNavigate } from "react-router-dom";
import logo from "../../assets/images/WS-logo.png";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar({ navigateWithPreload, debug = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const routerNavigate = useRouterNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Features", to: "/features" },
    { label: "Apps", to: "/apps" },
    { label: "Contact", to: "/contact" }
  ];

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

  const handleWaitlist = () => safeNavigate("/waitlist");

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050515]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
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
              <div className="text-cyan-400 font-bold leading-none text-sm md:text-base">Wellnex</div>
              <div className="text-xs text-gray-300 -mt-0.5">Systems</div>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-gray-200">
            {navItems.map((item) => (
              <li key={item.to}>
                <button
                  type="button"
                  onClick={() => safeNavigate(item.to)}
                  className="hover:text-cyan-400 transition-colors duration-200 text-sm"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle className="mr-2" />
            <button
              type="button"
              onClick={handleWaitlist}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-xl transform-gpu transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
              aria-label="Get Early Access"
            >
              Get Early Access
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="md:hidden fixed left-0 right-0 top-[64px] bg-[#050515]/98 text-gray-200 px-4 py-6 z-40"
          role="menu"
        >
          <ul className="space-y-4 text-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <button
                  type="button"
                  onClick={() => safeNavigate(item.to)}
                  className="block w-full py-2 text-lg hover:text-cyan-400 focus:outline-none"
                  aria-label={`Go to ${item.label}`}
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
                className="mt-2 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold w-full"
                aria-label="Get Early Access"
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
