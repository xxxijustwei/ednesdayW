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

export const AutocompleteStartContentExample = () => {
  const [token, setToken] = useState<string>("");

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <Autocomplete value={token} onChange={setToken} variant="bordered">
        <AutocompleteInput
          placeholder="Select a token"
          className="rounded-full"
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
    </div>
  );
};
