import { FieldInput } from "@/registry/ui/field-input";

export const FieldInputInvalidExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput
        id="invalid-email"
        label="Email"
        defaultValue="hi$ednesdayW.com"
        aria-invalid={true}
      />
      <FieldInput
        id="invalid-password"
        label="Password"
        type="password"
        aria-invalid={true}
      />
    </div>
  );
};
