import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const create2Examples: Registry["items"] = [
  {
    name: "evm-create2-demo",
    type: "registry:component",
    title: "EVM Create2 Demo",
    description: "A demo of the EVM create2",
    registryDependencies: [
      "card",
      "form",
      `${siteConfig.registryUrl}/create2.json`,
      `${siteConfig.registryUrl}/input.json`,
    ],
    dependencies: ["lucide-react", "react-hook-form", "zod"],
    files: [
      {
        path: "src/registry/example/create2/evm-create2.tsx",
        type: "registry:component",
        target: "components/demo/evm-create2-demo.tsx",
      },
    ],
  },
  {
    name: "tron-create2-demo",
    type: "registry:component",
    title: "TRON Create2 Demo",
    description: "A demo of the TRON create2",
    registryDependencies: [
      "card",
      "form",
      `${siteConfig.registryUrl}/create2.json`,
      `${siteConfig.registryUrl}/input.json`,
    ],
    dependencies: ["lucide-react", "react-hook-form", "zod"],
    files: [
      {
        path: "src/registry/example/create2/tron-create2.tsx",
        type: "registry:component",
        target: "components/demo/tron-create2-demo.tsx",
      },
    ],
  },
];
