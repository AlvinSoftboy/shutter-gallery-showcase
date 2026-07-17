import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/site/site-data";

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
    <div className="mx-auto px-6 py-32 max-w-2xl text-center">
      <h1 className="font-display text-6xl">Project not found</h1>
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 mt-8 text-accent text-xs uppercase tracking-[0.2em]"
      >
        <ArrowLeft className="w-4 h-4" /> Back to work
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
      <div className="relative -mt-20 w-full h-[100svh] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="z-10 relative flex flex-col justify-end mx-auto px-6 md:px-10 pb-16 md:pb-24 max-w-[110rem] h-full">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 mb-8 w-fit text-muted-foreground hover:text-accent text-xs uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-6xl md:text-9xl leading-[0.95]">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Meta */}
      <section className="mx-auto px-6 md:px-10 py-24 max-w-[110rem]">
        <div className="gap-10 grid md:grid-cols-[1fr_2fr]">
          <div className="self-start gap-8 grid grid-cols-2 md:grid-cols-1 pl-8 border-border border-l">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ...(project.client ? [["Client", project.client] as const] : []),
              ["Gear", project.gear.join(" · ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                  {label}
                </p>
                <p className="mt-2 text-base">{value}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-3xl md:text-5xl leading-[1.15]">{project.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-8 mx-auto px-6 md:px-10 pb-24 max-w-[110rem]">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Next */}
      <section className="border-border border-t">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group block relative h-[60vh] overflow-hidden"
        >
          <img
            src={next.cover}
            alt=""
            className="absolute inset-0 opacity-60 group-hover:opacity-80 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Next project</p>
            <p className="mt-4 font-display text-5xl md:text-8xl">{next.title}</p>
            <p className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.2em]">
              Continue <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </Link>
      </section>
    </article>
  );
}
