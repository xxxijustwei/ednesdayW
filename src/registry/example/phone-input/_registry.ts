import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const phoneInputExamples: Registry["items"] = [
  {
    name: "phone-input-size-demo",
    type: "registry:component",
    title: "Phone Input Size Demo",
    description: "A demo of the phone input size",
    registryDependencies: [`${siteConfig.registryUrl}/phone-input.json`],
    files: [
      {
        path: "src/registry/example/phone-input/size.tsx",
        type: "registry:component",
        target: "components/phone-input-size-demo.tsx",
      },
    ],
  },
  {
    name: "phone-input-variant-demo",
    type: "registry:component",
    title: "Phone Input Variant Demo",
    description: "A demo of the phone input variant",
    registryDependencies: [`${siteConfig.registryUrl}/phone-input.json`],
    files: [
      {
        path: "src/registry/example/phone-input/variant.tsx",
        type: "registry:component",
        target: "components/phone-input-variant-demo.tsx",
      },
    ],
  },
  {
    name: "phone-input-disabled-demo",
    type: "registry:component",
    title: "Phone Input Disabled Demo",
    description: "A demo of the phone input disabled",
    registryDependencies: [`${siteConfig.registryUrl}/phone-input.json`],
    files: [
      {
        path: "src/registry/example/phone-input/disabled.tsx",
        type: "registry:component",
        target: "components/phone-input-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "phone-input-invalid-demo",
    type: "registry:component",
    title: "Phone Input Invalid Demo",
    description: "A demo of the phone input invalid",
    registryDependencies: [`${siteConfig.registryUrl}/phone-input.json`],
    files: [
      {
        path: "src/registry/example/phone-input/invalid.tsx",
        type: "registry:component",
        target: "components/phone-input-invalid-demo.tsx",
      },
    ],
  },
];
