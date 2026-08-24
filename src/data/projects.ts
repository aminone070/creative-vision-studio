import clinic from "@/assets/work-clinic.jpg";
import telemed from "@/assets/work-telemed.jpg";
import ehr from "@/assets/work-ehr.jpg";
import booking from "@/assets/work-booking.jpg";
import pharmacy from "@/assets/work-pharmacy.jpg";

export type Project = {
  slug: string;
  index: string;
  quote?: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  palette: string[];
  paletteNote?: string;
  layout: "image-left" | "image-right";
  tags: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "medicore",
    index: "01",
    quote: "“15,000+ patients, one source of truth.”",
    title: "MediCore — Multi-Branch Clinic Management",
    subtitle: "Clinic Management Platform",
    client: "MediCore Health Systems",
    role: "Lead Full-Stack Engineer",
    year: "2024",
    description:
      "End-to-end platform unifying patient records, scheduling, billing, and analytics across 12 clinic locations. Multi-tenant architecture with role-based access, audit logging, and live branch synchronisation.",
    image: clinic,
    imageAlt: "Clinic management dashboard showing patients, today's schedule and billing overview",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#79c8f2", "#e5493f", "#e8e3da"],
    layout: "image-left",
    tags: ["React", "NestJS", "PostgreSQL", "Redis", "AWS"],
    metrics: ["15,000+ patients managed", "12 branches synced live", "HIPAA compliant"],
  },
  {
    slug: "vitallink",
    index: "02",
    title: "VitalLink — Telemedicine Platform",
    subtitle: "Telemedicine & Remote Care",
    client: "VitalLink Telehealth",
    role: "Senior Full-Stack Developer",
    year: "2023",
    description:
      "HIPAA-compliant video consultations with e-prescriptions, secure file sharing, and real-time vitals monitoring. Built on WebRTC with end-to-end encryption and adaptive bitrate for low-bandwidth clinics.",
    image: telemed,
    imageAlt: "Telemedicine video call between doctor and patient with encrypted vitals streaming",
    palette: ["#1f9d8f", "#5fc3b6", "#cfe8e3", "#f2795c", "#79c8f2", "#16283c"],
    layout: "image-right",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    metrics: ["99.98% call uptime", "<200ms latency", "End-to-end encrypted"],
  },
  {
    slug: "chartflow",
    index: "03",
    title: "ChartFlow — EHR / EMR System",
    subtitle: "Interoperable Health Records",
    client: "ChartFlow EHR",
    role: "Full-Stack Developer",
    year: "2022",
    description:
      "Unified electronic health records with HL7/FHIR interoperability, lab integrations, and clinical decision support. Integrated with 30+ hospital systems and cut clinician charting time by nearly a third.",
    image: ehr,
    imageAlt: "Electronic health record patient chart with lab results and HL7 FHIR data exchange",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#d9584f", "#b9bfc4", "#e7f0ec"],
    paletteNote:
      "Interface tokens are tuned for long clinical shifts: low-glare surfaces, AA+ contrast on every data label, and a single saturated accent reserved for abnormal results and safety alerts.",
    layout: "image-left",
    tags: ["Next.js", ".NET", "SQL Server", "FHIR"],
    metrics: ["HL7/FHIR certified", "30% faster charting", "Zero PHI breaches"],
  },
  {
    slug: "bookcare",
    index: "04",
    title: "BookCare — Smart Booking & Patient Portal",
    subtitle: "Scheduling & Self-Service",
    client: "Independent Clinics Network",
    role: "Full-Stack Developer",
    year: "2021",
    description:
      "AI-assisted appointment scheduling with digital intake forms, SMS reminders, and self-service patient dashboards. Accessibility was a first-class requirement across the whole booking flow.",
    image: booking,
    imageAlt: "Appointment booking calendar, patient portal app and digital intake form",
    palette: ["#0f2a43", "#3b82c4", "#79c8f2", "#f08322", "#f6d635", "#e8e3da"],
    layout: "image-right",
    tags: ["React", "TypeScript", "Supabase", "Twilio"],
    metrics: ["No-shows down 45%", "+62% online bookings", "WCAG 2.1 AA"],
  },
  {
    slug: "rxstock",
    index: "05",
    title: "RxStock — Pharmacy & Inventory Suite",
    subtitle: "Hospital Pharmacy Operations",
    client: "MediCore Health Systems",
    role: "Full-Stack Developer",
    year: "2025",
    description:
      "Hospital-grade pharmacy management with expiry tracking, automated reordering, and drug-interaction alerts. Barcode-driven stock movements keep dispensing accurate across every ward.",
    image: pharmacy,
    imageAlt: "Pharmacy inventory dashboard with expiry tracking, stock alerts and interaction warnings",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#e5493f", "#f6d635", "#cfe8e3"],
    layout: "image-left",
    tags: ["React", "Express", "PostgreSQL", "Azure"],
    metrics: ["$1.2M annual savings", "98% stock accuracy", "FDA-aligned workflows"],
  },
];

export const concepts = [
  {
    letter: "A",
    label: "Access layer",
    note: "Role-based access, SSO for clinicians, and session policies per device.",
  },
  {
    letter: "B",
    label: "Data layer",
    note: "Encrypted PHI at rest, tenant isolation, and immutable audit trails.",
  },
  {
    letter: "C",
    label: "Interop layer",
    note: "HL7 v2 and FHIR R4 gateways to labs, radiology, and billing systems.",
  },
];

export const tools = [
  "React 19",
  "TypeScript",
  "Next.js",
  "Node.js",
  "NestJS",
  ".NET",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "HL7 / FHIR",
  "AWS",
  "Azure",
  "Docker",
  "WebRTC",
];

export const services = [
  {
    title: "Clinic & Hospital Systems",
    body: "Multi-tenant platforms unifying patient records, scheduling, billing, and reporting across branches.",
    items: ["EHR / EMR", "Scheduling", "Medical billing"],
  },
  {
    title: "Telemedicine & Realtime",
    body: "Secure video consultations, e-prescriptions, and live vitals streaming built on WebRTC and WebSockets.",
    items: ["WebRTC", "E-prescriptions", "Remote monitoring"],
  },
  {
    title: "Interoperability",
    body: "HL7 v2 and FHIR R4 integrations with labs, radiology, pharmacy, and insurance systems.",
    items: ["HL7", "FHIR R4", "API gateways"],
  },
  {
    title: "Security & Compliance",
    body: "HIPAA and GDPR-aligned architecture: encryption, role-based access, audit logging, and breach drills.",
    items: ["HIPAA", "GDPR", "Audit logging"],
  },
];

export const stats = [
  { value: "7+", label: "Years in healthtech" },
  { value: "40+", label: "Clinics & hospitals" },
  { value: "120+", label: "Production deploys" },
  { value: "100%", label: "HIPAA audits passed" },
];
