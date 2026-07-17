import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/error/lovable-error-reporting";
import { SiteNav } from "../components/layout/navigation/site-nav";
import { SiteFooter } from "../components/layout/footer/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex justify-center items-center px-4 min-h-screen">
      <div className="max-w-md text-center">
        <p className="font-mono text-accent text-xs uppercase tracking-[0.3em]">Error 404</p>
        <h1 className="mt-4 font-display text-7xl">Frame not found.</h1>
        <p className="mt-4 text-muted-foreground text-sm">
          The image you were looking for is out of focus. Let's take you somewhere sharper.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex justify-center items-center hover:bg-foreground px-6 py-3 border border-foreground rounded-full hover:text-primary-foreground text-xs uppercase tracking-[0.2em] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: Readonly<{ error: Error; reset: () => void }>) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex justify-center items-center px-4 min-h-screen">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Something didn't develop.</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          The page failed to load. Try again or head home.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-accent px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-border rounded-full text-xs uppercase tracking-[0.2em]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Barnes Sagala — Photographer & Director" },
      {
        name: "description",
        content:
          "Portfolio of Barnes Sagala — commercial, editorial, and landscape photographer working worldwide.",
      },
      { name: "author", content: "Barnes Sagala" },
      { property: "og:site_name", content: "Barnes Sagala Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col bg-background min-h-screen text-foreground">
        <SiteNav />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
