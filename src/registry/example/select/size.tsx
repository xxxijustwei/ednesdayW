"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import Image from "next/image";

const NETWORKS = [
  "Ethereum",
  "BSC",
  "Solana",
  "Tron",
  "Base",
  "Arbitrum",
  "Sui",
  "Hyperliquid",
  "Avalanche",
];

const ICON_SIZE = {
  sm: 18,
  md: 24,
  lg: 32,
};

export const SelectSizeExample = () => {
  const size = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {size.map((size) => (
        <Select key={size}>
          <SelectTrigger size={size} variant="bordered" className="rounded-2xl">
            <SelectValue placeholder="Select a network" />
          </SelectTrigger>
          <SelectContent>
            {NETWORKS.map((network) => (
              <SelectItem key={network} value={network}>
                <div className="flex items-center gap-1.5">
                  <Image
                    src={`/networks/${network.toLowerCase()}.svg`}
                    alt={network}
                    width={ICON_SIZE[size]}
                    height={ICON_SIZE[size]}
                    className="rounded-full"
                  />
                  <span className="text-lg">{network}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
