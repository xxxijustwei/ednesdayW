'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"


const containerVariants = cva(
    "flex w-full rounded-md text-base relative cursor-text focus-within:border-ring data-[is-invalid=true]:border-destructive transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-input border-2 border-input",
                bordered: "border-2 border-input",
            },
            size: {
                sm: "h-12 min-h-8 px-3 py-1.5",
                md: "h-14 min-h-10 px-3 py-2",
                lg: "h-16 min-h-12 px-3 py-2.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

const labelVariants = cva(
    cn(
        "absolute z-10 text-muted-foreground transition-all duration-200 group-data-[is-invalid=true]:text-destructive",
        "group-data-[focus=false]:group-data-[is-fill=false]:top-1/2 group-data-[focus=false]:group-data-[is-fill=false]:-translate-y-1/2",
        "group-data-[focus=true]:top-0 group-data-[focus=true]:-translate-y-0 group-data-[focus=true]:text-xs",
        "group-data-[is-fill=true]:top-0 group-data-[is-fill=true]:-translate-y-0 group-data-[is-fill=true]:text-xs"
    ),
    {
        variants: {
            size: {
                sm: "text-sm group-data-[focus=true]:text-xs group-data-[is-fill=true]:text-xs",
                md: "text-sm group-data-[focus=true]:text-xs group-data-[is-fill=true]:text-xs",
                lg: "text-base group-data-[focus=true]:text-sm group-data-[is-fill=true]:text-sm",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof containerVariants> {
    label?: string;
    size?: "sm" | "md" | "lg"
    isInvalid?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label = "Label", value, variant, size, isInvalid, disabled, onFocus, onBlur, onChange, ...props }, ref) => {
        const containerRef = React.useRef<HTMLDivElement>(null);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            containerRef.current?.setAttribute('data-focus', 'true');
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            containerRef.current?.setAttribute('data-focus', 'false');
            onBlur?.(e);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            containerRef.current?.setAttribute('data-is-fill', (!!e.target.value).toString());
            onChange?.(e);
        };

        React.useEffect(() => {
            if (containerRef.current && inputRef.current) {
                containerRef.current.setAttribute(
                    'data-is-fill',
                    (!!inputRef.current.value).toString()
                );
            }
        }, [value]);

        return (
            <div
                ref={containerRef}
                className={cn(
                    containerVariants({ variant, size }),
                    "group",
                    className
                )}
                onClick={() => {
                    inputRef.current?.focus();
                }}
                data-focus="false"
                data-is-fill="false"
                data-is-invalid={isInvalid?.toString()}
            >
                <div className={
                    cn(
                        "inline-flex w-full items-end h-full pb-0.5 relative",
                        disabled && "opacity-50"
                    )
                }>
                    {label && (
                        <div className={labelVariants({ size })}>
                            {label}
                        </div>
                    )}
                    <input
                        type={type}
                        ref={(node) => {
                            inputRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                        className="w-full outline-none disabled:cursor-not-allowed text-sm bg-transparent"
                        value={value}
                        disabled={disabled}
                        onFocus={(e) => handleFocus(e)}
                        onBlur={(e) => handleBlur(e)}
                        onChange={handleChange}
                        {...props}
                    />
                </div>
            </div>
        )
    }
)

Input.displayName = "Input"

export { Input }