import { FieldInput } from "@/registry/ui/field-input";

export const FieldInputDefaultExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput id="email" label="邮箱" />
      <FieldInput id="username" label="用户名" defaultValue="示例文本" />
    </div>
  );
};
