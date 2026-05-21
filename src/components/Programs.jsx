import { motion } from "framer-motion";
import { FiLayers, FiZap } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

export default function Programs({ programs }) {
  return (
    <section className="bg-ink py-20 text-white dark:bg-black/30 sm:py-24" id="programs">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Programs"
          title="Structured pathways that turn startup energy into visible progress."
          copy="Students can enter from any level and move through discovery, prototyping, storytelling, and launch readiness."
          tone="dark"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-glow"
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-electric/20 blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric text-midnight">
                  {index === 0 ? <FiZap size={24} /> : <FiLayers size={24} />}
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm font-black text-ember">
                  {program.date}
                </span>
              </div>
              <p className="mt-8 text-sm font-black uppercase text-electric">{program.type}</p>
              <h3 className="mt-3 text-3xl font-black">{program.title}</h3>
              <p className="mt-4 leading-7 text-white/72">{program.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
