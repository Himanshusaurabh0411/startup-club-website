import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" }
];

export default function Header({ theme, onThemeToggle, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="StartUp Club home">
        <img src="/assets/startup-club-mark.svg" alt="" />
        <span>StartUp Club</span>
      </a>

      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
