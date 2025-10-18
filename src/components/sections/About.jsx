    import { motion } from "framer-motion";

    export default function About() {
    const heading = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
    const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

    return (
        <section id="about" className="py-20 bg-[#070718] text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={heading} className="text-center max-w-3xl mx-auto">
            <div className="text-cyan-400 font-semibold tracking-wide text-sm">About Wellnex</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Where Wellness Meets What’s Next</h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
                At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology. Born from the fusion of “Wellness” and “Next,” our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed font-semibold">We’re not just building apps. We’re building a movement.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={card} className="p-6 rounded-2xl bg-gradient-to-b from-[#051021] to-[#03101a] shadow-lg">
                <h4 className="text-lg font-semibold text-white">Integrated Wellness</h4>
                <p className="mt-3 text-gray-300">Physical, mental, and emotional health in one cohesive ecosystem.</p>
            </motion.div>

            <motion.div variants={card} className="p-6 rounded-2xl bg-gradient-to-b from-[#051021] to-[#03101a] shadow-lg">
                <h4 className="text-lg font-semibold text-white">AI-Driven Personalization</h4>
                <p className="mt-3 text-gray-300">Smart, contextual recommendations tailored to each user’s goals and progress.</p>
            </motion.div>

            <motion.div variants={card} className="p-6 rounded-2xl bg-gradient-to-b from-[#051021] to-[#03101a] shadow-lg">
                <h4 className="text-lg font-semibold text-white">Scalable for Providers</h4>
                <p className="mt-3 text-gray-300">Powerful tools for studios and clinics that scale from boutique to enterprise.</p>
            </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 text-center text-gray-400">
            <h4 className="font-semibold">What’s Coming Next</h4>
            <p className="mt-3">We’re building a unified Wellnex Platform that brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#051021]">Wearable integration</span>
                <span className="px-3 py-1 rounded-full bg-[#051021]">Nutrition & meal planning</span>
                <span className="px-3 py-1 rounded-full bg-[#051021]">Corporate wellness dashboards</span>
            </div>
            </motion.div>
        </div>
        </section>
    );
    }
