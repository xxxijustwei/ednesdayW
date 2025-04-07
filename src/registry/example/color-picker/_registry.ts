import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const colorPickerExamples: Registry["items"] = [
    {
        name: "color-picker-demo",
        type: "registry:component",
        title: "Color Picker Demo",
        description: "A demo of the color picker",
        dependencies: [`${siteConfig.registryUrl}/color-picker.json`],
        files: [
            {
                path: "src/registry/example/color-picker/demo.tsx",
                type: "registry:component",
                target: "components/color-picker-demo.tsx",
            },
        ],
    },
];
