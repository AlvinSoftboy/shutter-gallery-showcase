import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_POSTS, type JournalPost } from "@/lib/site/site-data";
import { JournalDetailModal } from "@/features/journal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Barnes Sagala" },
      {
        name: "description",
        content:
          "Behind-the-scenes essays, gear notes, and honest thoughts on the craft of photography.",
      },
      { property: "og:title", content: "Journal — Barnes Sagala" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [selected, setSelected] = useState<JournalPost | null>(null);

  return (
    <>
      <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
        <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Journal</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-6xl md:text-9xl leading-[0.95]">
          Words to go with the <span className="italic">pictures</span>.
        </h1>

        <div className="mt-20 divide-y divide-border">
          {JOURNAL_POSTS.map((p) => (
            <article
              key={p.slug}
              className="group gap-8 md:gap-16 grid md:grid-cols-[1fr_2fr] py-10"
            >
              {/* Clickable image */}
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`Read ${p.title}`}
                className="relative bg-surface aspect-4/3 overflow-hidden text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200"
                />
                {/* hover hint */}
                <div className="absolute inset-0 flex justify-center items-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300">
                  <span className="bg-background/90 opacity-0 group-hover:opacity-100 backdrop-blur px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                    Read entry
                  </span>
                </div>
              </button>

              {/* Text content */}
              <div className="flex flex-col justify-center">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                  {p.date} · {p.readTime}
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">{p.title}</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">{p.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-border rounded-full font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read entry button */}
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-2 mt-6 w-fit hover:text-accent text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  Read entry <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <JournalDetailModal post={selected} onClose={() => setSelected(null)} />
    </>
  );
}
