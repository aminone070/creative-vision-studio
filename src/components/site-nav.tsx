const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border/70 bg-card/85 px-4 py-2.5 shadow-[var(--shadow-lift)] backdrop-blur-md sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
            MS
          </span>
          <span className="font-display text-sm font-bold tracking-tight">
            Healthcare Full-Stack Dev
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
        >
          <span className="size-1.5 rounded-full bg-brand-yellow" />
          Available Q3 2026
        </a>
      </nav>
    </header>
  );
}
