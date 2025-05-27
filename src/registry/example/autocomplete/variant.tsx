import {
    Autocomplete,
    AutocompleteContent,
    AutocompleteEmpty,
    AutocompleteInput,
    AutocompleteItem,
} from "@/registry/ui/autocomplete";

export const AutocompleteVariantExample = () => {
    const inputVariants = [
        "default",
        "faded",
        "bordered",
        "underline",
    ] as const;

    return (
        <div className="flex flex-col gap-4 w-full max-w-72">
            {inputVariants.map((variant) => (
                <Autocomplete key={variant}>
                    <AutocompleteInput
                        placeholder="Select a country"
                        variant={variant}
                    />
                    <AutocompleteContent>
                        {countries.map(({ key, flag, label }) => (
                            <AutocompleteItem
                                key={key}
                                value={key}
                                label={label}
                            >
                                <span className="text-base text-foreground">
                                    {`${flag} ${label}`}
                                </span>
                            </AutocompleteItem>
                        ))}
                        <AutocompleteEmpty>No results.</AutocompleteEmpty>
                    </AutocompleteContent>
                </Autocomplete>
            ))}
        </div>
    );
};

const countries = [
    { key: "cn", flag: "🇨🇳", label: "China" },
    { key: "jp", flag: "🇯🇵", label: "Japan" },
    { key: "kr", flag: "🇰🇷", label: "Korea" },
    { key: "ru", flag: "🇷🇺", label: "Russia" },
    { key: "in", flag: "🇮🇳", label: "India" },
    { key: "br", flag: "🇧🇷", label: "Brazil" },
    { key: "de", flag: "🇩🇪", label: "Germany" },
    { key: "fr", flag: "🇫🇷", label: "France" },
    { key: "it", flag: "🇮🇹", label: "Italy" },
    { key: "es", flag: "🇪🇸", label: "Spain" },
    { key: "us", flag: "🇺🇸", label: "United States" },
    { key: "ca", flag: "🇨🇦", label: "Canada" },
    { key: "mx", flag: "🇲🇽", label: "Mexico" },
    { key: "gb", flag: "🇬🇧", label: "United Kingdom" },
    { key: "au", flag: "🇦🇺", label: "Australia" },
    { key: "nz", flag: "🇳🇿", label: "New Zealand" },
];
