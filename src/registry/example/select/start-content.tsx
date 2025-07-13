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

const TOKENS = [
  "USDT",
  "USDC",
  "USDe",
  "USDS",
  "DAI",
  "USD1",
  "FDUSD",
  "USDY",
  "FRAX",
];

export const SelectTokensExample = () => {
  const [token, setToken] = useState<string>();

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <Select value={token} onValueChange={setToken}>
        <SelectTrigger size="lg" variant="bordered" className="rounded-full">
          <SelectValue placeholder="Select a token" />
        </SelectTrigger>
        <SelectContent>
          {TOKENS.map((token) => (
            <SelectItem key={token} value={token}>
              <div className="flex items-center gap-1.5">
                <Image
                  src={`/tokens/${token}.svg`}
                  alt={token}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-lg font-semibold">{token}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
