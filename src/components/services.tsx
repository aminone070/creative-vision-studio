import { services } from "@/data/projects";

const steps = [
  { step: "01", title: "Brief & research", note: "Goals, audience, references, and the metaphor." },
  { step: "02", title: "Concepts", note: "Three thumbnail directions, one recommendation." },
  { step: "03", title: "Production", note: "Illustration, animation, or identity build-out." },
  { step: "04", title: "Handoff", note: "Master files, applications, and usage notes." },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="slide-card lift px-6 py-8 hover:-translate-y-1">
              <h3 className="font-display text-xl font-extrabold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            How we work
          </p>
          <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step}>
                <span className="font-display text-3xl font-extrabold text-brand-sky">
                  {item.step}
                </span>
                <h4 className="mt-2 font-display text-base font-bold">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
