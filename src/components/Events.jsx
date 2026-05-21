export default function Events({ events }) {
  return (
    <section className="section-band section-muted" id="events">
      <div className="section-shell timeline-layout">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Events</p>
          <h2>A simple roadmap for new builders.</h2>
          <p>
            Each event helps a team leave with something useful: a clearer problem, a working prototype,
            or a stronger demo.
          </p>
        </div>

        <div className="timeline" aria-label="Upcoming event roadmap">
          {events.map((event) => (
            <article className="timeline-item" key={event.title} data-reveal>
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
