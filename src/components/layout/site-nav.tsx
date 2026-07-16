import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/store", label: "Store" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-6 md:px-10 py-4 max-w-[110rem]">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl leading-none tracking-tight">
            Kai <span className="text-accent italic">Winters</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-accent" }}
              className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-[0.18em] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex hover:bg-foreground px-5 py-2 border border-foreground/80 rounded-full hover:text-primary-foreground text-xs uppercase tracking-[0.2em] transition-colors"
        >
          Book a shoot
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden bg-background border-border border-t">
          <nav className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-muted-foreground text-sm uppercase tracking-[0.18em]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
