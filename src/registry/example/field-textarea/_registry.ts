import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/registry";

export const fieldTextareaExamples: Registry["items"] = [
  {
    name: "field-textarea-variant-demo",
    type: "registry:component",
    title: "Field Textarea Variant Demo",
    description: "A demo of the field textarea variant",
    registryDependencies: [`${siteConfig.registryUrl}/field-textarea.json`],
    files: [
      {
        path: "src/registry/example/field-textarea/variant.tsx",
        type: "registry:component",
        target: "components/demo/field-textarea-variant-demo.tsx",
      },
    ],
  },

  {
    name: "field-textarea-disabled-demo",
    type: "registry:component",
    title: "Field Textarea Disabled Demo",
    description: "A demo of the field textarea disabled",
    registryDependencies: [`${siteConfig.registryUrl}/field-textarea.json`],
    files: [
      {
        path: "src/registry/example/field-textarea/disabled.tsx",
        type: "registry:component",
        target: "components/demo/field-textarea-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "field-textarea-invalid-demo",
    type: "registry:component",
    title: "Field Textarea Invalid Demo",
    description: "A demo of the field textarea invalid",
    registryDependencies: [`${siteConfig.registryUrl}/field-textarea.json`],
    files: [
      {
        path: "src/registry/example/field-textarea/invalid.tsx",
        type: "registry:component",
        target: "components/demo/field-textarea-invalid-demo.tsx",
      },
    ],
  },

  {
    name: "field-textarea-autosize-demo",
    type: "registry:component",
    title: "Field Textarea Autosize Demo",
    description: "A demo of the field textarea autosize",
    registryDependencies: [`${siteConfig.registryUrl}/field-textarea.json`],
    files: [
      {
        path: "src/registry/example/field-textarea/autosize.tsx",
        type: "registry:component",
        target: "components/demo/field-textarea-autosize-demo.tsx",
      },
    ],
  },
  {
    name: "field-textarea-form-demo",
    type: "registry:component",
    title: "Field Textarea Form Demo",
    description: "A demo of the field textarea form",
    registryDependencies: [`${siteConfig.registryUrl}/field-textarea.json`],
    files: [
      {
        path: "src/registry/example/field-textarea/form.tsx",
        type: "registry:component",
        target: "components/demo/field-textarea-form-demo.tsx",
      },
    ],
  },
];
