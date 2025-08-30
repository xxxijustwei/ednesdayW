import { siteConfig } from "@/config/site";
import type { Registry } from "shadcn/registry";

export const fieldInputExamples: Registry["items"] = [
  {
    name: "field-input-default-demo",
    type: "registry:component",
    title: "Field Input Default Demo",
    description: "A demo of the field input default",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/default.tsx",
        type: "registry:component",
        target: "components/demo/field-input-default-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-size-demo",
    type: "registry:component",
    title: "Field Input Size Demo",
    description: "A demo of the field input size",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/size.tsx",
        type: "registry:component",
        target: "components/demo/field-input-size-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-variant-demo",
    type: "registry:component",
    title: "Field Input Variant Demo",
    description: "A demo of the field input variant",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/variant.tsx",
        type: "registry:component",
        target: "components/demo/field-input-variant-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-disabled-demo",
    type: "registry:component",
    title: "Field Input Disabled Demo",
    description: "A demo of the field input disabled",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/disabled.tsx",
        type: "registry:component",
        target: "components/demo/field-input-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-invalid-demo",
    type: "registry:component",
    title: "Field Input Invalid Demo",
    description: "A demo of the field input invalid",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/invalid.tsx",
        type: "registry:component",
        target: "components/demo/field-input-invalid-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-start-end-content-demo",
    type: "registry:component",
    title: "Field Input Start End Content Demo",
    description: "A demo of the field input start end content",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/start-end-content.tsx",
        type: "registry:component",
        target: "components/demo/field-input-start-end-content-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-password-demo",
    type: "registry:component",
    title: "Field Input Password Demo",
    description: "A demo of the field input password",
    registryDependencies: [`${siteConfig.registryUrl}/field-input.json`],
    files: [
      {
        path: "src/registry/example/field-input/password.tsx",
        type: "registry:component",
        target: "components/demo/field-input-password-demo.tsx",
      },
    ],
  },
  {
    name: "field-input-form-demo",
    type: "registry:component",
    title: "Field Input Form Demo",
    description: "A demo of the field input form",
    registryDependencies: [
      "card",
      "form",
      `${siteConfig.registryUrl}/field-input.json`,
    ],
    dependencies: ["react-hook-form", "zod", "sonner"],
    files: [
      {
        path: "src/registry/example/field-input/form.tsx",
        type: "registry:component",
        target: "components/demo/field-input-form-demo.tsx",
      },
    ],
  },
];
