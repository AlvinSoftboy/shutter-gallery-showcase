import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Camera,
  User,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site/site-data";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: Readonly<ProjectDetailModalProps>) {
  const [activeImage, setActiveImage] = React.useState(0);

  // Reset active image when project changes
  React.useEffect(() => {
    setActiveImage(0);
  }, [project?.slug]);

  // Close on Escape key
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project) {
        setActiveImage((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === "ArrowLeft" && project) {
        setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, project]);

  // Lock body scroll when open
  React.useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const prevImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextImage = () => {
    if (!project) return;
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  return (
    <AnimatePresence>
      {project && (
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

          {/* Modal panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="top-[5vh] bottom-[5vh] z-50 fixed inset-x-4 md:inset-x-8 flex md:flex-row flex-col bg-background shadow-2xl mx-auto border border-border rounded-lg max-w-6xl overflow-hidden"
          >
            {/* ── LEFT: image viewer ── */}
            <div className="relative flex-1 bg-surface min-h-[40vh] md:min-h-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={`${project.title} — photo ${activeImage + 1}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Image counter dots */}
              <div className="bottom-4 left-4 absolute flex items-center gap-2">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View photo ${i + 1}`}
                    className={cn(
                      "rounded-full transition-all duration-200",
                      i === activeImage
                        ? "w-6 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80",
                    )}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous photo"
                    className="top-1/2 left-3 absolute flex justify-center items-center bg-background/70 hover:bg-background backdrop-blur rounded-full w-9 h-9 transition-colors -translate-y-1/2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next photo"
                    className="top-1/2 right-3 absolute flex justify-center items-center bg-background/70 hover:bg-background backdrop-blur rounded-full w-9 h-9 transition-colors -translate-y-1/2"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* ── RIGHT: detail panel ── */}
            <div className="flex flex-col md:w-90 lg:w-105 overflow-y-auto shrink-0">
              {/* Header */}
              <div className="flex justify-between items-start gap-4 px-6 pt-6 pb-4 border-border border-b">
                <div>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
                    {project.category}
                  </p>
                  <h2 className="mt-2 font-display text-3xl leading-tight">{project.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="hover:bg-muted mt-1 p-2 rounded-full transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Meta info */}
              <div className="space-y-3 px-6 py-5 border-border border-b">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-muted-foreground">{project.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                {project.client && (
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-muted-foreground">{project.client}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="px-6 py-5 border-border border-b">
                <p className="mb-3 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                  About this project
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Gear */}
              <div className="px-6 py-5 border-border border-b">
                <p className="flex items-center gap-2 mb-3 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                  <Camera className="w-3.5 h-3.5" />
                  Gear used
                </p>
                <ul className="space-y-2">
                  {project.gear.map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm">
                      <span className="bg-accent rounded-full w-1.5 h-1.5 shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thumbnail strip */}
              {project.images.length > 1 && (
                <div className="px-6 py-5 border-border border-b">
                  <p className="mb-3 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                    Photos ({project.images.length})
                  </p>
                  <div className="flex gap-2">
                    {project.images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImage(i)}
                        aria-label={`View photo ${i + 1}`}
                        className={cn(
                          "relative flex-1 rounded aspect-square overflow-hidden transition-all duration-200",
                          i === activeImage
                            ? "ring-2 ring-accent ring-offset-1 ring-offset-background"
                            : "opacity-60 hover:opacity-100",
                        )}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA footer */}
              <div className="flex items-center gap-3 mt-auto px-6 py-5">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  onClick={onClose}
                  className="inline-flex flex-1 justify-center items-center gap-2 bg-accent hover:opacity-90 px-4 py-3 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] transition-opacity text-accent-foreground"
                >
                  Full case study <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex justify-center items-center gap-2 px-4 py-3 border border-border hover:border-accent rounded-full font-mono text-[10px] uppercase tracking-[0.25em] transition-colors"
                >
                  Book similar
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
