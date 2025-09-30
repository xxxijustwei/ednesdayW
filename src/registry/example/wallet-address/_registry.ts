import { siteConfig } from "@/config/site";
import { Registry } from "shadcn/schema";

export const walletAddressExamples: Registry["items"] = [
  {
    name: "wallet-address-validation-demo",
    type: "registry:component",
    title: "Wallet Address Validation Demo",
    description: "A demo of the wallet address validation",
    registryDependencies: [
      `${siteConfig.registryUrl}/wallet-address.json`,
      `${siteConfig.registryUrl}/input.json`,
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/example/wallet-address/validation.tsx",
        type: "registry:component",
        target: "components/demo/wallet-address-validation-demo.tsx",
      },
    ],
  },
];
