import { Reveal, SectionHeading } from "./reveal";
import { motion } from "motion/react";
import { CreditCard, Landmark, Repeat, Scale, Wallet } from "lucide-react";

const NODES = [
  { label: "Accounts", icon: Wallet, x: 12, y: 18 },
  { label: "Payments", icon: Repeat, x: 76, y: 10 },
  { label: "Cards", icon: CreditCard, x: 84, y: 66 },
  { label: "Lending", icon: Landmark, x: 8, y: 70 },
  { label: "Compliance", icon: Scale, x: 46, y: 88 },
];

export function Foundation() {
  return (
    <section id="product" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]">
        <div className="absolute top-1/3 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The foundation"
            title="This is not a product. It's the foundation."
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground lg:pb-2">
              Modern APIs, a transparent banking core, and developer-first
              tooling replace the patchwork of legacy processors, ledgers, and
              compliance vendors. One system of record. One integration surface.
              Full visibility into every movement of money.
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-gradient text-2xl font-semibold sm:text-3xl">
              Everything connected. Nothing tangled.
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card relative mt-8 aspect-[16/11] w-full overflow-hidden p-4 sm:aspect-[16/8]">
              <div className="grid-lines absolute inset-0 opacity-60" />

              <svg
                className="absolute inset-0 size-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {NODES.map((n) => (
                  <motion.line
                    key={n.label}
                    x1="50"
                    y1="50"
                    x2={n.x + 7}
                    y2={n.y + 6}
                    stroke="var(--primary)"
                    strokeWidth="0.25"
                    strokeDasharray="2 2"
                    className="animate-dash-flow"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="rounded-2xl border border-border-strong bg-elevated/90 px-5 py-4 text-center shadow-[0_30px_80px_-30px_var(--glow)] backdrop-blur-md">
                  <p className="font-mono text-[10px] tracking-widest text-primary uppercase">
                    Core
                  </p>
                  <p className="mt-1 text-sm font-medium">CoreLayer Ledger</p>
                </div>
              </motion.div>

              {NODES.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  className="absolute"
                >
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-2 backdrop-blur-md transition-colors hover:border-border-strong">
                    <n.icon className="size-4 text-primary-soft" strokeWidth={1.6} />
                    <span className="text-xs font-medium whitespace-nowrap sm:text-sm">
                      {n.label}
                    </span>
                    <span className="animate-pulse-node size-1.5 rounded-full bg-success" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
