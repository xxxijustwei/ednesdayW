import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const create2Examples: Registry["items"] = [
  {
    name: "create2-predict-address-demo",
    type: "registry:component",
    title: "Create2 Predict Address Demo",
    description: "A demo of the create2 predict address",
    registryDependencies: [
      "card",
      "form",
      `${siteConfig.registryUrl}/create2.json`,
      `${siteConfig.registryUrl}/input.json`,
    ],
    dependencies: ["lucide-react", "react-hook-form", "zod", "viem"],
    files: [
      {
        path: "src/registry/example/create2/predict-address.tsx",
        type: "registry:component",
        target: "components/demo/create2-predict-address-demo.tsx",
      },
    ],
  },
];
