
// import { useEffect, useRef, useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// try {
//   gsap.registerPlugin(ScrollTrigger);
// } catch (e) {}

// const cards = [
//   { id: "p1", title: "Personalized Care", desc: "AI-driven plans that adapt to each user’s goals and progress.", colorFrom: "#06b6d4", colorTo: "#8b5cf6", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" fill="white"/><path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="white" opacity="0.9"/></svg>) },
//   { id: "p2", title: "Seamless Integrations", desc: "Wearables, gyms and providers connected in a single dashboard.", colorFrom: "#f59e0b", colorTo: "#ec4899", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h4v8H3zM17 4h4v8h-4zM8 8h8v8H8z" fill="white"/></svg>) },
//   { id: "p3", title: "Provider-Ready", desc: "Tools built for studios and clinics to scale operations effortlessly.", colorFrom: "#10b981", colorTo: "#06b6d4", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 4h16v2H4zM4 10h10v2H4zM4 16h7v2H4z" fill="white"/></svg>) }
// ];

// const extraCards = [
//   { id: "c1", title: "Progress Tracking", body: "Visual progress, adaptive goals and actionable insights every week.", icon: "⤴" },
//   { id: "c2", title: "Provider Insights", body: "Analytics and scheduling tools for studios and clinics to scale.", icon: "📊" },
//   { id: "c3", title: "Secure & Private", body: "HIPAA-aware architecture, encrypted sync and robust access control.", icon: "🔒" }
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
//   const svgRef = useRef(null);

//   const cardsContainerRef = useRef(null);
//   const cardHoverRefs = useRef([]);
//   const detailsRef = useRef(null);
//   cardHoverRefs.current = [];

//   const [isDark, setIsDark] = useState(() => {
//     try { return document.documentElement.classList.contains("dark"); } catch { return true; }
//   });

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 60);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     const hEl = headlineRef.current;
//     const innerWords = hEl ? hEl.querySelectorAll(".word-inner") : [];

//     if (reduce) {
//       gsap.killTweensOf([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
//       gsap.set([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 1, y: 0, clearProps: "all" });
//       return;
//     }

//     gsap.killTweensOf([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current]);
//     gsap.set([innerWords, subRef.current, paraRef.current, ctaRef.current, statsRef.current, cardsRef.current], { autoAlpha: 0, y: 18, force3D: true });

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.to(innerWords, { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.7 })
//       .to(subRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.36")
//       .to(paraRef.current, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.58")
//       .to(ctaRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 }, "-=0.58")
//       .to(statsRef.current, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 }, "-=0.64")
//       .to(cardsRef.current, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08 }, "-=0.9");

//     function onPreExit() { tl.restart(); }
//     window.addEventListener("preloader:exit-start", onPreExit);
//     return () => window.removeEventListener("preloader:exit-start", onPreExit);
//   }, [reduce]);

//   useEffect(() => {
//     const root = rootRef.current;
//     const svg = svgRef.current;
//     if (!root || !svg) return;
//     if (reduce) return;
//     function onMove(e) {
//       const rect = root.getBoundingClientRect();
//       const px = (e.clientX - rect.left) / rect.width - 0.5;
//       const py = (e.clientY - rect.top) / rect.height - 0.5;
//       gsap.to(svg, { x: px * 30, y: py * 20, ease: "power3.out", duration: 0.9 });
//     }
//     root.addEventListener("mousemove", onMove);
//     root.addEventListener("touchmove", onMove, { passive: true });
//     return () => { root.removeEventListener("mousemove", onMove); root.removeEventListener("touchmove", onMove); };
//   }, [reduce]);

//   useEffect(() => {
//     let mo;
//     try {
//       mo = new MutationObserver(() => setIsDark(document.documentElement.classList.contains("dark")));
//       mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
//     } catch {}
//     return () => mo && mo.disconnect();
//   }, []);

//   function pushCardRef(el) {
//     if (!el) return;
//     if (!cardHoverRefs.current.includes(el)) cardHoverRefs.current.push(el);
//   }

//   // useEffect(() => {
//   //   try {
//   //     if (gsap && window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
//   //   } catch {}
//   //   const ST = window.ScrollTrigger ?? null;
//   //   const cardsList = cardHoverRefs.current;
//   //   try {
//   //     if (ST && cardsContainerRef.current) {
//   //       gsap.from(cardsList, {
//   //         y: 28, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
//   //         scrollTrigger: { trigger: cardsContainerRef.current, start: "top 65%", once: true }
//   //       });
//   //       const detailsItems = detailsRef.current ? detailsRef.current.querySelectorAll("h3, p, li") : [];
//   //       gsap.from(detailsItems, {
//   //         y: 28, autoAlpha: 0, stagger: 0.10, duration: 0.85, ease: "power3.out",
//   //         scrollTrigger: { trigger: detailsRef.current, start: "top 65%", once: true }
//   //       });
//   //     } else {
//   //       gsap.from(cardsList, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
//   //       gsap.from(detailsRef.current?.querySelectorAll("h3, p, li"), { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
//   //     }
//   //     const onEnter = (el) => gsap.to(el, { y: -8, scale: 1.03, boxShadow: "0 18px 40px rgba(2,6,23,0.18)", duration: 0.32, ease: "power2.out" });
//   //     const onLeave = (el) => gsap.to(el, { y: 0, scale: 1, boxShadow: "0 8px 20px rgba(2,6,23,0.08)", duration: 0.36, ease: "power3.out" });
//   //     cardsList.forEach((c) => {
//   //       c.addEventListener("mouseenter", () => onEnter(c));
//   //       c.addEventListener("mouseleave", () => onLeave(c));
//   //       c.addEventListener("focus", () => onEnter(c));
//   //       c.addEventListener("blur", () => onLeave(c));
//   //     });
//   //     return () => {
//   //       if (ST && ST.getAll) ST.getAll().forEach((s) => s.kill && s.kill());
//   //       cardsList.forEach((c) => {
//   //         c.removeEventListener("mouseenter", () => onEnter(c));
//   //         c.removeEventListener("mouseleave", () => onLeave(c));
//   //         c.removeEventListener("focus", () => onEnter(c));
//   //         c.removeEventListener("blur", () => onLeave(c));
//   //       });
//   //     };
//   //   } catch {}
//   // }, []);


//   useEffect(() => {
//   const ST = window.ScrollTrigger ?? null;
//   const cardSelector = ".hero-card";
//   const detailsSelector = ".hero-details-target";

//   const runReveal = () => {
//     const cardsEls = gsap.utils.toArray(cardSelector);
//     const detailsEls = document.querySelectorAll(`${detailsSelector} > *`);

//     if (ST && cardsEls.length) {
//       gsap.from(cardsEls, {
//         y: 28,
//         autoAlpha: 0,
//         stagger: 0.12,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: { trigger: cardsContainerRef.current || cardsEls[0], start: "top 85%", once: true }
//       });
//     } else if (cardsEls.length) {
//       gsap.from(cardsEls, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
//     }

//     if (ST && detailsEls.length) {
//       gsap.from(detailsEls, {
//         y: 22,
//         autoAlpha: 0,
//         stagger: 0.08,
//         duration: 0.78,
//         ease: "power3.out",
//         scrollTrigger: { trigger: detailsRef.current || detailsEls[0], start: "top 85%", once: true }
//       });
//     } else if (detailsEls.length) {
//       gsap.from(detailsEls, { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "power3.out" });
//     }

//     // hover interactions (only on pointer devices)
//     const cards = document.querySelectorAll(cardSelector);
//     cards.forEach((el) => {
//       const enter = () => gsap.to(el, { y: -8, scale: 1.03, boxShadow: "0 18px 40px rgba(2,6,23,0.18)", duration: 0.28, ease: "power2.out" });
//       const leave = () => gsap.to(el, { y: 0, scale: 1, boxShadow: "0 8px 20px rgba(2,6,23,0.08)", duration: 0.36, ease: "power3.out" });
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//       el.addEventListener("focus", enter);
//       el.addEventListener("blur", leave);
//       el._cleanup = () => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//         el.removeEventListener("focus", enter);
//         el.removeEventListener("blur", leave);
//       };
//     });

//     return () => {
//       if (ST && ST.getAll) ST.getAll().forEach((s) => s.kill && s.kill());
//       document.querySelectorAll(cardSelector).forEach((el) => el._cleanup && el._cleanup());
//     };
//   };

//   // run after a micro tick to ensure DOM is mounted
//   const id = setTimeout(runReveal, 40);
//   return () => clearTimeout(id);
// }, []);

// function splitWords(text) {
//   return text.split(" ").map((w, i) => (
//     <span key={i} className="word-wrap inline-block mr-1 leading-tight" aria-hidden>
//       <span className="word-inner inline-block">{w}</span>
//     </span>
//   ));
// }

//   function scrollToId(id) {
//     if (typeof navigateWithPreload === "function") { navigateWithPreload(id === "home" ? "/" : `/${id}`); return; }
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   }

//   return (
//     <section id="home" ref={detailsRef} className="relative min-h-screen flex items-center justify-center overflow-visible" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
//       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
//         <svg ref={svgRef} className="absolute -left-40 top-10 w-[56rem] opacity-20 will-change-transform" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: "none" }}>
//           <g>
//             <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" style={{ filter: "blur(36px)" }} />
//             <defs>
//               <linearGradient id="g1" x1="0" x2="1">
//                 <stop offset="0" stopColor="var(--accent-from)" stopOpacity="0.95" />
//                 <stop offset="1" stopColor="var(--accent-to)" stopOpacity="0.95" />
//               </linearGradient>
//             </defs>
//           </g>
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           <div className="pt-12 md:pt-28">
//             <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent hero-heading" style={{ fontFamily: "var(--font-heading)", WebkitFontSmoothing: "antialiased" }}>
//               {splitWords("Wellnex Systems")}
//             </h1>

//             <h2 ref={subRef} className="text-2xl md:text-3xl font-semibold mt-4" style={{ color: "var(--muted)", fontFamily: "var(--font-subhead)" }}>
//               Wellness, Reimagined for the Next Generation
//             </h2>

//             <p ref={paraRef} className="mt-6" style={{ color: "var(--muted)", maxWidth: "48rem", lineHeight: 1.7 }}>
//               A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting edge HealthTech and fitness innovation. Our suite blends personalized AI plans, provider tools, and deep integrations to bring everything under one polished experience.
//             </p>

//             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[color:var(--accent-from)]/15">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2v10l3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold" style={{ color: "var(--text)" }}>AI-driven Personalization</div>
//                   <div className="text-sm" style={{ color: "var(--muted)" }}>Adaptive programs that evolve with every session.</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[color:var(--accent-to)]/12">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold" style={{ color: "var(--text)" }}>Unified Integrations</div>
//                   <div className="text-sm" style={{ color: "var(--muted)" }}>Wearables, gyms and providers connected in one dashboard.</div>
//                 </div>
//               </div>
//             </div>

//               <div
//           ref={ctaRef}
//           className="mt-8 flex flex-wrap gap-4 items-center"
//         >
//           {/* Primary Button */}
//           <motion.button
//             onClick={() => scrollToId("waitlist")}
//             aria-label="Join the Movement - Get Early Access"
//             className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold focus:outline-none focus-visible:ring-4 shadow-xl cursor-pointer transition-all duration-300"
//             whileHover={
//               !reduce
//                 ? {
//                     scale: 1.08,
//                     y: -3,
//                     boxShadow: "0 0 24px rgba(6,182,212,0.4)",
//                     background:
//                       "linear-gradient(90deg, var(--accent-to), var(--accent-from))",
//                   }
//                 : {}
//             }
//             transition={{ type: "spring", stiffness: 280, damping: 18 }}
//             style={{
//               background:
//                 "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
//               pointerEvents: "auto",
//               WebkitTapHighlightColor: "transparent",
//               color: "var(--accent-text)",
//             }}
//           >
//             Get Early Access
//           </motion.button>

//           {/* Secondary Button */}
//           <motion.button
//             onClick={() => scrollToId("apps")}
//             aria-label="Explore Our Apps"
//             className="inline-flex items-center justify-center px-6 py-3 rounded-full border cursor-pointer transition-all duration-300 font-medium"
//             whileHover={
//               !reduce
//                 ? {
//                     scale: 1.05,
//                     y: -2,
//                     color: "var(--accent-from)",
//                     borderColor: "var(--accent-from)",
//                     boxShadow: "0 0 16px rgba(6,182,212,0.25)",
//                   }
//                 : {}
//             }
//             transition={{ type: "spring", stiffness: 280, damping: 18 }}
//             style={{
//               borderColor: "rgba(156,163,175,0.25)",
//               color: "var(--text)",
//               background: "transparent",
//             }}
//           >
//             Explore Our Apps
//           </motion.button>
//         </div>


//             <div ref={cardsContainerRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {extraCards.map((c, i) => (
//                 <article key={c.id} ref={pushCardRef} tabIndex={0} className="hero-card rounded-2xl p-5" role="article" aria-labelledby={`card-${c.id}-title`} style={{ backgroundColor: "var(--panel)", border: "1px solid transparent", cursor: "pointer" }}>
//                   <div className="flex items-start gap-4">
//                     <div className="p-1.5 w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "#fff" }}>{c.icon}</div>
//                     <div>
//                       <h4 id={`card-${c.id}-title`} className="text-lg font-semibold" style={{ color: "var(--text)" }}>{c.title}</h4>
//                       <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{c.body}</p>
//                       <button className="mt-3 inline-flex items-center text-sm font-medium" style={{ color: "var(--accent-from)" }} onClick={() => console.log("clicked", c.id)}>Learn more →</button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             <section ref={detailsRef} className="mt-12 max-w-3xl space-y-6">
//               <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>How Wellnex Helps You Win</h3>
//               <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
//                 Wellnex brings together smart coaching, provider tools and data to remove friction from fitness delivery. Track progress, automate scheduling, accept payments, and get clinical-grade reports — all from one dashboard.
//               </p>

//               <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
//                 For members: a personalized plan that adapts with your performance. For providers: automation and analytics to scale operations without losing care quality. Every feature is built with privacy-first design and enterprise-grade security.
//               </p>

//               <ul className="list-disc pl-5" style={{ color: "var(--muted)" }}>
//                 <li>Adaptive plans that respond to goals and recovery.</li>
//                 <li>Seamless device and partner integrations.</li>
//                 <li>Provider dashboards, billing integrations and automated client flows.</li>
//               </ul>

//               <div className="pt-2">
//                 <motion.button onClick={() => scrollToId("apps")} whileHover={!reduce ? { scale: 1.03 } : {}} className="px-5 py-2 rounded-full mb-10" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--accent-text)" }}>
//                   Explore full product tour
//                 </motion.button>
//               </div>
//             </section>

//           </div>

//           <div className="flex items-center justify-center pt-6 md:pt-20">
//             <div className="w-full max-w-md">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.04))", padding: 24 }}>
//                 <div className="relative h-96">
//                   <div className="h-full">
//                     <div className="flex gap-6" style={{ transform: `translateX(${-index * 320}px)`, transition: reduce ? "none" : "transform 0.8s cubic-bezier(.22,1,.36,1)" }}>
//                       {cards.map((c, i) => (
//                         <div key={c.id} ref={(el) => (cardsRef.current[i] = el)} className="w-72 flex-shrink-0 rounded-2xl p-6" role="group" aria-roledescription="benefit card" style={{ background: `linear-gradient(135deg, ${c.colorFrom}, ${c.colorTo})` }}>
//                           <div className="flex items-center gap-4">
//                             <div className="w-14 h-14 rounded-lg bg-white/12 flex items-center justify-center">{c.svg}</div>
//                             <div><h4 className="text-white font-semibold text-lg">{c.title}</h4></div>
//                           </div>
//                           <p className="mt-4 text-white/90 text-sm leading-snug">{c.desc}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="absolute bottom-4 left-4 flex items-center gap-3">
//                     <button aria-label="Previous benefit" onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">‹</button>
//                     <div className="flex items-center gap-2">
//                       {cards.map((_, i) => (<button key={i} onClick={() => setIndex(i)} aria-label={`Go to benefit ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />))}
//                     </div>
//                     <button aria-label="Next benefit" onClick={() => setIndex((i) => (i + 1) % cards.length)} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">›</button>
//                   </div>
//                 </div>

//                 <div className="mt-6 grid grid-cols-3 gap-4 text-center">
//                   <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{users.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Active Users</div></div>
//                   <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{gyms.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Partner Gyms</div></div>
//                   <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{sessions.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Sessions Logged</div></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

const ANIM = {
  ease: [0.22, 0.1, 0.25, 1],
  duration: { short: 0.45, base: 0.78, long: 1.0 },
  stagger: { words: 0.06, items: 0.10, sections: 0.12 },
  hoverScale: 1.04
};

/* ---------------------- Helpers ---------------------- */
function useCountTo(target = 0, duration = 1100, enabled = true) {
  const [value, setValue] = useState(enabled ? 0 : target);
  useEffect(() => {
    if (!enabled) { setValue(target); return; }
    let raf = null;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / duration);
      setValue(Math.round(target * t));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [target, duration, enabled]);
  return value;
}

function useParallax(ref, rootRef = null, { strengthX = 18, strengthY = 12, enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;
    const el = ref?.current;
    const root = (rootRef && rootRef.current) || document.documentElement;
    if (!el || !root) return;
    let raf = null;
    function onMove(e) {
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = root.getBoundingClientRect();
      const px = (cx - rect.left) / rect.width - 0.5;
      const py = (cy - rect.top) / rect.height - 0.5;
      if (gsap && typeof gsap.to === "function") {
        gsap.to(el, { x: px * strengthX, y: py * strengthY, duration: 0.9, ease: "power3.out" });
      } else {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${px * strengthX}px, ${py * strengthY}px, 0)`;
        });
      }
    }
    function reset() {
      if (gsap && typeof gsap.to === "function") gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
      else el.style.transform = "translate3d(0,0,0)";
    }
    root.addEventListener("mousemove", onMove);
    root.addEventListener("touchmove", onMove, { passive: true });
    root.addEventListener("mouseleave", reset);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("touchmove", onMove);
      root.removeEventListener("mouseleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, rootRef, strengthX, strengthY, enabled]);
}

/* Small Reveal wrapper (IntersectionObserver + framer) */
function Reveal({ children, threshold = 0.14, once = true, className = "", style = {}, stagger = ANIM.stagger.items }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        }
      });
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return (
    <div ref={ref} className={className} style={style}>
      {React.Children.map(children, (child, i) => {
        if (!child) return null;
        const initial = child.props?.initial ?? { opacity: 0, y: 18 };
        const animate = isVisible ? (child.props?.animate ?? { opacity: 1, y: 0 }) : initial;
        const transition = child.props?.transition ?? { duration: ANIM.duration.base, ease: ANIM.ease, delay: i * (stagger || 0.06) };
        if (child.type && (child.type === motion.div || child.type === motion.h1 || child.type === motion.h2 || child.type === motion.p || child.props?.initial)) {
          return React.cloneElement(child, { initial, animate, transition });
        }
        return <motion.div initial={initial} animate={animate} transition={transition}>{child}</motion.div>;
      })}
    </div>
  );
}

/* MaskedImage with clip-path reveal */
function MaskedImage({ src = null, alt = "", className = "", style = {} }) {
  const variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    show: { clipPath: "inset(0 0% 0 0)", transition: { duration: ANIM.duration.base, ease: ANIM.ease } }
  };
  return (
    <motion.div className={className} style={{ overflow: "hidden", ...style }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={variants}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover block" /> : <div className="w-full h-full bg-slate-700/10" />}
    </motion.div>
  );
}

function Carousel({ items = [], autoplay = true, interval = 4200, reduceMotion = false }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  useEffect(() => {
    if (!autoplay || reduceMotion || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, count, reduceMotion]);
  const cardWidth = 320;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div className="flex gap-6 items-stretch relative" style={{ width: `${cardWidth * count}px`, transform: `translateX(${-index * cardWidth}px)`, transition: reduceMotion ? "none" : "transform 0.8s cubic-bezier(.22,1,.36,1)" }}>
          {items.map((it) => (
            <div key={it.id} style={{ width: cardWidth, flexShrink: 0 }}>
              <div className="rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.06))" }} />
                <div style={{ padding: 18 }}>{it.card}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-3">
        <button aria-label="Prev" onClick={() => setIndex((i) => (i - 1 + count) % count)} className="w-9 h-9 rounded-full bg-black/30 text-white">‹</button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => <button key={i} onClick={() => setIndex(i)} aria-label={`Go ${i+1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`} />)}
        </div>
        <button aria-label="Next" onClick={() => setIndex((i) => (i + 1) % count)} className="w-9 h-9 rounded-full bg-black/30 text-white">›</button>
      </div>
    </div>
  );
}

/* ----------------------- content ----------------------- */
const SHOT1 = "/imagesapp/ft.jpg";
const SHOT2 = "/imagesapp/ft2.jpg";
const SHOT3 = "/imagesapp/ft3.jpg";

const Img1 = "/imagesapp/soulworshipper1.png";
const Img2 = "/imagesapp/soulworshipper2.jpg";



export default function Hero({ navigateWithPreload, scrollToId }) {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const blobRef = useRef(null);
  useParallax(blobRef, rootRef, { strengthX: 18, strengthY: 10, enabled: !reduce });

  const users = useCountTo(12500, 1200, !reduce);
  const gyms = useCountTo(420, 1000, !reduce);
  const sessions = useCountTo(184000, 1400, !reduce);

  const benefitCards = [
    { id: "b1", title: "Personalized Care", desc: "Adaptive AI plans that evolve with you." },
    { id: "b2", title: "Seamless Integrations", desc: "Wearables, gyms and providers connected." },
    { id: "b3", title: "Provider-Ready", desc: "Tools for studios and clinics to scale." }
  ];

  const apps = [
    {
      id: "gymkey",
      title: "GymKey",
      tag: "Gym membership platform",
      desc: "Smart access & membership tools: schedules, contactless check-in, membership management and analytics for studio growth.",
      features: ["Contactless check-in", "Class scheduling", "Trainer portals", "Membership & billing"],
      img: Img2,
      accentFrom: "#f59e0b",
      accentTo: "#ec4899"
    },
    {
      id: "soulwhispers",
      title: "SoulWhispers",
      tag: "Pocket wellness",
      desc: "Guided meditations, mood journaling and AI insights to help users build resilient habits and track wellbeing.",
      features: ["Guided meditations", "Mood journaling", "Personal rituals", "Provider matching"],
      img: Img1,
      accentFrom: "#06b6d4",
      accentTo: "#8b5cf6"
    }
  ];

  const carouselItems = benefitCards.map((b) => ({
    id: `benefit-${b.id}`,
    card: (
      <motion.div key={b.id} whileHover={!reduce ? { scale: 1.02, y: -6 } : {}} className="rounded-2xl p-4" style={{ background: "linear-gradient(180deg, rgba(249, 115, 22, 1), rgba(139, 92, 246, 1))" }}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">◎</div>
          <div>
            <h4 className="text-white font-semibold text-lg">{b.title}</h4>
            <p className="mt-2 text-white/90 text-sm">{b.desc}</p>
          </div>
        </div>
      </motion.div>
    )
  }));

  // apps intersection toggling (no z-index change)
  const appsRef = useRef(null);
  const [appsIsOver, setAppsIsOver] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try { return document.documentElement.classList.contains("dark"); } catch { return true; }
  });

  useEffect(() => {
    const mo = new MutationObserver(() => setIsDark(document.documentElement.classList.contains("dark")));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme", "style"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const el = appsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.08) setAppsIsOver(true);
        else setAppsIsOver(false);
      });
    }, { threshold: [0, 0.08, 0.2, 0.5] });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    try { document.documentElement.style.scrollBehavior = "smooth"; } catch {}
    return () => { try { document.documentElement.style.scrollBehavior = ""; } catch {} };
  }, []);

  function goTo(id) {
    if (typeof scrollToId === "function") return scrollToId(id);
    if (typeof navigateWithPreload === "function") return navigateWithPreload(id === "home" ? "/" : `/${id}`);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const slidingBg = appsIsOver ? (isDark ? "#115B70" : "#757575") : "transparent";
  const slidingTextColor = appsIsOver ? (isDark ? "#0b1220" : "#ffffff") : "var(--text)";

  /* Testimonials data (longer) */
  const testimonials = [
    { id: 1, quote: "Wellnex helped us reduce no-shows by 23% and made member booking effortless.", name: "Ayesha R.", role: "Studio Owner — ZenFit" },
    { id: 2, quote: "The AI suggestions feel surprisingly human — engagement is up across cohorts.", name: "Omar K.", role: "Athlete / Beta" },
    { id: 3, quote: "Analytics and simple member flows saved my team hours every week.", name: "Lina M.", role: "B2B Partnerships" },
    { id: 4, quote: "Our patients love the fast onboarding and clear progress UI.", name: "Dr. S. Khan", role: "Clinic Lead" },
    { id: 5, quote: "Beautiful UX, powerful provider tools — an absolute delight to use.", name: "Tom H.", role: "Product Manager" },
    { id: 6, quote: "Beautiful UX, powerful provider tools — an absolute delight to use.", name: "Tom H.", role: "Director" }
  ];

  return (
    <main ref={rootRef} style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      {/* Fixed gradient backdrop for right column / carousel */}
      <div className="fixed right-0 top-0 bottom-0 w-72 pointer-events-none hidden lg:block -z-20">
        <div style={{ position: "absolute", right: 0, top: "20%", width: "24rem", height: "60vh", transform: "translateX(8%)", background: "linear-gradient(180deg, rgba(6,182,212,0.06), rgba(139,92,246,0.04))", filter: "blur(36px)", borderRadius: 20 }} />
      </div>

      {/* Fixed social icons (brand-colored) */}
      <div className="fixed right-6 top-1/3 z-50 hidden md:flex flex-col items-center gap-4">
        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-1 rounded-md shadow" style={{ background: "linear-gradient(45deg,#f58529,#dd2a7b,#8134af)" }}>
          <img width="18" height="18" src="/imagesapp/insta.png" alt=""/>
          {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"/><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.5h.01" /></svg> */}
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-1 rounded-md shadow" style={{ background: "white", color: "white" }}>
          <img width="18" height="18" src="/imagesapp/link.png" alt="" className="rounded"/>

          {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M6 10v7M10 10v7M14 10v7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> */}
        </a>

        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-1 rounded-md shadow" style={{ background: "white", color: "white" }}>
          <img width="18" height="18" src="/imagesapp/fb.png" alt="" />
          {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden><path d="M15 3h3v3h-3v3h-3V6H9V3h3V1.5C12 1 12.5 1 13 1h2v2z" /></svg> */}
        </a>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center py-12 overflow-visible">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg ref={blobRef} className="absolute -left-40 top-12 w-[56rem] opacity-18 will-change-transform" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ filter: "blur(36px)" }}>
            <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="var(--accent-from)" /><stop offset="1" stopColor="var(--accent-to)" /></linearGradient></defs>
            <path d="M120 180C160 110 260 60 360 74C460 88 560 150 620 220C680 290 680 370 620 430C560 490 420 520 300 500C180 480 80 340 120 260C140 220 100 250 120 180Z" fill="url(#g1)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="pt-12 md:pt-28">
              <motion.h1 initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: ANIM.duration.base, ease: ANIM.ease }} className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-heading)",}}>
                <motion.span initial={{ y: 28, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: ANIM.duration.base, ease: ANIM.ease }} className=" font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Wellnex Systems</motion.span>
              </motion.h1>

              <motion.h2 className="mt-4 text-2xl md:text-3xl font-semibold" style={{ color: "var(--muted)", fontFamily: "var(--font-subhead)" }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: ANIM.duration.base, delay: 0.02 }}>
                A unified platform for members, gyms and providers — beautifully connected.
              </motion.h2>

              <motion.p className="mt-6 max-w-3xl" style={{ color: "var(--muted)", lineHeight: 1.75 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: ANIM.duration.base, delay: 0.06 }}>
                Personalization, provider workflows and partner integrations — all in a single secure dashboard. Built for outcomes, designed for people.
              </motion.p>

              <div className="mt-6 flex gap-3">
                <motion.button onClick={() => goTo("waitlist")} whileHover={!reduce ? { scale: ANIM.hoverScale, y: -3 } : {}} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="inline-flex items-center px-7 py-3 rounded-full font-semibold" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--accent-text)" }}>
                  Get Early Access
                </motion.button>
                <motion.button onClick={() => goTo("apps")} whileHover={!reduce ? { scale: 1.03, y: -2 } : {}} transition={{ duration: ANIM.duration.short }} className="inline-flex items-center px-6 py-3 rounded-full border" style={{ borderColor: "rgba(156,163,175,0.12)" }}>
                  Explore Apps
                </motion.button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: ANIM.duration.base }} className="p-4 rounded-xl" style={{ background: "var(--panel)", border: "1px solid var(--nav-border)" }}>
                  <div className="font-semibold" style={{ color: "var(--text)" }}>Smart Coaching</div>
                  <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>Adaptive micro-habits and personalization.</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: ANIM.duration.base, delay: 0.06 }} className="p-4 rounded-xl" style={{ background: "var(--panel)", border: "1px solid var(--nav-border)" }}>
                  <div className="font-semibold" style={{ color: "var(--text)" }}>Provider Tools</div>
                  <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>Scheduling, telehealth, and billing integrations.</div>
                </motion.div>
              </div>
            </div>

            <div className="pt-8 md:pt-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg,var(--panel),rgba(0,0,0,0.04))", padding: 20 }}>
                <Carousel items={carouselItems} autoplay={!reduce} reduceMotion={reduce} />

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{users.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Active Users</div></div>
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{gyms.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Partner Gyms</div></div>
                  <div><div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{sessions.toLocaleString()}</div><div className="text-xs" style={{ color: "var(--muted)" }}>Sessions Logged</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wellnex? */}
      <section id="features" className="py-24" style={{ position: "relative" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div style={{ position: "sticky", top: 88, zIndex: 30 }} className="pt-6 pb-6">
                <h3 className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Why Wellnex?</h3>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>Built for outcomes, designed for people</h2>
                <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>We combine elegant UX, provider-grade tools and research-backed features to drive measurable wellbeing. Scroll — the apps panel will visually hover above this content while staying in flow.</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))", border: "1px solid var(--nav-border)" }}>
                <div className="font-semibold" style={{ color: "var(--text)" }}>Quick highlights</div>
                <ul className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                  <li>• Integrated data across wellness</li>
                  <li>• Provider-grade workflows</li>
                  <li>• Privacy-first architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPS — sticky transform overlap but NO z-index manipulation */}
      <section id="apps" ref={appsRef} className="py-24" style={{ position: "relative" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="prose max-w-none" style={{ color: "var(--muted)" }}>
                <h3 className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Our Flagship Apps</h3>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>Soul-first apps that deliver results</h2>
                <p className="mt-3">Carefully designed products for users and providers: simple to use, hard to leave. Below are our two flagship experiences. As you scroll the right-hand app panel will transform and float visually while remaining part of the page.</p>

                <div className="mt-8 space-y-6">
                  <p style={{ color: "var(--muted)" }}>
                    Our apps are crafted with short onboarding, immediate value and strong provider integrations. Each app includes analytics, scheduling and secure telehealth — built to scale from boutique studios to enterprise providers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg" style={{ background: "var(--panel)", border: "1px solid var(--nav-border)" }}>
                      <div className="font-semibold" style={{ color: "var(--text)" }}>Fast onboarding</div>
                      <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>Three short steps to get personalized recommendations and first-session value.</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: "var(--panel)", border: "1px solid var(--nav-border)" }}>
                      <div className="font-semibold" style={{ color: "var(--text)" }}>Reports & analytics</div>
                      <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>Provider dashboards show progress, retention and revenue lift at a glance.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right panel — sticky but only transform/boxShadow/background flip (NO z-index toggling) */}
            <div className="lg:col-span-1">
              <div
                className="p-6 rounded-2xl shadow-2xl transition-all duration-300"
                style={{
                  position: "sticky",
                  top: 88,
                  transform: appsIsOver ? "translateY(-12px) scale(1.01)" : "translateY(0px) scale(1)",
                  boxShadow: appsIsOver ? "0 30px 60px rgba(2,6,23,0.18)" : "0 12px 30px rgba(2,6,23,0.08)",
                  background: appsIsOver ? slidingBg : "linear-gradient(180deg,var(--panel),rgba(255,255,255,1))",
                  color: appsIsOver ? slidingTextColor : "var(--text)",
                  border: "1px solid var(--nav-border)"
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: appsIsOver ? slidingTextColor : "var(--muted)" }}>Featured</div>
                    <div className="text-lg font-bold" style={{ color: appsIsOver ? slidingTextColor : "var(--text)" }}>Our Apps</div>
                  </div>
                  <div className="text-xs" style={{ color: appsIsOver ? slidingTextColor : "var(--muted)" }}>Live</div>
                </div>

                <div className="space-y-4">
                  {apps.map((a, i) => (
                    <motion.article key={a.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: ANIM.duration.base, delay: i * 0.06 }} className="p-3 rounded-xl" style={{ background: appsIsOver ? "transparent" : "rgba(255,255,255,0.01)" }}>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(90deg, ${a.accentFrom}, ${a.accentTo})`, color: "#fff", fontWeight: 700 }}>{a.title.slice(0,2).toUpperCase()}</div>
                        <div style={{ flex: 1 }}>
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold" style={{ color: appsIsOver ? slidingTextColor : "var(--text)" }}>{a.title}</h4>
                            <div className="text-xs" style={{ color: appsIsOver ? slidingTextColor : "var(--muted)" }}>{a.tag}</div>
                          </div>
                          <p className="mt-2 text-sm" style={{ color: appsIsOver ? slidingTextColor : "var(--muted)" }}>{a.desc}</p>

                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" style={{ color: appsIsOver ? slidingTextColor : "var(--muted)" }}>
                            {a.features.map((f) => <div key={f}>• {f}</div>)}
                          </div>

                          <div className="mt-3 flex gap-2">
                            <button className="px-3 py-1 rounded-full text-sm" style={{ background: `linear-gradient(90deg, ${a.accentFrom}, ${a.accentTo})`, color: "var(--panel)" }}>Get</button>
                            <button className="px-3 py-1 rounded-full text-sm border" style={{ borderColor: "var(--nav-border)", color: appsIsOver ? slidingTextColor : "var(--text)" }}>Learn</button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 rounded-lg overflow-hidden" style={{ height: 140 }}>
                        <MaskedImage src={a.img} alt={a.title} className="h-full w-full" />
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials (lengthy, hover effects) */}
      <section id="testimonials" className="py-20 bg-[color:var(--panel)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Trusted by studios & users</h3>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>What people say</h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>Real feedback from early partners and beta testers — honest, long-form testimonials that highlight impact and ROI.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.article key={t.id} whileHover={!reduce ? { y: -6, scale: 1.02, boxShadow: "0 24px 60px rgba(2,6,23,0.12)" } : {}} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: ANIM.duration.base }} className="p-6 rounded-2xl bg-gradient-to-br from-[#2a668b] to-[#06101a] text-white">
                <div className="text-lg leading-relaxed">“{t.quote}”</div>
                <div className="mt-4 text-sm text-white/70">{t.name} • {t.role}</div>
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 text-xs bg-white/6 px-3 py-1 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2v10l3-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Used for scheduling</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 rounded-full" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--accent-text)" }}>Read more case studies</button>
          </div>
        </div>
      </section>

      {/* Roadmap / Vision — longer with animated SVGs & images */}
      <section id="coming-soon" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Roadmap & Vision</h3>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>Where we’re headed</h2>
            <p className="mt-4 max-w-3xl mx-auto" style={{ color: "var(--muted)" }}>A multi-year roadmap focused on seamless integrations, enterprise workflows and AI-driven personalization that scales from single studios to global partners.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <motion.div initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: ANIM.duration.base }} className="p-6 rounded-xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))", border: "1px solid var(--nav-border)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Vision — Unified Health</div>
              <h4 className="mt-2 font-bold" style={{ color: "var(--text)" }}>A single dashboard for wellness</h4>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Aggregate wearable, fitness, nutrition and clinical data into meaningful insights for users and providers.</p>
              <div className="mt-4 h-40 rounded-lg overflow-hidden">
                <MaskedImage src={SHOT1} alt="vision" className="h-full w-full" />
              </div>
            </motion.div>

            <motion.div initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: ANIM.duration.base, delay: 0.06 }} className="p-6 rounded-xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))", border: "1px solid var(--nav-border)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Feature — AI Insights</div>
              <h4 className="mt-2 font-bold" style={{ color: "var(--text)" }}>Predictive coaching</h4>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Personalized suggestions, adaptive plans and provider alerts to spot issues earlier.</p>
              <div className="mt-4 h-40 rounded-lg overflow-hidden">
                <MaskedImage src={SHOT3} alt="vision" className="h-full w-full" />
              </div>
            </motion.div>

            <motion.div initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: ANIM.duration.base, delay: 0.12 }} className="p-6 rounded-xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))", border: "1px solid var(--nav-border)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--accent-from)" }}>Platform — Enterprise</div>
              <h4 className="mt-2 font-bold" style={{ color: "var(--text)" }}>Scale & security</h4>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Role-based access, HIPAA-aware audit trails and enterprise identity integrations.</p>

              <div className="mt-4 h-40 rounded-lg overflow-hidden">
                <MaskedImage src={SHOT2} alt="enterprise" className="h-full w-full" />
              </div>
            </motion.div>
          </div>

          <div className="mt-10 prose max-w-4xl mx-auto" style={{ color: "var(--muted)" }}>
            <p>
              Our multi-year plan centers on interoperability, predictive experiences and frictionless provider tools. The immediate roadmap focuses on wearable integrations, nutrition planning and workforce dashboards for organizations.
            </p>
            <p>
              We visualize a future where individuals and care teams share a single source of truth — seamless, secure, and designed around outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* waitlist CTA */}
      <section id="waitlist" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold" style={{ color: "var(--text)" }}>Join the waitlist</h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>Be the first to try new features and apps as they launch.</p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-full" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--accent-text)" }} onClick={() => { if (typeof navigateWithPreload === "function") navigateWithPreload("/waitlist"); }}>
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
