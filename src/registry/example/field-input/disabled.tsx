import { FieldInput } from "@/registry/ui/field-input";

export const FieldInputDisabledExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput id="disabled-empty" label="Email" disabled />
      <FieldInput
        id="disabled-with-value"
        label="Email"
        defaultValue="hi@ednesdayW.com"
        disabled
      />
    </div>
  );
};
