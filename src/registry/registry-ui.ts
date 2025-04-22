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
                target: "components/wed/input.tsx",
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
                target: "components/wed/phone-input.tsx",
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
                target: "components/wed/select.tsx",
            },
        ],
    },
    {
        name: "color-picker",
        type: "registry:ui",
        title: "Color Picker",
        description: "A color picker component",
        dependencies: ["react-colorful"],
        registryDependencies: [
            "popover",
            "button",
            `${siteConfig.registryUrl}/colors.json`,
        ],
        files: [
            {
                path: "src/registry/ui/color-picker.tsx",
                type: "registry:ui",
                target: "components/wed/color-picker.tsx",
            },
        ],
    },
    {
        name: "color-input",
        type: "registry:ui",
        title: "Color Input",
        description: "A color input component",
        dependencies: [
            "react-colorful",
            `${siteConfig.registryUrl}/colors.json`,
            `${siteConfig.registryUrl}/input.json`,
        ],
        files: [
            {
                path: "src/registry/ui/color-input.tsx",
                type: "registry:ui",
                target: "components/wed/color-input.tsx",
            },
        ],
    },
    {
        name: "button",
        type: "registry:ui",
        title: "Button",
        description: "A button component",
        registryDependencies: [`${siteConfig.registryUrl}/use-ripple.json`],
        dependencies: ["motion"],
        files: [
            {
                path: "src/registry/ui/button.tsx",
                type: "registry:ui",
                target: "components/wed/button.tsx",
            },
        ],
    },
];
