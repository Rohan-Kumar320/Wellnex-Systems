import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Waitlist() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const validate = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setError("");

    if (!name.trim()) return setError("Please enter your name.");
    if (!validate(email)) return setError("Please enter a valid email address.");

    setLoading(true);
    setStatus("sending");

    try {
      const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // replace with your Formspree endpoint
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, source: "Website Waitlist" }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        const json = await res.json().catch(() => ({}));
        setStatus("error");
        setError(json.error || "Submission failed. Try again later.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-20 transition-colors duration-500"
      style={{
        background: "linear-gradient(180deg, var(--bg), var(--panel))",
        color: "var(--text)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h3
            className="font-semibold tracking-wide text-sm"
            style={{ color: "var(--accent-from)" }}
          >
            Join the Waitlist
          </h3>
          <h2
            className="mt-3 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
          >
            Get Early Access to Wellnex
          </h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>
            Sign up to receive early access, priority invites, and product
            updates. No spam — only good things.
          </p>
        </div>

        {/* Form / Success Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 rounded-2xl shadow-xl p-8"
          style={{
            background: "var(--panel)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <motion.svg
                width="96"
                height="96"
                viewBox="0 0 24 24"
                className="text-[var(--accent-from)]"
                aria-hidden
              >
                <motion.path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </motion.svg>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                You're on the list!
              </h3>
              <p
                className="text-center"
                style={{ color: "var(--muted)", maxWidth: "28rem" }}
              >
                We’ll notify you when early access opens. Thank you for joining
                the Wellnex movement.
              </p>
              <a
                href="#home"
                className="mt-4 inline-flex items-center px-5 py-2 rounded-full font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                  color: "black",
                }}
              >
                Back to Home
              </a>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
            >
              <div className="md:col-span-2">
                <label className="text-xs mb-2 block" style={{ color: "var(--muted)" }}>
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border outline-none"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "transparent",
                  }}
                  required
                />

                <label
                  className="text-xs mt-4 mb-2 block"
                  style={{ color: "var(--muted)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-lg border outline-none"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "transparent",
                  }}
                  required
                />

                {error && (
                  <div className="mt-3 text-sm" style={{ color: "var(--accent-to)" }}>
                    {error}
                  </div>
                )}
              </div>

              <div className="md:col-span-1 flex flex-col justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg font-semibold shadow-xl transition-transform"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                    color: "black",
                  }}
                >
                  {loading ? "Sending..." : "Get Early Access"}
                </button>

                <p
                  className="mt-4 text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  By joining you agree to receive product updates. We respect
                  your privacy.
                </p>
              </div>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm" style={{ color: "var(--muted)" }}>
          <p>
            Prefer direct email?{" "}
            <a
              href="mailto:hello@wellnex.example"
              style={{
                color: "var(--accent-from)",
                fontWeight: 500,
              }}
            >
              hello@wellnex.example
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
