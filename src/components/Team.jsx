import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeader from "./SectionHeader.jsx";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Team({ team }) {
  return (
    <section className="py-20 sm:py-24" id="team">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Core Team"
          title="A cross-functional crew building the club like a product."
          copy="The team blends strategy, technology, events, and design so every member experience feels useful, clear, and energetic."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              className="group glass-panel rounded-[2rem] p-5 text-center"
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -10 }}
            >
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.75rem] bg-gradient-to-br from-ocean via-electric to-mint text-3xl font-black text-midnight shadow-glow transition group-hover:rotate-3">
                {initials(member.name)}
              </div>
              <h3 className="mt-6 text-xl font-black text-ink dark:text-white">{member.name}</h3>
              <p className="mt-1 font-extrabold text-ocean dark:text-electric">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{member.focus}</p>
              <div className="mt-6 flex justify-center gap-3">
                <a className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-white transition hover:-translate-y-1 hover:bg-ocean dark:bg-white/10" href={member.socials.linkedin} aria-label={`${member.name} LinkedIn`}>
                  <FaLinkedinIn />
                </a>
                <a className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-white transition hover:-translate-y-1 hover:bg-ocean dark:bg-white/10" href={member.socials.github} aria-label={`${member.name} GitHub`}>
                  <FaGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
