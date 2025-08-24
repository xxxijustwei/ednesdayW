import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { create2 } from "@/registry/lib/create2";
import { isTronAddress } from "@/registry/lib/wallet-address";
import { Input } from "@/registry/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  implementation: z
    .string()
    .nonempty({
      message: "Implementation address is required",
    })
    .refine((value) => isTronAddress(value), {
      message: "Invalid implementation address",
    }),
  deployer: z
    .string()
    .nonempty({
      message: "Deployer address is required",
    })
    .refine((value) => isTronAddress(value), {
      message: "Invalid deployer address",
    }),
  salt: z
    .string()
    .nonempty({
      message: "Salt is required",
    })
    .max(32, {
      message: "Salt must be less than 32 characters",
    }),
});

export const PredictAddressDemo = () => {
  const [predictAddress, setPredictAddress] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      implementation: "",
      deployer: "",
      salt: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const address = create2({
      implementation: values.implementation,
      deployer: values.deployer,
      salt: values.salt,
      network: "tron",
    });

    setPredictAddress(address);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>TRON Create2 Address</CardTitle>
        <CardDescription>
          Predict the address of the TRON contract using the implementation,
          deployer, and salt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="implementation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implementation</FormLabel>
                  <FormControl>
                    <Input
                      variant="bordered"
                      maxLength={42}
                      placeholder="T..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deployer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deployer</FormLabel>
                  <FormControl>
                    <Input
                      variant="bordered"
                      maxLength={42}
                      placeholder="T..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salt</FormLabel>
                  <FormControl>
                    <Input
                      variant="bordered"
                      maxLength={32}
                      placeholder="..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 pt-2">
              {predictAddress && (
                <p className="text-gray-700 font-medium text-center">
                  {predictAddress}
                </p>
              )}
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
