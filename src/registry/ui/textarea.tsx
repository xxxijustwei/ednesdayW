"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

export const containerVariants = cva(
  cn(
    "flex w-full px-2.5 py-2 relative rounded-md shadow-sm",
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
        underline: "border-b-2 border-input rounded-none shadow-none",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        className: "px-1",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  },
);

interface TextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size" | "style">,
    TextareaAutosizeProps,
    VariantProps<typeof containerVariants> {
  textareaClassName?: string;
  disableResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      textareaClassName,
      placeholder,
      value,
      variant,
      "aria-invalid": ariaInvalid,
      disabled,
      minRows,
      maxRows,
      disableResize,
      ...props
    },
    ref,
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const setRefs = React.useCallback((element: HTMLTextAreaElement | null) => {
      textareaRef.current = element;
      if (ref) {
        if (typeof ref === "function") {
          ref(element);
        } else {
          ref.current = element;
        }
      }
    }, []);

    return (
      <div
        className={cn(
          containerVariants({ variant }),
          "group flex items-start justify-center gap-1.5",
          className,
        )}
        data-is-invalid={ariaInvalid?.toString()}
        data-disabled={disabled?.toString()}
        onClick={() => {
          if (!disabled && textareaRef.current) {
            textareaRef.current.focus();
          }
        }}
      >
        <div className="inline-flex w-full items-start relative">
          <TextareaAutosize
            ref={setRefs}
            className={cn(
              "w-full min-h-[48px] outline-hidden bg-transparent",
              "disabled:cursor-not-allowed placeholder:text-muted-foreground",
              disableResize ? "resize-none" : "resize-y",
              textareaClassName,
            )}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            minRows={minRows || 2}
            maxRows={maxRows || 4}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea, type TextareaProps };
