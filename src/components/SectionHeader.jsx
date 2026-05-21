import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, copy, align = "left", tone = "default" }) {
  const isDark = tone === "dark";

  return (
    <motion.div
      className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <span className="pill">{eyebrow}</span>
      <h2 className={`mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${isDark ? "text-white" : "text-ink dark:text-white"}`}>
        {title}
      </h2>
      {copy && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${isDark ? "text-white/70" : "text-slate-600 dark:text-slate-300"}`}>
          {copy}
        </p>
      )}
    </motion.div>
  );
}
