import ehr from "@/assets/work-ehr.jpg";
import { concepts } from "@/data/projects";

const skillGroups = [
  { title: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"] },
  { title: "Backend", items: ["Node.js", "NestJS", "Express", ".NET", "REST & GraphQL"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"] },
  {
    title: "Security & Compliance",
    items: ["HIPAA", "GDPR", "End-to-end Encryption", "Role-Based Access", "Audit Logging"],
  },
  {
    title: "Cloud & Realtime",
    items: ["AWS", "Azure", "WebSockets / WebRTC", "Docker", "CI/CD", "React Native"],
  },
  {
    title: "Healthcare Domain",
    items: ["EHR / EMR", "Telemedicine", "Patient Portals", "Medical Billing", "HL7 / FHIR"],
  },
];

export function Breakdown() {
  return (
    <section id="skills" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card dot-grid px-6 py-9 sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
                Skills &amp; expertise
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                A stack built for clinical-grade software.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                From real-time telemedicine to multi-tenant EHR platforms — every layer hardened for
                security, compliance, and uptime.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-border bg-card p-4">
                    <h3 className="font-display text-sm font-extrabold">{group.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide uppercase"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-secondary p-4">
                <img
                  src={ehr}
                  alt="Reference architecture of an interoperable EHR platform"
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="w-full rounded-xl shadow-[var(--shadow-lift)]"
                />
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Reference architecture · HL7 / FHIR gateway
                </p>
              </div>

              <div className="grid gap-3">
                {concepts.map((layer) => (
                  <div
                    key={layer.letter}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-4"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary font-display text-[0.7rem] font-extrabold text-primary-foreground">
                      {layer.letter}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold">{layer.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {layer.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
