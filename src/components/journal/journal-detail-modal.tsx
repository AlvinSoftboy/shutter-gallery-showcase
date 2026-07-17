import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Tag, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { JournalPost } from "@/lib/site/site-data";

interface JournalDetailModalProps {
  post: JournalPost | null;
  onClose: () => void;
}

/**
 * Renders simple markdown-like body text:
 * - **bold** → <strong>
 * - Lines starting with ** on its own paragraph → section heading
 * - Blank lines → paragraph breaks
 */
function BodyRenderer({ body }: Readonly<{ body: string }>) {
  const paragraphs = body.split(/\n\n+/);

  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => {
        const trimmed = para.trim();

        // Section heading: **text**
        if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
          return (
            <h3 key={i} className="mt-6 font-display text-xl leading-snug">
              {trimmed.slice(2, -2)}
            </h3>
          );
        }

        // Normal paragraph — handle inline **bold**
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-foreground/80 text-sm leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        );
      })}
    </div>
  );
}

export function JournalDetailModal({ post, onClose }: Readonly<JournalDetailModalProps>) {
  // Close on Escape
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = post ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [post]);

  return (
    <AnimatePresence>
      {post && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-50 fixed inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={post.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="z-50 fixed inset-x-4 md:inset-x-8 top-[4vh] bottom-[4vh] mx-auto max-w-5xl bg-background border border-border shadow-2xl rounded-lg overflow-hidden flex flex-col"
          >
            {/* ── Hero image + close button ── */}
            <div className="relative w-full h-48 md:h-64 shrink-0 overflow-hidden bg-surface">
              <motion.img
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="top-4 right-4 absolute flex justify-center items-center bg-background/80 hover:bg-background backdrop-blur rounded-full w-9 h-9 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title over image */}
              <div className="bottom-0 absolute inset-x-0 px-6 md:px-8 pb-5">
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
                  Journal
                </p>
                <h2 className="mt-1 font-display text-2xl md:text-4xl leading-tight text-foreground">
                  {post.title}
                </h2>
              </div>
            </div>

            {/* ── Body scroll area ── */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Article body */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
                <p className="mb-6 text-muted-foreground text-base leading-relaxed border-b border-border pb-6">
                  {post.excerpt}
                </p>
                <BodyRenderer body={post.body} />
              </div>

              {/* Sidebar meta */}
              <aside className="md:w-56 shrink-0 border-t md:border-t-0 md:border-l border-border px-6 py-6 flex flex-col gap-6">
                {/* Date */}
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    Published
                  </p>
                  <p className="text-sm">{post.date}</p>
                </div>

                {/* Read time */}
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    Read time
                  </p>
                  <p className="text-sm">{post.readTime}</p>
                </div>

                {/* Tags */}
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-3">
                    <Tag className="w-3.5 h-3.5" />
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "px-2.5 py-1 rounded-full border border-border font-mono text-[10px] uppercase tracking-[0.2em]",
                          "text-muted-foreground",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider + CTA */}
                <div className="mt-auto pt-6 border-t border-border space-y-3">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                    Enjoyed this?
                  </p>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors"
                  >
                    Work with me <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
