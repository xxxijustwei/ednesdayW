import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const useDisclosureExamples: Registry["items"] = [
    {
        name: "use-disclosure-dialog-demo",
        type: "registry:component",
        title: "Use Disclosure Dialog Demo",
        description: "A demo of the use disclosure dialog",
        dependencies: [
            "dialog",
            `${siteConfig.registryUrl}/use-disclosure.json`,
        ],
        files: [
            {
                path: "src/registry/example/use-disclosure/dialog.tsx",
                type: "registry:component",
                target: "components/use-disclosure-dialog-demo.tsx",
            },
        ],
    },
];
