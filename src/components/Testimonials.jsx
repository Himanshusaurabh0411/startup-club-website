import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials({ testimonials }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="testimonials">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ocean/5 to-transparent" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Real momentum, told through member stories."
          copy="These sample voices show the kind of transformation the club experience is designed to create."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="glass-panel rounded-[2rem] p-6"
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pulse/10 text-pulse">
                <FiMessageCircle size={23} />
              </div>
              <p className="mt-6 text-lg font-bold leading-8 text-ink dark:text-white">
                "{testimonial.quote}"
              </p>
              <div className="mt-8 border-t border-black/10 pt-5 dark:border-white/10">
                <p className="font-black text-ink dark:text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
