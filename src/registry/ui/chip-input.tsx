"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { type VariantProps, cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { createContext, useContext } from "react";

type ChipInputContextType = {
  values: string[];
  onValuesChange: (values: string[]) => void;
  onAddChip: (value: string) => void;
  onDeleteChip: (value: string) => void;
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  invalid?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
};

const ChipInputContext = createContext<ChipInputContextType>({
  values: [],
  onValuesChange: () => {},
  onAddChip: () => {},
  onDeleteChip: () => {},
  size: "md",
});

const useChipInputContext = () => {
  const context = useContext(ChipInputContext);
  if (!context) {
    throw new Error(
      "ChipInput components must be used within ChipInputWrapper",
    );
  }
  return context;
};

interface ChipInputProps extends React.ComponentProps<"div"> {
  values: string[];
  onValuesChange: (values: string[]) => void;
  size: ChipInputContextType["size"];
  disabled?: boolean;
  isInvalid?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

const ChipInput = ({
  className,
  values,
  onValuesChange,
  size,
  disabled,
  "aria-invalid": ariaInvalid,
  onBlur,
  ref,
  children,
  ...props
}: ChipInputProps) => {
  const handleValuesChange = useCallbackRef(onValuesChange);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDeleteChip = useCallback(
    (value: string) => {
      const changed = values.filter((v) => v !== value);
      handleValuesChange(changed);
    },
    [values, handleValuesChange],
  );

  const onAddChip = useCallback(
    (value: string) => {
      if (value.trim() && !values.includes(value.trim())) {
        handleValuesChange([...values, value.trim()]);
      }
    },
    [values, handleValuesChange],
  );

  const contextValue = React.useMemo(
    () => ({
      values,
      onValuesChange: handleValuesChange,
      onDeleteChip,
      onAddChip,
      size,
      disabled,
      isInvalid: ariaInvalid,
      onBlur,
      ref: ref || inputRef,
    }),
    [
      values,
      handleValuesChange,
      onDeleteChip,
      onAddChip,
      size,
      disabled,
      ariaInvalid,
      onBlur,
      ref,
    ],
  );

  return (
    <ChipInputContext.Provider value={contextValue}>
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </ChipInputContext.Provider>
  );
};

ChipInput.displayName = "ChipInput";

const containerVariants = cva(
  cn(
    "flex w-full relative rounded-md shadow-sm",
    "text-base cursor-text",
    "data-[is-invalid=true]:border-destructive",
    "data-[disabled=true]:opacity-70 data-[disabled=true]:cursor-not-allowed",
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
      size: {
        sm: "min-h-10 px-3 py-1.5",
        md: "min-h-12 px-3 py-2",
        lg: "min-h-13 px-3 py-2.5",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        className: "px-2",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface ChipInputContainerProps
  extends React.ComponentProps<"div">,
    Omit<VariantProps<typeof containerVariants>, "size"> {}

const ChipInputContainer = ({
  children,
  variant,
  className,
  ...props
}: ChipInputContainerProps) => {
  const { invalid, disabled, size, ref } = useChipInputContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !disabled) {
      ref?.current?.focus();
    }
  };

  return (
    <div
      className={cn(
        containerVariants({ variant, size }),
        "flex-wrap gap-1.5",
        className,
      )}
      data-is-invalid={invalid?.toString()}
      data-disabled={disabled?.toString()}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

ChipInputContainer.displayName = "ChipInputContainer";

const badgeVariants = cva(cn("max-w-full"), {
  variants: {
    size: {
      sm: "h-",
      md: "text-base",
      lg: "text-lg",
    },
  },
});

interface ChipInputBadgeProps extends React.ComponentProps<typeof Badge> {
  value: string;
}

const ChipInputBadge = ({
  children,
  value,
  className,
  ...props
}: ChipInputBadgeProps) => {
  const { onDeleteChip } = useChipInputContext();

  return (
    <Badge
      {...props}
      className={cn("max-w-full", className)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="rounded-full size-4 text-white hover:text-white bg-accent-foreground hover:bg-foreground"
        onClick={() => onDeleteChip(value)}
      >
        <div>
          <XIcon className="shrink-0 scale-75" />
        </div>
      </Button>
    </Badge>
  );
};

ChipInputBadge.displayName = "ChipInputBadge";

const inputVariants = cva(
  cn(
    "flex-1 min-w-12 outline-none bg-transparent",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed",
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

interface ChipInputBoxProps
  extends Omit<
      React.ComponentPropsWithoutRef<"input">,
      "onBlur" | "value" | "onChange"
    >,
    Omit<VariantProps<typeof inputVariants>, "size"> {}

const ChipInputBox = ({
  className,
  onKeyDown,
  ...props
}: ChipInputBoxProps) => {
  const { values, disabled, size, onAddChip, onDeleteChip, onBlur, ref } =
    useChipInputContext();
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      if (inputValue.trim()) {
        onAddChip(inputValue);
        setInputValue("");
      }
      return;
    }

    if (e.key === "Backspace" && !inputValue) {
      const lastValue = values[values.length - 1];
      onDeleteChip(lastValue);
      return;
    }

    onKeyDown?.(e);
  };

  return (
    <input
      {...props}
      name="chip-input"
      className={cn(inputVariants({ size }), className)}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

ChipInputBox.displayName = "ChipInputBox";

export {
  ChipInput,
  ChipInputContainer,
  ChipInputBadge,
  ChipInputBox,
  useChipInputContext,
};
