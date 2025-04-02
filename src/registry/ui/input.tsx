"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";

export const containerVariants = cva(
    cn(
        "flex w-full relative rounded-md shadow-sm",
        "text-base cursor-text",
        "data-[is-invalid=true]:border-destructive",
        "data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:hover:border-input",
        "hover:border-ring focus-within:border-ring",
        "transition-all duration-200",
    ),
    {
        variants: {
            variant: {
                default: "bg-muted border-2 border-input",
                faded: "bg-muted border-2 border-muted hover:bg-accent hover:border-accent focus-within:bg-accent focus-within:border-accent data-[disabled=true]:hover:bg-muted data-[disabled=true]:hover:border-muted",
                bordered: "border-2 border-input",
                underline: "border-b-2 border-input rounded-none shadow-none",
            },
            size: {
                sm: "h-10 px-3 py-1.5",
                md: "h-12 px-3 py-2",
                lg: "h-14 px-3 py-2.5",
            },
        },
        compoundVariants: [
            {
                variant: "underline",
                className: "px-0.5",
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
        "w-full h-full outline-hidden",
        "disabled:cursor-not-allowed",
        "bg-transparent",
        "placeholder:text-muted-foreground",
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
                md: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
);

interface InputProps
    extends Omit<React.ComponentProps<"input">, "size">,
        VariantProps<typeof containerVariants> {
    inputClassName?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            inputClassName,
            type,
            placeholder,
            value,
            variant,
            size,
            "aria-invalid": ariaInvalid,
            disabled,
            startContent,
            endContent,
            ...props
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false);

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
                        {!showPassword ? (
                            <EyeOffIcon size={20} />
                        ) : (
                            <EyeIcon size={20} />
                        )}
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
            >
                {startContent && startContent}
                <div className="inline-flex w-full items-end h-full relative">
                    <input
                        type={
                            type === "password" &&
                            endContent === undefined &&
                            showPassword
                                ? "text"
                                : type
                        }
                        ref={ref}
                        className={cn(inputVariants({ size }), inputClassName)}
                        value={value}
                        disabled={disabled}
                        placeholder={placeholder}
                        {...props}
                    />
                </div>
                {endContentRender()}
            </div>
        );
    },
);

Input.displayName = "Input";

export { Input, type InputProps };
