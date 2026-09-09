import { Reveal, SectionHeading } from "./reveal";
import { ArrowUpRight, Building2, ShieldCheck, Boxes, Server } from "lucide-react";

const ITEMS = [
  {
    n: "01",
    icon: Building2,
    title: "Banking infrastructure without the bank",
    body: "Launch accounts, move money, and manage funds through a fully compliant platform.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Compliance built in",
    body: "Automated KYC/AML, monitoring, reporting, and guardrails — handled by default.",
  },
  {
    n: "03",
    icon: Boxes,
    title: "One API for everything",
    body: "No fragmented vendors. One contract, one integration, endless scalability.",
  },
  {
    n: "04",
    icon: Server,
    title: "Enterprise-grade reliability",
    body: "High availability, audit-ready security, and banking-grade data protection.",
  },
];

export function Why() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why CoreLayer"
          title="What actually matters when money is involved"
          description="Every layer of the stack is engineered for regulated financial products — so your team ships features, not infrastructure."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.08}>
              <article className="surface-card group relative h-full overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[0_30px_70px_-40px_var(--glow)]">
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-elevated text-primary">
                    <item.icon className="size-4.5" strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.n}
                  </span>
                </div>
                <h3 className="mt-6 text-base leading-snug font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary-soft transition-colors group-hover:text-primary">
                  Learn more
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
