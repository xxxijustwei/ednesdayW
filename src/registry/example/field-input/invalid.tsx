import { FieldInput } from "@/registry/ui/field-input";

export const FieldInputInvalidExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput
        id="invalid-email"
        label="邮箱地址"
        defaultValue="invalid-email"
        aria-invalid={true}
      />
      <FieldInput
        id="invalid-password"
        label="密码"
        type="password"
        defaultValue="123"
        aria-invalid={true}
      />
    </div>
  );
};
