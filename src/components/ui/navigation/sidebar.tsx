/**
 * Sidebar barrel re-export.
 * All sidebar components are split into focused files under ./sidebar/.
 *
 * Structure:
 *   sidebar/constants.ts        — SIDEBAR_* constants
 *   sidebar/sidebar-provider.tsx — SidebarProvider (context + keyboard shortcut)
 *   sidebar/sidebar-root.tsx    — Sidebar, SidebarTrigger, SidebarRail, SidebarInset
 *   sidebar/sidebar-layout.tsx  — SidebarHeader, SidebarFooter, SidebarContent, SidebarInput, SidebarSeparator
 *   sidebar/sidebar-group.tsx   — SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent
 *   sidebar/sidebar-menu.tsx    — SidebarMenu* components + sidebarMenuButtonVariants
 *   use-sidebar.ts              — useSidebar hook + SidebarContext
 */
export * from "./sidebar/index";
