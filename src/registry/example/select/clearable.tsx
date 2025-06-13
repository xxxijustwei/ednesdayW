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
import { useState } from "react";

export const SelectVariantExample = () => {
  const variants = ["default", "faded", "bordered", "underline"] as const;
  const [country, setCountry] = useState<string>();

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {variants.map((variant) => (
        <Select key={variant} value={country} onValueChange={setCountry}>
          <SelectTrigger size="md" variant={variant}>
            <div className="w-full flex items-center justify-between gap-1 overflow-hidden">
              <SelectValue placeholder="Select a country" />
              {country && (
                <SelectIcon asChild onPointerDown={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full size-4 text-white hover:text-white bg-accent-foreground hover:bg-foreground"
                    onClick={() => setCountry("")}
                  >
                    <div>
                      <XIcon className="shrink-0 scale-75" />
                    </div>
                  </Button>
                </SelectIcon>
              )}
            </div>
          </SelectTrigger>
          <SelectContent>
            {countries.map(({ key, label }) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};

const countries = [
  { key: "cn", label: "China" },
  { key: "jp", label: "Japan" },
  { key: "kr", label: "Korea" },
  { key: "ru", label: "Russia" },
  { key: "in", label: "India" },
  { key: "br", label: "Brazil" },
  { key: "de", label: "Germany" },
  { key: "fr", label: "France" },
  { key: "it", label: "Italy" },
  { key: "es", label: "Spain" },
  { key: "us", label: "United States" },
  { key: "ca", label: "Canada" },
  { key: "mx", label: "Mexico" },
  { key: "gb", label: "United Kingdom" },
  { key: "au", label: "Australia" },
  { key: "nz", label: "New Zealand" },
];
