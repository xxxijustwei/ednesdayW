// This code is based on downshift-shadcn-combobox by OmerMakesStuff
// Source: https://github.com/OmerMakesStuff/downshift-shadcn-combobox
// Licensed under the MIT License

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/registry/ui/input";
import { cva } from "class-variance-authority";
import {
  type UseComboboxGetInputPropsReturnValue,
  type UseComboboxProps,
  type UseComboboxReturnValue,
  useCombobox,
} from "downshift";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import {
  Children,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AutocompleteItemType = {
  label: string;
  value: string;
  disabled?: boolean;
};

type AutocompleteContextValue = Partial<
  Pick<
    UseComboboxReturnValue<AutocompleteItemType>,
    | "getInputProps"
    | "getToggleButtonProps"
    | "getItemProps"
    | "getMenuProps"
    | "highlightedIndex"
    | "inputValue"
    | "isOpen"
    | "selectedItem"
    | "selectItem"
    | "setInputValue"
  > & {
    size: InputProps["size"];
    variant: InputProps["variant"];
    filteredItems: AutocompleteItemType[];
    items: AutocompleteItemType[];
    onItemsChange: (items: AutocompleteItemType[]) => void;
    onChange: (value: string) => void;
    openedOnce: boolean;
  }
>;

const AutocompleteContext = createContext<AutocompleteContextValue>(
  {} as AutocompleteContextValue,
);

const useAutocompleteContext = () => useContext(AutocompleteContext);

type AutocompleteProps = PropsWithChildren<{
  value?: string;
  onChange?: (value: string) => void;
  size?: InputProps["size"];
  variant?: InputProps["variant"];
  filterItems?: (
    search: string,
    items: AutocompleteItemType[],
  ) => AutocompleteItemType[];
}>;

const { stateChangeTypes } = useCombobox;

const defaultFilter = (inputValue: string, items: AutocompleteItemType[]) => {
  return items.filter(
    (item) =>
      !inputValue ||
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

const Autocomplete = ({
  size,
  variant,
  value,
  onChange,
  filterItems = defaultFilter,
  children,
}: AutocompleteProps) => {
  const [items, setItems] = useState<AutocompleteItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<AutocompleteItemType[]>(
    [],
  );
  const [openedOnce, setOpenedOnce] = useState(false);

  const stateReducer = useCallback<
    NonNullable<UseComboboxProps<AutocompleteItemType>["stateReducer"]>
  >(
    (prev, { type, changes }) => {
      switch (type) {
        case stateChangeTypes.InputChange: {
          const filteredEnabledItems = filterItems(
            changes.inputValue || prev.inputValue,
            items,
          ).filter(({ disabled }) => !disabled);
          const highlightedIndex =
            typeof changes.highlightedIndex === "number"
              ? changes.highlightedIndex
              : prev.highlightedIndex;

          return {
            ...changes,
            highlightedIndex:
              changes.inputValue &&
              filteredEnabledItems.length > 0 &&
              highlightedIndex < 0
                ? 0
                : changes.highlightedIndex,
          };
        }

        case stateChangeTypes.InputBlur:
        case stateChangeTypes.InputClick:
        case stateChangeTypes.InputKeyDownEnter:
        case stateChangeTypes.InputKeyDownEscape: {
          if (changes.isOpen || !prev.isOpen)
            return {
              ...changes,
              inputValue: prev.inputValue,
              selectedItem: prev.selectedItem,
            };
          if (!prev.inputValue && prev.highlightedIndex < 0)
            return {
              ...changes,
              inputValue: "",
              selectedItem: null,
            };

          const inputValue =
            changes.selectedItem?.label || prev.selectedItem?.label || "";
          return { ...changes, inputValue };
        }

        default:
          return changes;
      }
    },
    [filterItems, items],
  );

  const {
    getInputProps,
    getToggleButtonProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    inputValue,
    isOpen,
    selectedItem,
    selectItem,
    setInputValue,
  } = useCombobox({
    items: filteredItems,
    itemToString: (item) => (item ? item.label : ""),
    isItemDisabled: (item) => item.disabled ?? false,

    selectedItem:
      typeof value !== "undefined"
        ? items.find((item) => item.value === value) || null
        : undefined,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange?.(selectedItem?.value || "");
    },

    stateReducer,
  });

  useEffect(() => {
    if (isOpen && !openedOnce) setOpenedOnce(isOpen);
  }, [isOpen, openedOnce]);

  useEffect(() => {
    setFilteredItems(filterItems(inputValue, items));
  }, [filterItems, inputValue, items]);

  return (
    <AutocompleteContext.Provider
      value={{
        size,
        variant,
        filteredItems,
        getInputProps,
        getToggleButtonProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        items,
        onItemsChange: setItems,
        onChange,
        openedOnce,
        selectedItem,
        selectItem,
        setInputValue,
      }}
    >
      <Popover open={isOpen}>{children}</Popover>
    </AutocompleteContext.Provider>
  );
};

type AutocompleteInputProps = Omit<
  InputProps,
  keyof UseComboboxGetInputPropsReturnValue | "endContent"
>;

const AutocompleteInput = (props: AutocompleteInputProps) => {
  const { getInputProps, getToggleButtonProps, size, variant } =
    useAutocompleteContext();

  return (
    <PopoverTrigger className="group outline-hidden">
      <Input
        size={size}
        variant={variant}
        {...props}
        {...getInputProps?.()}
        endContent={
          <div aria-label="toggle menu" {...getToggleButtonProps?.()}>
            <ChevronDownIcon
              className={cn(
                "cursor-default size-4 opacity-50 transition-transform duration-100",
                "group-data-[state=open]:rotate-180",
              )}
            />
          </div>
        }
      />
    </PopoverTrigger>
  );
};

type AutocompleteItemProps = AutocompleteItemType &
  ComponentPropsWithoutRef<"li">;

const autocompleteItemVariants = cva(
  cn(
    "relative flex cursor-default select-none flex-col justify-center rounded-sm py-1.5 pr-8 pl-2",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",
  ),
  {
    variants: {
      size: {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const AutocompleteItem = ({
  label,
  value,
  disabled,
  className,
  children,
  ...props
}: AutocompleteItemProps) => {
  const { size, filteredItems, getItemProps, selectedItem } =
    useAutocompleteContext();

  const isSelected = selectedItem?.value === value;
  const item = useMemo(
    () => ({ disabled, label, value }),
    [disabled, label, value],
  );
  const index = (filteredItems || []).findIndex(
    (item) => item.value.toLowerCase() === value.toLowerCase(),
  );
  if (index < 0) return null;

  return (
    <li
      {...props}
      data-index={index}
      className={cn(
        autocompleteItemVariants({ size }),
        !children && "ps-8",
        className,
      )}
      {...getItemProps?.({ item, index })}
    >
      {isSelected && (
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
          <CheckIcon className="size-4" />
        </span>
      )}
      {children || <span className="text-sm text-foreground">{label}</span>}
    </li>
  );
};

const AutocompleteContent = ({
  onOpenAutoFocus,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof PopoverContent>) => {
  const { getMenuProps, isOpen, openedOnce, onItemsChange } =
    useAutocompleteContext();

  const childItems = useMemo(
    () =>
      Children.toArray(children).filter(
        (child): child is ReactElement<AutocompleteItemProps> =>
          isValidElement(child) && child.type === AutocompleteItem,
      ),
    [children],
  );

  useEffect(() => {
    onItemsChange?.(
      childItems.map((child) => ({
        disabled: child.props.disabled,
        label: child.props.label,
        value: child.props.value,
      })),
    );
  }, [childItems, onItemsChange]);

  return (
    <PopoverContent
      {...props}
      forceMount
      asChild
      onOpenAutoFocus={(e) => {
        e.preventDefault();
        onOpenAutoFocus?.(e);
      }}
      className={cn(
        "w-[var(--radix-popover-trigger-width)] p-0",
        "max-h-80 overflow-y-auto no-scrollbar",
        !isOpen && "pointer-events-none",
        !openedOnce && "hidden",
        className,
      )}
      {...getMenuProps?.({}, { suppressRefError: true })}
    >
      <div className="p-1">{children}</div>
    </PopoverContent>
  );
};

const AutocompleteEmpty = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { filteredItems } = useAutocompleteContext();
  if (filteredItems && filteredItems.length > 0) return null;

  return (
    <div
      {...props}
      className={cn("p-4 text-center text-sm text-muted-foreground", className)}
    >
      {children}
    </div>
  );
};

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteContent,
  AutocompleteEmpty,
  useAutocompleteContext,
};
