import { ArrowUpRight, CreditCard, Landmark, Building2, Repeat } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const CAPS = [
  {
    icon: CreditCard,
    title: "Card Issuing",
    body: "Issue and manage physical and virtual cards with programmable spend controls, real-time authorization, and instant tokenization.",
  },
  {
    icon: Landmark,
    title: "Lending Infrastructure",
    body: "Build, automate, and scale lending products with underwriting hooks, servicing, repayment schedules, and full audit trails.",
  },
  {
    icon: Building2,
    title: "Banking Infrastructure",
    body: "Launch and operate financial products on a fully compliant core with accounts, ledgers, statements, and sponsor-bank connectivity.",
  },
  {
    icon: Repeat,
    title: "Payments and Money Movement",
    body: "Move money seamlessly across ACH, SEPA, wires, and instant rails with idempotent APIs and deterministic settlement reporting.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="One platform. Every financial primitive."
          description="Compose only what you need today, and extend into new products without a second integration."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="group h-full bg-card/70 p-8 transition-colors duration-500 hover:bg-elevated">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-transform duration-500 group-hover:scale-105">
                  <c.icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-medium">{c.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
