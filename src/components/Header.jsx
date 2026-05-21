import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Programs", href: "#programs" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export default function Header({ theme, onThemeToggle, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-midnight/75">
      <div className="section-shell flex h-20 items-center justify-between">
        <a className="flex items-center gap-3" href="#home" onClick={closeMenu} aria-label="Startup Club home">
          <img
            src="/assets/startup-club-logo.svg"
            alt="Startup Club VIT Bhopal logo"
            className="h-12 w-12 rounded-full object-cover shadow-glow"
          />
          <div className="leading-tight">
            <span className="block text-base font-black text-ink dark:text-white">Startup Club</span>
            <span className="block text-xs font-bold text-ocean dark:text-electric">VIT Bhopal</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold text-slate-700 transition hover:text-ocean dark:text-slate-200 dark:hover:text-electric"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white text-ink transition hover:-translate-y-1 hover:border-ocean hover:text-ocean dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-electric"
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white text-ink transition hover:-translate-y-1 hover:border-ocean lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="section-shell pb-5 lg:hidden"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="glass-panel grid overflow-hidden rounded-3xl p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 font-extrabold text-ink transition hover:bg-ocean/10 hover:text-ocean dark:text-white dark:hover:bg-white/10 dark:hover:text-electric"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
