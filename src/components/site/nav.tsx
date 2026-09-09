import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Layers } from "lucide-react";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "API", href: "#api" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Docs", href: "#capabilities" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg border border-border-strong bg-secondary text-primary transition-colors group-hover:text-primary-soft">
              <Layers className="size-4" strokeWidth={1.6} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              CoreLayer
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#cta"
              className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="rounded-lg border border-border-strong bg-[image:var(--gradient-cta)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_var(--glow)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Start Building
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 z-40 bg-background/95 px-5 pt-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-border py-4 text-lg text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-[image:var(--gradient-cta)] px-4 py-3 text-center font-medium text-primary-foreground"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
