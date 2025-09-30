import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const capWidgetExamples: Registry["items"] = [
  {
    name: "cap-widget-demo",
    type: "registry:component",
    title: "Cap Widget Demo",
    description: "A demo of the cap widget",
    registryDependencies: [`${siteConfig.registryUrl}/cap-widget.json`],
    files: [
      {
        path: "src/registry/example/cap-widget/demo.tsx",
        type: "registry:component",
        target: "components/cap-widget-demo.tsx",
      },
    ],
  },
  {
    name: "cap-widget-locale-demo",
    type: "registry:component",
    title: "Cap Widget Locale Demo",
    description: "A demo of the cap widget locale",
    registryDependencies: [`${siteConfig.registryUrl}/cap-widget.json`],
    files: [
      {
        path: "src/registry/example/cap-widget/locale.tsx",
        type: "registry:component",
        target: "components/cap-widget-locale-demo.tsx",
      },
    ],
  },
];
