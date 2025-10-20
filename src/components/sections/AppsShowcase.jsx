import { motion } from "framer-motion";

export default function AppsShowcase() {
  const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

  return (
    <section id="apps" className="py-20" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-semibold tracking-wide text-sm" style={{ color: "var(--accent-from)" }}>
            Our Flagship Apps
          </motion.h3>

          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
            Soul-first apps that deliver results
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 leading-relaxed" style={{ color: "var(--muted)" }}>
            Carefully designed products for users and providers: simple to use, hard to leave.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={card}
            tabIndex={0}
            className="p-6 rounded-2xl shadow-lg focus:outline-none"
            style={{
              background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
              border: "1px solid var(--nav-border)",
              boxShadow: "0 8px 30px rgba(2,6,23,0.06)"
            }}
            whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(6,182,212,0.08)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold shadow-md" style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)" }}>
                SW
              </div>

              <div>
                <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>SoulWhispers</h4>
                <p className="mt-1" style={{ color: "var(--muted)" }}>Pocket-sized wellness with guided meditations, reflective journaling, and AI mood insights.</p>
              </div>
            </div>

            <ul className="mt-4 text-sm" style={{ color: "var(--muted)", display: "grid", gap: 8 }}>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Telehealth & diagnostics</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Mood journaling with AI insights</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Personalized provider matching</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-from)", marginTop: 6 }} /> Seamless booking & check-in</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                className="inline-flex items-center px-5 py-2 rounded-full font-semibold shadow-lg focus:outline-none"
                style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)" }}
              >
                Download SoulWhispers
              </motion.a>
            </div>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={card}
            tabIndex={0}
            className="p-6 rounded-2xl shadow-lg focus:outline-none"
            style={{
              background: "linear-gradient(180deg, var(--panel), rgba(0,0,0,0.02))",
              border: "1px solid var(--nav-border)",
              boxShadow: "0 8px 30px rgba(2,6,23,0.06)"
            }}
            whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 60px rgba(6,182,212,0.06)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center font-bold shadow-md" style={{ background: "linear-gradient(90deg,#f59e0b,#ec4899)", color: "var(--panel)" }}>
                GK
              </div>

              <div>
                <h4 className="text-lg font-semibold" style={{ color: "var(--text)" }}>GymKey</h4>
                <p className="mt-1" style={{ color: "var(--muted)" }}>Smart access and membership tools that bridge users and gym owners with real-time schedules and analytics.</p>
              </div>
            </div>

            <ul className="mt-4 text-sm" style={{ color: "var(--muted)", display: "grid", gap: 8 }}>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Seamless checkin at partner gyms</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Workout tracking & analytics</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Membership & class management</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", marginTop: 6 }} /> Realtime schedules & bookings</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#apps"
                whileHover={{ scale: 1.03, y: -2 }}
                className="inline-flex items-center px-5 py-2 rounded-full font-semibold focus:outline-none"
                style={{ background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))", color: "var(--panel)", boxShadow: "0 8px 30px rgba(6,182,212,0.06)" }}
              >
                Explore GymKey
              </motion.a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
