import { useState } from "react";
import { Check, Copy, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

type Tab = "cURL" | "Node.js" | "Python";

const SNIPPETS: Record<Tab, string> = {
  "cURL": `curl http://api.corelayer.io/v1/card/process \\
  -d signature=129a12c0acb47b0b5c7a76f441070cface495de40cc9520f0e9f7120f1b455 \\
  -d project=d55ad89070d6172cc0eeeeecfdde2c554 \\
  -d user=47055 \\
  -d card_token=d5c83ed1575b6fa30e8b977016c75a5417c5c9d34930d7076e9e36f374577345 \\
  -d price=5.99 \\
  -d currency=EUR \\
  -d description="My custom description."`,
  "Node.js": `import { CoreLayer } from "@corelayer/node";

const core = new CoreLayer(process.env.CORELAYER_SECRET);

const charge = await core.cards.process({
  project: "d55ad89070d6172cc0eeeeecfdde2c554",
  user: 47055,
  card_token: "d5c83ed1575b6fa30e8b977016c75a5417c5c9d3",
  price: 5.99,
  currency: "EUR",
  description: "My custom description.",
});`,
  "Python": `from corelayer import CoreLayer

core = CoreLayer(api_key=os.environ["CORELAYER_SECRET"])

charge = core.cards.process(
    project="d55ad89070d6172cc0eeeeecfdde2c554",
    user=47055,
    card_token="d5c83ed1575b6fa30e8b977016c75a5417c5c9d3",
    price=5.99,
    currency="EUR",
    description="My custom description.",
)`,
};

const TABS = Object.keys(SNIPPETS) as Tab[];

function highlight(line: string) {
  const tokens = line.split(/(\s+)/);
  return tokens.map((t, i) => {
    let cls = "text-foreground/85";
    if (/^(curl|import|from|const|await|new|=)$/.test(t.trim()))
      cls = "text-primary-soft";
    else if (/^-d$/.test(t.trim())) cls = "text-muted-foreground";
    else if (/^".*"$|^'.*'$/.test(t.trim())) cls = "text-success";
    else if (/^\d+(\.\d+)?,?$/.test(t.trim())) cls = "text-chart-4";
    else if (/^http/.test(t.trim())) cls = "text-chart-5";
    return (
      <span key={i} className={cls}>
        {t}
      </span>
    );
  });
}

export function ApiSection() {
  const [tab, setTab] = useState<Tab>("cURL");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="api" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Made for builders"
              title="Built for people who read documentation"
              description="Clean endpoints, predictable responses, typed SDKs, and a full sandbox environment let teams go from concept to prototype in days — not quarters."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-secondary/60 px-5 py-3 text-sm font-medium transition-colors hover:bg-elevated"
                >
                  View API Overview
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Docs
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={32}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="surface-card overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="mr-2 flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="flex gap-1">
                    {TABS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                          tab === t
                            ? "bg-elevated text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={copy}
                    aria-label="Copy code"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5 text-success" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
                  <code>
                    {SNIPPETS[tab].split("\n").map((line, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="w-4 shrink-0 text-right text-muted-foreground/40 select-none">
                          {i + 1}
                        </span>
                        <span className="whitespace-pre">{highlight(line)}</span>
                      </div>
                    ))}
                  </code>
                </pre>

                <div className="flex items-center gap-2 border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-success" />
                  200 OK · 84 ms · sandbox
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
