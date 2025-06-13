import { Input } from "@/registry/ui/input";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const InputInvalidExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {inputVariants.map((variant) => (
        <Input
          key={variant}
          variant={variant}
          aria-invalid
          placeholder="Invalid"
        />
      ))}
    </div>
  );
};
