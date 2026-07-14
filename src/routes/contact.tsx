import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kai Winters" },
      {
        name: "description",
        content:
          "Start a project, request a quote, or say hello. Kai Winters photography studio.",
      },
      { property: "og:title", content: "Contact — Kai Winters" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-[110rem] gap-16 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-24">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Contact
        </p>
        <h1 className="mt-6 max-w-[14ch] font-display text-6xl leading-[0.95] md:text-9xl">
          Say <span className="italic">hello</span>.
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted-foreground">
          For commissions, campaigns, or press — the fastest path is the form.
          I read every note myself and reply within two working days.
        </p>

        <div className="mt-12 space-y-4 border-t border-border pt-8">
          <a href="mailto:studio@kaiwinters.co" className="flex items-center gap-3 hover:text-accent">
            <Mail className="h-4 w-4 text-accent" />
            <span>studio@kaiwinters.co</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-accent">
            <Instagram className="h-4 w-4 text-accent" />
            <span>@kaiwinters</span>
          </a>
          <p className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Jakarta · Reykjavík · Tokyo</span>
          </p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-6 border border-border bg-surface p-8 md:p-12"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Project inquiry
        </p>
        <Field label="Your name" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Company (optional)" name="company" />
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Project type
          </label>
          <select className="mt-2 w-full border-b border-border bg-transparent py-3 focus:border-accent focus:outline-none">
            {["Commercial / Campaign", "Editorial", "Portrait", "Wedding", "Other"].map(
              (o) => (
                <option key={o} className="bg-background">
                  {o}
                </option>
              ),
            )}
          </select>
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Tell me about it
          </label>
          <textarea
            rows={5}
            className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 focus:border-accent focus:outline-none"
            placeholder="Timeline, budget range, references..."
          />
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground"
        >
          {sent ? "Message sent — talk soon" : "Send message"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full border-b border-border bg-transparent py-3 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
