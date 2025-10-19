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

    export default function Features() {
    const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
    const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

    return (
        <section id="features" className="py-20 bg-[#04101a] text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
            <div className="text-cyan-400 font-semibold tracking-wide text-sm">Why Wellnex?</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Built for outcomes, designed for people</h2>
            <p className="mt-4 text-gray-300">We combine elegant UX, research-backed features and provider-grade tools to drive measurable wellbeing.</p>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={container} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feats.map((f) => (
                <motion.article key={f.id} variants={item} className="p-6 rounded-2xl bg-gradient-to-b from-[#051021] to-[#021018] shadow-lg">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center text-cyan-300">
                    {f.icon}
                    </div>
                    <div>
                    <h4 className="text-white font-semibold">{f.title}</h4>
                    <p className="mt-2 text-gray-300 text-sm leading-snug">{f.desc}</p>
                    </div>
                </div>
                </motion.article>
            ))}
            </motion.div>

            <div className="mt-8 text-center">
            <button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-lg transform transition-transform hover:-translate-y-0.5 cursor-pointer">
                Get Early Access
            </button>
            </div>
        </div>
        </section>
    );
    }
