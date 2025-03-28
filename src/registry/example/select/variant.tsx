"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/registry/ui/select";
import { countries } from "./data";

export const SelectVariantExample = () => {
    const variants = ["default", "bordered", "underline"] as const;

    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {variants.map((variant) => (
                <Select key={variant}>
                    <SelectTrigger size="md" variant={variant}>
                        <SelectValue placeholder={variant} />
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
