"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/registry/ui/select";
import { EarthIcon } from "lucide-react";

export const SelectStartContentExample = () => {
    const inputVariants = [
        "default",
        "faded",
        "bordered",
        "underline",
    ] as const;

    return (
        <div className="flex flex-col gap-4 w-full max-w-72">
            {inputVariants.map((variant) => (
                <Select key={variant}>
                    <SelectTrigger variant={variant} size="lg">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <EarthIcon className="shrink-0 size-5" />
                            <SelectValue placeholder="Select a country" />
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
