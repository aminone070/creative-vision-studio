const facts = [
  { label: "Email", value: "hello@drcode.health" },
  { label: "Location", value: "Remote · Worldwide" },
  { label: "Working style", value: "NDA-friendly · HIPAA-aware" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pt-8 pb-6 sm:px-6 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card dot-grid px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Get in touch
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl">
            Let&apos;s build something your patients trust.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell me about your clinic, hospital, or healthtech idea. I respond to every inquiry
            within one business day.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@drcode.health"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              hello@drcode.health
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              See healthcare projects
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-border bg-card px-4 py-4">
                <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-sm font-bold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="flex flex-col items-center justify-between gap-2 px-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Healthcare Full-Stack Developer Portfolio.</p>
          <p>HIPAA-compliant clinic, EHR &amp; telemedicine engineering</p>
        </footer>
      </div>
    </section>
  );
}
