"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import Image from "next/image";

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
          <SelectTrigger
            size={size}
            variant="bordered"
            className="rounded-full"
          >
            <SelectValue placeholder="Select a token" />
          </SelectTrigger>
          <SelectContent>
            {TOKENS.map((token) => (
              <SelectItem key={token} value={token}>
                <div className="flex items-center gap-1.5">
                  <Image
                    src={`/tokens/${token}.svg`}
                    alt={token}
                    width={ICON_SIZE[size]}
                    height={ICON_SIZE[size]}
                    className="rounded-full"
                  />
                  <span className="font-semibold">{token}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
