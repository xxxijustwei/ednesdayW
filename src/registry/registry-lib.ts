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
  {
    name: "wallet-address",
    type: "registry:lib",
    dependencies: ["bs58", "viem"],
    files: [
      {
        path: "src/registry/lib/wallet-address.ts",
        type: "registry:lib",
        target: "lib/wallet-address.ts",
      },
    ],
  },
  {
    name: "create2",
    type: "registry:lib",
    dependencies: ["js-sha3"],
    files: [
      {
        path: "src/registry/lib/create2.ts",
        type: "registry:lib",
        target: "lib/create2.ts",
      },
    ],
  },
];
