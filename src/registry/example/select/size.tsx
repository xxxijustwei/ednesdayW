"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/registry/ui/select";
import { countries } from "./data";

export const SelectSizeExample = () => {
    const size = ["sm", "md", "lg"] as const;

    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {size.map((size) => (
                <Select key={size}>
                    <SelectTrigger size={size}>
                        <SelectValue placeholder={size} />
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
