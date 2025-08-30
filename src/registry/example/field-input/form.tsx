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
import { FieldInput } from "@/registry/ui/field-input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "邮箱格式不正确",
  }),
  password: z.string().min(6, {
    message: "密码至少需要6个字符",
  }),
  username: z.string().min(3, {
    message: "用户名至少需要3个字符",
  }),
});

export const FieldInputFormExample = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    toast.success("注册成功！");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>注册账号</CardTitle>
        <CardDescription>创建一个新账号开始使用我们的服务</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FieldInput
                      id="username"
                      label="用户名"
                      variant="bordered"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FieldInput
                      id="email"
                      label="邮箱地址"
                      variant="bordered"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FieldInput
                      id="password"
                      label="密码"
                      type="password"
                      variant="bordered"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-2">
              <Button type="submit" loading={form.formState.isSubmitting}>
                提交
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
