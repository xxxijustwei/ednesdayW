export const THEMES = [
    {
        name: "Default",
        value: "default",
        activeColor: {
            light: "0.205 0 0",
            dark: "0.922 0 0",
        },
    },
    {
        name: "Blue",
        value: "blue",
        activeColor: {
            light: "0.6 0.18 255",
            dark: "0.65 0.17 255",
        },
    },
];

export type Theme = (typeof THEMES)[number];
