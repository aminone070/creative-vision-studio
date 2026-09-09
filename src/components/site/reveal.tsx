import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2 className="text-gradient mt-5 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
