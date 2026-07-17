import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site/site-data";

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
    <div className="mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
      <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Services</p>
      <h1 className="mt-6 max-w-[14ch] font-display text-6xl md:text-9xl leading-[0.95]">
        Ways we can <span className="italic">work together</span>.
      </h1>

      <div className="gap-6 grid md:grid-cols-3 mt-20">
        {SERVICES.map((s, i) => (
          <div
            key={s.name}
            className="flex flex-col justify-between bg-surface p-8 border border-border hover:border-accent transition-colors"
          >
            <div>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                0{i + 1} · Package
              </p>
              <h2 className="mt-4 font-display text-4xl">{s.name}</h2>
              <p className="mt-2 text-accent text-sm">{s.price}</p>
              <ul className="space-y-3 mt-8">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 w-4 h-4 text-accent shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 hover:text-accent text-xs uppercase tracking-[0.2em]"
            >
              Request quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <section className="gap-16 grid md:grid-cols-2 mt-32">
        <div>
          <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Process</p>
          <h2 className="mt-4 font-display text-5xl">From brief to delivery.</h2>
        </div>
        <ol className="space-y-8">
          {[
            ["Discovery", "We talk through vision, timeline, and budget — no gatekeeping."],
            ["Pre-production", "Mood, locations, crew, and gear are locked in a shared deck."],
            ["Shoot day", "I direct on set. You'll see selects live if you want to."],
            [
              "Delivery",
              "Color-graded gallery delivered within 72 hours for stills, 10 days for hybrid.",
            ],
          ].map(([title, body], i) => (
            <li key={title} className="gap-6 grid grid-cols-[auto_1fr] pb-6 border-border border-b">
              <span className="font-mono text-accent text-sm">0{i + 1}</span>
              <div>
                <p className="font-display text-2xl">{title}</p>
                <p className="mt-2 text-muted-foreground text-sm">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
