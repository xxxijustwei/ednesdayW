import { Textarea, TextareaInput } from "@/registry/ui/textarea";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const TextareaDisabledExample = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-120">
      {inputVariants.map((variant) => (
        <Textarea key={variant} variant={variant} disabled>
          <TextareaInput placeholder="Please enter something..." />
        </Textarea>
      ))}
    </div>
  );
};
