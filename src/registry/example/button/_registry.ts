import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const buttonExamples: Registry["items"] = [
  {
    name: "button-variant-demo",
    type: "registry:component",
    title: "Button Variant Demo",
    description: "A demo of the button variant",
    registryDependencies: [`${siteConfig.registryUrl}/button.json`],
    files: [
      {
        path: "src/registry/example/button/variant.tsx",
        type: "registry:component",
        target: "components/demo/button-variant-demo.tsx",
      },
    ],
  },
  {
    name: "button-size-demo",
    type: "registry:component",
    title: "Button Size Demo",
    description: "A demo of the button size",
    registryDependencies: [`${siteConfig.registryUrl}/button.json`],
    files: [
      {
        path: "src/registry/example/button/size.tsx",
        type: "registry:component",
        target: "components/demo/button-size-demo.tsx",
      },
    ],
  },
  {
    name: "button-icon-demo",
    type: "registry:component",
    title: "Button Icon Demo",
    description: "A demo of the button icon",
    registryDependencies: [`${siteConfig.registryUrl}/button.json`],
    files: [
      {
        path: "src/registry/example/button/icon.tsx",
        type: "registry:component",
        target: "components/demo/button-icon-demo.tsx",
      },
    ],
  },
  {
    name: "button-loading-demo",
    type: "registry:component",
    title: "Button Loading Demo",
    description: "A demo of the button loading",
    registryDependencies: [`${siteConfig.registryUrl}/button.json`],
    files: [
      {
        path: "src/registry/example/button/loading.tsx",
        type: "registry:component",
        target: "components/demo/button-loading-demo.tsx",
      },
    ],
  },
  {
    name: "button-form-demo",
    type: "registry:component",
    title: "Button Form Demo",
    description: "A demo of the button form",
    registryDependencies: [`${siteConfig.registryUrl}/button.json`],
    files: [
      {
        path: "src/registry/example/button/form.tsx",
        type: "registry:component",
        target: "components/demo/button-form-demo.tsx",
      },
    ],
  },
];
