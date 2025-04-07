"use client";

import { cn } from "@/lib/utils";
import { sanitizeHex } from "@/registry/lib/colors";
import { ColorPicker } from "@/registry/ui/color-picker";
import { Input, type InputProps } from "@/registry/ui/input";

interface ColorInputProps
    extends Omit<InputProps, "value" | "onChange" | "startContent"> {
    value: string;
    onChange: (value: string) => void;
}

const ColorInput = ({
    variant,
    value = "#4ec4b8",
    onChange,
    ...props
}: ColorInputProps) => {
    return (
        <Input
            {...props}
            variant={variant}
            className={cn("p-2", variant !== "underline" && "rounded-lg")}
            value={value}
            onChange={(e) => {
                const hex = sanitizeHex(e.target.value);
                onChange(hex);
            }}
            startContent={
                <ColorPicker
                    sideOffset={16}
                    alignOffset={variant === "underline" ? -4 : -12}
                    value={value}
                    onChange={(value) => {
                        onChange(value);
                    }}
                />
            }
        />
    );
};

export { ColorInput, type ColorInputProps };
