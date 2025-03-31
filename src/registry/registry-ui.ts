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
