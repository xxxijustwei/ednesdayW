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

export const AutocompleteInvalidExample = () => {
  const inputVariants = ["default", "faded", "bordered", "underline"] as const;

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {inputVariants.map((variant) => (
        <TokenAutocomplete key={variant} variant={variant} />
      ))}
    </div>
  );
};

const TokenAutocomplete = ({
  variant,
}: {
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
        aria-invalid
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
              <span className="font-semibold">{token}</span>
            </div>
          </AutocompleteItem>
        ))}
        <AutocompleteEmpty>No results.</AutocompleteEmpty>
      </AutocompleteContent>
    </Autocomplete>
  );
};
