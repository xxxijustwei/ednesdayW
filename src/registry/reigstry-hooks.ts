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
        path: "src/registry/hooks/use-disclosure.ts",
        type: "registry:hook",
        target: "hooks/use-disclosure.ts",
      },
    ],
  },
  {
    name: "use-ripple",
    type: "registry:hook",
    title: "Use Ripple",
    description: "A hook for creating ripples on an element",
    files: [
      {
        path: "src/registry/hooks/use-ripple.ts",
        type: "registry:hook",
        target: "hooks/use-ripple.ts",
      },
    ],
  },
  {
    name: "use-countdown",
    type: "registry:hook",
    title: "Use Countdown",
    description: "A hook for creating a countdown timer",
    files: [
      {
        path: "src/registry/hooks/use-countdown.ts",
        type: "registry:hook",
        target: "hooks/use-countdown.ts",
      },
    ],
  },
];
