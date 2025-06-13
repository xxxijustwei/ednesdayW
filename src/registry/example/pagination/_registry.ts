import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const paginationExamples: Registry["items"] = [
  {
    name: "pagination-demo",
    type: "registry:component",
    title: "Pagination Demo",
    description: "A demo of the pagination component",
    registryDependencies: [
      `${siteConfig.registryUrl}/pagination.json`,
      `${siteConfig.registryUrl}/use-device-detection.json`,
    ],
    files: [
      {
        path: "src/registry/example/pagination/demo.tsx",
        type: "registry:component",
        target: "components/demo/pagination-demo.tsx",
      },
    ],
  },
];
