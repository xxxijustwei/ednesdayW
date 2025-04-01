"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useDisclosure } from "@/registry/hooks/use-disclosure";
import { Input, type InputProps } from "@/registry/ui/input";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface PhoneCode {
    name: string;
    flag: string;
    dialCode: number;
    mask?: string;
}

interface PhoneInputProps
    extends Omit<InputProps, "value" | "onChange" | "startContent"> {
    items: PhoneCode[];
    value?: string;
    onChange?: (value: string) => void;
}

const PhoneInput = ({
    items,
    variant,
    placeholder,
    disabled,
    value,
    onChange,
    ...props
}: PhoneInputProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const { open, onClose, onOpenChange } = useDisclosure();

    const handleCountrySelect = (country: PhoneCode) => {
        setSelectedItem(country);
        onClose();
        onChange?.(`+${country.dialCode} ${phoneNumber}`);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newNumber = e.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
            return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`+${selectedItem.dialCode} ${newNumber}`);
    };

    useEffect(() => {
        if (value) {
            const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
            if (match) {
                const [dialCode, phoneNumber] = match[0].split(" ");
                const dialCodeNumber = Number.parseInt(dialCode.substring(1));
                setSelectedItem(
                    items.find((c) => c.dialCode === dialCodeNumber) ||
                        items[0],
                );
                setPhoneNumber(phoneNumber);
            }
        }
    }, []);

    return (
        <Input
            {...props}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            disabled={disabled}
            variant={variant}
            placeholder={placeholder ?? selectedItem.mask}
            startContent={
                <div className="h-full flex items-center">
                    <Popover open={open} onOpenChange={onOpenChange}>
                        <PopoverTrigger asChild disabled={disabled}>
                            <button
                                type="button"
                                data-disabled={disabled?.toString()}
                                className="flex items-center justify-between gap-1 text-sm cursor-pointer data-[disabled=true]:cursor-not-allowed"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="text-base">
                                        {selectedItem.flag}
                                    </span>
                                    <span className="font-medium">
                                        {`+${selectedItem.dialCode}`}
                                    </span>
                                </div>
                                <ChevronDown className="w-4 h-4 ml-1 text-muted-foreground" />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="w-64 p-0"
                            align="start"
                            side="bottom"
                            sideOffset={16}
                            alignOffset={variant === "underline" ? -4 : -12}
                            avoidCollisions={true}
                        >
                            <div className="max-h-[300px] overflow-y-auto">
                                {items.map((item, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                                        onClick={() =>
                                            handleCountrySelect(item)
                                        }
                                    >
                                        <span className="mr-2 text-base">
                                            {item.flag}
                                        </span>
                                        <span className="flex-1 text-left">
                                            {item.name}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {`+${item.dialCode}`}
                                        </span>
                                        {item.dialCode ===
                                            selectedItem.dialCode && (
                                            <Check className="w-4 h-4 ml-2 text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="h-full border-r py-1 pl-1.5 mr-1" />
                </div>
            }
        />
    );
};

PhoneInput.displayName = "PhoneInput";

export { PhoneInput, type PhoneInputProps };
