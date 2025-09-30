import { Registry } from "shadcn/schema";

export const css: Registry["items"] = [
  {
    name: "spinner-css",
    type: "registry:ui",
    title: "Spinner CSS",
    description: "A spinner css file",
    files: [
      {
        path: "src/registry/css/spinkit.css",
        type: "registry:ui",
        target: "styles/spinkit.css",
      },
    ],
    css: {
      '@import "@/styles/spinkit.css";': {},
    },
  },
];
