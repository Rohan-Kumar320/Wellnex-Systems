    import { useState } from "react";
    import { motion, useReducedMotion } from "framer-motion";

    export default function Waitlist() {
    const shouldReduceMotion = useReducedMotion();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const validate = (e) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(e);
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setError("");
        if (!name.trim()) {
        setError("Please enter your name.");
        return;
        }
        if (!validate(email)) {
        setError("Please enter a valid email address.");
        return;
        }

        setLoading(true);
        setStatus("sending");

        try {
        const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // replace with your Formspree endpoint
        const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ name, email, source: "Website Waitlist" })
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
        } catch (err) {
        setStatus("error");
        setError("Network error. Please try again.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <section id="waitlist" className="py-20 bg-gradient-to-b from-[#040414] to-[#03101a] text-gray-100">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-cyan-400 font-semibold tracking-wide text-sm">Join the Waitlist</h3>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Get Early Access to Wellnex</h2>
            <p className="mt-4 text-gray-300">Sign up to receive early access, priority invites, and product updates. No spam — only good things.</p>
            </div>

            <div className="mt-8 bg-[#071021] rounded-2xl p-8 shadow-xl">
            {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-4 py-8">
                <svg width="96" height="96" viewBox="0 0 24 24" className="text-cyan-400" aria-hidden>
                    <motion.path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} />
                </svg>
                <h3 className="text-xl font-semibold">You're on the list!</h3>
                <p className="text-gray-300 text-center">We’ll notify you when early access opens. Thank you for joining the Wellnex movement.</p>
                <a href="#home" className="mt-4 inline-flex items-center px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold">Back to Home</a>
                </motion.div>
            ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-2">
                    <label className="text-xs text-gray-300 block mb-2">Full name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    aria-label="Full name"
                    className="w-full px-4 py-3 rounded-lg bg-[#02101a] border border-transparent focus:border-cyan-400 outline-none"
                    required
                    />
                    <label className="text-xs text-gray-300 block mt-3 mb-2">Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    aria-label="Email address"
                    className="w-full px-4 py-3 rounded-lg bg-[#02101a] border border-transparent focus:border-cyan-400 outline-none"
                    required
                    />
                    {error && <div className="mt-3 text-rose-400 text-sm">{error}</div>}
                </div>

                <div className="md:col-span-1 flex flex-col items-stretch">
                    <label className="text-xs text-transparent block mb-2">Submit</label>
                    <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-xl hover:-translate-y-0.5 transition-transform disabled:opacity-60"
                    aria-busy={loading}
                    >
                    {loading ? "Sending..." : "Get Early Access"}
                    </button>

                    <div className="mt-4 text-xs text-gray-400">
                    By joining you agree to receive product updates. We respect your privacy.
                    </div>
                </div>
                </form>
            )}
            </div>

            <div className="mt-6 text-center text-gray-400">
            <p>Prefer direct email? Contact us at <a href="mailto:hello@wellnex.example" className="text-cyan-400">hello@wellnex.example</a></p>
            </div>
        </div>
        </section>
    );
    }
