import type { Registry } from "shadcn/registry";

export const lib: Registry["items"] = [
    {
        name: "utils",
        type: "registry:lib",
        dependencies: ["clsx", "tailwind-merge"],
        files: [
            {
                path: "src/registry/lib/utils.ts",
                type: "registry:lib",
                target: "lib/utils.ts",
            },
        ],
    },
];
