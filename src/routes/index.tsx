import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  PROJECTS,
  PRESSED_LOGOS,
  JOURNAL_POSTS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kai Winters — Photographer & Director" },
      {
        name: "description",
        content:
          "Cinematic photography for global brands, editorials, and personal stories. Based between Jakarta, Reykjavík, and Tokyo.",
      },
      { property: "og:title", content: "Kai Winters — Photographer & Director" },
      {
        property: "og:description",
        content:
          "Cinematic photography for global brands, editorials, and personal stories.",
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
      <section className="relative -mt-20 h-[100svh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=85"
          alt="Winter fjord at blue hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

        <div className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            Portfolio · 2018 — 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-[18ch] font-display text-[13vw] leading-[0.95] tracking-tight md:text-[9vw]"
          >
            Light is a <span className="italic text-accent">language</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              I'm Kai — a photographer and director making cinematic images for
              brands, editorials, and the people brave enough to stand in
              front of a lens.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
              >
                See the work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-foreground/60 px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / TRUSTED */}
      <section className="border-y border-border bg-surface py-6">
        <div className="flex items-center gap-16 overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 whitespace-nowrap pl-16 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
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
      <section className="mx-auto max-w-[110rem] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Selected 001 — 004
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Recent frames.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent md:inline-flex"
          >
            All work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
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
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {p.category} · {p.year}
                    </p>
                    <p className="mt-2 font-display text-3xl">{p.title}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-[110rem] gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=85"
              alt="Photographer portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              About the studio
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
              A decade of chasing the <span className="italic">right</span> light.
            </h2>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              From Icelandic ice caves to Tokyo rooftops, I build images that
              feel like moments you remember — not moments you see. My studio
              partners with brands and editors who care about craft as much as
              I do.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["12", "Years shooting"],
                ["60+", "Global brands"],
                ["43", "Countries"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-5xl text-accent">{n}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-accent"
            >
              Read the full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Journal
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">Field notes.</h2>
          </div>
          <Link
            to="/journal"
            className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent md:inline-flex"
          >
            All entries →
          </Link>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {JOURNAL_POSTS.map((p) => (
            <article key={p.slug} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.date}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-[110rem] px-6 py-32 text-center md:px-10 md:py-48">
          <h2 className="mx-auto max-w-[16ch] font-display text-6xl leading-[1] md:text-9xl">
            Let's make something <span className="italic text-accent">unforgettable</span>.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
