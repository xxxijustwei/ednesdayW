"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { type VariantProps, cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

type TagInputContextType = {
  values: string[];
  onValuesChange: (values: string[]) => void;
  onAddChip: (value: string | string[]) => void;
  onDeleteChip: (value: string) => void;
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  invalid?: boolean;
  confirmKey?: "enter" | "space";
  pasteDelimiter?: string;
  maxTags?: number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
};

const TagInputContext = createContext<TagInputContextType>({
  values: [],
  onValuesChange: () => {},
  onAddChip: () => {},
  onDeleteChip: () => {},
  size: "md",
  confirmKey: "space",
  pasteDelimiter: ",",
  maxTags: undefined,
});

const useTagInputContext = () => {
  const context = useContext(TagInputContext);
  if (!context) {
    throw new Error("TagInput components must be used within TagInput");
  }
  return context;
};

interface TagInputProps extends React.ComponentProps<"div"> {
  values: string[];
  onValuesChange: (values: string[]) => void;
  size: TagInputContextType["size"];
  disabled?: boolean;
  invalid?: boolean;
  confirmKey?: "enter" | "space";
  pasteDelimiter?: string;
  maxTags?: number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      className,
      values,
      onValuesChange,
      size,
      disabled,
      invalid,
      onBlur,
      confirmKey = "space",
      pasteDelimiter = ",",
      maxTags,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = forwardedRef
      ? (forwardedRef as React.RefObject<HTMLInputElement>)
      : inputRef;

    const handleValuesChange = useCallbackRef(onValuesChange);

    const onDeleteChip = useCallback(
      (value: string) => {
        const changed = values.filter((v) => v !== value);
        handleValuesChange(changed);
      },
      [values, handleValuesChange],
    );

    const onAddChip = useCallback(
      (value: string | string[]) => {
        const valuesToAdd = Array.isArray(value) ? value : [value];
        const uniqueValues = valuesToAdd.filter(
          (v) => v.trim() && !values.includes(v.trim()),
        );
        if (uniqueValues.length > 0) {
          handleValuesChange([...values, ...uniqueValues]);
        }
      },
      [values, handleValuesChange],
    );

    const contextValue = React.useMemo<TagInputContextType>(
      () => ({
        values,
        onValuesChange: handleValuesChange,
        onDeleteChip,
        onAddChip,
        size,
        disabled,
        invalid,
        onBlur,
        ref,
        confirmKey,
        pasteDelimiter,
        maxTags: maxTags && maxTags > 0 ? maxTags : undefined,
      }),
      [
        values,
        handleValuesChange,
        onDeleteChip,
        onAddChip,
        size,
        disabled,
        invalid,
        onBlur,
        ref,
        confirmKey,
        pasteDelimiter,
        maxTags,
      ],
    );

    return (
      <TagInputContext.Provider value={contextValue}>
        <div className={cn("flex flex-col gap-2", className)} {...props}>
          {children}
        </div>
      </TagInputContext.Provider>
    );
  },
);

TagInput.displayName = "TagInput";

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

interface TagInputContainerProps
  extends React.ComponentProps<"div">,
    Omit<VariantProps<typeof containerVariants>, "size"> {}

const TagInputContainer = ({
  children,
  variant,
  className,
  ...props
}: TagInputContainerProps) => {
  const { invalid, disabled, size, ref } = useTagInputContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !disabled) {
      ref?.current?.focus();
    }
  };

  return (
    <div
      {...props}
      aria-invalid={invalid}
      aria-disabled={disabled}
      data-is-invalid={invalid?.toString()}
      data-disabled={disabled?.toString()}
      className={cn(
        containerVariants({ variant, size }),
        "flex-wrap gap-1.5",
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

TagInputContainer.displayName = "TagInputContainer";

interface TagInputBadgeProps extends React.ComponentProps<typeof Badge> {
  value: string;
}

const badgeVariants = cva("max-w-full", {
  variants: {
    size: {
      sm: "text-sm h-6",
      md: "text-base h-7",
      lg: "text-lg h-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const TagInputBadge = React.memo(
  ({ children, value, className, ...props }: TagInputBadgeProps) => {
    const { size, onDeleteChip } = useTagInputContext();

    const handleDelete = useCallback(() => {
      onDeleteChip(value);
    }, [onDeleteChip, value]);

    return (
      <Badge
        {...props}
        className={cn(badgeVariants({ size }), className)}
        onClick={stopPropagation}
      >
        {children}
        <Button
          aria-label={`Delete ${value}`}
          title={`Delete ${value}`}
          variant="ghost"
          size="icon"
          asChild
          className="rounded-full size-4 text-white hover:text-white bg-accent-foreground hover:bg-foreground"
          onClick={handleDelete}
        >
          <div>
            <XIcon className="shrink-0 scale-75" />
          </div>
        </Button>
      </Badge>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.value !== nextProps.value) return false;
    if (prevProps.children !== nextProps.children) return false;
    return true;
  },
);

TagInputBadge.displayName = "TagInputBadge";

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

interface TagInputBoxProps
  extends Omit<
      React.ComponentPropsWithoutRef<"input">,
      "onBlur" | "value" | "onChange"
    >,
    Omit<VariantProps<typeof inputVariants>, "size"> {}

const TagInputBox = ({ className, onKeyDown, ...props }: TagInputBoxProps) => {
  const {
    values,
    disabled,
    size,
    onAddChip,
    onDeleteChip,
    onBlur,
    ref,
    confirmKey,
    pasteDelimiter,
    maxTags,
  } = useTagInputContext();
  const [inputValue, setInputValue] = useState("");

  const canAddMoreTags = maxTags === undefined || values.length < maxTags;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const shouldAddChip =
      (confirmKey === "space" && e.key === " " && !e.nativeEvent.isComposing) ||
      (confirmKey === "enter" &&
        e.key === "Enter" &&
        !e.nativeEvent.isComposing);

    if (shouldAddChip) {
      e.preventDefault();
      if (inputValue.trim() && canAddMoreTags) {
        onAddChip(inputValue);
        setInputValue("");
      }
      return;
    }

    if (e.key === "Backspace" && !inputValue && values.length > 0) {
      const lastValue = values[values.length - 1];
      onDeleteChip(lastValue);
      return;
    }

    onKeyDown?.(e);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (!pasteDelimiter) return;

    e.preventDefault();
    const pastedText = inputValue + e.clipboardData.getData("text");
    const items = pastedText
      .split(pasteDelimiter)
      .map((item) => item.trim())
      .filter(Boolean);

    if (items.length > 0) {
      let itemsToAdd = items;

      if (maxTags !== undefined) {
        const remainingSlots = maxTags - values.length;
        itemsToAdd = items.slice(0, remainingSlots);
      }

      onAddChip(itemsToAdd);
      setInputValue("");
    }
  };

  return (
    <input
      {...props}
      aria-label="Add new chip"
      name="chip-input"
      className={cn(inputVariants({ size }), className)}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      disabled={disabled}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

TagInputBox.displayName = "TagInputBox";

export {
  TagInput,
  TagInputContainer,
  TagInputBadge,
  TagInputBox,
  useTagInputContext,
};
