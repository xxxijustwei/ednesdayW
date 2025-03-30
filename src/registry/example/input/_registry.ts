import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const inputExamples: Registry["items"] = [
    {
        name: "input-size-demo",
        type: "registry:example",
        title: "Input Size Demo",
        description: "A demo of the input size",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/size.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-size-demo.tsx",
            },
        ],
    },
    {
        name: "input-variant-demo",
        type: "registry:example",
        title: "Input Variant Demo",
        description: "A demo of the input variant",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/variant.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-variant-demo.tsx",
            },
        ],
    },
    {
        name: "input-disabled-demo",
        type: "registry:example",
        title: "Input Disabled Demo",
        description: "A demo of the input disabled",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/disabled.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-disabled-demo.tsx",
            },
        ],
    },
    {
        name: "input-invalid-demo",
        type: "registry:example",
        title: "Input Invalid Demo",
        description: "A demo of the input invalid",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/invalid.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-invalid-demo.tsx",
            },
        ],
    },
    {
        name: "input-start-end-content-demo",
        type: "registry:example",
        title: "Input Start End Content Demo",
        description: "A demo of the input start end content",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/start-end-content.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-start-end-content-demo.tsx",
            },
        ],
    },
    {
        name: "input-password-demo",
        type: "registry:example",
        title: "Input Password Demo",
        description: "A demo of the input password",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/password.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-password-demo.tsx",
            },
        ],
    },
    {
        name: "input-phone-input-demo",
        type: "registry:example",
        title: "Input Phone Input Demo",
        description: "A demo of the input phone input",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/phone-input.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-phone-input-demo.tsx",
            },
        ],
    },
    {
        name: "input-form-demo",
        type: "registry:example",
        title: "Input Form Demo",
        description: "A demo of the input form",
        registryDependencies: [`${siteConfig.registryUrl}/input.json`],
        files: [
            {
                path: "src/registry/example/input/form.tsx",
                type: "registry:example",
                target: "components/wed-demo/input-form-demo.tsx",
            },
        ],
    },
];
