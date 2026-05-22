import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiZap } from "react-icons/fi";

const smoothEntrance = { duration: 0.72, ease: [0.22, 1, 0.36, 1] };

export default function Hero({ profile, stats }) {
  return (
    <section
      className="relative isolate overflow-hidden pb-8 pt-28 sm:pt-32 lg:min-h-[84vh] lg:pb-4"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 bg-startup-grid startup-grid opacity-70 dark:opacity-40" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/25 blur-3xl lg:h-[34rem] lg:w-[34rem]" />
      <motion.div
        className="aurora-shape absolute right-6 top-28 -z-10 h-36 w-36 rounded-[2rem] bg-mint/40 lg:right-36 lg:h-64 lg:w-64"
        animate={{ y: [0, 24, 0], rotate: [8, 18, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-shape absolute bottom-24 left-8 -z-10 h-28 w-28 rounded-full bg-ember/35 lg:left-32 lg:h-52 lg:w-52"
        animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <motion.span
            className="pill"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothEntrance}
          >
            <FiZap />
            {profile?.bio || "Startup culture at VIT Bhopal"}
          </motion.span>
          <motion.h1
            id="hero-title"
            className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] text-ink sm:text-6xl lg:text-6xl 2xl:text-7xl dark:text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothEntrance, delay: 0.08 }}
          >
            Empowering Ideas Into Successful Startups
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothEntrance, delay: 0.16 }}
          >
            {profile?.name || "Startup Club VIT Bhopal"} is building startup culture at VIT Bhopal
            for innovators, founders, creators, and entrepreneurs.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothEntrance, delay: 0.24 }}
          >
            <a className="primary-btn" href="#contact">
              {profile?.cta || "Join Community"}
              <FiArrowRight />
            </a>
            <a className="secondary-btn" href="#events">
              Explore Events
              <FiCalendar />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-7"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...smoothEntrance, delay: 0.22 }}
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-ocean/25 blur-3xl" />
          <div className="relative rounded-[1.5rem] border border-white/60 bg-midnight p-4 text-white shadow-glow sm:p-5 dark:border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-electric">{profile?.handle || "@startup.vit"}</p>
                <h2 className="mt-2 text-2xl font-black">Build. Pitch. Launch.</h2>
              </div>
              <img src="/assets/startup-club-logo.svg" alt="" className="h-16 w-16 rounded-full" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-4"
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <strong className="text-2xl font-black text-ember sm:text-3xl">{stat.value}</strong>
                  <p className="mt-1 font-extrabold">{stat.label}</p>
                  <span className="mt-3 hidden text-sm leading-6 text-white/62 2xl:block">{stat.detail}</span>
                  <span className="mt-4 block h-1 rounded-full bg-gradient-to-r from-electric via-mint to-ember" />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] py-3">
              <div className="marquee-track flex w-[200%] gap-5 whitespace-nowrap text-sm font-bold text-white/70">
                {["Idea validation", "MVP sprint", "Pitch room", "Founder talks", "Mentor feedback", "Demo night", "Idea validation", "MVP sprint", "Pitch room", "Founder talks", "Mentor feedback", "Demo night"].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
