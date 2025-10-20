// import { useEffect, useRef, useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { gsap } from "gsap";

// const cards = [
//   {
//     id: "p1",
//     title: "Personalized Care",
//     desc: "AI-driven plans that adapt to each user’s goals and progress.",
//     colorFrom: "#06b6d4",
//     colorTo: "#8b5cf6",
//     svg: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
//         <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" fill="white" />
//         <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="white" opacity="0.9" />
//       </svg>
//     )
//   },
//   {
//     id: "p2",
//     title: "Seamless Integrations",
//     desc: "Wearables, gyms and providers connected in a single dashboard.",
//     colorFrom: "#f59e0b",
//     colorTo: "#ec4899",
//     svg: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
//         <path d="M3 12h4v8H3zM17 4h4v8h-4zM8 8h8v8H8z" fill="white" />
//       </svg>
//     )
//   },
//   {
//     id: "p3",
//     title: "Provider-Ready",
//     desc: "Tools built for studios and clinics to scale operations effortlessly.",
//     colorFrom: "#10b981",
//     colorTo: "#06b6d4",
//     svg: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
//         <path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h7v2H4z" fill="white" />
//       </svg>
//     )
//   }
// ];

// function useAutoAdvance(length, delay = 4200) {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setIndex((s) => (s + 1) % length), delay);
//     return () => clearInterval(id);
//   }, [length, delay]);
//   return [index, setIndex];
// }

// function useCount(target, duration = 1000) {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const steps = Math.max(1, Math.floor(duration / 16));
//     const increment = target / steps;
//     const id = setInterval(() => {
//       start += 1;
//       const next = Math.round(Math.min(target, start * increment));
//       setValue(next);
//       if (next >= target) clearInterval(id);
//     }, 16);
//     return () => clearInterval(id);
//   }, [target, duration]);
//   return value;
// }

// export default function Hero({ navigateWithPreload }) {
//   const reduce = useReducedMotion();
//   const [mounted, setMounted] = useState(false);
//   const [index, setIndex] = useAutoAdvance(cards.length, 4200);
//   const users = useCount(12500);
//   const gyms = useCount(420);
//   const sessions = useCount(184000);

//   const headlineRef = useRef(null);
//   const subRef = useRef(null);
//   const paraRef = useRef(null);
//   const ctaRef = useRef(null);
//   const statsRef = useRef(null);
//   const cardsRef = useRef([]);
//   const rootRef = useRef(null);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 60);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     const hEl = headlineRef.current;
//     const words = hEl ? hEl.querySelectorAll("span.word") : [];

//     if (reduce) {
//       gsap.killTweensOf([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
//       gsap.set([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 1, y: 0, clearProps: "all" });
//       return;
//     }

//     gsap.killTweensOf([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);

//     gsap.set([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 0, y: 18, force3D: true });

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.to(words, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.7 })
//       .to(subRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.36")
//       .to(paraRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.58")
//       .to(ctaRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 }, "-=0.58")
//       .to(statsRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 }, "-=0.64")
//       .to(cardsRef.current, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 }, "-=0.9");

//     function onPreExit() {
//       tl.restart();
//     }
//     window.addEventListener("preloader:exit-start", onPreExit);
//     return () => window.removeEventListener("preloader:exit-start", onPreExit);
//   }, [reduce]);

// function splitWords(text) {
//   return text.split(" ").map((w, i) => (
//     <span key={i} className="inline-block mr-1 leading-tight">
//       <span
//         className="word inline-block"
//         style={{
//           backgroundImage: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
//           WebkitBackgroundClip: "text",
//           backgroundClip: "text",
//           WebkitTextFillColor: "transparent"
//         }}
//       >
//         {w}
//       </span>
//     </span>
//   ));
// }

//   function scrollToId(id) {
//     if (typeof navigateWithPreload === "function") {
//       navigateWithPreload(id === "home" ? "/" : `/${id}`);
//       return;
//     }
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   }

//   return (
//     <section
//       id="home"
//       ref={rootRef}
//       className="relative min-h-screen flex items-center justify-center overflow-visible"
//       style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
//     >
//       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
//         <svg className="absolute -left-40 top-10 w-[56rem] opacity-18" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: "none" }}>
//           <g>
//             <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" style={{ filter: "blur(36px)" }} />
//             <defs>
//               <linearGradient id="g1" x1="0" x2="1">
//                 <stop offset="0" stopColor="var(--accent-from)" stopOpacity="0.9" />
//                 <stop offset="1" stopColor="var(--accent-to)" stopOpacity="0.85" />
//               </linearGradient>
//             </defs>
//           </g>
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="pt-12 md:pt-28">
//             <h1
//               ref={headlineRef}
//               className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-normal bg-clip-text text-transparent"
//               style={{
//                 backgroundImage: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontFamily: "var(--font-heading)"
//               }}
//             >
//               {splitWords("Wellnex Systems")}
//             </h1>

//             <h2
//               ref={subRef}
//               className="text-2xl md:text-3xl font-semibold mt-4"
//               style={{ color: "var(--muted)", fontFamily: "var(--font-subhead)" }}
//             >
//               Wellness, Reimagined for the Next Generation
//             </h2>

//             <p ref={paraRef} className="mt-6" style={{ color: "var(--muted)", maxWidth: "40rem", lineHeight: 1.6 }}>
//               A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation.
//             </p>

//             <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
//               <motion.button
//                 onClick={() => scrollToId("waitlist")}
//                 aria-label="Join the Movement - Get Early Access"
//                 className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full text-black font-semibold focus:outline-none focus-visible:ring-4 shadow-xl cursor-pointer w-full sm:w-auto"
//                 whileHover={!reduce ? { scale: 1.08, y: -4, boxShadow: "0 20px 48px rgba(6,182,212,0.22)" } : {}}
//                 whileTap={!reduce ? { scale: 0.975 } : {}}
//                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                 style={{
//                   background: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
//                   pointerEvents: "auto",
//                   WebkitTapHighlightColor: "transparent",
//                   color: "var(--accent-text)"
//                 }}
//               >
//                 Join the Movement
//               </motion.button>

//               <motion.button
//                 onClick={() => scrollToId("apps")}
//                 aria-label="Explore Our Apps"
//                 className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full border focus:outline-none cursor-pointer w-full sm:w-auto"
//                 whileHover={!reduce ? { scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(6,182,212,0.08)" } : {}}
//                 whileTap={!reduce ? { scale: 0.98 } : {}}
//                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                 style={{
//                   borderColor: "rgba(156,163,175,0.12)",
//                   pointerEvents: "auto",
//                   WebkitTapHighlightColor: "transparent",
//                   color: "var(--text)"
//                 }}
//               >
//                 Explore Our Apps
//               </motion.button>
//             </div>
//           </div>

//           <div className="flex items-center justify-center pt-6 md:pt-20">
//             <div className="w-full max-w-md">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.04))", padding: 24 }}>
//                 <div className="relative h-80">
//                   <div className="h-full">
//                     <div className="flex gap-6" style={{ transform: `translateX(${-index * 320}px)`, transition: reduce ? "none" : "transform 0.8s cubic-bezier(.22,1,.36,1)" }}>
//                       {cards.map((c, i) => (
//                         <div
//                           key={c.id}
//                           ref={(el) => (cardsRef.current[i] = el)}
//                           className="w-72 flex-shrink-0 rounded-2xl p-6"
//                           role="group"
//                           aria-roledescription="benefit card"
//                           style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }}
//                         >
//                           <div className="flex items-center gap-4">
//                             <div className="w-14 h-14 rounded-lg bg-white/12 flex items-center justify-center">
//                               {c.svg}
//                             </div>
//                             <div>
//                               <h4 className="text-white font-semibold text-lg">{c.title}</h4>
//                             </div>
//                           </div>
//                           <p className="mt-4 text-white/90 text-sm leading-snug">{c.desc}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="absolute bottom-4 left-4 flex items-center gap-3">
//                     <button aria-label="Previous benefit" onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
//                       ‹
//                     </button>
//                     <div className="flex items-center gap-2">
//                       {cards.map((_, i) => (
//                         <button key={i} onClick={() => setIndex(i)} aria-label={`Go to benefit ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />
//                       ))}
//                     </div>
//                     <button aria-label="Next benefit" onClick={() => setIndex((i) => (i + 1) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
//                       ›
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-6 grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{users.toLocaleString()}</div>
//                     <div className="text-xs" style={{ color: "var(--muted)" }}>Active Users</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{gyms.toLocaleString()}</div>
//                     <div className="text-xs" style={{ color: "var(--muted)" }}>Partner Gyms</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{sessions.toLocaleString()}</div>
//                     <div className="text-xs" style={{ color: "var(--muted)" }}>Sessions Logged</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

try {
  gsap.registerPlugin(ScrollTrigger);
} catch (e) {}

const cards = [
  { id: "p1", title: "Personalized Care", desc: "AI-driven plans that adapt to each user’s goals and progress.", colorFrom: "#06b6d4", colorTo: "#8b5cf6", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" fill="white"/><path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="white" opacity="0.9"/></svg>) },
  { id: "p2", title: "Seamless Integrations", desc: "Wearables, gyms and providers connected in a single dashboard.", colorFrom: "#f59e0b", colorTo: "#ec4899", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h4v8H3zM17 4h4v8h-4zM8 8h8v8H8z" fill="white"/></svg>) },
  { id: "p3", title: "Provider-Ready", desc: "Tools built for studios and clinics to scale operations effortlessly.", colorFrom: "#10b981", colorTo: "#06b6d4", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h7v2H4z" fill="white"/></svg>) }
];

const extraCards = [
  { id: "c1", title: "Progress Tracking", body: "Visual progress, adaptive goals and actionable insights every week.", icon: "⤴" },
  { id: "c2", title: "Provider Insights", body: "Analytics and scheduling tools for studios and clinics to scale.", icon: "📊" },
  { id: "c3", title: "Secure & Private", body: "HIPAA-aware architecture, encrypted sync and robust access control.", icon: "🔒" }
];

function useAutoAdvance(length, delay = 4200) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((s) => (s + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return [index, setIndex];
}

function useCount(target, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const steps = Math.max(1, Math.floor(duration / 16));
    const increment = target / steps;
    const id = setInterval(() => {
      start += 1;
      const next = Math.round(Math.min(target, start * increment));
      setValue(next);
      if (next >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration]);
  return value;
}

export default function Hero({ navigateWithPreload }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useAutoAdvance(cards.length, 4200);
  const users = useCount(12500);
  const gyms = useCount(420);
  const sessions = useCount(184000);

  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);
  const rootRef = useRef(null);
  const svgRef = useRef(null);

  const cardsContainerRef = useRef(null);
  const cardHoverRefs = useRef([]);
  const detailsRef = useRef(null);
  cardHoverRefs.current = [];

  const [isDark, setIsDark] = useState(() => {
    try { return document.documentElement.classList.contains("dark"); } catch { return true; }
  });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const hEl = headlineRef.current;
    const innerWords = hEl ? hEl.querySelectorAll(".word-inner") : [];

    if (reduce) {
      gsap.killTweensOf([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
      gsap.set([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 1, y: 0, clearProps: "all" });
      return;
    }

    gsap.killTweensOf([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
    gsap.set([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 0, y: 18, force3D: true });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(innerWords, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.7 })
      .to(subRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.36")
      .to(paraRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.58")
      .to(ctaRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 }, "-=0.58")
      .to(statsRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 }, "-=0.64")
      .to(cardsRef.current, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 }, "-=0.9");

    function onPreExit() { tl.restart(); }
    window.addEventListener("preloader:exit-start", onPreExit);
    return () => window.removeEventListener("preloader:exit-start", onPreExit);
  }, [reduce]);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;
    if (reduce) return;
    function onMove(e) {
      const rect = root.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(svg, { x: px * 30, y: py * 20, ease: "power3.out", duration: 0.9 });
    }
    root.addEventListener("mousemove", onMove);
    root.addEventListener("touchmove", onMove, { passive: true });
    return () => { root.removeEventListener("mousemove", onMove); root.removeEventListener("touchmove", onMove); };
  }, [reduce]);

  useEffect(() => {
    let mo;
    try {
      mo = new MutationObserver(() => setIsDark(document.documentElement.classList.contains("dark")));
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    } catch {}
    return () => mo && mo.disconnect();
  }, []);

  function pushCardRef(el) {
    if (!el) return;
    if (!cardHoverRefs.current.includes(el)) cardHoverRefs.current.push(el);
  }

  // useEffect(() => {
  //   try {
  //     if (gsap && window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  //   } catch {}
  //   const ST = window.ScrollTrigger ?? null;
  //   const cardsList = cardHoverRefs.current;
  //   try {
  //     if (ST && cardsContainerRef.current) {
  //       gsap.from(cardsList, {
  //         y: 28, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
  //         scrollTrigger: { trigger: cardsContainerRef.current, start: "top 65%", once: true }
  //       });
  //       const detailsItems = detailsRef.current ? detailsRef.current.querySelectorAll("h3, p, li") : [];
  //       gsap.from(detailsItems, {
  //         y: 28, autoAlpha: 0, stagger: 0.10, duration: 0.85, ease: "power3.out",
  //         scrollTrigger: { trigger: detailsRef.current, start: "top 65%", once: true }
  //       });
  //     } else {
  //       gsap.from(cardsList, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
  //       gsap.from(detailsRef.current?.querySelectorAll("h3, p, li"), { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
  //     }
  //     const onEnter = (el) => gsap.to(el, { y: -8, scale: 1.03, boxShadow: "0 18px 40px rgba(2,6,23,0.18)", duration: 0.32, ease: "power2.out" });
  //     const onLeave = (el) => gsap.to(el, { y: 0, scale: 1, boxShadow: "0 8px 20px rgba(2,6,23,0.08)", duration: 0.36, ease: "power3.out" });
  //     cardsList.forEach((c) => {
  //       c.addEventListener("mouseenter", () => onEnter(c));
  //       c.addEventListener("mouseleave", () => onLeave(c));
  //       c.addEventListener("focus", () => onEnter(c));
  //       c.addEventListener("blur", () => onLeave(c));
  //     });
  //     return () => {
  //       if (ST && ST.getAll) ST.getAll().forEach((s) => s.kill && s.kill());
  //       cardsList.forEach((c) => {
  //         c.removeEventListener("mouseenter", () => onEnter(c));
  //         c.removeEventListener("mouseleave", () => onLeave(c));
  //         c.removeEventListener("focus", () => onEnter(c));
  //         c.removeEventListener("blur", () => onLeave(c));
  //       });
  //     };
  //   } catch {}
  // }, []);


  useEffect(() => {
  const ST = window.ScrollTrigger ?? null;
  const cardSelector = ".hero-card";
  const detailsSelector = ".hero-details-target";

  const runReveal = () => {
    const cardsEls = gsap.utils.toArray(cardSelector);
    const detailsEls = document.querySelectorAll(`${detailsSelector} > *`);

    if (ST && cardsEls.length) {
      gsap.from(cardsEls, {
        y: 28,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: cardsContainerRef.current || cardsEls[0], start: "top 85%", once: true }
      });
    } else if (cardsEls.length) {
      gsap.from(cardsEls, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
    }

    if (ST && detailsEls.length) {
      gsap.from(detailsEls, {
        y: 22,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.78,
        ease: "power3.out",
        scrollTrigger: { trigger: detailsRef.current || detailsEls[0], start: "top 85%", once: true }
      });
    } else if (detailsEls.length) {
      gsap.from(detailsEls, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
    }

    // hover interactions (only on pointer devices)
    const cards = document.querySelectorAll(cardSelector);
    cards.forEach((el) => {
      const enter = () => gsap.to(el, { y: -8, scale: 1.03, boxShadow: "0 18px 40px rgba(2,6,23,0.18)", duration: 0.28, ease: "power2.out" });
      const leave = () => gsap.to(el, { y: 0, scale: 1, boxShadow: "0 8px 20px rgba(2,6,23,0.08)", duration: 0.36, ease: "power3.out" });
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("focus", enter);
      el.addEventListener("blur", leave);
      el._cleanup = () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.removeEventListener("focus", enter);
        el.removeEventListener("blur", leave);
      };
    });

    return () => {
      if (ST && ST.getAll) ST.getAll().forEach((s) => s.kill && s.kill());
      document.querySelectorAll(cardSelector).forEach((el) => el._cleanup && el._cleanup());
    };
  };

  // run after a micro tick to ensure DOM is mounted
  const id = setTimeout(runReveal, 40);
  return () => clearTimeout(id);
}, []);

function splitWords(text) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="word-wrap inline-block mr-1 leading-tight" aria-hidden>
      <span className="word-inner inline-block">{w}</span>
    </span>
  ));
}

  function scrollToId(id) {
    if (typeof navigateWithPreload === "function") { navigateWithPreload(id === "home" ? "/" : `/${id}`); return; }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="home" ref={detailsRef} className="relative min-h-screen flex items-center justify-center overflow-visible" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <svg ref={svgRef} className="absolute -left-40 top-10 w-[56rem] opacity-20 will-change-transform" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: "none" }}>
          <g>
            <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" style={{ filter: "blur(36px)" }} />
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="var(--accent-from)" stopOpacity="0.95" />
                <stop offset="1" stopColor="var(--accent-to)" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="pt-12 md:pt-28">
            <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent hero-heading" style={{ fontFamily: "var(--font-heading)", WebkitFontSmoothing: "antialiased" }}>
              {splitWords("Wellnex Systems")}
            </h1>

            <h2 ref={subRef} className="text-2xl md:text-3xl font-semibold mt-4" style={{ color: "var(--muted)", fontFamily: "var(--font-subhead)" }}>
              Wellness, Reimagined for the Next Generation
            </h2>

            <p ref={paraRef} className="mt-6" style={{ color: "var(--muted)", maxWidth: "48rem", lineHeight: 1.7 }}>
              A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation. Our suite blends personalized AI plans, provider tools, and deep integrations to bring everything under one polished experience.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[color:var(--accent-from)]/15">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2v10l3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text)" }}>AI-driven Personalization</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>Adaptive programs that evolve with every session.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[color:var(--accent-to)]/12">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text)" }}>Unified Integrations</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>Wearables, gyms and providers connected in one dashboard.</div>
                </div>
              </div>
            </div>

              <div
          ref={ctaRef}
          className="mt-8 flex flex-wrap gap-4 items-center"
        >
          {/* Primary Button */}
          <motion.button
            onClick={() => scrollToId("waitlist")}
            aria-label="Join the Movement - Get Early Access"
            className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold focus:outline-none focus-visible:ring-4 shadow-xl cursor-pointer transition-all duration-300"
            whileHover={
              !reduce
                ? {
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 0 24px rgba(6,182,212,0.4)",
                    background:
                      "linear-gradient(90deg, var(--accent-to), var(--accent-from))",
                  }
                : {}
            }
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            style={{
              background:
                "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
              pointerEvents: "auto",
              WebkitTapHighlightColor: "transparent",
              color: "var(--accent-text)",
            }}
          >
            Get Early Access
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={() => scrollToId("apps")}
            aria-label="Explore Our Apps"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border cursor-pointer transition-all duration-300 font-medium"
            whileHover={
              !reduce
                ? {
                    scale: 1.05,
                    y: -2,
                    color: "var(--accent-from)",
                    borderColor: "var(--accent-from)",
                    boxShadow: "0 0 16px rgba(6,182,212,0.25)",
                  }
                : {}
            }
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            style={{
              borderColor: "rgba(156,163,175,0.25)",
              color: "var(--text)",
              background: "transparent",
            }}
          >
            Explore Our Apps
          </motion.button>
        </div>


            <div ref={cardsContainerRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {extraCards.map((c, i) => (
                <article key={c.id} ref={pushCardRef} tabIndex={0} className="hero-card rounded-2xl p-5" role="article" aria-labelledby={`card-${c.id}-title`} style={{ backgroundColor: "var(--panel)", border: "1px solid transparent", cursor: "pointer" }}>
                  <div className="flex items-start gap-4">
                    <div className="p-1.5 w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "#fff" }}>{c.icon}</div>
                    <div>
                      <h4 id={`card-${c.id}-title`} className="text-lg font-semibold" style={{ color: "var(--text)" }}>{c.title}</h4>
                      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{c.body}</p>
                      <button className="mt-3 inline-flex items-center text-sm font-medium" style={{ color: "var(--accent-from)" }} onClick={() => console.log("clicked", c.id)}>Learn more →</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section ref={detailsRef} className="mt-12 max-w-3xl space-y-6">
              <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>How Wellnex Helps You Win</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                Wellnex brings together smart coaching, provider tools and data to remove friction from fitness delivery. Track progress, automate scheduling, accept payments, and get clinical-grade reports — all from one dashboard.
              </p>

              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                For members: a personalized plan that adapts with your performance. For providers: automation and analytics to scale operations without losing care quality. Every feature is built with privacy-first design and enterprise-grade security.
              </p>

              <ul className="list-disc pl-5" style={{ color: "var(--muted)" }}>
                <li>Adaptive plans that respond to goals and recovery.</li>
                <li>Seamless device and partner integrations.</li>
                <li>Provider dashboards, billing integrations and automated client flows.</li>
              </ul>

              <div className="pt-2">
                <motion.button onClick={() => scrollToId("apps")} whileHover={!reduce ? { scale: 1.03 } : {}} className="px-5 py-2 rounded-full mb-10" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--accent-text)" }}>
                  Explore full product tour
                </motion.button>
              </div>
            </section>

          </div>

          <div className="flex items-center justify-center pt-6 md:pt-20">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.04))", padding: 24 }}>
                <div className="relative h-96">
                  <div className="h-full">
                    <div className="flex gap-6" style={{ transform: `translateX(${-index * 320}px)`, transition: reduce ? "none" : "transform 0.8s cubic-bezier(.22,1,.36,1)" }}>
                      {cards.map((c, i) => (
                        <div key={c.id} ref={(el) => (cardsRef.current[i] = el)} className="w-72 flex-shrink-0 rounded-2xl p-6" role="group" aria-roledescription="benefit card" style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }}>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-lg bg-white/12 flex items-center justify-center">{c.svg}</div>
                            <div><h4 className="text-white font-semibold text-lg">{c.title}</h4></div>
                          </div>
                          <p className="mt-4 text-white/90 text-sm leading-snug">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <button aria-label="Previous benefit" onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">‹</button>
                    <div className="flex items-center gap-2">
                      {cards.map((_, i) => (<button key={i} onClick={() => setIndex(i)} aria-label={`Go to benefit ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />))}
                    </div>
                    <button aria-label="Next benefit" onClick={() => setIndex((i) => (i + 1) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">›</button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{users.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Active Users</div></div>
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{gyms.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Partner Gyms</div></div>
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{sessions.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Sessions Logged</div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

