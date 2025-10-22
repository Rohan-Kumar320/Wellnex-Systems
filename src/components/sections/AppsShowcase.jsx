// import { motion } from "framer-motion";

// export default function AppsShowcase() {
//   const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

//   return (
//     <section id="apps" className="py-20" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto">
//           <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-semibold tracking-wide text-sm" style={{ color: "var(--accent-from)" }}>
//             Our Flagship Apps
//           </motion.h3>

//           <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
//             Soul-first apps that deliver results
//           </motion.h2>

//           <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 leading-relaxed" style={{ color: "var(--muted)" }}>
//             Carefully designed products for users and providers: simple to use, hard to leave.
//           </motion.p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.article
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={card}
//             tabIndex={0}
//             className="p-6 rounded-2xl shadow-lg focus:outline-none"
//             style={{
//               background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
//               border: "1px solid var(--nav-border)",
//               boxShadow: "0 8px 30px rgba(2,6,23,0.06)"
//             }}
//             whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(6,182,212,0.08)" }}
//           >
//             <div className="flex items-start gap-4">
//               <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold shadow-md" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)" }}>
//                 SW
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>SoulWhispers</h4>
//                 <p className="mt-1" style={{ color: "var(--muted)" }}>Pocket-sized wellness with guided meditations, reflective journaling, and AI mood insights.</p>
//               </div>
//             </div>

//             <ul className="mt-4 text-sm" style={{ color: "var(--muted)", display: "grid", gap: 8 }}>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Telehealth & diagnostics</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Mood journaling with AI insights</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Personalized provider matching</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Seamless booking & check-in</li>
//             </ul>

//             <div className="mt-6 flex gap-3">
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.03, y: -2 }}
//                 className="inline-flex items-center px-5 py-2 rounded-full font-semibold shadow-lg focus:outline-none"
//                 style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)" }}
//               >
//                 Download SoulWhispers
//               </motion.a>
//             </div>
//           </motion.article>

//           <motion.article
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={card}
//             tabIndex={0}
//             className="p-6 rounded-2xl shadow-lg focus:outline-none"
//             style={{
//               background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
//               border: "1px solid var(--nav-border)",
//               boxShadow: "0 8px 30px rgba(2,6,23,0.06)"
//             }}
//             whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(6,182,212,0.06)" }}
//           >
//             <div className="flex items-start gap-4">
//               <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold shadow-md" style={{ background: "linear-gradient(90deg,#f59e0b,#ec4899)", color: "var(--panel)" }}>
//                 GK
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>GymKey</h4>
//                 <p className="mt-1" style={{ color: "var(--muted)" }}>Smart access and membership tools that bridge users and gym owners with real-time schedules and analytics.</p>
//               </div>
//             </div>

//             <ul className="mt-4 text-sm" style={{ color: "var(--muted)", display: "grid", gap: 8 }}>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Seamless checkin at partner gyms</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Workout tracking & analytics</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Membership & class management</li>
//               <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Realtime schedules & bookings</li>
//             </ul>

//             <div className="mt-6 flex gap-3">
//               <motion.a
//                 href="#apps"
//                 whileHover={{ scale: 1.03, y: -2 }}
//                 className="inline-flex items-center px-5 py-2 rounded-full font-semibold focus:outline-none"
//                 style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)", boxShadow: "0 8px 30px rgba(6,182,212,0.06)" }}
//               >
//                 Explore GymKey
//               </motion.a>
//             </div>
//           </motion.article>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Defensive AppsShowcase
 * - Avoids runtime errors
 * - Safe reduced-motion detection
 * - No alert() usage
 * - Replace screenshot placeholders with real <img /> as needed
 */

function safePrefersReducedMotion() {
  try {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return false;
  }
}

function ScreenshotPlaceholder({ label = "Screenshot", images = [] }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-transparent">
      <div className="aspect-[16/9] bg-gradient-to-br from-slate-700/20 via-slate-700/10 to-slate-700/8 flex items-center justify-center gap-2">
        {images.length > 0 ? (
          images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${label} ${i + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.04]"
            />
          ))
        ) : (
          <div className="text-xs md:text-sm text-slate-300/70">{label}</div>
        )}
      </div>
    </div>
  );
}

export default function AppsShowcase({ navigateWithPreload }) {
  const reduced = safePrefersReducedMotion();
const apps = [
  {
    id: "soulwhispers",
    short: "SoulWhispers",
    tag: "Pocket wellness",
    desc:
      "Pocket-sized wellbeing: guided meditations, reflective journaling, mood mapping and AI-powered insights that help users build tiny, sustainable habits.",
    features: [
      "Guided meditations (varied lengths)",
      "Mood journaling with smart summarization",
      "Personalized daily micro-rituals",
      "Provider marketplace & secure telehealth"
    ],
    tech: ["React", "TailwindCSS", "Firebase", "Lottie", "Stripe"],
    accent: { from: "#06b6d4", to: "#06b6d4" },
    images: [
      "/imagesapp/soulworshipper1.png",
      "/imagesapp/soulworshipper2.jpg",
      "/imagesapp/soulworshipper3.jpg",
    ]
  },
  {
    id: "gymkey",
    short: "GymKey",
    tag: "Gym membership platform",
    desc:
      "Smart access & membership tools for gyms: real-time schedules, frictionless check-ins, analytics and booking that help studios run smoothly.",
    features: [
      "Contactless check-in & QR pass",
      "Class scheduling & waitlist",
      "Trainer portals & performance metrics",
      "Membership plans & promotions"
    ],
    tech: ["React", "Node.js", "Postgres", "WebSockets", "Stripe"],
    accent: { from: "#f59e0b", to: "#ec4899" },
    images: [
      "/imagesapp/soulworshipper1.png",
      "/imagesapp/soulworshipper2.jpg",
      "/imagesapp/soulworshipper3.jpg",
    ]
  }
];

  // motion variants
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: reduced ? 0 : 0.12, when: "beforeChildren" } }
  };
  const card = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="apps" className="py-20" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="text-center max-w-3xl mx-auto">
          <motion.h3 variants={card} className="font-semibold tracking-wide text-sm" style={{ color: "var(--accent-from)" }}>
            Our Flagship Apps
          </motion.h3>

          <motion.h2
            variants={card}
            className="mt-3 text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
          >
            Soul-first apps that deliver results
          </motion.h2>

          <motion.p variants={card} className="mt-6 leading-relaxed" style={{ color: "var(--muted)" }}>
            Carefully designed products for users and providers: simple to use, hard to leave.
          </motion.p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {apps.map((app, idx) => (
            <motion.article key={app.id} initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Left column */}
                <motion.div variants={card} className="col-span-1 p-6 rounded-2xl relative overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
                    border: "1px solid var(--nav-border)",
                    boxShadow: "0 8px 30px rgba(2,6,23,0.06)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold shadow-md" style={{ background: `linear-gradient(90deg, ${app.accent.from}, ${app.accent.to})`, color: "var(--panel)" }}>
                      {app.short.slice(0, 2).toUpperCase()}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{app.short}</h4>
                      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{app.tag}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>{app.desc}</p>

                  <div className="mt-6 flex gap-3">
                    <motion.a
                      whileHover={!reduced ? { scale: 1.03, y: -3 } : {}}
                      href="#"
                      className="inline-flex items-center px-5 py-2 rounded-full font-semibold shadow-lg focus:outline-none"
                      style={{ background: `linear-gradient(90deg, ${app.accent.from}, ${app.accent.to})`, color: "var(--panel)" }}
                    >
                      {idx === 0 ? "Download SoulWhispers" : `Explore ${app.short}`}
                    </motion.a>

                    <button
                      className="inline-flex items-center px-4 py-2 rounded-md font-medium border text-sm"
                      style={{ borderColor: "rgba(255,255,255,0.04)", color: "var(--text)" }}
                      onClick={() => {
                        // safe, non-throwing handler
                        console.log(`${app.short} → demo clicked`);
                      }}
                    >
                      Live demo
                    </button>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-semibold mb-2" style={{ color: "var(--muted)" }}>Key features</div>
                    <ul className="grid gap-3 text-sm">
                      {app.features.map((f, i) => (
                        <li key={f} className="flex items-start gap-3" style={{ color: "var(--muted)" }}>
                          <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: idx === 0 ? "var(--accent-from)" : "#f59e0b" }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-semibold mb-2" style={{ color: "var(--muted)" }}>Tech stack</div>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800/40" style={{ color: "var(--muted)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right column */}
                <motion.div variants={card} className="col-span-2 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {app.images.map((img, i) => (
    <ScreenshotPlaceholder
      key={i}
      label={`${app.short} — Screenshot ${i + 1}`}
      images={[img]} // pass one image at a time
    />
  ))}
</div>

                  <div className="p-6 rounded-xl border" style={{ borderColor: "var(--nav-border)", background: "rgba(255,255,255,0.01)" }}>
                    <h5 className="text-lg font-semibold" style={{ color: "var(--text)" }}>Why {app.short} exists</h5>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {app.short} was built to provide accessible, low-friction tools. Focus on micro-habits and fast onboarding.
                    </p>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="text-sm font-medium" style={{ color: "var(--text)" }}>For users</h6>
                        <ul className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                          <li>• Short morning & night routines</li>
                          <li>• One-tap mood check-ins</li>
                          <li>• Personalized suggestions</li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="text-sm font-medium" style={{ color: "var(--text)" }}>For providers</h6>
                        <ul className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                          <li>• Simple provider onboarding</li>
                          <li>• Secure video consults</li>
                          <li>• Outcome tracking dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="col-span-1 p-4 rounded-lg border" style={{ borderColor: "var(--nav-border)" }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: "var(--muted)" }}>Pricing</div>
                      <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>Freemium</div>
                      <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Basic features free; premium includes AI insights and provider booking.</div>

                      <div className="mt-4">
                        <a className="inline-flex items-center px-4 py-2 rounded-md font-semibold" style={{ background: `linear-gradient(90deg, ${app.accent.from}, ${app.accent.to})`, color: "var(--panel)" }} href="#">
                          Get Started
                        </a>
                      </div>
                    </div>

                    <div className="col-span-2 p-4 rounded-lg border" style={{ borderColor: "var(--nav-border)", background: "rgba(255,255,255,0.01)" }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-700/20 flex items-center justify-center">★</div>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>What professionals say</div>
                          <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                            “The journaling prompts help keep therapy progress measurable.” — a clinician
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
