import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const autocompleteExamples: Registry["items"] = [
    {
        name: "autocomplete-size-demo",
        type: "registry:component",
        title: "Autocomplete Size Demo",
        description: "A demo of the autocomplete size",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/size.tsx",
                type: "registry:component",
                target: "components/autocomplete-size-demo.tsx",
            },
        ],
    },
    {
        name: "autocomplete-variant-demo",
        type: "registry:component",
        title: "Autocomplete Variant Demo",
        description: "A demo of the autocomplete variant",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/variant.tsx",
                type: "registry:component",
                target: "components/autocomplete-variant-demo.tsx",
            },
        ],
    },
    {
        name: "autocomplete-disabled-demo",
        type: "registry:component",
        title: "Autocomplete Disabled Demo",
        description: "A demo of the autocomplete disabled",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/disabled.tsx",
                type: "registry:component",
                target: "components/autocomplete-disabled-demo.tsx",
            },
        ],
    },
    {
        name: "autocomplete-disabled-item-demo",
        type: "registry:component",
        title: "Autocomplete Disabled Item Demo",
        description: "A demo of the autocomplete disabled item",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/disabled-item.tsx",
                type: "registry:component",
                target: "components/autocomplete-disabled-item-demo.tsx",
            },
        ],
    },
    {
        name: "autocomplete-invalid-demo",
        type: "registry:component",
        title: "Autocomplete Invalid Demo",
        description: "A demo of the autocomplete invalid",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/invalid.tsx",
                type: "registry:component",
                target: "components/autocomplete-invalid-demo.tsx",
            },
        ],
    },
    {
        name: "autocomplete-start-content-demo",
        type: "registry:component",
        title: "Autocomplete Start Content Demo",
        description: "A demo of the autocomplete start content",
        dependencies: [`${siteConfig.registryUrl}/autocomplete.json`],
        files: [
            {
                path: "src/registry/example/autocomplete/start-content.tsx",
                type: "registry:component",
                target: "components/autocomplete-start-content-demo.tsx",
            },
        ],
    },
];
