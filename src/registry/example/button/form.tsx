"use client";

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
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email",
    }),
});

export const ButtonFormExample = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        toast.success("Email sent successfully");
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>
                    Please enter your email to reset your password
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            variant="bordered"
                                            placeholder="Please enter your Email"
                                            {...field}
                                        />
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
