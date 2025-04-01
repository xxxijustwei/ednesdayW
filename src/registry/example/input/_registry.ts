import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const inputExamples: Registry["items"] = [
    {
        name: "input-size-demo",
        type: "registry:component",
        title: "Input Size Demo",
        description: "A demo of the input size",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/size.tsx",
                type: "registry:component",
                target: "components/input-size-demo.tsx",
            },
        ],
    },
    {
        name: "input-variant-demo",
        type: "registry:component",
        title: "Input Variant Demo",
        description: "A demo of the input variant",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/variant.tsx",
                type: "registry:component",
                target: "components/input-variant-demo.tsx",
            },
        ],
    },
    {
        name: "input-disabled-demo",
        type: "registry:component",
        title: "Input Disabled Demo",
        description: "A demo of the input disabled",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/disabled.tsx",
                type: "registry:component",
                target: "components/input-disabled-demo.tsx",
            },
        ],
    },
    {
        name: "input-invalid-demo",
        type: "registry:component",
        title: "Input Invalid Demo",
        description: "A demo of the input invalid",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/invalid.tsx",
                type: "registry:component",
                target: "components/input-invalid-demo.tsx",
            },
        ],
    },
    {
        name: "input-start-end-content-demo",
        type: "registry:component",
        title: "Input Start End Content Demo",
        description: "A demo of the input start end content",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/start-end-content.tsx",
                type: "registry:component",
                target: "components/input-start-end-content-demo.tsx",
            },
        ],
    },
    {
        name: "input-password-demo",
        type: "registry:component",
        title: "Input Password Demo",
        description: "A demo of the input password",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/password.tsx",
                type: "registry:component",
                target: "components/input-password-demo.tsx",
            },
        ],
    },
    {
        name: "input-form-demo",
        type: "registry:component",
        title: "Input Form Demo",
        description: "A demo of the input form",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/form.tsx",
                type: "registry:component",
                target: "components/input-form-demo.tsx",
            },
        ],
    },
];
