"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/registry/ui/input";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Country {
    name: string;
    flag: string;
    dialCode: string;
}

const countries: Country[] = [
    { name: "Hong Kong", flag: "🇭🇰", dialCode: "+852" },
    { name: "United States", flag: "🇺🇸", dialCode: "+1" },
    { name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
    { name: "Australia", flag: "🇦🇺", dialCode: "+61" },
    { name: "Germany", flag: "🇩🇪", dialCode: "+49" },
    { name: "France", flag: "🇫🇷", dialCode: "+33" },
    { name: "Canada", flag: "🇨🇦", dialCode: "+1" },
    { name: "China", flag: "🇨🇳", dialCode: "+86" },
    { name: "Japan", flag: "🇯🇵", dialCode: "+81" },
    { name: "India", flag: "🇮🇳", dialCode: "+91" },
    { name: "Brazil", flag: "🇧🇷", dialCode: "+55" },
    { name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
    { name: "Russia", flag: "🇷🇺", dialCode: "+7" },
    { name: "Mexico", flag: "🇲🇽", dialCode: "+52" },
    { name: "Spain", flag: "🇪🇸", dialCode: "+34" },
    { name: "Italy", flag: "🇮🇹", dialCode: "+39" },
    { name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
    { name: "Netherlands", flag: "🇳🇱", dialCode: "+31" },
    { name: "Sweden", flag: "🇸🇪", dialCode: "+46" },
    { name: "Switzerland", flag: "🇨🇭", dialCode: "+41" },
];

export const PhoneInputExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <PhoneInput />
            <BorderedPhoneInput />
            <UnderlinePhoneInput />
        </div>
    );
};

interface PhoneInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
    const [country, setCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (value) {
            const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
            if (match) {
                const [dialCode, phoneNumber] = match[0].split(" ");
                setCountry(
                    countries.find((c) => c.dialCode === dialCode) ||
                        countries[0],
                );
                setPhoneNumber(phoneNumber);
            }
        }
    }, []);

    const handleCountrySelect = (country: Country) => {
        setCountry(country);
        setIsOpen(false);
        onChange?.(`${country.dialCode} ${phoneNumber}`);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newNumber = e.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
            return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
    };

    return (
        <Input
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            startContent={
                <div className="h-full flex items-center">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                className="flex items-center justify-between gap-1 text-sm cursor-pointer"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="text-base">
                                        {country.flag}
                                    </span>
                                    <span className="font-medium">
                                        {country.dialCode}
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
                            alignOffset={-12}
                            avoidCollisions={true}
                        >
                            <div className="max-h-[300px] overflow-y-auto">
                                {countries.map((item, index) => (
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
                                            {item.dialCode}
                                        </span>
                                        {item.dialCode === country.dialCode && (
                                            <Check className="w-4 h-4 ml-2 text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="h-full border-r py-1 pl-1.5" />
                </div>
            }
        />
    );
};

const BorderedPhoneInput = ({ value, onChange }: PhoneInputProps) => {
    const [country, setCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (value) {
            const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
            if (match) {
                const [dialCode, phoneNumber] = match[0].split(" ");
                setCountry(
                    countries.find((c) => c.dialCode === dialCode) ||
                        countries[0],
                );
                setPhoneNumber(phoneNumber);
            }
        }
    }, []);

    const handleCountrySelect = (country: Country) => {
        setCountry(country);
        setIsOpen(false);
        onChange?.(`${country.dialCode} ${phoneNumber}`);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newNumber = e.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
            return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
    };

    return (
        <Input
            variant="bordered"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            startContent={
                <div className="h-full flex items-center">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                className="flex items-center justify-between gap-1 text-sm cursor-pointer"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="text-base">
                                        {country.flag}
                                    </span>
                                    <span className="font-medium">
                                        {country.dialCode}
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
                            alignOffset={-12}
                            avoidCollisions={true}
                        >
                            <div className="max-h-[300px] overflow-y-auto">
                                {countries.map((item, index) => (
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
                                            {item.dialCode}
                                        </span>
                                        {item.dialCode === country.dialCode && (
                                            <Check className="w-4 h-4 ml-2 text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="h-full border-r py-1 pl-1.5" />
                </div>
            }
        />
    );
};

const UnderlinePhoneInput = ({ value, onChange }: PhoneInputProps) => {
    const [country, setCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (value) {
            const match = value.match(/^\+\d{1,3}\s\d{7,14}$/);
            if (match) {
                const [dialCode, phoneNumber] = match[0].split(" ");
                setCountry(
                    countries.find((c) => c.dialCode === dialCode) ||
                        countries[0],
                );
                setPhoneNumber(phoneNumber);
            }
        }
    }, []);

    const handleCountrySelect = (country: Country) => {
        setCountry(country);
        setIsOpen(false);
        onChange?.(`${country.dialCode} ${phoneNumber}`);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newNumber = e.target.value;
        if (newNumber !== "" && !/^[0-9]+$/.test(newNumber)) {
            return;
        }
        setPhoneNumber(newNumber);
        onChange?.(`${country.dialCode} ${newNumber}`);
    };

    return (
        <Input
            variant="underline"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            startContent={
                <div className="h-full flex items-center">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                className="flex items-center justify-between gap-1 text-sm cursor-pointer"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="text-base">
                                        {country.flag}
                                    </span>
                                    <span className="font-medium">
                                        {country.dialCode}
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
                            alignOffset={-4}
                            avoidCollisions={true}
                        >
                            <div className="max-h-[300px] overflow-y-auto">
                                {countries.map((item, index) => (
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
                                            {item.dialCode}
                                        </span>
                                        {item.dialCode === country.dialCode && (
                                            <Check className="w-4 h-4 ml-2 text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="h-full border-r py-1 pl-1.5" />
                </div>
            }
        />
    );
};
