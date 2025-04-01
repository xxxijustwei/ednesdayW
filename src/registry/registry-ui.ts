import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
    {
        name: "input",
        type: "registry:ui",
        title: "Input",
        description: "A input component",
        files: [
            {
                path: "src/registry/ui/input.tsx",
                type: "registry:ui",
                target: "components/input.tsx",
            },
        ],
    },
    {
        name: "phone-input",
        type: "registry:ui",
        title: "Phone Input",
        description: "A phone input component",
        dependencies: [
            `${siteConfig.registryUrl}/input.json`,
            `${siteConfig.registryUrl}/use-disclosure.json`,
            "popover",
        ],
        files: [
            {
                path: "src/registry/ui/phone-input.tsx",
                type: "registry:ui",
                target: "components/phone-input.tsx",
            },
        ],
    },
    {
        name: "select",
        type: "registry:ui",
        title: "Select",
        description: "A select component",
        files: [
            {
                path: "src/registry/ui/select.tsx",
                type: "registry:ui",
                target: "components/select.tsx",
            },
        ],
    },
];
