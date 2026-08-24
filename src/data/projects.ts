import booking from "@/assets/work-booking.jpg";
import clinic from "@/assets/work-clinic.jpg";
import ehr from "@/assets/work-ehr.jpg";
import telemed from "@/assets/work-telemed.jpg";

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
    slug: "marketplace",
    index: "01",
    quote: "“Modular marketplace backend built for scale.”",
    title: "E-Commerce Marketplace Engine",
    subtitle: "Microservices Architecture",
    client: "Enterprise Marketplace",
    role: "Senior Full-Stack Engineer",
    year: "2024",
    description:
      "Built a modular marketplace backend using .NET 8 microservices with Clean Architecture, Repository Pattern, and Unit of Work. Designed for high maintainability, multi-tenant data isolation, and hierarchical RBAC.",
    image: clinic,
    imageAlt: "Marketplace architecture diagram showing microservices, API gateway, and data layer",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#79c8f2", "#e5493f", "#e8e3da"],
    layout: "image-left",
    tags: [".NET 8", "Microservices", "Clean Architecture", "DDD", "PostgreSQL", "Redis"],
    metrics: ["Multi-tenant ready", "RBAC enabled", "300% throughput gain"],
  },
  {
    slug: "logistics-iot",
    index: "02",
    title: "Real-Time Logistics & IoT Dashboard",
    subtitle: "Real-Time Telemetry & Data Visualization",
    client: "Logistics & IoT Provider",
    role: "Senior Software Developer",
    year: "2024",
    description:
      "Developed a full-stack logistics dashboard using Angular and .NET with SignalR for real-time tracking and telemetry. Managed over 1,000 IoT endpoints with high-throughput integration layers and live data visualization.",
    image: telemed,
    imageAlt: "Real-time logistics dashboard with IoT device telemetry and map visualizations",
    palette: ["#1f9d8f", "#5fc3b6", "#cfe8e3", "#f2795c", "#79c8f2", "#16283c"],
    layout: "image-right",
    tags: ["Angular", ".NET", "SignalR", "IoT", "Real-time", "Azure DevOps"],
    metrics: ["1,000+ IoT endpoints", "Live telemetry", "Sub-second updates"],
  },
  {
    slug: "crm-erp-sync",
    index: "03",
    title: "Multi-Tenant CRM / ERP Sync",
    subtitle: "Enterprise Integration Layer",
    client: "Enterprise SaaS Platform",
    role: "Senior Full-Stack Engineer",
    year: "2023",
    description:
      "Engineered a synchronization layer for CRM and ERP systems, handling large-scale data transfers with high consistency. Implemented secure tenant isolation and resilient error handling across distributed services.",
    image: ehr,
    imageAlt: "CRM and ERP integration flow with data sync and conflict resolution",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#d9584f", "#b9bfc4", "#e7f0ec"],
    paletteNote:
      "The integration is built around idempotent sync jobs, conflict-resolution rules, and comprehensive audit logging to guarantee data consistency across tenants.",
    layout: "image-left",
    tags: [".NET Core", "REST APIs", "PostgreSQL", "Redis", "Docker", "CI/CD"],
    metrics: ["High consistency", "Multi-tenant", "Resilient sync"],
  },
  {
    slug: "portfolio-pwa",
    index: "04",
    title: "Next.js Portfolio & PWA",
    subtitle: "High-Performance Web Experience",
    client: "Personal Project",
    role: "Full-Stack Developer",
    year: "2023",
    description:
      "Developed a high-performance personal portfolio using Next.js and Tailwind CSS. Optimized for web vitals, mobile responsiveness, and PWA installability to showcase projects and engineering work.",
    image: booking,
    imageAlt: "Portfolio website preview with responsive layout and performance metrics",
    palette: ["#0f2a43", "#3b82c4", "#79c8f2", "#f08322", "#f6d635", "#e8e3da"],
    layout: "image-right",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "PWA"],
    metrics: ["Optimized web vitals", "Mobile-first", "PWA installable"],
  },
];

export const concepts = [
  {
    letter: "A",
    label: "Access layer",
    note: "OAuth 2.0 / JWT authentication, hierarchical RBAC, and tenant-aware authorization.",
  },
  {
    letter: "B",
    label: "Service layer",
    note: "Clean Architecture microservices with DDD boundaries, gRPC internals, and REST gateways.",
  },
  {
    letter: "C",
    label: "Data layer",
    note: "SQL Server, PostgreSQL, Redis caching, and MongoDB for polyglot persistence.",
  },
];

export const tools = [
  ".NET 8",
  "C#",
  "ASP.NET Core",
  "Microservices",
  "Clean Architecture",
  "DDD",
  "SignalR",
  "gRPC",
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Tailwind CSS",
  "SQL Server",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Azure DevOps",
  "Docker",
  "Kubernetes",
  "CI/CD",
];

export const services = [
  {
    title: "Backend Architecture",
    body: "Scalable .NET microservices, Clean Architecture, DDD, and high-throughput APIs for enterprise platforms.",
    items: [".NET 8", "Microservices", "Clean Architecture", "DDD"],
  },
  {
    title: "Frontend Engineering",
    body: "Modern, responsive web applications using Angular, React, Next.js, TypeScript, and Tailwind CSS.",
    items: ["Angular", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Real-Time Systems",
    body: "SignalR, gRPC, and WebSocket-based dashboards for live telemetry, logistics, and IoT workloads.",
    items: ["SignalR", "gRPC", "IoT", "Real-time"],
  },
  {
    title: "DevOps & Cloud",
    body: "Azure DevOps pipelines, Docker, Kubernetes, and CI/CD automation for reliable delivery.",
    items: ["Azure DevOps", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const stats = [
  { value: "4+", label: "Years experience" },
  { value: "300%", label: "Throughput optimized" },
  { value: "1,000+", label: "IoT endpoints managed" },
  { value: "100%", label: "Production-ready delivery" },
];
