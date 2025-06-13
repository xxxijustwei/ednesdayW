export const THEMES = [
  {
    name: "default",
    label: "Default",
    activeColor: {
      light: "0.205 0 0",
      dark: "0.922 0 0",
    },
  },
  {
    name: "blue",
    label: "Blue",
    activeColor: {
      light: "0.6 0.18 255",
      dark: "0.65 0.17 255",
    },
  },
  {
    name: "claude",
    label: "Claude",
    activeColor: {
      light: "0.56 0.13 43.00",
      dark: "0.56 0.13 43.00",
    },
  },
] as const;

export type Theme = (typeof THEMES)[number];
