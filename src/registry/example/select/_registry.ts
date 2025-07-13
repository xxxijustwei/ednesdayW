import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const selectExamples: Registry["items"] = [
  {
    name: "select-size-demo",
    type: "registry:component",
    title: "Select Size Demo",
    description: "A demo of the select size",
    registryDependencies: [`${siteConfig.registryUrl}/select.json`],
    files: [
      {
        path: "src/registry/example/select/size.tsx",
        type: "registry:component",
        target: "components/select-size-demo.tsx",
      },
    ],
  },
  {
    name: "select-variant-demo",
    type: "registry:component",
    title: "Select Variant Demo",
    description: "A demo of the select variant",
    registryDependencies: [`${siteConfig.registryUrl}/select.json`],
    files: [
      {
        path: "src/registry/example/select/variant.tsx",
        type: "registry:component",
        target: "components/select-variant-demo.tsx",
      },
    ],
  },
  {
    name: "select-disabled-demo",
    type: "registry:component",
    title: "Select Disabled Demo",
    description: "A demo of the select disabled",
    registryDependencies: [
      "switch",
      "label",
      `${siteConfig.registryUrl}/select.json`,
    ],
    files: [
      {
        path: "src/registry/example/select/disabled.tsx",
        type: "registry:component",
        target: "components/select-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "select-invalid-demo",
    type: "registry:component",
    title: "Select Invalid Demo",
    description: "A demo of the select invalid",
    registryDependencies: [`${siteConfig.registryUrl}/select.json`],
    files: [
      {
        path: "src/registry/example/select/invalid.tsx",
        type: "registry:component",
        target: "components/select-invalid-demo.tsx",
      },
    ],
  },
  {
    name: "select-start-content-demo",
    type: "registry:component",
    title: "Select Start Content Demo",
    description: "A demo of the select start content",
    registryDependencies: [`${siteConfig.registryUrl}/select.json`],
    files: [
      {
        path: "src/registry/example/select/start-content.tsx",
        type: "registry:component",
        target: "components/select-start-content-demo.tsx",
      },
    ],
  },
  {
    name: "select-clearable-demo",
    type: "registry:component",
    title: "Select Clearable Demo",
    description: "A demo of the select clearable",
    registryDependencies: [`${siteConfig.registryUrl}/select.json`],
    files: [
      {
        path: "src/registry/example/select/clearable.tsx",
        type: "registry:component",
        target: "components/select-clearable-demo.tsx",
      },
    ],
  },
];
