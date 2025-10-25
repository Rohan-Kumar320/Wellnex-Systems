import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";



const feats = [
  {
    id: "f1",
    title: "Integrated Wellness",
    desc: "Physical, mental and nutrition data in a single unified dashboard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "f2",
    title: "AI Personalization",
    desc: "Contextual recommendations that evolve with user behaviour.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "f3",
    title: "Provider Tools",
    desc: "Booking, analytics and member management for studios & clinics.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 20v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "f4",
    title: "Privacy & Compliance",
    desc: "HIPAA-aware architecture and encrypted data pipes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1l6 4v5c0 5-3 9-6 9s-6-4-6-9V5l6-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const roadmap = [
  { id: "r1", title: "Wearable Integration", desc: "Sync heart-rate, sleep and activity data from popular wearables.", eta: "Q4 2025", progress: 65, color: "bg-cyan-400" },
  { id: "r2", title: "Nutrition & Meal Planning", desc: "Personalized meal plans and grocery lists tied to goals and allergies.", eta: "Q1 2026", progress: 30, color: "bg-amber-400" },
  { id: "r3", title: "Corporate Wellness Dashboards", desc: "Company-level analytics, group programs, and reporting for HR teams.", eta: "Q2 2026", progress: 10, color: "bg-emerald-400" }
];

// safe prefers-reduced-motion
function safePrefersReducedMotion() {
  try {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return false;
  }
}

export default function Features({ navigateWithPreload } = {}) {
  const reduced = safePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const progressRefs = useRef([]);

  // entrance state (used to mount animations after preloader exit or fallback)
  useEffect(() => {
    let mountedFlag = true;
    function onExit() {
      if (!mountedFlag) return;
      setMounted(true);
    }
    window.addEventListener("preloader:exit-start", onExit);

    // fallback if missed
    const fallback = setTimeout(() => setMounted(true), 160);

    return () => {
      mountedFlag = false;
      window.removeEventListener("preloader:exit-start", onExit);
      clearTimeout(fallback);
    };
  }, []);

  // animate progress bars once mounted (non-reduced)
  useEffect(() => {
    if (!mounted || reduced) return;
    progressRefs.current.forEach((el, i) => {
      if (!el) return;
      // animate width via requestAnimationFrame (no GSAP required)
      const target = roadmap[i]?.progress || 0;
      let start = null;
      const duration = 900 + i * 120;
      function step(ts) {
        if (!start) start = ts;
        const t = Math.min(1, (ts - start) / duration);
        el.style.width = `${Math.floor(target * t)}%`;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, [mounted, reduced]);

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: reduced ? 0 : 0.12, when: "beforeChildren" } }
  };

  const item = {
    hidden: { opacity: 0, y: 16, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  function goWaitlist() {
    if (typeof navigateWithPreload === "function") {
      navigateWithPreload("/waitlist");
      return;
    }
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="features" className="py-20" style={{ backgroundColor: "var(--bg, #fff)", color: "var(--text, #0f172a)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" animate={mounted ? "show" : "hidden"} variants={container} className="text-center max-w-3xl mx-auto">
          <div style={{ color: "var(--accent-from, #06b6d4)" }} className="font-semibold tracking-wide text-sm">Why Wellnex?</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text, #0f172a)", fontFamily: "var(--font-heading, system-ui)" }}>
            Built for outcomes, designed for people
          </h2>
          <p className="mt-4" style={{ color: "var(--muted, #6b7280)" }}>
            We combine elegant UX, research-backed features and provider-grade tools to drive measurable wellbeing.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate={mounted ? "show" : "hidden"} variants={container} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map((f, idx) => (
            <motion.article
              key={f.id}
              variants={item}
              tabIndex={0}
              role="article"
              aria-labelledby={`${f.id}-title`}
              className="p-6 rounded-2xl focus:outline-none transform-gpu transition-shadow duration-300"
              whileHover={!reduced ? { y: -6, scale: 1.02 } : {}}
              style={{
                background: "linear-gradient(180deg, var(--panel, #f8fafc), rgba(0,0,0,0.02))",
                border: "1px solid var(--nav-border, rgba(2,6,23,0.06))",
                boxShadow: "0 8px 30px rgba(2,6,23,0.06)",
                cursor: "default"
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(90deg,var(--accent-from, #06b6d4),var(--accent-to, #0891b2))", color: "white", flexShrink: 0 }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{f.icon}</div>
                </div>

                <div>
                  <h4 id={`${f.id}-title`} className="text-lg font-semibold" style={{ color: "var(--text, #0f172a)" }}>{f.title}</h4>
                  <p className="mt-2 text-sm" style={{ color: "var(--muted, #6b7280)", lineHeight: 1.45 }}>{f.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-800/20" style={{ color: "var(--muted, #6b7280)" }}>Trusted</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-800/20" style={{ color: "var(--muted, #6b7280)" }}>Scalable</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <button onClick={goWaitlist} className="inline-flex items-center px-5 py-2 rounded-full font-semibold shadow" style={{ background: "linear-gradient(90deg,var(--accent-from, #06b6d4),var(--accent-to, #0891b2))", color: "var(--panel, #fff)", boxShadow: "0 10px 30px rgba(6,182,212,0.08)" }}>
            Get Early Access
          </button>
        </div>

        {/* Roadmap / Coming Soon */}
        <div className="mt-16">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <div className="text-cyan-400 font-semibold tracking-wide text-sm">Roadmap</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold" style={{ color: "var(--text, #0f172a)" }}>What’s Coming Next</h3>
            <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: "var(--muted, #6b7280)" }}>
              We are continuously expanding Wellnex with features that connect data, care and outcomes. Below is a snapshot of our near-term roadmap.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((r, i) => (
              <motion.div key={r.id} initial={{ opacity: 0, y: 14 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.06 * i, duration: 0.6 }} className="p-6 rounded-xl bg-gradient-to-b from-[rgba(6,16,26,0.5)] to-[rgba(2,16,24,0.5)] border" style={{ borderColor: "var(--nav-border, rgba(2,6,23,0.06))" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold" style={{ color: "var(--text, #0f172a)" }}>{r.title}</h4>
                    <p className="text-sm mt-2" style={{ color: "var(--muted, #9ca3af)" }}>{r.desc}</p>
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--accent-from, #06b6d4)" }}>{r.eta}</div>
                </div>

                <div className="mt-4 w-full bg-white/6 rounded-full h-2 overflow-hidden">
                  <div
                    ref={(el) => (progressRefs.current[i] = el)}
                    className={`h-2 rounded-full ${r.color}`}
                    style={{ width: reduced ? `${r.progress}%` : "0%" }}
                  />
                </div>

                <div className="mt-3 text-xs" style={{ color: "var(--muted, #9ca3af)" }}>
                  Progress: {r.progress}%
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#waitlist" onClick={(e) => { e.preventDefault(); goWaitlist(); }} className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* small CSS for hover glow/tilt (safe) */}
      <style>{`
        /* small, safe tilt-like illusion using transform on hover (no JS) */
        .transform-gpu:focus { outline: none; }
        @media (prefers-reduced-motion: reduce) {
          .transform-gpu { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
