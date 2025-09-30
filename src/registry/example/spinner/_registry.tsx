import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const spinnerExamples: Registry["items"] = [
  {
    name: "plane-spinner-demo",
    type: "registry:component",
    title: "Plane Spinner Demo",
    description: "A demo of the plane spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/plane.tsx",
        type: "registry:component",
        target: "components/demo/plane-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "chase-spinner-demo",
    type: "registry:component",
    title: "Chase Spinner Demo",
    description: "A demo of the chase spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/chase.tsx",
        type: "registry:component",
        target: "components/demo/chase-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "bounce-spinner-demo",
    type: "registry:component",
    title: "Bounce Spinner Demo",
    description: "A demo of the bounce spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/bounce.tsx",
        type: "registry:component",
        target: "components/demo/bounce-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "wave-spinner-demo",
    type: "registry:component",
    title: "Wave Spinner Demo",
    description: "A demo of the wave spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/wave.tsx",
        type: "registry:component",
        target: "components/demo/wave-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "pulse-spinner-demo",
    type: "registry:component",
    title: "Pulse Spinner Demo",
    description: "A demo of the pulse spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/pulse.tsx",
        type: "registry:component",
        target: "components/demo/pulse-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "flow-spinner-demo",
    type: "registry:component",
    title: "Flow Spinner Demo",
    description: "A demo of the flow spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/flow.tsx",
        type: "registry:component",
        target: "components/demo/flow-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "swing-spinner-demo",
    type: "registry:component",
    title: "Swing Spinner Demo",
    description: "A demo of the swing spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/swing.tsx",
        type: "registry:component",
        target: "components/demo/swing-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "circle-spinner-demo",
    type: "registry:component",
    title: "Circle Spinner Demo",
    description: "A demo of the circle spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/circle.tsx",
        type: "registry:component",
        target: "components/demo/circle-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "circle-fade-spinner-demo",
    type: "registry:component",
    title: "Circle Fade Spinner Demo",
    description: "A demo of the circle fade spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/circle-fade.tsx",
        type: "registry:component",
        target: "components/demo/circle-fade-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "grid-spinner-demo",
    type: "registry:component",
    title: "Grid Spinner Demo",
    description: "A demo of the grid spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/grid.tsx",
        type: "registry:component",
        target: "components/demo/grid-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "fold-spinner-demo",
    type: "registry:component",
    title: "Fold Spinner Demo",
    description: "A demo of the fold spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/fold.tsx",
        type: "registry:component",
        target: "components/demo/fold-spinner-demo.tsx",
      },
    ],
  },
  {
    name: "wander-spinner-demo",
    type: "registry:component",
    title: "Wander Spinner Demo",
    description: "A demo of the wander spinner",
    registryDependencies: [`${siteConfig.registryUrl}/spinner.json`],
    files: [
      {
        path: "src/registry/example/spinner/wander.tsx",
        type: "registry:component",
        target: "components/demo/wander-spinner-demo.tsx",
      },
    ],
  },
];
