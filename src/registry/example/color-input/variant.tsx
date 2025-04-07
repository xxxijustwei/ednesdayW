import { ColorInput } from "@/registry/ui/color-input";
import { useState } from "react";

export const inputVariants = [
    "default",
    "faded",
    "bordered",
    "underline",
] as const;

export const ColorInputVariantExample = () => {
    const [color, setColor] = useState("#4ec4b8");
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {inputVariants.map((variant) => (
                <ColorInput
                    key={variant}
                    variant={variant}
                    value={color}
                    onChange={(value) => setColor(value)}
                />
            ))}
        </div>
    );
};
