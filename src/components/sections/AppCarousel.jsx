import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const data = [
  {
    id: "soul",
    title: "SoulWhispers",
    subtitle: "Your PocketSized Wellness Companion",
    bullets: [
      "Telehealth and diagnostics",
      "Mood journaling with AI insights",
      "Personalized providers",
      "Seamless booking & check-in"
    ],
    cta: "Download SoulWhispers",
    colorA: "from-cyan-400",
    colorB: "to-violet-500"
  },
  {
    id: "gym",
    title: "GymKey",
    subtitle: "Smart Access to Fitness, Anytime",
    bullets: [
      "Seamless checkin at partner gyms",
      "Workout tracking and analytics",
      "Membership management for owners",
      "Realtime class schedules & bookings"
    ],
    cta: "Explore GymKey",
    colorA: "from-amber-400",
    colorB: "to-pink-500"
  }
];

export default function AppCarousel() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const next = async () => {
    const nextIndex = (index + 1) % data.length;
    setIndex(nextIndex);
    await controls.start({ x: -nextIndex * 360, transition: { type: "spring", stiffness: 120, damping: 18 } });
  };

  const prev = async () => {
    const prevIndex = (index - 1 + data.length) % data.length;
    setIndex(prevIndex);
    await controls.start({ x: -prevIndex * 360, transition: { type: "spring", stiffness: 120, damping: 18 } });
  };

  return (
    <div className="w-full max-w-md relative">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="aspect-[4/5] bg-gradient-to-tr from-[#061022] to-[#071021] p-4">
          <div className="relative h-full">
            <motion.div
              ref={containerRef}
              animate={controls}
              className="flex gap-4"
              style={{ width: `${data.length * 360}px` }}
              drag="x"
              dragConstraints={{ right: 0, left: -((data.length - 1) * 360) }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                const delta = info.offset.x;
                if (delta < -80) next();
                if (delta > 80) prev();
              }}
            >
              {data.map((d) => (
                <div key={d.id} className="w-80 flex-shrink-0 rounded-2xl p-4 flex flex-col justify-between" role="group" aria-roledescription="card">
                  <div>
                    <div className={`w-20 h-20 rounded-full mb-4 bg-gradient-to-br ${d.colorA} ${d.colorB} flex items-center justify-center text-black font-bold shadow-lg`}>
                      {d.title[0]}
                    </div>
                    <h4 className="text-white text-lg font-semibold">{d.title}</h4>
                    <p className="text-gray-300 text-sm mt-1">{d.subtitle}</p>
                    <ul className="mt-3 text-gray-300 text-sm space-y-2">
                      {d.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="inline-block w-full text-center px-4 py-2 rounded-md bg-white text-black font-semibold">
                      {d.cta}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <button aria-label="Previous" onClick={prev} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
                ‹
              </button>
              <div className="flex items-center gap-2">
                {data.map((_, i) => (
                  <button
                    key={i}
                    onClick={async () => {
                      setIndex(i);
                      await controls.start({ x: -i * 360, transition: { type: "spring", stiffness: 120, damping: 18 } });
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  />
                ))}
              </div>
              <button aria-label="Next" onClick={next} className="w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
