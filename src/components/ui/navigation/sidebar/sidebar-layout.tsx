import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/forms/input";
import { Separator } from "@/components/ui/display/separator";

// ─── SidebarHeader ───────────────────────────────────────────────────────────

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  ),
);
SidebarHeader.displayName = "SidebarHeader";

// ─── SidebarFooter ───────────────────────────────────────────────────────────

export const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  ),
);
SidebarFooter.displayName = "SidebarFooter";

// ─── SidebarContent ──────────────────────────────────────────────────────────

export const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex flex-col flex-1 gap-2 min-h-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarContent.displayName = "SidebarContent";

// ─── SidebarInput ────────────────────────────────────────────────────────────

export const SidebarInput = React.forwardRef<
  React.ComponentRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    data-sidebar="input"
    className={cn(
      "bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring w-full h-8",
      className,
    )}
    {...props}
  />
));
SidebarInput.displayName = "SidebarInput";

// ─── SidebarSeparator ────────────────────────────────────────────────────────

export const SidebarSeparator = React.forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    data-sidebar="separator"
    className={cn("mx-2 bg-sidebar-border w-auto", className)}
    {...props}
  />
));
SidebarSeparator.displayName = "SidebarSeparator";
