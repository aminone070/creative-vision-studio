import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const CASES = [
  {
    title: "How AT&T scaled revenue with CoreLayer",
    quote:
      "We replaced four vendors with one integration and shipped our embedded wallet in six weeks.",
    person: "Mira S.",
    role: "Co-Founder at AT&T",
    metric: "3.4x",
    metricLabel: "revenue growth",
    cta: "See how AT&T uses CoreLayer",
  },
  {
    title: "Why Oracle migrated from Stripe Billing to CoreLayer",
    quote:
      "A transparent ledger and audit-ready reporting made our finance and compliance teams move faster.",
    person: "Alex M.",
    role: "CTO at Oracle",
    metric: "-62%",
    metricLabel: "reconciliation time",
    cta: "Read case study",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof"
          title="Case Studies"
          description="Teams running regulated products at scale on a single financial core."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="surface-card group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_36px_80px_-44px_var(--glow)]">
                <div className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-sm text-lg leading-snug font-medium sm:text-xl">
                    {c.title}
                  </h3>
                  <Quote className="size-6 shrink-0 text-primary/40" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  “{c.quote}”
                </p>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="text-sm font-medium">{c.person}</p>
                    <p className="text-xs text-muted-foreground">{c.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-2xl text-primary-soft">
                      {c.metric}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.metricLabel}
                    </p>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary-soft">
                  {c.cta}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
