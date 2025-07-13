import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const colorInputExamples: Registry["items"] = [
  {
    name: "color-input-variant-demo",
    type: "registry:component",
    title: "Color Input Variant Demo",
    description: "A demo of the color input variant",
    registryDependencies: [`${siteConfig.registryUrl}/color-input.json`],
    files: [
      {
        path: "src/registry/example/color-input/variant.tsx",
        type: "registry:component",
        target: "components/color-input-variant-demo.tsx",
      },
    ],
  },
];
