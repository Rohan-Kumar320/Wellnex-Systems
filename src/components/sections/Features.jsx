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

export default function Features({ navigateWithPreload } = {}) {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } } };

  function goWaitlist() {
    if (typeof navigateWithPreload === "function") {
      navigateWithPreload("/waitlist");
      return;
    }
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="features" className="py-20" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div style={{ color: "var(--accent-from)" }} className="font-semibold tracking-wide text-sm">Why Wellnex?</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>Built for outcomes, designed for people</h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>We combine elegant UX, research-backed features and provider-grade tools to drive measurable wellbeing.</p>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={container} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map((f) => (
            <motion.article
              key={f.id}
              variants={item}
              tabIndex={0}
              role="article"
              aria-labelledby={`${f.id}-title`}
              className="p-6 rounded-2xl focus:outline-none"
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
                border: "1px solid var(--nav-border)",
                boxShadow: "0 8px 30px rgba(2,6,23,0.06)",
                cursor: "default"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "white" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{f.icon}</div>
                </div>

                <div>
                  <h4 id={`${f.id}-title`} className="text-lg font-semibold" style={{ color: "var(--text)" }}>{f.title}</h4>
                  <p className="mt-2 text-sm" style={{ color: "var(--muted)", lineHeight: 1.45 }}>{f.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <button onClick={goWaitlist} className="inline-flex items-center px-5 py-2 rounded-full" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)", boxShadow: "0 10px 30px rgba(6,182,212,0.08)" }}>
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
