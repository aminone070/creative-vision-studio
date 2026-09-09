import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Terminal } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 700], [0, 140]);
  const gridY = useTransform(scrollY, [0, 700], [0, 60]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        style={{ y: gridY }}
        className="grid-lines pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <motion.div
        style={{ y: orbY }}
        className="animate-float-slow pointer-events-none absolute -top-24 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]"
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-success" />
          </span>
          Fully compliant • SOC 2 • Bank-grade security
        </motion.div>

        <h1 className="mt-8 text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] font-semibold">
          {["Banking Infrastructure.", "Rebuilt for Builders."].map(
            (line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE }}
                className={
                  i === 0
                    ? "text-gradient block"
                    : "block bg-[linear-gradient(100deg,var(--primary-soft),var(--foreground))] bg-clip-text text-transparent"
                }
              >
                {line}
              </motion.span>
            ),
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80"
        >
          Build &amp; scale financial products with a single unified API.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          CoreLayer gives you modern banking infrastructure — deposits,
          payments, compliance, and lending — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-cta)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_18px_50px_-18px_var(--glow)] transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
          >
            Request a Demo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#api"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong bg-secondary/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-elevated sm:w-auto"
          >
            <Terminal className="size-4 text-primary" />
            View API Docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs tracking-wider text-muted-foreground uppercase"
        >
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-success" /> PCI DSS Level 1
          </span>
          <span>99.99% uptime</span>
          <span>ISO 27001</span>
          <span>PSD2 ready</span>
        </motion.div>
      </div>
    </section>
  );
}
