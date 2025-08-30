import { FieldInput } from "@/registry/ui/field-input";

export const fieldInputSizes = ["sm", "md", "lg"] as const;

export const FieldInputSizeExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {fieldInputSizes.map((size) => (
        <FieldInput key={size} id={`field-${size}`} size={size} label="Email" />
      ))}
    </div>
  );
};
