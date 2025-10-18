    import { motion } from "framer-motion";

    export default function ComingSoon() {
    const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

    return (
        <section id="coming-soon" className="py-20 bg-[#050514] text-gray-100">
        <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h3 className="text-cyan-400 font-semibold tracking-wide text-sm">Roadmap</h3>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What’s Coming Next</h2>
            <p className="mt-4 text-gray-300">We are continuously expanding Wellnex with features that connect data, care, and outcomes.</p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={item} className="p-6 rounded-xl bg-gradient-to-b from-[#061021] to-[#021019] shadow">
                <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-white font-semibold">Wearable Integration</h4>
                    <p className="text-gray-300 mt-2 text-sm">Sync heart-rate, sleep and activity data from popular wearables.</p>
                </div>
                <div className="text-sm text-cyan-400 font-semibold">Q4 2025</div>
                </div>
                <div className="mt-4 w-full bg-white/6 rounded-full h-2 overflow-hidden">
                <div className="h-2 rounded-full bg-cyan-400" style={{ width: "65%" }} />
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={item} className="p-6 rounded-xl bg-gradient-to-b from-[#061021] to-[#021019] shadow">
                <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-white font-semibold">Nutrition & Meal Planning</h4>
                    <p className="text-gray-300 mt-2 text-sm">Personalized meal plans and grocery lists tied to goals and allergies.</p>
                </div>
                <div className="text-sm text-cyan-400 font-semibold">Q1 2026</div>
                </div>
                <div className="mt-4 w-full bg-white/6 rounded-full h-2 overflow-hidden">
                <div className="h-2 rounded-full bg-amber-400" style={{ width: "30%" }} />
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={item} className="p-6 rounded-xl bg-gradient-to-b from-[#061021] to-[#021019] shadow">
                <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-white font-semibold">Corporate Wellness Dashboards</h4>
                    <p className="text-gray-300 mt-2 text-sm">Company-level analytics, group programs, and reporting for HR teams.</p>
                </div>
                <div className="text-sm text-cyan-400 font-semibold">Q2 2026</div>
                </div>
                <div className="mt-4 w-full bg-white/6 rounded-full h-2 overflow-hidden">
                <div className="h-2 rounded-full bg-green-400" style={{ width: "10%" }} />
                </div>
            </motion.div>
            </div>

            <div className="mt-10 text-center">
            <a href="#waitlist" className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">Get Early Access</a>
            </div>
        </div>
        </section>
    );
    }
