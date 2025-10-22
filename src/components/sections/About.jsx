// src/components/sections/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * About + Testimonials combined
 * - Longer, detailed content
 * - Animations (framer-motion) with reduced-motion fallback
 * - Listens to `preloader:exit-start` so page reveal can sync with preloader
 */

const safePrefersReducedMotion = () => {
  try {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return false;
  }
};

const sectionVariants = (reduced) => ({
  hidden: { opacity: 0, y: 18 },
  show: reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, transition: { duration: 0.7 } }
});

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: "easeOut" } }
};

const testimonials = [
  { id: 1, quote: "Wellnex transformed how we run classes — easier scheduling and happier members.", name: "Ayesha R.", role: "Founder, ZenFit" },
  { id: 2, quote: "The AI recommendations finally made progress feel predictable and motivating.", name: "Omar K.", role: "Athlete" },
  { id: 3, quote: "Our corporate clients love the analytics dashboard — great ROI.", name: "Lina M.", role: "Partnerships" }
];

const faqs = [
  { q: "Who is Wellnex built for?", a: "Individuals seeking integrated wellness tools and providers (studios, clinics) who want scalable booking, analytics and telehealth." },
  { q: "Is my data secure?", a: "Yes — we follow industry best practices: end-to-end encryption for sessions, role-based access, and secure storage." },
  { q: "Can providers integrate their existing systems?", a: "Yes — we offer APIs and webhooks for common systems and have dedicated onboarding for partners." }
];

function useCounters(counts = { users: 12000, sessions: 54000, partners: 320 }) {
  const [vals, setVals] = useState({ users: 0, sessions: 0, partners: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / duration);
      setVals({
        users: Math.floor(counts.users * t),
        sessions: Math.floor(counts.sessions * t),
        partners: Math.floor(counts.partners * t)
      });
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return vals;
}

export default function About() {
  const reduced = safePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const mountedRef = useRef(true);

  // testimonials
  const [tIdx, setTIdx] = useState(0);
  const tTimerRef = useRef(null);

  // counters (animated numbers)
  const counters = useCounters({ users: 12400, sessions: 54500, partners: 342 });

  // reveal when preloader signals exit-start OR after mount fallback
  useEffect(() => {
    mountedRef.current = true;
    function onExitStart() {
      if (!mountedRef.current) return;
      setVisible(true);
    }
    window.addEventListener("preloader:exit-start", onExitStart);

    // fallback: ensure reveal runs if event missed
    const fallback = setTimeout(() => setVisible(true), 140);

    return () => {
      mountedRef.current = false;
      window.removeEventListener("preloader:exit-start", onExitStart);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (!reduced) {
      tTimerRef.current = setInterval(() => {
        setTIdx((s) => (s + 1) % testimonials.length);
      }, 4800);
    }

    return () => {
      if (tTimerRef.current) clearInterval(tTimerRef.current);
    };
  }, [visible, reduced]);

  return (
    <main>
      <section id="about" className="py-20" style={{ backgroundColor: "var(--bg, #fff)", color: "var(--text, #0f172a)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence>
            {visible && (
              <motion.div initial="hidden" animate="show" variants={sectionVariants(reduced)} className="text-center max-w-3xl mx-auto">
                <div style={{ color: "var(--accent-from, #06b6d4)" }} className="font-semibold tracking-wide text-sm">About Wellnex</div>
                <h1 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text, #0f172a)", fontFamily: "var(--font-heading, system-ui)" }}>
                  Where Wellness Meets What’s Next
                </h1>

                <p className="mt-6 leading-relaxed" style={{ color: "var(--muted, #6b7280)" }}>
                  At Wellnex Systems we combine clinical insight, delightful design and modern engineering to create connected experiences for users and providers.
                  Our goal: make preventive, everyday wellness accessible and measurable through thoughtful features and AI-driven insights.
                </p>

                <p className="mt-4 leading-relaxed font-semibold" style={{ color: "var(--muted, #6b7280)" }}>
                  We’re building products, partnerships and a community that puts human outcomes first.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))", boxShadow: "0 10px 30px rgba(2,6,23,0.08)", border: "1px solid var(--nav-border, rgba(2,6,23,0.06))" }}>
              <h4 className="text-lg font-semibold" style={{ color: "var(--text, #0f172a)" }}>Integrated Wellness</h4>
              <p className="mt-3" style={{ color: "var(--muted, #6b7280)" }}>Combine physical, mental and nutrition flows in a single experience with shared progress tracking.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))", boxShadow: "0 10px 30px rgba(2,6,23,0.08)", border: "1px solid var(--nav-border, rgba(2,6,23,0.06))" }}>
              <h4 className="text-lg font-semibold" style={{ color: "var(--text, #0f172a)" }}>AI-Driven Personalization</h4>
              <p className="mt-3" style={{ color: "var(--muted, #6b7280)" }}>Smart recommendations that adapt to your progress, not your demographics.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))", boxShadow: "0 10px 30px rgba(2,6,23,0.08)", border: "1px solid var(--nav-border, rgba(2,6,23,0.06))" }}>
              <h4 className="text-lg font-semibold" style={{ color: "var(--text, #0f172a)" }}>Scalable for Providers</h4>
              <p className="mt-3" style={{ color: "var(--muted, #6b7280)" }}>Tools for studios & clinics: booking, telehealth, outcomes and billing in one place.</p>
            </motion.div>
          </div>

          {/* Deep dive + timeline */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="col-span-2 p-6 rounded-xl border" style={{ borderColor: "var(--nav-border, rgba(2,6,23,0.06))", background: "rgba(255,255,255,0.01)" }}>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text, #0f172a)" }}>The Wellnex Platform — one ecosystem</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted, #6b7280)" }}>
                Our platform unifies data from wearables, check-ins, sessions and self-reported metrics. Providers get secure dashboards; users see personalized pathways and progress.
              </p>

              <div className="mt-6">
                <div className="text-sm font-semibold mb-3" style={{ color: "var(--muted, #6b7280)" }}>Roadmap highlights</div>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text, #0f172a)" }}>Q4 — Wearable sync & offline mode</div>
                      <div className="text-sm" style={{ color: "var(--muted, #6b7280)" }}>Seamless syncing with popular wearables and improved offline-first UX.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text, #0f172a)" }}>H1 next year — Provider analytics</div>
                      <div className="text-sm" style={{ color: "var(--muted, #6b7280)" }}>Advanced cohort analytics, ROI dashboards and referral tools for partners.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text, #0f172a)" }}>Ongoing — Research & clinical integrations</div>
                      <div className="text-sm" style={{ color: "var(--muted, #6b7280)" }}>We’ll continue to partner with clinicians and labs to validate outcomes.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.aside initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="p-6 rounded-xl border text-center" style={{ borderColor: "var(--nav-border, rgba(2,6,23,0.06))", background: "rgba(255,255,255,0.01)" }}>
              <h4 className="text-lg font-semibold" style={{ color: "var(--text, #0f172a)" }}>By the numbers</h4>

              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold" style={{ color: "var(--accent-from, #06b6d4)" }}>{counters.users.toLocaleString()}</div>
                  <div className="text-xs" style={{ color: "var(--muted, #6b7280)" }}>Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "var(--accent-from, #06b6d4)" }}>{counters.sessions.toLocaleString()}</div>
                  <div className="text-xs" style={{ color: "var(--muted, #6b7280)" }}>Sessions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "var(--accent-from, #06b6d4)" }}>{counters.partners.toLocaleString()}</div>
                  <div className="text-xs" style={{ color: "var(--muted, #6b7280)" }}>Partners</div>
                </div>
              </div>

              <div className="mt-6 text-sm" style={{ color: "var(--muted, #6b7280)" }}>
                Trusted by independent studios and enterprise partners worldwide.
              </div>
            </motion.aside>
          </div>

          {/* Team */}
          <div className="mt-12">
            <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="text-xl font-semibold text-center" style={{ color: "var(--text, #0f172a)" }}>
              Meet the team
            </motion.h3>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {["Aisha — CEO", "Sam — CTO", "Mira — Head of Design", "Rahim — Partnerships"].map((m, i) => (
                <div key={m} className="p-4 rounded-lg border text-center" style={{ borderColor: "var(--nav-border, rgba(2,6,23,0.06))", background: "rgba(255,255,255,0.01)" }}>
                  <div className="w-20 h-20 mx-auto rounded-full bg-slate-800/20 flex items-center justify-center text-xl">AB</div>
                  <div className="mt-3 font-semibold" style={{ color: "var(--text, #0f172a)" }}>{m.split(" — ")[0]}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--muted, #6b7280)" }}>{m.split(" — ")[1]}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* FAQs */}
          <div className="mt-12">
            <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="text-xl font-semibold text-center" style={{ color: "var(--text, #0f172a)" }}>
              Frequently asked
            </motion.h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqs.map((f) => (
                <motion.div key={f.q} initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="p-4 rounded-lg border" style={{ borderColor: "var(--nav-border, rgba(2,6,23,0.06))", background: "rgba(255,255,255,0.01)" }}>
                  <div className="font-semibold" style={{ color: "var(--text, #0f172a)" }}>{f.q}</div>
                  <div className="text-sm mt-2" style={{ color: "var(--muted, #6b7280)" }}>{f.a}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials (merged) */}
          <div className="mt-16">
            <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} className="text-xl font-semibold text-center" style={{ color: "var(--text, #0f172a)" }}>
              What people say
            </motion.h3>

            <div className="mt-6 max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-8 rounded-2xl bg-gradient-to-br from-[#06101a] to-[#021018] shadow-lg">
                <p className="text-gray-200 text-lg leading-relaxed">“{testimonials[tIdx].quote}”</p>
                <div className="mt-4 text-sm text-gray-400">{testimonials[tIdx].name} • {testimonials[tIdx].role}</div>
              </motion.div>

              <div className="mt-6 flex items-center justify-center gap-3">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setTIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`w-3 h-3 rounded-full ${i === tIdx ? "bg-white" : "bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
