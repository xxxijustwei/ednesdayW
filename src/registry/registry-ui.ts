import { Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
    {
        name: "input",
        type: "registry:ui",
        title: "Input",
        description: "A input component",
        files: [
            {
                path: "registry/ui/input.tsx",
                type: "registry:ui",
                target: "components/ednesdayw/input.tsx"
            }
        ]
    }
]