import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

export default function Events({ events }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="events">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-80 -translate-y-1/2 bg-gradient-to-r from-ocean/10 via-mint/10 to-ember/10 blur-3xl" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Events"
          title="High-signal experiences for builders, founders, and curious beginners."
          copy="Every event is designed around action: meet collaborators, learn founder skills, build something real, and get sharper feedback."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              className="group glass-panel min-h-[22rem] rounded-[2rem] p-5"
              key={event.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-2 text-xs font-black text-white dark:bg-white dark:text-ink">
                  <FiCalendar />
                  {event.date}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ocean/10 text-ocean transition group-hover:bg-ocean group-hover:text-white dark:bg-electric/10 dark:text-electric">
                  <FiArrowUpRight />
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black text-ink dark:text-white">{event.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{event.copy}</p>
              <button className="mt-8 text-sm font-black text-ocean transition group-hover:translate-x-1 dark:text-electric" type="button">
                {event.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
