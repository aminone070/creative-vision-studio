import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="cta" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="surface-card relative overflow-hidden px-6 py-20 text-center sm:px-16">
            <div className="hero-glow pointer-events-none absolute inset-0" />
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
            <div className="animate-float-slow pointer-events-none absolute -bottom-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />

            <div className="relative">
              <h2 className="text-gradient mx-auto max-w-3xl text-3xl font-semibold text-balance sm:text-5xl">
                Start building with modern banking infrastructure
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
                Get sandbox access in minutes. Talk to an engineer, not a
                sales script.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-cta)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_18px_50px_-18px_var(--glow)] transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  Request a Demo
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#api"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-border-strong bg-secondary/50 px-6 py-3.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-elevated sm:w-auto"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
