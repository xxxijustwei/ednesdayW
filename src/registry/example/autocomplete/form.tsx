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
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const TOKENS = [
  "USDT",
  "USDC",
  "USDe",
  "USDS",
  "DAI",
  "USD1",
  "FDUSD",
  "USDY",
  "FRAX",
];

const formSchema = z.object({
  token: z.string().nonempty({
    message: "Token is required",
  }),
});

export const AutocompleteFormExample = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    toast.success("Submit Successfully");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Withdraw Asset</CardTitle>
        <CardDescription>Select the asset you want to withdraw</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Autocomplete value={field.value} onChange={field.onChange}>
                      <AutocompleteInput
                        variant="bordered"
                        placeholder="Select a token"
                        startContent={
                          field.value && (
                            <Image
                              src={`/tokens/${field.value}.svg`}
                              alt={field.value}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          )
                        }
                      />
                      <AutocompleteContent className="max-h-48">
                        {TOKENS.map((token) => (
                          <AutocompleteItem
                            key={token}
                            value={token}
                            label={token}
                          >
                            <div className="flex items-center gap-1.5">
                              <Image
                                src={`/tokens/${token}.svg`}
                                alt={token}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="font-semibold">{token}</span>
                            </div>
                          </AutocompleteItem>
                        ))}
                        <AutocompleteEmpty>No results.</AutocompleteEmpty>
                      </AutocompleteContent>
                    </Autocomplete>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-2">
              <Button type="submit" loading={form.formState.isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
