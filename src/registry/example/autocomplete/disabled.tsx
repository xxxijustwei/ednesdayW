import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/ui/autocomplete";
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

export const AutocompleteDisabledExample = () => {
  const inputVariants = ["default", "faded", "bordered", "underline"] as const;
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <div className="flex gap-2">
        <Switch
          id="autocomplete-disabled"
          checked={disabled}
          onCheckedChange={setDisabled}
        />
        <Label htmlFor="autocomplete-disabled">Disabled</Label>
      </div>
      {inputVariants.map((variant) => (
        <TokenAutocomplete
          key={variant}
          variant={variant}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

const TokenAutocomplete = ({
  disabled,
  variant,
}: {
  disabled: boolean;
  variant: "default" | "faded" | "bordered" | "underline";
}) => {
  const [token, setToken] = useState("");
  return (
    <Autocomplete
      key={variant}
      value={token}
      onChange={setToken}
      size="md"
      variant={variant}
    >
      <AutocompleteInput
        placeholder="Select a token"
        disabled={disabled}
        className={variant !== "underline" ? "rounded-2xl" : ""}
        startContent={
          token && (
            <Image
              src={`/tokens/${token}.svg`}
              alt={token}
              width={24}
              height={24}
              className="rounded-full"
            />
          )
        }
      />
      <AutocompleteContent>
        {TOKENS.map((token) => (
          <AutocompleteItem key={token} value={token} label={token}>
            <div className="flex items-center gap-1.5">
              <Image
                src={`/tokens/${token}.svg`}
                alt={token}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{token}</span>
            </div>
          </AutocompleteItem>
        ))}
        <AutocompleteEmpty>No results.</AutocompleteEmpty>
      </AutocompleteContent>
    </Autocomplete>
  );
};
