import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export default function Footer({ socials }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white py-12 dark:border-white/10 dark:bg-midnight">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr_.8fr]">
        <div>
          <a className="flex items-center gap-3" href="#home" aria-label="Startup Club home">
            <img src="/assets/startup-club-logo.svg" alt="" className="h-14 w-14 rounded-full" />
            <div>
              <p className="text-xl font-black text-ink dark:text-white">Startup Club</p>
              <p className="font-bold text-ocean dark:text-electric">VIT Bhopal University</p>
            </div>
          </a>
          <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
            A student-led startup ecosystem for innovators, founders, creators, and builders.
          </p>
        </div>

        <div>
          <h3 className="font-black text-ink dark:text-white">Quick links</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <a className="font-bold text-slate-600 transition hover:text-ocean dark:text-slate-300 dark:hover:text-electric" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-ink dark:text-white">Connect</h3>
          <a className="mt-5 flex items-center gap-2 font-bold text-slate-600 transition hover:text-ocean dark:text-slate-300 dark:hover:text-electric" href={`mailto:${socials.email}`}>
            <FiMail />
            {socials.email}
          </a>
          <div className="mt-5 flex gap-3">
            <a className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white transition hover:-translate-y-1 hover:bg-ocean dark:bg-white/10" href={socials.instagram} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white transition hover:-translate-y-1 hover:bg-ocean dark:bg-white/10" href={socials.linkedin} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white transition hover:-translate-y-1 hover:bg-ocean dark:bg-white/10" href={socials.github} aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-black/5 pt-6 text-sm font-bold text-slate-500 dark:border-white/10 dark:text-slate-400">
        Copyright {year} Startup Club VIT Bhopal. All rights reserved.
      </div>
    </footer>
  );
}
