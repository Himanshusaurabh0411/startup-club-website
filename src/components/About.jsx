import { motion } from "framer-motion";
import { FiCheckCircle, FiTarget, FiTrendingUp } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

const icons = [FiTarget, FiTrendingUp, FiCheckCircle];

export default function About({ aboutCards, stats }) {
  return (
    <section className="pb-20 pt-0 sm:pb-24 sm:pt-0" id="about">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About Startup Club"
          title="A campus launchpad for students who want to build more than resumes."
          copy="Startup Club VIT Bhopal brings together developers, designers, product thinkers, marketers, and future founders to learn entrepreneurship through real execution."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                className="glass-panel rounded-[2rem] p-6 transition hover:-translate-y-2"
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ocean/10 text-ocean dark:bg-electric/10 dark:text-electric">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-black text-ink dark:text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{card.copy}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-card dark:border-white/10 dark:bg-white/[0.06]"
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <strong className="text-4xl font-black text-ocean dark:text-electric">{stat.value}</strong>
              <p className="mt-2 font-black text-ink dark:text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
