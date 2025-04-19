"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { sanitizeHex } from "@/registry/lib/colors";
import { cn } from "@/registry/lib/utils";
import type * as PopoverPrimitive from "@radix-ui/react-popover";
import type React from "react";
import { useMemo } from "react";
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful";

interface ColorPickerProps
    extends Omit<
        React.ComponentProps<typeof PopoverPrimitive.Content>,
        "value" | "onChange"
    > {
    disabled?: boolean;
    type?: "hex" | "hex-alpha";
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
}

const ColorPicker = ({
    disabled,
    className,
    value = "#4ec4b8",
    type = "hex",
    onChange,
    onBlur,
    ...props
}: ColorPickerProps) => {
    const parsedValue = useMemo(() => sanitizeHex(value), [value]);

    return (
        <Popover>
            <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
                <Button
                    type="button"
                    className={cn("size-8 rounded-lg", className)}
                    style={{ backgroundColor: parsedValue }}
                    size="icon"
                    variant="ghost"
                    disabled={disabled}
                />
            </PopoverTrigger>
            <PopoverContent
                {...props}
                className="w-fit p-0 bg-transparent border-none shadow-none"
            >
                {type === "hex" ? (
                    <HexColorPicker color={parsedValue} onChange={onChange} />
                ) : (
                    <HexAlphaColorPicker
                        color={parsedValue}
                        onChange={onChange}
                    />
                )}
            </PopoverContent>
        </Popover>
    );
};

export { ColorPicker, type ColorPickerProps };
