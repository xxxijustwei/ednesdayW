import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const useRippleExamples: Registry["items"] = [
  {
    name: "use-ripple-demo",
    type: "registry:component",
    title: "Use Ripple Demo",
    description: "A demo of the use ripple",
    registryDependencies: [`${siteConfig.registryUrl}/use-ripple.json`],
    dependencies: ["motion"],
    files: [
      {
        path: "src/registry/example/use-ripple/demo.tsx",
        type: "registry:component",
        target: "components/demo/use-ripple-demo.tsx",
      },
    ],
  },
];
