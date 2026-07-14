import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES, type Category } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Kai Winters" },
      {
        name: "description",
        content:
          "Selected photography projects across landscape, portrait, commercial, and wedding assignments.",
      },
      { property: "og:title", content: "Work — Kai Winters" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Category | "all">("all");
  const items =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Index · {items.length.toString().padStart(2, "0")} projects
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-9xl">
            The <span className="italic">work</span>.
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
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

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {items.map((p, i) => (
          <Link
            key={p.slug}
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {p.category} · {p.location} · {p.year}
                </p>
                <h2 className="mt-3 font-display text-4xl">{p.title}</h2>
              </div>
              <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
