import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Why } from "@/components/site/why";
import { Foundation } from "@/components/site/foundation";
import { Capabilities } from "@/components/site/capabilities";
import { ApiSection } from "@/components/site/api-section";
import { CaseStudies } from "@/components/site/case-studies";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreLayer — Financial Infrastructure APIs" },
      {
        name: "description",
        content:
          "CoreLayer gives teams accounts, payments, cards and compliance through one modern API built for scale and reliability.",
      },
      { property: "og:title", content: "CoreLayer — Financial Infrastructure APIs" },
      {
        property: "og:description",
        content:
          "Launch accounts, payments, cards and compliance workflows on a single developer-first platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Why />
        <Foundation />
        <Capabilities />
        <ApiSection />
        <CaseStudies />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
