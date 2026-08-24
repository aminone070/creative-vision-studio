import portrait from "@/assets/portrait-dev.png";
import { stats, tools } from "@/data/projects";

export function Hero() {
  return (
    <section id="top" className="px-4 pt-10 sm:px-6 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card rise-in dot-grid overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Available for healthcare projects · Q3 2026
              </p>

              <h1 className="mt-6 font-display text-5xl leading-[0.95] font-extrabold sm:text-6xl lg:text-7xl">
                Full-Stack Developer
                <br />
                <span className="text-brand-orange">Healthcare &amp; Clinic Systems.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Building secure, HIPAA-compliant, and efficient digital products for hospitals,
                clinics, and telemedicine providers worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Get in touch
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-extrabold">{stat.value}</dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute inset-x-6 top-8 bottom-8 rounded-[2.5rem] bg-brand-teal/25" />
              <div className="absolute inset-x-10 top-14 bottom-4 rounded-[2.5rem] bg-brand-sky/35" />
              <img
                src={portrait}
                alt="Illustrated portrait of a full-stack healthcare developer"
                width={1024}
                height={1024}
                className="relative mx-auto w-full max-w-sm rounded-[2rem] drop-shadow-[0_18px_30px_rgba(0,0,0,0.16)]"
              />
              <p className="relative mt-2 text-center font-display text-sm font-bold">
                Healthcare engineering · Remote worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-full border border-border bg-card py-3">
          <div className="marquee-track gap-8 px-4">
            {[...tools, ...tools].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="flex shrink-0 items-center gap-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase"
              >
                <span className="size-1.5 rounded-full bg-brand-orange" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
