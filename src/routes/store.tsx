import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STORE_ITEMS } from "@/lib/site-data";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Presets, LUTs & Courses | Kai Winters" },
      {
        name: "description",
        content:
          "Signature presets, cinematic LUTs, ebooks, and masterclasses from Kai Winters.",
      },
      { property: "og:title", content: "Store — Kai Winters" },
      { property: "og:url", content: "/store" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Store
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-9xl">
            Tools from the <span className="italic">studio</span>.
          </h1>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          The same presets, LUTs, and workflows I use on paid client work.
          Battle-tested, honestly priced.
        </p>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STORE_ITEMS.map((item) => (
          <article key={item.id} className="group flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-surface">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] backdrop-blur">
                {item.tag}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl leading-tight">{item.name}</h2>
                <p className="mt-1 text-sm text-accent">{item.price}</p>
              </div>
              <button
                type="button"
                className="mt-1 rounded-full border border-border p-2 transition-colors group-hover:border-accent"
                aria-label={`Add ${item.name} to cart`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-32 border border-border bg-surface p-10 md:p-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Bundle
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              The complete studio pack.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Every preset, LUT, and ebook I've released. Lifetime updates.
              One payment. No monthly nonsense.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end">
            <p className="font-display text-6xl text-accent">$199</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground line-through">
              $284 individually
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground">
              Get the bundle <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
