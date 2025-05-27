import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import {
    Autocomplete,
    AutocompleteContent,
    AutocompleteEmpty,
    AutocompleteInput,
    AutocompleteItem,
} from "@/registry/ui/autocomplete";
import { Button } from "@/registry/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    country: z.string().nonempty({
        message: "Country is required",
    }),
});

export const AutocompleteFormExample = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        toast.success("Submit Successfully");
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Autocomplete Form</CardTitle>
                <CardDescription>
                    Enjoy the best experience with us
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-2"
                    >
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Autocomplete
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            <AutocompleteInput
                                                variant="bordered"
                                                placeholder="Select a country"
                                                startContent={
                                                    field.value && (
                                                        <span>
                                                            {
                                                                countries.find(
                                                                    ({ key }) =>
                                                                        key ===
                                                                        field.value,
                                                                )?.flag
                                                            }
                                                        </span>
                                                    )
                                                }
                                            />
                                            <AutocompleteContent className="max-h-48">
                                                {countries.map(
                                                    ({ key, flag, label }) => (
                                                        <AutocompleteItem
                                                            key={key}
                                                            value={key}
                                                            label={label}
                                                        >
                                                            <span className="text-base text-foreground">
                                                                {`${flag} ${label}`}
                                                            </span>
                                                        </AutocompleteItem>
                                                    ),
                                                )}
                                                <AutocompleteEmpty>
                                                    No results.
                                                </AutocompleteEmpty>
                                            </AutocompleteContent>
                                        </Autocomplete>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end pt-2">
                            <Button
                                type="submit"
                                loading={form.formState.isSubmitting}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
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
