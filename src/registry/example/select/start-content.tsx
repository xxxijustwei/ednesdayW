"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/registry/ui/select";
import { EarthIcon } from "lucide-react";
import { useState } from "react";

export const SelectStartContentExample = () => {
    const [country, setCountry] = useState("");
    return (
        <div className="flex flex-col gap-4 w-full max-w-72">
            <Select value={country} onValueChange={setCountry}>
                <SelectTrigger variant="bordered" size="lg">
                    <div className="flex items-center gap-2 overflow-hidden">
                        {!country && <EarthIcon className="shrink-0 size-5" />}
                        <SelectValue placeholder="Select a country" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    {countries.map(({ key, flag, label }) => (
                        <SelectItem key={key} value={key}>
                            {`${flag} ${label}`}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

const countries = [
    { key: "cn", flag: "🇨🇳", label: "China" },
    { key: "jp", flag: "🇯🇵", label: "Japan" },
    { key: "kr", flag: "🇰🇷", label: "Korea" },
    { key: "ru", flag: "🇷🇺", label: "Russia" },
    { key: "in", flag: "🇮🇳", label: "India" },
    { key: "br", flag: "🇧🇷", label: "Brazil" },
    { key: "de", flag: "🇩🇪", label: "Germany" },
    { key: "fr", flag: "🇫🇷", label: "France" },
    { key: "it", flag: "🇮🇹", label: "Italy" },
    { key: "es", flag: "🇪🇸", label: "Spain" },
    { key: "us", flag: "🇺🇸", label: "United States" },
    { key: "ca", flag: "🇨🇦", label: "Canada" },
    { key: "mx", flag: "🇲🇽", label: "Mexico" },
    { key: "gb", flag: "🇬🇧", label: "United Kingdom" },
    { key: "au", flag: "🇦🇺", label: "Australia" },
    { key: "nz", flag: "🇳🇿", label: "New Zealand" },
];
