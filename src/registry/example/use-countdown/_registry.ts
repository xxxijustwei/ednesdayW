import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const useCountdownExamples: Registry["items"] = [
    {
        name: "use-countdown-demo",
        type: "registry:component",
        title: "Use Countdown Demo",
        description: "A demo of the use countdown",
        dependencies: [
            `${siteConfig.registryUrl}/button.json`,
            `${siteConfig.registryUrl}/use-countdown.json`,
        ],
        files: [
            {
                path: "src/registry/example/use-countdown/demo.tsx",
                type: "registry:component",
                target: "components/demo/use-countdown-demo.tsx",
            },
        ],
    },
];
