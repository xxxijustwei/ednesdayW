import { Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
    {
        name: "input-size-demo",
        type: "registry:example",
        title: "Input Size Demo",
        description: "A demo of the input size",
        files: [
            {
                path: "registry/example/input/size.tsx",
                type: "registry:example",
                target: "components/ednesdayw/input-size-demo.tsx"
            }
        ]
    },
    {
        name: "input-variant-demo",
        type: "registry:example",
        title: "Input Variant Demo",
        description: "A demo of the input variant",
        files: [
            {
                path: "registry/example/input/variant.tsx",
                type: "registry:example",
                target: "components/ednesdayw/input-variant-demo.tsx"
            }
        ]
    },
    {
        name: "input-start-end-content-demo",
        type: "registry:example",
        title: "Input Start End Content Demo",
        description: "A demo of the input start end content",
        files: [
            {
                path: "registry/example/input/start-end-content.tsx",
                type: "registry:example",
                target: "components/ednesdayw/input-start-end-content-demo.tsx"
            }
        ]
    },
    {
        name: "input-password-demo",
        type: "registry:example",
        title: "Input Password Demo",
        description: "A demo of the input password",
        files: [
            {
                path: "registry/example/input/password.tsx",
                type: "registry:example",
                target: "components/ednesdayw/input-password-demo.tsx"
            }
        ]
    },
    {
        name: "input-phone-input-demo",
        type: "registry:example",
        title: "Input Phone Input Demo",
        description: "A demo of the input phone input",
        files: [
            {
                path: "registry/example/input/phone-input.tsx",
                type: "registry:example",
                target: "components/ednesdayw/input-phone-input-demo.tsx"
            }
        ]
    }
]