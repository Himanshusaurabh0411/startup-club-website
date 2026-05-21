import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="StartUp Club home">
          <img src="/assets/startup-club-mark.svg" alt="" />
          <span>StartUp Club</span>
        </a>
        <p>VIT Bhopal University</p>
      </div>
      <div className="footer-links" aria-label="Social links">
        <a href="mailto:startupclub@example.com" aria-label="Email StartUp Club">
          <Mail size={18} />
        </a>
        <a href="https://github.com/" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
