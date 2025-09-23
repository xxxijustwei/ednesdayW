"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

interface TextareaContext {
  ref?: React.RefObject<HTMLTextAreaElement | null>;
  disabled?: boolean;
}

const TextareaContext = React.createContext<TextareaContext>(
  {} as TextareaContext,
);

const useTextareaContext = () => {
  const context = React.useContext(TextareaContext);
  if (!context) {
    throw new Error("Textarea must be used within TextareaContainer");
  }
  return context;
};

export const containerVariants = cva(
  cn(
    "group flex flex-col gap-1 w-full h-fit px-2.5 py-2 relative rounded-lg",
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

interface TextareaContainerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariants> {
  disabled?: boolean;
}

const TextareaContainer = React.forwardRef<
  HTMLTextAreaElement,
  TextareaContainerProps
>(
  (
    { className, "aria-invalid": ariaInvalid, disabled, variant, ...props },
    ref,
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle<
      HTMLTextAreaElement | null,
      HTMLTextAreaElement | null
    >(ref, () => textareaRef.current);
    return (
      <TextareaContext.Provider value={{ ref: textareaRef, disabled }}>
        <div
          className={cn(containerVariants({ variant }), className)}
          data-is-invalid={ariaInvalid?.toString()}
          data-disabled={disabled?.toString()}
          onClick={() => {
            if (!disabled && textareaRef.current) {
              textareaRef.current.focus();
            }
          }}
          {...props}
        />
      </TextareaContext.Provider>
    );
  },
);

TextareaContainer.displayName = "TextareaContainer";

const TextareaLabel = ({
  htmlFor,
  className,
  children,
  ...props
}: React.ComponentProps<"label">) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm text-accent-foreground/70 origin-top-left",
        "transition-all duration-200",
        "group-data-[is-invalid=true]:text-destructive",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

interface TextareaProps
  extends Omit<TextareaAutosizeProps, "disabled" | "aria-invalid"> {
  disableResize?: boolean;
}

const Textarea = ({
  className,
  placeholder,
  minRows,
  maxRows,
  disableResize,
  ...props
}: TextareaProps) => {
  const { ref, disabled } = useTextareaContext();

  return (
    <div className="inline-flex w-full items-start relative">
      <TextareaAutosize
        ref={ref}
        className={cn(
          "w-full min-h-[48px] outline-hidden bg-transparent",
          "disabled:cursor-not-allowed placeholder:text-muted-foreground",
          disableResize ? "resize-none" : "resize-y",
          className,
        )}
        disabled={disabled}
        placeholder={placeholder}
        minRows={minRows || 2}
        maxRows={maxRows || 4}
        {...props}
      />
    </div>
  );
};

Textarea.displayName = "Textarea";

export {
  Textarea,
  TextareaContainer,
  TextareaLabel,
  type TextareaProps,
  type TextareaContainerProps,
  useTextareaContext,
};
