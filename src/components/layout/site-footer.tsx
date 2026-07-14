import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl leading-none tracking-tight">
              Kai <span className="italic text-accent">Winters</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Photographer & director. Available worldwide for commercial,
              editorial, and personal commissions.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center border-b border-border pb-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="text-xs uppercase tracking-[0.2em] text-accent">
                Subscribe →
              </button>
            </form>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/portfolio" className="hover:text-accent">Work</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/journal" className="hover:text-accent">Journal</Link></li>
              <li><Link to="/store" className="hover:text-accent">Store</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              <li><a href="mailto:studio@kaiwinters.co" className="hover:text-accent">studio@kaiwinters.co</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-accent"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kai Winters Studio</p>
          <p>Made with light in Jakarta · Reykjavík · Tokyo</p>
        </div>
      </div>
    </footer>
  );
}
