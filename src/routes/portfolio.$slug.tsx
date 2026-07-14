import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Kai Winters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Kai Winters` },
        { name: "description", content: project.description },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.description },
        { property: "og:image", content: project.cover },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${project.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-6xl">Project not found</h1>
      <Link
        to="/portfolio"
        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent"
      >
        <ArrowLeft className="h-4 w-4" /> Back to work
      </Link>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article>
      {/* Cover */}
      <div className="relative -mt-20 h-[100svh] w-full overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <Link
            to="/portfolio"
            className="mb-8 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-6xl leading-[0.95] md:text-9xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Meta */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="grid grid-cols-2 gap-8 self-start border-l border-border pl-8 md:grid-cols-1">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ...(project.client ? [["Client", project.client] as const] : []),
              ["Gear", project.gear.join(" · ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-2 text-base">{value}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-3xl leading-[1.15] md:text-5xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[110rem] space-y-8 px-6 pb-24 md:px-10">
        {project.images.map((src: string, i: number) => (
          <div
            key={src}
            className={`overflow-hidden bg-surface ${
              i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/5] md:mx-auto md:w-3/4"
            }`}
          >
            <img
              src={src}
              alt={`${project.title} — frame ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group relative block h-[60vh] overflow-hidden"
        >
          <img
            src={next.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Next project
            </p>
            <p className="mt-4 font-display text-5xl md:text-8xl">
              {next.title}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
              Continue <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </Link>
      </section>
    </article>
  );
}
