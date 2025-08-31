import { FieldTextarea } from "@/registry/ui/field-textarea";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const FieldTextareaInvalidExample = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-120">
      {inputVariants.map((variant) => (
        <FieldTextarea
          id={`textarea-invalid-${variant}`}
          label="Bio"
          key={variant}
          variant={variant}
          aria-invalid
          placeholder="Please enter something..."
        />
      ))}
    </div>
  );
};
