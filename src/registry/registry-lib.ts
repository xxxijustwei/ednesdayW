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
    {
        name: "colors",
        type: "registry:lib",
        files: [
            {
                path: "src/registry/lib/colors.ts",
                type: "registry:lib",
                target: "lib/colors.ts",
            },
        ],
    },
    {
        name: "paginate",
        type: "registry:lib",
        files: [
            {
                path: "src/registry/lib/paginate.ts",
                type: "registry:lib",
                target: "lib/paginate.ts",
            },
        ],
    },
];
