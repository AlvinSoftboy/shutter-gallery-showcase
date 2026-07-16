import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter   } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface border-border border-t">
      <div className="mx-auto px-6 md:px-10 py-16 max-w-[110rem]">
        <div className="gap-12 grid md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl leading-none tracking-tight">
              Kai <span className="text-accent italic">Winters</span>
            </p>
            <p className="mt-4 max-w-sm text-muted-foreground text-sm">
              Photographer & director. Available worldwide for commercial, editorial, and personal
              commissions.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center mt-8 pb-2 border-border border-b"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 focus:outline-none placeholder:text-muted-foreground text-sm"
              />
              <button className="text-accent text-xs uppercase tracking-[0.2em]">
                Subscribe →
              </button>
            </form>
          </div>

          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Explore</p>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-accent">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-accent">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-accent">
                  Store
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Studio</p>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:studio@kaiwinters.co" className="hover:text-accent">
                  studio@kaiwinters.co
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Follow</p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="hover:text-accent">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-accent">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4 mt-16 pt-8 border-border border-t text-muted-foreground text-xs uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Kai Winters Studio</p>
          <p>Made with light in Jakarta · Reykjavík · Tokyo</p>
        </div>
      </div>
    </footer>
  );
}
