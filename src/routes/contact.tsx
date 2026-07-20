import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/display/brand-icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Barnes Sagala" },
      {
        name: "description",
        content: "Start a project, request a quote, or say hello.Barnes Sagala photography studio.",
      },
      { property: "og:title", content: "Contact — Barnes Sagala" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="gap-16 grid md:grid-cols-[1.2fr_1fr] mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[110rem]">
      <div>
        <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Contact</p>
        <h1 className="mt-6 max-w-[14ch] font-display text-6xl md:text-9xl leading-[0.95]">
          Hello <span className="italic">There</span>.
        </h1>
        <p className="mt-8 max-w-md text-muted-foreground text-lg">
          For commissions, campaigns, or press — the fastest path is the form. I read every note
          myself and reply within two working days.
        </p>

        <div className="space-y-4 mt-12 pt-8 border-border border-t">
          <a
            href="mailto:barnessagala17@gmail.com"
            target="_blank"
            className="flex items-center gap-3 hover:text-accent"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>barnessagala17@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/barnessagala/"
            target="_blank"
            className="flex items-center gap-3 hover:text-accent"
          >
            <InstagramIcon className="w-4 h-4 text-accent" />
            <span>Barnes Sagala</span>
          </a>
          <p className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Jakarta</span>
          </p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-6 bg-surface p-8 md:p-12 border border-border"
      >
        <p className="font-semi-bold font-mono text-[12px] text-muted-foreground text-center uppercase tracking-[0.3em]">
          Project inquiry
        </p>
        <Field label="Your name" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Company (optional)" name="company" />
        <div>
          <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
            Project type
          </label>
          <select className="bg-transparent mt-2 py-3 border-border focus:border-accent border-b focus:outline-none w-full">
            {["Commercial / Campaign", "Editorial", "Portrait", "Wedding", "Other"].map((o) => (
              <option key={o} className="bg-background">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
            Tell me about it
          </label>
          <textarea
            rows={5}
            className="bg-transparent mt-2 py-3 border-border focus:border-accent border-b focus:outline-none w-full resize-none"
            placeholder="Timeline, budget range, references..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center items-center gap-2 bg-accent mt-4 px-6 py-4 rounded-full text-xs uppercase tracking-[0.25em] text-accent-foreground"
        >
          {sent ? "Message sent — talk soon" : "Send message"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="bg-transparent mt-2 py-3 border-border focus:border-accent border-b focus:outline-none w-full"
      />
    </div>
  );
}
