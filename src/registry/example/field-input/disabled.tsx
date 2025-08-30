import { FieldInput } from "@/registry/ui/field-input";

export const FieldInputDisabledExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput id="disabled-empty" label="禁用状态（空值）" disabled />
      <FieldInput
        id="disabled-with-value"
        label="禁用状态（有值）"
        defaultValue="已禁用的输入框"
        disabled
      />
    </div>
  );
};
