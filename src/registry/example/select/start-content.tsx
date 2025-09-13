"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import Image from "next/image";
import { useState } from "react";

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

export const SelectTokensExample = () => {
  const [network, setNetwork] = useState<string>();

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <Select value={network} onValueChange={setNetwork}>
        <SelectTrigger size="md" variant="bordered" className="rounded-2xl">
          <SelectValue placeholder="Select a network" />
        </SelectTrigger>
        <SelectContent>
          {NETWORKS.map((network) => (
            <SelectItem key={network} value={network}>
              <div className="flex items-center gap-1.5">
                <Image
                  src={`/networks/${network.toLowerCase()}.svg`}
                  alt={network}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-lg">{network}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
