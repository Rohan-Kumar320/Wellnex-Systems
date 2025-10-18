import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/preloader.json";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0f] text-cyan-400 z-[9999]"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-3xl font-bold tracking-widest mt-6"
          >
            Wellnex Systems
          </motion.h1>

          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 180, height: 180 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
