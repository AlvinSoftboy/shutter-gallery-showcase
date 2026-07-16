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
    <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
      <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Journal</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-6xl md:text-9xl leading-[0.95]">
        Words to go with the <span className="italic">pictures</span>.
      </h1>

      <div className="mt-20 divide-y divide-border">
        {JOURNAL_POSTS.map((p) => (
          <article key={p.slug} className="group gap-8 md:gap-16 grid md:grid-cols-[1fr_2fr] py-10">
            <div className="bg-surface aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                {p.date} · 6 min read
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">{p.title}</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">{p.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 w-fit hover:text-accent text-xs uppercase tracking-[0.2em]"
              >
                Read entry <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
