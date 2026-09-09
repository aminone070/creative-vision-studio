import { Github, Layers, Linkedin, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["Accounts", "Payments", "Cards", "Lending", "Compliance"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Status", "Security", "Changelog"],
  },
  { title: "Company", links: ["About", "Careers", "Customers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "DPA", "Sub-processors"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border-strong bg-secondary text-primary">
                <Layers className="size-4" strokeWidth={1.6} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                CoreLayer
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Unified banking infrastructure for teams building regulated
              financial products.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CoreLayer. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Bank-grade security · SOC 2 Type II · ISO 27001
          </p>
        </div>
      </div>
    </footer>
  );
}
