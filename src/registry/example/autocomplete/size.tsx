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

const ICON_SIZE = {
  sm: 18,
  md: 24,
  lg: 32,
};

export const AutocompleteSizeExample = () => {
  const size = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {size.map((size) => (
        <TokenAutocomplete key={size} size={size} />
      ))}
    </div>
  );
};

const TokenAutocomplete = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const [token, setToken] = useState("");
  return (
    <Autocomplete
      key={size}
      value={token}
      onChange={setToken}
      size={size}
      variant="bordered"
    >
      <AutocompleteInput
        placeholder="Select a token"
        className="rounded-full"
        startContent={
          token && (
            <Image
              src={`/tokens/${token}.svg`}
              alt={token}
              width={ICON_SIZE[size]}
              height={ICON_SIZE[size]}
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
                width={ICON_SIZE[size]}
                height={ICON_SIZE[size]}
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
