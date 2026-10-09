import type { ThemeConfig } from "@/types/theme";

// Batomon Showdown visual configuration — dark creature-battler board feel.
export const theme: ThemeConfig = {
  mode: "dark",
  navigation: "wiki-sidebar",
  tokens: {
    pageBg: "#0c0f17",
    surface1: "#161b2a",
    surface2: "#1f2638",
    surface3: "#2a3247",
    surfaceInverse: "#f6f7fb",
    textPrimary: "#f0f3fa",
    textMuted: "#9aa3bc",
    textInverse: "#0c0f17",
    textOnAccentPrimary: "#06121a",
    textLink: "#7dd3fc",
    focusRing: "#22d3ee",
    line: "#2a3247",
    lineStrong: "#3d4a66",
    accentPrimary: "#22d3ee",
    accentSecondary: "#0891b2",
    accentBright: "#fbbf24",
    statusConfirmed: "#22d3ee",
    statusCaution: "#fbbf24",
    statusUnknown: "#94a3b8",
  },
  typography: {
    headingFamily:
      "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    bodyFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    headingWeight: 900,
  },
  shape: {
    radius: "8px",
    borderWidth: "1px",
    shadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "guide-portal",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "grid", intensity: "low" },
};