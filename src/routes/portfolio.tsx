import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES, type Category } from "@/lib/site/site-data";

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
  const items = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
      <div className="flex md:flex-row flex-col justify-between md:items-end gap-8">
        <div>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">
            Index · {items.length.toString().padStart(2, "0")} projects
          </p>
          <h1 className="mt-6 font-display text-6xl md:text-9xl leading-[0.95]">
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

      <div className="gap-x-8 gap-y-16 grid md:grid-cols-2 mt-16">
        {items.map((p, i) => (
          <Link
            key={p.slug}
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div className="relative bg-surface aspect-[4/5] overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
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
          </Link>
        ))}
      </div>
    </div>
  );
}
