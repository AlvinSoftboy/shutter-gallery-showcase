import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Booking — Kai Winters" },
      {
        name: "description",
        content:
          "Commercial, editorial, portrait, and wedding photography packages. Available worldwide.",
      },
      { property: "og:title", content: "Services & Booking — Kai Winters" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Services
      </p>
      <h1 className="mt-6 max-w-[14ch] font-display text-6xl leading-[0.95] md:text-9xl">
        Ways we can <span className="italic">work together</span>.
      </h1>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            key={s.name}
            className="flex flex-col justify-between border border-border bg-surface p-8 transition-colors hover:border-accent"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1} · Package
              </p>
              <h2 className="mt-4 font-display text-4xl">{s.name}</h2>
              <p className="mt-2 text-sm text-accent">{s.price}</p>
              <ul className="mt-8 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-accent"
            >
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <section className="mt-32 grid gap-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Process
          </p>
          <h2 className="mt-4 font-display text-5xl">From brief to delivery.</h2>
        </div>
        <ol className="space-y-8">
          {[
            ["Discovery", "We talk through vision, timeline, and budget — no gatekeeping."],
            ["Pre-production", "Mood, locations, crew, and gear are locked in a shared deck."],
            ["Shoot day", "I direct on set. You'll see selects live if you want to."],
            ["Delivery", "Color-graded gallery delivered within 72 hours for stills, 10 days for hybrid."],
          ].map(([title, body], i) => (
            <li key={title} className="grid grid-cols-[auto_1fr] gap-6 border-b border-border pb-6">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <div>
                <p className="font-display text-2xl">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
