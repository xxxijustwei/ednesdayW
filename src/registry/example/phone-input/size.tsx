import { PhoneInput } from "@/registry/ui/phone-input";

export const inputSizes = ["sm", "md", "lg"] as const;

export const InputSizeExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {inputSizes.map((size) => (
                <PhoneInput key={size} size={size} items={items} />
            ))}
        </div>
    );
};

export const items = [
    {
        name: "United States",
        flag: "🇺🇸",
        code: "US",
        mask: "(999) 999-9999",
        dialCode: "+1",
    },
    {
        name: "Russia",
        flag: "🇷🇺",
        code: "RU",
        mask: "9 (999) 999-99-99",
        dialCode: "+7",
    },
    {
        name: "Egypt",
        flag: "🇪🇬",
        code: "EG",
        mask: "9999 999 9999",
        dialCode: "+20",
    },
    {
        name: "South Africa",
        flag: "🇿🇦",
        code: "ZA",
        mask: "999 999 9999",
        dialCode: "+27",
    },
    {
        name: "Greece",
        flag: "🇬🇷",
        code: "GR",
        mask: "999 999 9999",
        dialCode: "+30",
    },
    {
        name: "Netherlands",
        flag: "🇳🇱",
        code: "NL",
        mask: "99 999 999",
        dialCode: "+31",
    },
    {
        name: "Belgium",
        flag: "🇧🇪",
        code: "BE",
        mask: "9999 99 99 99",
        dialCode: "+32",
    },
    {
        name: "France",
        flag: "🇫🇷",
        code: "FR",
        mask: "99 99 99 99 99",
        dialCode: "+33",
    },
    {
        name: "Spain",
        flag: "🇪🇸",
        code: "ES",
        mask: "999 99 99 99",
        dialCode: "+34",
    },
    {
        name: "Hungary",
        flag: "🇭🇺",
        code: "HU",
        mask: "(99) 999 9999",
        dialCode: "+36",
    },
    {
        name: "Italy",
        flag: "🇮🇹",
        code: "IT",
        mask: "999 999 9999",
        dialCode: "+39",
    },
];
