import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS, PRESSED_LOGOS, JOURNAL_POSTS } from "@/lib/site/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barnes Sagala — Photographer for Fun" },
      {
        name: "description",
        content:
          "Cinematic photography for global brands, editorials, and personal stories. Based between Jakarta, Reykjavík, and Tokyo.",
      },
      { property: "og:title", content: "Kai Winters — Photographer & Director" },
      {
        property: "og:description",
        content: "Cinematic photography for global brands, editorials, and personal stories.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PROJECTS.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-20 w-full h-[100svh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=85"
          alt="Winter fjord at blue hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/30 to-background" />

        <div className="z-10 relative flex flex-col justify-end mx-auto px-6 md:px-10 pb-16 md:pb-24 max-w-[110rem] h-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-accent text-xs uppercase tracking-[0.3em]"
          >
            Portfolio · 2018 — 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-[18ch] font-display text-[13vw] md:text-[9vw] leading-[0.95] tracking-tight"
          >
            Light is a <span className="text-accent italic">language</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex md:flex-row flex-col justify-between items-start md:items-end gap-6 mt-8"
          >
            <p className="max-w-md text-muted-foreground text-base md:text-lg">
              I'm Kai — a photographer and director making cinematic images for brands, editorials,
              and the people brave enough to stand in front of a lens.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 rounded-full text-primary-foreground text-xs uppercase tracking-[0.2em]"
              >
                See the work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-foreground/60 rounded-full text-xs uppercase tracking-[0.2em]"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / TRUSTED */}
      <section className="bg-surface py-6 border-border border-y">
        <div className="flex items-center gap-16 overflow-hidden">
          <div className="flex items-center gap-16 pl-16 font-mono text-muted-foreground text-xs uppercase tracking-[0.3em] whitespace-nowrap animate-[marquee_40s_linear_infinite] shrink-0">
            {[...PRESSED_LOGOS, ...PRESSED_LOGOS].map((l, i) => (
              <span key={i} className="flex items-center gap-16">
                {l}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>

      {/* FEATURED WORK */}
      <section className="mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[110rem]">
        <div className="flex justify-between items-end gap-6">
          <div>
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">
              Selected 001 — 004
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Recent frames.</h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-accent text-xs uppercase tracking-[0.2em]"
          >
            All work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="gap-8 grid md:grid-cols-12 mt-16">
          {featured.map((p, i) => {
            const layouts = [
              "md:col-span-7 md:row-span-2 aspect-[4/5]",
              "md:col-span-5 aspect-[4/3]",
              "md:col-span-5 aspect-[3/4]",
              "md:col-span-7 aspect-[16/10]",
            ];
            return (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className={`group relative block overflow-hidden bg-surface ${layouts[i]}`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="bottom-0 absolute inset-x-0 flex justify-between items-end p-6">
                  <div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
                      {p.category} · {p.year}
                    </p>
                    <p className="mt-2 font-display text-3xl">{p.title}</p>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 w-5 h-5 transition-all translate-x-2 group-hover:translate-x-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-surface border-border border-y">
        <div className="gap-16 grid md:grid-cols-2 mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[110rem]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=85"
              alt="Photographer portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">
              About the studio
            </p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
              A decade of chasing the <span className="italic">right</span> light.
            </h2>
            <p className="mt-8 max-w-lg text-muted-foreground text-lg">
              From Icelandic ice caves to Tokyo rooftops, I build images that feel like moments you
              remember — not moments you see. My studio partners with brands and editors who care
              about craft as much as I do.
            </p>
            <div className="gap-6 grid grid-cols-3 mt-10 pt-8 border-border border-t">
              {[
                ["12", "Years shooting"],
                ["60+", "Global brands"],
                ["43", "Countries"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-accent text-5xl">{n}</p>
                  <p className="mt-2 text-muted-foreground text-xs uppercase tracking-[0.2em]">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 w-fit hover:text-accent text-xs uppercase tracking-[0.2em]"
            >
              Read the full story <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="mx-auto px-6 md:px-10 py-24 md:py-32 max-w-[110rem]">
        <div className="flex justify-between items-end">
          <div>
            <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Journal</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Field notes.</h2>
          </div>
          <Link
            to="/journal"
            className="hidden md:inline-flex text-muted-foreground hover:text-accent text-xs uppercase tracking-[0.2em]"
          >
            All entries →
          </Link>
        </div>
        <div className="gap-10 grid md:grid-cols-3 mt-16">
          {JOURNAL_POSTS.map((p) => (
            <article key={p.slug} className="group">
              <div className="bg-surface aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <p className="mt-6 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                {p.date}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-border border-t overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=85"
          alt=""
          className="absolute inset-0 opacity-40 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto px-6 md:px-10 py-32 md:py-48 max-w-[110rem] text-center">
          <h2 className="mx-auto max-w-[16ch] font-display text-6xl md:text-9xl leading-[1]">
            Let's make something <span className="text-accent italic">unforgettable</span>.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-foreground mt-12 px-8 py-4 rounded-full text-primary-foreground text-xs uppercase tracking-[0.25em]"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
