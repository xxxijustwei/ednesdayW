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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/registry/ui/button";
import { Textarea, TextareaContainer } from "@/registry/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  bio: z.string().nonempty({
    message: "Bio is required",
  }),
});

export const TextareaFormExample = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    toast.success(`Boi: ${values.bio}`);
  };

  return (
    <Card className="w-full max-w-sm gap-4">
      <CardHeader>
        <CardTitle>Edit Bio</CardTitle>
        <CardDescription className="hidden" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextareaContainer variant="bordered" {...field}>
                      <Textarea
                        placeholder="Please enter your Bio..."
                        minRows={3}
                        maxRows={5}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </TextareaContainer>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-2">
              <Button
                className="w-full"
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
