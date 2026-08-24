const timeline = [
  {
    period: "2023 — Present",
    role: "Lead Full-Stack Engineer — Healthcare",
    place: "MediCore Health Systems",
    note: "Architected a multi-tenant clinic platform serving 12 branches. Led HIPAA compliance, FHIR integrations, and a team of 6 engineers.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Full-Stack Developer",
    place: "VitalLink Telehealth",
    note: "Built a WebRTC telemedicine product from zero to 50k MAU. Designed end-to-end encryption and real-time vitals streaming.",
  },
  {
    period: "2019 — 2021",
    role: "Full-Stack Developer",
    place: "ChartFlow EHR",
    note: "Delivered EHR modules integrating HL7/FHIR with 30+ hospital systems. Cut clinician charting time by 30%.",
  },
  {
    period: "2017 — 2019",
    role: "Software Engineer",
    place: "Independent Clinics Network",
    note: "Developed appointment booking, billing, and patient portal modules for a network of 40+ private clinics.",
  },
];

const capabilities = [
  "EHR / EMR Systems",
  "Telemedicine",
  "Appointment Booking",
  "Patient Portals",
  "Medical Billing",
  "Pharmacy & Inventory",
  "HL7 / FHIR",
  "HIPAA & GDPR",
];

export function About() {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            About me
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            Engineering trust into every line of care.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I&apos;m a full-stack developer with deep specialization in healthcare and clinic
              management systems. Over the past seven years I&apos;ve built HIPAA-compliant EHR
              platforms, telemedicine products, smart appointment systems, and pharmacy &amp;
              inventory tooling used by hundreds of clinicians every day.
            </p>
            <p>
              My focus is the intersection of clinical workflow, security, and delightful UX. I work
              closely with doctors, administrators, and compliance teams to turn complex regulations
              into products that feel effortless to use — without ever compromising patient data.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Experience
          </p>
          <ol className="mt-6 space-y-6">
            {timeline.map((item, i) => (
              <li key={item.role} className="relative pl-8">
                <span className="absolute top-1.5 left-0 grid size-5 place-items-center rounded-full border-2 border-primary bg-card">
                  <span className="size-1.5 rounded-full bg-brand-orange" />
                </span>
                {i < timeline.length - 1 && (
                  <span className="absolute top-8 left-[9px] h-[calc(100%+0.75rem)] w-0.5 bg-border" />
                )}
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold">{item.role}</h3>
                <p className="text-sm font-medium text-brand-teal">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
