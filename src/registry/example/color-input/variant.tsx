import { ColorInput } from "@/registry/ui/color-input";
import { useState } from "react";

export const inputVariants = [
    "default",
    "faded",
    "bordered",
    "underline",
] as const;

export const ColorInputVariantExample = () => {
    const [hex, setHex] = useState("#4ec4b8");
    const [hexAlpha, setHexAlpha] = useState("#4ec4b880");
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {inputVariants.map((variant, idx) => (
                <ColorInput
                    key={variant}
                    type={idx % 2 === 0 ? "hex" : "hex-alpha"}
                    variant={variant}
                    value={idx % 2 === 0 ? hex : hexAlpha}
                    onChange={(value) =>
                        idx % 2 === 0 ? setHex(value) : setHexAlpha(value)
                    }
                />
            ))}
        </div>
    );
};
