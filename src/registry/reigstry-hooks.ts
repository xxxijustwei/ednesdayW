import type { Registry } from "shadcn/registry";

export const hooks: Registry["items"] = [
    {
        name: "use-disclosure",
        type: "registry:hook",
        title: "Use Disclosure",
        description: "A hook for managing disclosure state",
        dependencies: ["@radix-ui/react-use-callback-ref"],
        files: [
            {
                path: "src/registry/hooks/use-disclosure.tsx",
                type: "registry:hook",
                target: "hooks/use-disclosure.tsx",
            },
        ],
    },
];
