import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    inquiry: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", inquiry: "General Inquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-500"
      style={{
        background: "linear-gradient(180deg, var(--bg), var(--panel))",
        color: "var(--text)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold tracking-wide text-sm"
            style={{ color: "var(--accent-from)" }}
          >
            Get in Touch
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mt-3"
            style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}
          >
            We’d love to hear from you
          </motion.h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>
            Whether you’re a wellness enthusiast, provider, or partner — we’re here to
            connect and collaborate.
          </p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-8 max-w-3xl mx-auto"
          style={{
            background: "var(--panel)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <motion.svg
                width="90"
                height="90"
                viewBox="0 0 24 24"
                className="text-[var(--accent-from)] mb-4"
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
                Message sent successfully!
              </h3>
              <p style={{ color: "var(--muted)" }}>
                Thanks for reaching out — we’ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border outline-none"
                    style={{
                      background: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "transparent",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-lg border outline-none"
                    style={{
                      background: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "transparent",
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Let’s talk about..."
                  className="w-full px-4 py-3 rounded-lg border outline-none"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "transparent",
                  }}
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="inquiry"
                  className="block text-sm mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border outline-none cursor-pointer"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "transparent",
                  }}
                >
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Support Request</option>
                  <option>Press / Media</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border outline-none resize-none"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "transparent",
                  }}
                ></textarea>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-full font-semibold shadow-xl transition-transform"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-from), var(--accent-to))",
                    color: "black",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-sm mt-2 text-red-400">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          )}
        </motion.div>

        {/* Footer Info */}
        <div className="mt-10 text-center text-sm" style={{ color: "var(--muted)" }}>
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
