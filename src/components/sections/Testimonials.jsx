    import { useEffect, useState, useRef } from "react";
    import { motion } from "framer-motion";

    const testimonials = [
    { id: 1, quote: "Wellnex transformed how we run classes — easier scheduling and happier members.", name: "Ayesha R., Studio Owner", role: "Founder, ZenFit" },
    { id: 2, quote: "The AI recommendations finally made progress feel predictable and motivating.", name: "Omar K., User", role: "Athlete" },
    { id: 3, quote: "Our corporate clients love the analytics dashboard — great ROI.", name: "Lina M., B2B", role: "Partnerships" }
    ];

    export default function Testimonials() {
    const [idx, setIdx] = useState(0);
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        const id = setInterval(() => setIdx((s) => (s + 1) % testimonials.length), 4800);
        return () => { mounted.current = false; clearInterval(id); };
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-[#050618] text-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="text-cyan-400 font-semibold tracking-wide text-sm">Trusted by studios & users</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What people say</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Real human feedback from early partners and beta testers.</p>

            <div className="mt-8 relative">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-8 rounded-2xl bg-gradient-to-br from-[#06101a] to-[#021018] shadow-lg">
                <p className="text-gray-200 text-lg leading-relaxed">“{testimonials[idx].quote}”</p>
                <div className="mt-4 text-sm text-gray-400">{testimonials[idx].name} • {testimonials[idx].role}</div>
            </motion.div>

            <div className="mt-4 flex items-center justify-center gap-3">
                {testimonials.map((t, i) => (
                <button key={t.id} onClick={() => setIdx(i)} aria-label={`Show testimonial ${i + 1}`} className={`w-2 h-2 rounded-full ${i === idx ? "bg-white" : "bg-white/30"}`} />
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    }
