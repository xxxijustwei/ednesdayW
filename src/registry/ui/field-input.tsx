"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";

export const containerVariants = cva(
  cn(
    "flex w-full px-2.5 relative rounded-lg",
    "text-base cursor-text",
    "data-[is-invalid=true]:border-destructive",
    "data-[disabled=true]:opacity-70 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:hover:border-input",
    "hover:border-ring focus-within:border-ring",
    "transition-all duration-200",
  ),
  {
    variants: {
      variant: {
        default: "bg-muted border-2 border-input",
        faded: cn(
          "bg-muted border-2 border-muted",
          "hover:bg-accent hover:border-accent",
          "focus-within:bg-accent focus-within:border-accent",
          "data-[disabled=true]:hover:bg-muted data-[disabled=true]:hover:border-muted",
        ),
        bordered: "border-2 border-input",
        underline: "border-b-2 border-input rounded-none",
      },
      size: {
        sm: "h-12 py-1.5",
        md: "h-14 py-2",
        lg: "h-16 py-2",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        size: "sm",
        className: "px-1 h-11",
      },
      {
        variant: "underline",
        size: "md",
        className: "px-1 h-13",
      },
      {
        variant: "underline",
        size: "lg",
        className: "px-1 h-14",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const inputVariants = cva(
  cn(
    "w-full outline-hidden",
    "disabled:cursor-not-allowed",
    "bg-transparent",
    "[&:-webkit-autofill]:bg-transparent",
    "[&:-webkit-autofill:hover]:bg-transparent",
    "[&:-webkit-autofill:focus]:bg-transparent",
    "[&:-webkit-autofill:active]:bg-transparent",
    "[&:-webkit-autofill]:[transition-delay:9999s]",
  ),
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-sm",
        lg: "text-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const labelVariants = cva(
  cn(
    "absolute left-0 top-1/2 -translate-y-1/2 origin-top-left pointer-events-none",
    "text-accent-foreground/70",
    "transition-all duration-200",
    "group-data-[is-invalid=true]:text-destructive",
  ),
  {
    variants: {
      size: {
        sm: "text-sm group-focus-within:scale-85 group-focus-within:-translate-y-4.5 group-data-[zoom-out=true]:scale-85 group-data-[zoom-out=true]:-translate-y-4.5",
        md: "text-sm group-focus-within:scale-85 group-focus-within:-translate-y-5 group-data-[zoom-out=true]:scale-85 group-data-[zoom-out=true]:-translate-y-5",
        lg: "text-md group-focus-within:scale-85 group-focus-within:-translate-y-6 group-data-[zoom-out=true]:scale-85 group-data-[zoom-out=true]:-translate-y-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface FieldInputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof containerVariants> {
  id: string;
  label: string;
  inputClassName?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>(
  (
    {
      className,
      inputClassName,
      type,
      placeholder,
      value,
      defaultValue,
      variant,
      size,
      label,
      "aria-invalid": ariaInvalid,
      disabled,
      startContent,
      endContent,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [uncontrolledValue, setUncontrolledValue] = React.useState(
      defaultValue || "",
    );
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current,
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : uncontrolledValue;
    const zoomOut =
      Boolean(currentValue) || !!placeholder || !!startContent || !!endContent;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledValue(e.target.value);
      }
      props.onChange?.(e);
    };

    const endContentRender = () => {
      if (endContent) {
        return endContent;
      }

      if (type === "password") {
        return (
          <button
            aria-label="Change password visibility"
            type="button"
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        );
      }

      return null;
    };

    return (
      <div
        className={cn(
          containerVariants({ variant, size }),
          "group flex items-center justify-center gap-1.5",
          className,
        )}
        data-is-invalid={ariaInvalid?.toString()}
        data-disabled={disabled?.toString()}
        data-zoom-out={zoomOut.toString()}
        onClick={() => {
          if (!disabled && inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <div className="inline-flex w-full items-end gap-1.5 h-full relative">
          {startContent && startContent}
          <input
            type={
              type === "password" && endContent === undefined && showPassword
                ? "text"
                : type
            }
            ref={inputRef}
            className={cn(inputVariants({ size }), inputClassName)}
            disabled={disabled}
            placeholder={placeholder}
            {...(isControlled ? { value: currentValue } : { defaultValue })}
            {...props}
            onChange={handleChange}
          />
          {endContentRender()}
          <label htmlFor={props.id} className={cn(labelVariants({ size }))}>
            {label}
          </label>
        </div>
      </div>
    );
  },
);

FieldInput.displayName = "FieldInput";

export { FieldInput, type FieldInputProps };
