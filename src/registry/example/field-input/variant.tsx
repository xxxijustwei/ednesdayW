import { FieldInput } from "@/registry/ui/field-input";

export const fieldInputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const FieldInputVariantExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {fieldInputVariants.map((variant) => (
        <FieldInput
          key={variant}
          id={`field-${variant}`}
          variant={variant}
          label="Email"
        />
      ))}
    </div>
  );
};
