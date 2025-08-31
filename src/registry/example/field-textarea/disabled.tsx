import { FieldTextarea } from "@/registry/ui/field-textarea";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const FieldTextareaDisabledExample = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-120">
      {inputVariants.map((variant) => (
        <FieldTextarea
          id={`textarea-disabled-${variant}`}
          label="Bio"
          key={variant}
          variant={variant}
          disabled
          placeholder="Please enter your Bio..."
        />
      ))}
    </div>
  );
};
