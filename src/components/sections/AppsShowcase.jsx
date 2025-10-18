    import { motion } from "framer-motion";

    export default function AppsShowcase() {
    const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

    return (
        <section id="apps" className="py-20 bg-[#060617] text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
            <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-cyan-400 font-semibold tracking-wide text-sm">Our Flagship Apps</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-3xl md:text-4xl font-bold">Soul-first apps that deliver results</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 text-gray-300 leading-relaxed">
                Carefully designed products for users and providers: simple to use, hard to leave.
            </motion.p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.article initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} className="p-6 rounded-2xl bg-gradient-to-br from-[#061325] to-[#04101a] shadow-lg">
                <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-black font-bold shadow-md">SW</div>
                <div>
                    <h4 className="text-white text-lg font-semibold">SoulWhispers</h4>
                    <p className="text-gray-300 mt-1">Pocket-sized wellness with guided meditations, reflective journaling, and AI mood insights.</p>
                </div>
                </div>
                <ul className="mt-4 text-sm text-gray-300 grid gap-2">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" /> Telehealth & diagnostics</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" /> Mood journaling with AI insights</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" /> Personalized provider matching</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" /> Seamless booking & check-in</li>
                </ul>
                <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">Download SoulWhispers</a>
                </div>
            </motion.article>

            <motion.article initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} className="p-6 rounded-2xl bg-gradient-to-br from-[#081223] to-[#04101a] shadow-lg">
                <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center text-black font-bold shadow-md">GK</div>
                <div>
                    <h4 className="text-white text-lg font-semibold">GymKey</h4>
                    <p className="text-gray-300 mt-1">Smart access and membership tools that bridge users and gym owners with real-time schedules and analytics.</p>
                </div>
                </div>
                <ul className="mt-4 text-sm text-gray-300 grid gap-2">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-400 mt-2" /> Seamless checkin at partner gyms</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-400 mt-2" /> Workout tracking & analytics</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-400 mt-2" /> Membership & class management</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-400 mt-2" /> Realtime schedules & bookings</li>
                </ul>
                <div className="mt-6 flex gap-3">
                <a href="#apps" className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">Explore GymKey</a>
                </div>
            </motion.article>
            </div>
        </div>
        </section>
    );
    }
