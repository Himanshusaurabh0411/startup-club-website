import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-midnight text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.img
          src="/assets/startup-club-logo.svg"
          alt="Startup Club VIT Bhopal"
          className="h-24 w-24 rounded-full shadow-glow"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-electric"
            animate={{ x: ["-100%", "140%"] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
          Startup Club VIT Bhopal
        </p>
      </div>
    </motion.div>
  );
}
