import type { Registry } from "shadcn/registry";

export const selectExamples: Registry["items"] = [
    {
        name: "select-size-demo",
        type: "registry:component",
        title: "Select Size Demo",
        description: "A demo of the select size",
        files: [
            {
                path: "src/registry/example/select/size.tsx",
                type: "registry:component",
                target: "components/select-size-demo.tsx",
            },
        ],
    },
    {
        name: "select-variant-demo",
        type: "registry:component",
        title: "Select Variant Demo",
        description: "A demo of the select variant",
        files: [
            {
                path: "src/registry/example/select/variant.tsx",
                type: "registry:component",
                target: "components/select-variant-demo.tsx",
            },
        ],
    },
];
