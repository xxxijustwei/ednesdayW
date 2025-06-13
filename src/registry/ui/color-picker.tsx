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
          style={{
            backgroundColor: parsedValue,
            backgroundImage: !parsedValue
              ? `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".15"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`
              : undefined,
          }}
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
          <HexColorPicker
            color={parsedValue ?? "#000000"}
            onChange={onChange}
          />
        ) : (
          <HexAlphaColorPicker
            color={parsedValue ?? "#000000"}
            onChange={onChange}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export { ColorPicker, type ColorPickerProps };
