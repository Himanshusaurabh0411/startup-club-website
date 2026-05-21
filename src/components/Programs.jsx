import { Boxes, Mic2, Rocket } from "lucide-react";

const icons = [Rocket, Boxes, Mic2];

export default function Programs({ programs }) {
  return (
    <section className="section-band" id="programs">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Programs</p>
          <h2>From curiosity to launch momentum.</h2>
          <p>
            The club experience is shaped around practical founder motion: finding problems, building tests,
            and presenting progress clearly.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="program-card" key={program.title} data-reveal>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <p>{program.eyebrow}</p>
                <h3>{program.title}</h3>
                <span>{program.copy}</span>
                <div className="tag-row" aria-label={`${program.title} focus areas`}>
                  {program.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
