import type { Project } from "@/data/projects";

export function ProjectSlide({ project }: { project: Project }) {
  const imageFirst = project.layout === "image-left";

  return (
    <article className="slide-card lift dot-grid overflow-hidden px-5 py-6 hover:shadow-[0_32px_70px_-30px_oklch(0.28_0.05_265_/_0.4)] sm:px-8 sm:py-9">
      <div
        className={`grid items-center gap-7 lg:grid-cols-[1.35fr_0.65fr] ${imageFirst ? "" : "lg:[&>*:first-child]:order-2"}`}
      >
        <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1400}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:py-2">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-extrabold text-brand-orange">
              {project.index}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {project.year}
            </span>
          </div>

          {project.quote && (
            <p className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">{project.quote}</p>
          )}

          <h3
            className={`font-display text-2xl leading-tight font-extrabold sm:text-[1.7rem] ${project.quote ? "mt-3 text-lg text-muted-foreground sm:text-xl" : "mt-5"}`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-semibold tracking-wide text-brand-teal uppercase">
            {project.subtitle}
          </p>

          <dl className="mt-7 space-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Client:</dt>
              <dd className="font-bold">{project.client}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Role:</dt>
              <dd className="font-bold text-brand-orange">{project.role}</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.palette.map((color) => (
              <span
                key={color}
                title={color}
                className="size-7 rounded-full ring-1 ring-black/5"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {project.paletteNote && (
        <div className="mt-7">
          <div className="flex h-9 overflow-hidden rounded-lg">
            {project.palette.map((color) => (
              <span key={`bar-${color}`} className="flex-1" style={{ backgroundColor: color }} />
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {project.paletteNote}
          </p>
        </div>
      )}
    </article>
  );
}
