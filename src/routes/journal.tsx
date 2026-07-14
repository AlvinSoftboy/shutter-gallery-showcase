import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Kai Winters" },
      {
        name: "description",
        content:
          "Behind-the-scenes essays, gear notes, and honest thoughts on the craft of photography.",
      },
      { property: "og:title", content: "Journal — Kai Winters" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Journal
      </p>
      <h1 className="mt-6 max-w-[16ch] font-display text-6xl leading-[0.95] md:text-9xl">
        Words to go with the <span className="italic">pictures</span>.
      </h1>

      <div className="mt-20 divide-y divide-border">
        {JOURNAL_POSTS.map((p) => (
          <article
            key={p.slug}
            className="group grid gap-8 py-10 md:grid-cols-[1fr_2fr] md:gap-16"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.date} · 6 min read
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                {p.title}
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">{p.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-accent"
              >
                Read entry <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
