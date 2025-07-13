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
  const [token, setToken] = useState<string>();

  return (
    <Select value={token} onValueChange={setToken}>
      <SelectTrigger
        size="lg"
        variant={variant}
        className={variant !== "underline" ? "rounded-full" : undefined}
      >
        <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
          <SelectValue placeholder="Select a token" />
          {token && (
            <SelectIcon asChild onPointerDown={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full size-5 text-accent hover:text-accent bg-muted-foreground hover:bg-accent-foreground"
                onClick={() => setToken("")}
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
  );
};
