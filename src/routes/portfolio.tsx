import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES, type Category, type Project } from "@/lib/site/site-data";
import { ProjectDetailModal } from "@/components/portfolio/project-detail-modal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Barnes Sagala" },
      {
        name: "description",
        content:
          "Selected photography projects across landscape, portrait, commercial, and wedding assignments.",
      },
      { property: "og:title", content: "Work — Barnes Sagala" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Category | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const items = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
        {/* Header */}
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-8">
          <div>
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">
              Index · {items.length.toString().padStart(2, "0")} projects
            </p>
            <h1 className="mt-6 font-display text-6xl md:text-9xl leading-[0.95]">
              The <span className="italic">work</span>.
            </h1>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="gap-x-8 gap-y-16 grid md:grid-cols-2 mt-16">
          {items.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setSelected(p)}
              className={`group block text-left w-full ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative bg-surface aspect-4/5 overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200 ease-out"
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex justify-center items-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300">
                  <span className="bg-background/90 opacity-0 group-hover:opacity-100 backdrop-blur px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                    View project
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start gap-6 mt-6">
                <div>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                    {p.category} · {p.location} · {p.year}
                  </p>
                  <h2 className="mt-3 font-display text-4xl">{p.title}</h2>
                </div>
                <ArrowUpRight className="mt-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-border border-t text-center">
          <p className="text-muted-foreground text-sm">
            Want to work together on something like this?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 hover:text-accent text-xs uppercase tracking-[0.25em] transition-colors"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Detail modal */}
      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
