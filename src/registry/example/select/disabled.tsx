import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

export const SelectDisabledExample = () => {
  const inputVariants = ["default", "faded", "bordered", "underline"] as const;
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <div className="flex gap-2">
        <Switch
          id="select-disabled"
          checked={disabled}
          onCheckedChange={setDisabled}
        />
        <Label htmlFor="select-disabled">Disabled</Label>
      </div>
      {inputVariants.map((variant) => (
        <TokenSelect key={variant} variant={variant} disabled={disabled} />
      ))}
    </div>
  );
};

const TokenSelect = ({
  disabled,
  variant,
}: {
  disabled: boolean;
  variant: "default" | "faded" | "bordered" | "underline";
}) => {
  const [token, setToken] = useState<string>();

  return (
    <Select value={token} onValueChange={setToken}>
      <SelectTrigger
        size="md"
        disabled={disabled}
        variant={variant}
        className={variant !== "underline" ? "rounded-full" : undefined}
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
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-semibold">{token}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
