"use client";

import { Button } from "@/registry/ui/button";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import { XIcon } from "lucide-react";
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

export const SelectVariantExample = () => {
  const variants = ["default", "faded", "bordered", "underline"] as const;

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {variants.map((variant) => (
        <TokenSelect key={variant} variant={variant} />
      ))}
    </div>
  );
};

const TokenSelect = ({
  variant,
}: {
  variant: "default" | "faded" | "bordered" | "underline";
}) => {
  const [network, setNetwork] = useState<string>();

  return (
    <Select value={network} onValueChange={setNetwork}>
      <SelectTrigger
        size="lg"
        variant={variant}
        className={variant !== "underline" ? "rounded-full" : undefined}
      >
        <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
          <SelectValue placeholder="Select a network" />
          {network && (
            <SelectIcon asChild onPointerDown={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full size-5 text-accent hover:text-accent bg-muted-foreground hover:bg-accent-foreground"
                onClick={() => setNetwork(undefined)}
              >
                <div>
                  <XIcon className="shrink-0" />
                </div>
              </Button>
            </SelectIcon>
          )}
        </div>
      </SelectTrigger>
      <SelectContent>
        {NETWORKS.map((network) => (
          <SelectItem key={network} value={network}>
            <div className="flex items-center gap-1.5">
              <Image
                src={`/networks/${network.toLowerCase()}.svg`}
                alt={network}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{network}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
