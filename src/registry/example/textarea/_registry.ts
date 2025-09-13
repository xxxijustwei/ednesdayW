import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/registry";

export const textareaExamples: Registry["items"] = [
  {
    name: "textarea-variant-demo",
    type: "registry:component",
    title: "Textarea Variant Demo",
    description: "A demo of the textarea variant",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/variant.tsx",
        type: "registry:component",
        target: "components/demo/textarea-variant-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-disabled-demo",
    type: "registry:component",
    title: "Textarea Disabled Demo",
    description: "A demo of the textarea disabled",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/disabled.tsx",
        type: "registry:component",
        target: "components/demo/textarea-disabled-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-invalid-demo",
    type: "registry:component",
    title: "Textarea Invalid Demo",
    description: "A demo of the textarea invalid",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/invalid.tsx",
        type: "registry:component",
        target: "components/demo/textarea-invalid-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-autosize-demo",
    type: "registry:component",
    title: "Textarea Autosize Demo",
    description: "A demo of the textarea autosize",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/autosize.tsx",
        type: "registry:component",
        target: "components/demo/textarea-autosize-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-form-demo",
    type: "registry:component",
    title: "Textarea Form Demo",
    description: "A demo of the textarea form",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/form.tsx",
        type: "registry:component",
        target: "components/demo/textarea-form-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-actions-demo",
    type: "registry:component",
    title: "Textarea Actions Demo",
    description: "A demo of the textarea actions",
    registryDependencies: [
      `${siteConfig.registryUrl}/textarea.json`,
      `${siteConfig.registryUrl}/button.json`,
    ],
    files: [
      {
        path: "src/registry/example/textarea/actions.tsx",
        type: "registry:component",
        target: "components/demo/textarea-actions-demo.tsx",
      },
    ],
  },
  {
    name: "textarea-label-demo",
    type: "registry:component",
    title: "Textarea Label Demo",
    description: "A demo of the textarea label",
    registryDependencies: [`${siteConfig.registryUrl}/textarea.json`],
    files: [
      {
        path: "src/registry/example/textarea/label.tsx",
        type: "registry:component",
        target: "components/demo/textarea-label-demo.tsx",
      },
    ],
  },
];
