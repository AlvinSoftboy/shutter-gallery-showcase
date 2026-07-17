import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STORE_ITEMS } from "@/lib/site/site-data";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Presets, LUTs & Courses | Kai Winters" },
      {
        name: "description",
        content: "Signature presets, cinematic LUTs, ebooks, and masterclasses from Kai Winters.",
      },
      { property: "og:title", content: "Store — Barnes Sagala" },
      { property: "og:url", content: "/store" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
      <div className="flex md:flex-row flex-col justify-between md:items-end gap-6">
        <div>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Store</p>
          <h1 className="mt-6 font-display text-6xl md:text-9xl leading-[0.95]">
            Tools from the <span className="italic">studio</span>.
          </h1>
        </div>
        <p className="max-w-sm text-muted-foreground text-sm">
          The same presets, LUTs, and workflows I use on paid client work. Battle-tested, honestly
          priced.
        </p>
      </div>

      <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4 mt-20">
        {STORE_ITEMS.map((item) => (
          <article key={item.id} className="group flex flex-col">
            <div className="relative bg-surface aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1200"
              />
              <span className="top-4 left-4 absolute bg-background/80 backdrop-blur px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.3em]">
                {item.tag}
              </span>
            </div>
            <div className="flex justify-between items-start gap-4 mt-5">
              <div>
                <h2 className="font-display text-2xl leading-tight">{item.name}</h2>
                <p className="mt-1 text-accent text-sm">{item.price}</p>
              </div>
              <button
                type="button"
                className="mt-1 p-2 border border-border group-hover:border-accent rounded-full transition-colors"
                aria-label={`Add ${item.name} to cart`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-surface mt-32 p-10 md:p-16 border border-border">
        <div className="gap-10 grid md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Bundle</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">The complete studio pack.</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Every preset, LUT, and ebook I've released. Lifetime updates. One payment. No monthly
              nonsense.
            </p>
          </div>
          <div className="flex flex-col justify-end items-start">
            <p className="font-display text-accent text-6xl">$199</p>
            <p className="mt-1 text-muted-foreground text-xs line-through uppercase tracking-[0.2em]">
              $284 individually
            </p>
            <button className="inline-flex items-center gap-2 bg-foreground mt-6 px-6 py-3 rounded-full text-primary-foreground text-xs uppercase tracking-[0.2em]">
              Get the bundle <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
