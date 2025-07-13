"use client";

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
  {
    value: "USDT",
    disabled: false,
  },
  {
    value: "USDC",
    disabled: true,
  },
  {
    value: "USDe",
    disabled: false,
  },
  {
    value: "USDS",
    disabled: false,
  },
];

export const AutocompleteDisabledItemExample = () => {
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
    <Autocomplete key={variant} value={token} onChange={setToken}>
      <AutocompleteInput
        placeholder="Select a token"
        size="md"
        variant={variant}
        className={variant !== "underline" ? "rounded-full" : ""}
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
        {TOKENS.map(({ value, disabled }) => (
          <AutocompleteItem
            key={value}
            value={value}
            label={value}
            disabled={disabled}
          >
            <div className="flex items-center gap-1.5">
              <Image
                src={`/tokens/${value}.svg`}
                alt={value}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-semibold">{value}</span>
            </div>
          </AutocompleteItem>
        ))}
        <AutocompleteEmpty>No results.</AutocompleteEmpty>
      </AutocompleteContent>
    </Autocomplete>
  );
};
