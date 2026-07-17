import { createFileRoute } from "@tanstack/react-router";
import { PRESSED_LOGOS } from "@/lib/site/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Barnes Sagala" },
      {
        name: "description",
        content:
          "Photographer and director Kai Winters — a decade of cinematic image-making for brands, editors, and personal commissions.",
      },
      { property: "og:title", content: "About — Barnes Sagala" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="gap-12 grid md:grid-cols-[1.2fr_1fr] mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
        <div>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">About</p>
          <h1 className="mt-6 font-display text-6xl md:text-9xl leading-[0.95]">
            I chase <span className="italic">weather</span>, deadlines, and the occasional feeling.
          </h1>
        </div>
        <div className="self-end">
          <p className="text-foreground/80 text-lg leading-relaxed">
            I started with a borrowed film camera in 2013 and haven't put one down since. Twelve
            years and forty-three countries later, I run a small studio between Jakarta, Reykjavík,
            and Tokyo — telling visual stories for people who take craft seriously.
          </p>
        </div>
      </section>

      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2400&q=85"
          alt="Barnes Sagala work"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="gap-16 grid md:grid-cols-2 mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[110rem]">
        <div>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Approach</p>
          <h2 className="mt-4 font-display text-5xl">Cinematic. Considered. Fast.</h2>
        </div>
        <div className="space-y-8 text-foreground/80 text-lg leading-relaxed">
          <p>
            My work sits at the intersection of documentary and advertising — real moments shaped by
            intentional light. I direct my own shoots and edit every frame that leaves the studio.
          </p>
          <p>
            I'm happiest when a project has a clear point of view and enough trust to let me push it
            further. If you're looking for images that feel like something, we'll probably get
            along.
          </p>
        </div>
      </section>

      <section className="bg-surface border-border border-y">
        <div className="mx-auto px-6 md:px-10 py-16 max-w-[110rem]">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.3em]">
            Selected clients & press
          </p>
          <div className="flex flex-wrap gap-x-16 gap-y-6 mt-8 font-display text-3xl md:text-4xl">
            {PRESSED_LOGOS.map((l) => (
              <span key={l} className="opacity-80 hover:opacity-100 hover:text-accent transition">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[110rem]">
        <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Recognition</p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">Selected awards.</h2>
        <ul className="mt-12 divide-y divide-border">
          {[
            ["Sony World Photography Awards", "Shortlist — Landscape", "2025"],
            ["Communication Arts Photo Annual", "Winner — Advertising", "2024"],
            ["IPA International Photography Awards", "Gold — Editorial", "2023"],
            ["ADC 102nd Annual Awards", "Silver Cube — Campaign", "2023"],
            ["Hasselblad Masters", "Nominee", "2022"],
          ].map(([name, cat, year]) => (
            <li
              key={name}
              className="items-baseline gap-4 grid grid-cols-[1fr_auto] md:grid-cols-[2fr_2fr_auto] py-6"
            >
              <span className="font-display text-2xl md:text-3xl">{name}</span>
              <span className="hidden md:block text-muted-foreground text-sm">{cat}</span>
              <span className="font-mono text-accent text-sm">{year}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
