    // import { useEffect, useState } from "react";
    // import { motion, useReducedMotion } from "framer-motion";

    // const cards = [
    // {
    //     id: "p1",
    //     title: "Personalized Care",
    //     desc: "AI-driven plans that adapt to each user’s goals and progress.",
    //     colorFrom: "#06b6d4",
    //     colorTo: "#8b5cf6",
    //     svg: (
    //     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    //         <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" fill="white" />
    //         <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="white" opacity="0.9" />
    //     </svg>
    //     )
    // },
    // {
    //     id: "p2",
    //     title: "Seamless Integrations",
    //     desc: "Wearables, gyms and providers connected in a single dashboard.",
    //     colorFrom: "#f59e0b",
    //     colorTo: "#ec4899",
    //     svg: (
    //     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    //         <path d="M3 12h4v8H3zM17 4h4v8h-4zM8 8h8v8H8z" fill="white" />
    //     </svg>
    //     )
    // },
    // {
    //     id: "p3",
    //     title: "Provider-Ready",
    //     desc: "Tools built for studios and clinics to scale operations effortlessly.",
    //     colorFrom: "#10b981",
    //     colorTo: "#06b6d4",
    //     svg: (
    //     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    //         <path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h7v2H4z" fill="white" />
    //     </svg>
    //     )
    // }
    // ];

    // function useAutoAdvance(length, delay = 4200) {
    // const [index, setIndex] = useState(0);
    // useEffect(() => {
    //     const id = setInterval(() => setIndex((s) => (s + 1) % length), delay);
    //     return () => clearInterval(id);
    // }, [length, delay]);
    // return [index, setIndex];
    // }

    // function useCount(target, duration = 1000) {
    // const [value, setValue] = useState(0);
    // useEffect(() => {
    //     let start = 0;
    //     const steps = Math.max(1, Math.floor(duration / 16));
    //     const increment = target / steps;
    //     const id = setInterval(() => {
    //     start += 1;
    //     const next = Math.round(Math.min(target, start * increment));
    //     setValue(next);
    //     if (next >= target) clearInterval(id);
    //     }, 16);
    //     return () => clearInterval(id);
    // }, [target, duration]);
    // return value;
    // }

    // export default function Hero() {
    // const reduce = useReducedMotion();
    // const [mounted, setMounted] = useState(false);
    // const [index, setIndex] = useAutoAdvance(cards.length, 4200);
    // const users = useCount(12500);
    // const gyms = useCount(420);
    // const sessions = useCount(184000);

    // useEffect(() => {
    //     const t = setTimeout(() => setMounted(true), 60);
    //     return () => clearTimeout(t);
    // }, []);

    // const fadeUp = {
    //     hidden: { opacity: 0, y: 26 },
    //     show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
    // };

    // function scrollToId(id) {
    //     const el = document.getElementById(id);
    //     if (!el) return;
    //     el.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

    // return (
    //     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#04040a] via-[#06060b] to-[#05050a] overflow-visible">
    //     <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
    //         <svg className="absolute -left-40 top-10 w-[56rem] opacity-18" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: "none" }}>
    //         <g>
    //             <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" style={{ filter: "blur(36px)" }} />
    //             <defs>
    //             <linearGradient id="g1" x1="0" x2="1">
    //                 <stop offset="0" stopColor="#06b6d4" stopOpacity="0.9" />
    //                 <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.85" />
    //             </linearGradient>
    //             </defs>
    //         </g>
    //         </svg>
    //     </div>

    //     <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    //         <div className="pt-12 md:pt-28">
    //             <motion.h1 variants={fadeUp} initial="hidden" animate={mounted ? "show" : "hidden"} className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(6,182,212,0.28)]">
    //             Wellnex Systems
    //             </motion.h1>

    //             <motion.h2 variants={fadeUp} initial="hidden" animate={mounted ? "show" : "hidden"} className="text-2xl md:text-3xl text-white font-semibold mt-4">
    //             Wellness, Reimagined for the Next Generation
    //             </motion.h2>

    //             <motion.p variants={fadeUp} initial="hidden" animate={mounted ? "show" : "hidden"} className="mt-6 text-gray-300 max-w-xl leading-relaxed">
    //             A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation.
    //             </motion.p>

    //             <motion.div variants={fadeUp} initial="hidden" animate={mounted ? "show" : "hidden"} className="mt-10 flex flex-wrap gap-4">
    //             <motion.button
    //                 onClick={() => scrollToId("waitlist")}
    //                 aria-label="Join the Movement - Get Early Access"
    //                 className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full bg-cyan-500 text-black font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30 shadow-xl cursor-pointer w-full sm:w-auto"
    //                 whileHover={!reduce ? { scale: 1.08, y: -4, boxShadow: "0 20px 48px rgba(6,182,212,0.22)" } : {}}
    //                 whileTap={!reduce ? { scale: 0.975 } : {}}
    //                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
    //                 style={{ pointerEvents: "auto", WebkitTapHighlightColor: "transparent" }}
    //             >
    //                 Join the Movement
    //             </motion.button>

    //             <motion.button
    //                 onClick={() => scrollToId("apps")}
    //                 aria-label="Explore Our Apps"
    //                 className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full border border-gray-700 text-gray-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-600/20 cursor-pointer w-full sm:w-auto"
    //                 whileHover={!reduce ? { scale: 1.05, y: -2, borderColor: "#06b6d4", color: "#06b6d4", boxShadow: "0 10px 30px rgba(6,182,212,0.08)" } : {}}
    //                 whileTap={!reduce ? { scale: 0.98 } : {}}
    //                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
    //                 style={{ pointerEvents: "auto", WebkitTapHighlightColor: "transparent" }}
    //             >
    //                 Explore Our Apps
    //             </motion.button>
    //             </motion.div>

    //             <motion.div variants={fadeUp} initial="hidden" animate={mounted ? "show" : "hidden"} className="mt-6 text-sm text-gray-400">
    //             Integrated Wellness • AI-Driven Personalization • Scalable for Providers
    //             </motion.div>
    //         </div>

    //         <div className="flex items-center justify-center pt-6 md:pt-20">
    //             <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.2 }} className="w-full max-w-md">
    //             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#061022] to-[#071021] p-6">
    //                 <div className="relative h-80">
    //                 <motion.div drag="x" dragConstraints={{ left: -120, right: 120 }} dragElastic={0.12} className="h-full">
    //                     <motion.div animate={{ x: -index * 320 }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 20 }} className="flex gap-6">
    //                     {cards.map((c) => (
    //                         <div key={c.id} className="w-72 flex-shrink-0 rounded-2xl p-6" style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }} role="group" aria-roledescription="benefit card">
    //                         <div className="flex items-center gap-4">
    //                             <div className="w-14 h-14 rounded-lg bg-white/12 flex items-center justify-center">
    //                             {c.svg}
    //                             </div>
    //                             <div>
    //                             <h4 className="text-white font-semibold text-lg">{c.title}</h4>
    //                             </div>
    //                         </div>
    //                         <p className="mt-4 text-white/90 text-sm leading-snug">{c.desc}</p>
    //                         </div>
    //                     ))}
    //                     </motion.div>
    //                 </motion.div>

    //                 <div className="absolute bottom-4 left-4 flex items-center gap-3">
    //                     <button aria-label="Previous benefit" onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
    //                     ‹
    //                     </button>
    //                     <div className="flex items-center gap-2">
    //                     {cards.map((_, i) => (
    //                         <button key={i} onClick={() => setIndex(i)} aria-label={`Go to benefit ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />
    //                     ))}
    //                     </div>
    //                     <button aria-label="Next benefit" onClick={() => setIndex((i) => (i + 1) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
    //                     ›
    //                     </button>
    //                 </div>
    //                 </div>

    //                 <div className="mt-6 grid grid-cols-3 gap-4 text-center">
    //                 <div>
    //                     <div className="text-2xl font-bold text-white">{users.toLocaleString()}</div>
    //                     <div className="text-xs text-gray-300">Active Users</div>
    //                 </div>
    //                 <div>
    //                     <div className="text-2xl font-bold text-white">{gyms.toLocaleString()}</div>
    //                     <div className="text-xs text-gray-300">Partner Gyms</div>
    //                 </div>
    //                 <div>
    //                     <div className="text-2xl font-bold text-white">{sessions.toLocaleString()}</div>
    //                     <div className="text-xs text-gray-300">Sessions Logged</div>
    //                 </div>
    //                 </div>
    //             </div>
    //             </motion.div>
    //         </div>
    //         </div>
    //     </div>
    //     </section>
    // );
    // }


import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

const cards = [
  {
    id: "p1",
    title: "Personalized Care",
    desc: "AI-driven plans that adapt to each user’s goals and progress.",
    colorFrom: "#06b6d4",
    colorTo: "#8b5cf6",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" fill="white" />
        <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="white" opacity="0.9" />
      </svg>
    )
  },
  {
    id: "p2",
    title: "Seamless Integrations",
    desc: "Wearables, gyms and providers connected in a single dashboard.",
    colorFrom: "#f59e0b",
    colorTo: "#ec4899",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h4v8H3zM17 4h4v8h-4zM8 8h8v8H8z" fill="white" />
      </svg>
    )
  },
  {
    id: "p3",
    title: "Provider-Ready",
    desc: "Tools built for studios and clinics to scale operations effortlessly.",
    colorFrom: "#10b981",
    colorTo: "#06b6d4",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h7v2H4z" fill="white" />
      </svg>
    )
  }
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

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const hEl = headlineRef.current;
    const words = hEl ? hEl.querySelectorAll("span.word") : [];

    if (reduce) {
      gsap.killTweensOf([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
      gsap.set([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 1, y: 0, clearProps: "all" });
      return;
    }

    gsap.killTweensOf([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);

    gsap.set([words, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 0, y: 18, force3D: true });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(words, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.7 })
      .to(subRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.36")
      .to(paraRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.58")
      .to(ctaRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 }, "-=0.58")
      .to(statsRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 }, "-=0.64")
      .to(cardsRef.current, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 }, "-=0.9");

    function onPreExit() {
      tl.restart();
    }
    window.addEventListener("preloader:exit-start", onPreExit);
    return () => window.removeEventListener("preloader:exit-start", onPreExit);
  }, [reduce]);

function splitWords(text) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="inline-block mr-1 leading-tight">
      <span
        className="word inline-block"
        style={{
          backgroundImage: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {w}
      </span>
    </span>
  ));
}

  function scrollToId(id) {
    if (typeof navigateWithPreload === "function") {
      navigateWithPreload(id === "home" ? "/" : `/${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen flex items-center justify-center overflow-visible"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute -left-40 top-10 w-[56rem] opacity-18" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: "none" }}>
          <g>
            <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" style={{ filter: "blur(36px)" }} />
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="var(--accent-from)" stopOpacity="0.9" />
                <stop offset="1" stopColor="var(--accent-to)" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pt-12 md:pt-28">
            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-normal bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-heading)"
              }}
            >
              {splitWords("Wellnex Systems")}
            </h1>

            <h2
              ref={subRef}
              className="text-2xl md:text-3xl font-semibold mt-4"
              style={{ color: "var(--muted)", fontFamily: "var(--font-subhead)" }}
            >
              Wellness, Reimagined for the Next Generation
            </h2>

            <p ref={paraRef} className="mt-6" style={{ color: "var(--muted)", maxWidth: "40rem", lineHeight: 1.6 }}>
              A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToId("waitlist")}
                aria-label="Join the Movement - Get Early Access"
                className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full text-black font-semibold focus:outline-none focus-visible:ring-4 shadow-xl cursor-pointer w-full sm:w-auto"
                whileHover={!reduce ? { scale: 1.08, y: -4, boxShadow: "0 20px 48px rgba(6,182,212,0.22)" } : {}}
                whileTap={!reduce ? { scale: 0.975 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                style={{
                  background: "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                  pointerEvents: "auto",
                  WebkitTapHighlightColor: "transparent",
                  color: "var(--accent-text)"
                }}
              >
                Join the Movement
              </motion.button>

              <motion.button
                onClick={() => scrollToId("apps")}
                aria-label="Explore Our Apps"
                className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full border focus:outline-none cursor-pointer w-full sm:w-auto"
                whileHover={!reduce ? { scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(6,182,212,0.08)" } : {}}
                whileTap={!reduce ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                style={{
                  borderColor: "rgba(156,163,175,0.12)",
                  pointerEvents: "auto",
                  WebkitTapHighlightColor: "transparent",
                  color: "var(--text)"
                }}
              >
                Explore Our Apps
              </motion.button>
            </div>
          </div>

          <div className="flex items-center justify-center pt-6 md:pt-20">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.04))", padding: 24 }}>
                <div className="relative h-80">
                  <div className="h-full">
                    <div className="flex gap-6" style={{ transform: `translateX(${-index * 320}px)`, transition: reduce ? "none" : "transform 0.8s cubic-bezier(.22,1,.36,1)" }}>
                      {cards.map((c, i) => (
                        <div
                          key={c.id}
                          ref={(el) => (cardsRef.current[i] = el)}
                          className="w-72 flex-shrink-0 rounded-2xl p-6"
                          role="group"
                          aria-roledescription="benefit card"
                          style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-lg bg-white/12 flex items-center justify-center">
                              {c.svg}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-lg">{c.title}</h4>
                            </div>
                          </div>
                          <p className="mt-4 text-white/90 text-sm leading-snug">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <button aria-label="Previous benefit" onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
                      ‹
                    </button>
                    <div className="flex items-center gap-2">
                      {cards.map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} aria-label={`Go to benefit ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />
                      ))}
                    </div>
                    <button aria-label="Next benefit" onClick={() => setIndex((i) => (i + 1) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
                      ›
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{users.toLocaleString()}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{gyms.toLocaleString()}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Partner Gyms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{sessions.toLocaleString()}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Sessions Logged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
