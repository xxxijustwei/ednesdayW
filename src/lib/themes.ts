export const THEMES = [
    {
        name: "Default",
        value: "default",
    },
    {
        name: "Blue",
        value: "blue",
        activeColor: {
            light: "221.2 83.2% 53.3%",
            dark: "217.2 91.2% 59.8%",
        },
    },
];

export type Theme = (typeof THEMES)[number];
