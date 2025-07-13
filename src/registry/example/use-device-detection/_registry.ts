import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const useDeviceDetectionExamples: Registry["items"] = [
  {
    name: "use-device-detection-demo",
    type: "registry:component",
    title: "Use Device Detection Demo",
    description: "A demo of the use device detection",
    registryDependencies: [
      `${siteConfig.registryUrl}/use-device-detection.json`,
    ],
    files: [
      {
        path: "src/registry/example/use-device-detection/demo.tsx",
        type: "registry:component",
        target: "components/demo/use-device-detection-demo.tsx",
      },
    ],
  },
];
