import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const tagInputExamples: Registry["items"] = [
  {
    name: "tag-input-size-demo",
    type: "registry:component",
    title: "Tag Input Size Demo",
    description: "A demo of the tag input size",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/size.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-size-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-variant-demo",
    type: "registry:component",
    title: "Tag Input Variant Demo",
    description: "A demo of the tag input variant",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/variant.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-variant-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-invalid-demo",
    type: "registry:component",
    title: "Tag Input Invalid Demo",
    description: "A demo of the tag input invalid",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/invalid.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-invalid-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-disabled-demo",
    type: "registry:component",
    title: "Tag Input Disabled Demo",
    description: "A demo of the tag input disabled",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/disabled.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-confirm-key-demo",
    type: "registry:component",
    title: "Tag Input Confirm Key Demo",
    description: "A demo of the tag input confirm key",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/confirm-key.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-confirm-key-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-outside-tags-demo",
    type: "registry:component",
    title: "Tag Input Outside Tags Demo",
    description: "A demo of the tag input outside tags",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/outside-tags.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-outside-tags-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-max-tags-demo",
    type: "registry:component",
    title: "Tag Input Max Tags Demo",
    description: "A demo of the tag input max tags",
    registryDependencies: [`${siteConfig.registryUrl}/tag-input.json`],
    files: [
      {
        path: "src/registry/example/tag-input/max-tags.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-max-tags-demo.tsx",
      },
    ],
  },
  {
    name: "tag-input-paste-tags-demo",
    type: "registry:component",
    title: "Tag Input Paste Tags Demo",
    description: "A demo of the tag input paste tags",
    registryDependencies: [
      `${siteConfig.registryUrl}/tag-input.json`,
      "https://hookcn.ouassim.tech/r/use-copy-to-clipboard",
    ],
    files: [
      {
        path: "src/registry/example/tag-input/paste-tags.tsx",
        type: "registry:component",
        target: "components/demo/tag-input-paste-tags-demo.tsx",
      },
    ],
  },
];
