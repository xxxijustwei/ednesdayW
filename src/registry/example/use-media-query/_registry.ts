import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const useMediaQueryExamples: Registry["items"] = [
  {
    name: "use-media-query-demo",
    type: "registry:component",
    title: "Use Media Query Demo",
    description: "A demo of the use media query",
    registryDependencies: [`${siteConfig.registryUrl}/use-media-query.json`],
    files: [
      {
        path: "src/registry/example/use-media-query/demo.tsx",
        type: "registry:component",
        target: "components/demo/use-media-query-demo.tsx",
      },
    ],
  },
];
