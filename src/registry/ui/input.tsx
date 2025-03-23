'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { EyeIcon, EyeOffIcon } from "lucide-react";

const containerVariants = cva(
    "flex w-full rounded-md text-base relative cursor-text data-[is-invalid=true]:border-destructive focus-within:border-ring transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-muted border-2 border-input",
                bordered: "border-2 border-input",
                underline: "border-b-2 border-input rounded-none",
            },
            size: {
                sm: "h-10 min-h-8 px-3 py-1.5",
                md: "h-12 min-h-10 px-3 py-2",
                lg: "h-14 min-h-12 px-3 py-2.5",
            },
        },
        compoundVariants: [
            {
                variant: "underline",
                className: "px-0.5"
            }
        ],
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

const inputVariants = cva(
    "w-full h-full outline-none disabled:cursor-not-allowed bg-transparent",
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
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof containerVariants> {
    inputClassName?: string;
    size?: "sm" | "md" | "lg";
    isInvalid?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputClassName, type, placeholder, value, variant, size, isInvalid, disabled, startContent, endContent, ...props }, ref) => {
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
        }

        return (
            <div
                className={cn(
                    containerVariants({ variant, size }),
                    "group flex items-center justify-center gap-1.5",
                    className
                )}
                data-is-invalid={isInvalid?.toString()}
            >
                {startContent && (
                    startContent
                )}
                <div className={
                    cn(
                        "inline-flex w-full items-end h-full relative",
                        disabled && "opacity-50"
                    )
                }>
                    <input
                        type={type === "password" && endContent === undefined && showPassword ? "text" : type}
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
        )
    }
)

Input.displayName = "Input"

export { Input, type InputProps }