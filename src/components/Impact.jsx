import { BadgeCheck, TrendingUp } from "lucide-react";

export default function Impact({ stats, toolkit }) {
  return (
    <section className="section-band" id="impact">
      <div className="section-shell impact-layout">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Impact</p>
          <h2>Built for proof, not just posters.</h2>
          <p>
            The club focuses on small measurable wins that help student teams learn fast and communicate
            progress with credibility.
          </p>
        </div>

        <div className="impact-grid">
          {stats.map((stat) => (
            <article className="metric-card" key={stat.label} data-reveal>
              <TrendingUp size={21} />
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="toolkit" data-reveal>
          <div className="toolkit-heading">
            <BadgeCheck size={21} />
            <h3>Founder toolkit</h3>
          </div>
          <ul>
            {toolkit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
