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
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-border/60 border-b bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-6 md:px-10 py-4 max-w-[110rem]">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl leading-none tracking-tight">
            Barnes <span className="text-accent italic">Sagala</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{
                exact: false,
              }}
              activeProps={{
                className:
                  "relative text-foreground font-semibold after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-accent",
              }}
              className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-[0.18em] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex hover:bg-foreground px-5 py-2 border border-foreground/80 rounded-full hover:text-primary-foreground text-xs uppercase tracking-[0.2em] transition-colors"
        >
          Book a Shoot
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-border border-t">
          <nav className="flex flex-col px-6 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{
                  exact: false,
                }}
                activeProps={{
                  className: "py-3 text-accent font-semibold uppercase tracking-[0.18em]",
                }}
                className="py-3 text-muted-foreground text-sm uppercase tracking-[0.18em] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
