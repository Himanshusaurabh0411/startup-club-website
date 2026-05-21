import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ stats }) {
  return (
    <section className="hero section-band" id="top" aria-labelledby="hero-title">
      <img className="hero-art" src="/assets/innovation-studio.svg" alt="" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="section-kicker">VIT Bhopal University</p>
        <h1 id="hero-title">StartUp Club</h1>
        <p className="hero-copy">
          A student-led builder community for turning rough ideas into validated products, confident pitches,
          and launch-ready experiments.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#programs">
            Explore programs
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#contact">
            Join builder list
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Club highlights">
        <div className="panel-heading">
          <Sparkles size={18} />
          <span>Live club signal</span>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
