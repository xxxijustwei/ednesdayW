import { Textarea, TextareaContainer } from "@/registry/ui/textarea";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const TextareaVariantExample = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-120">
      {inputVariants.map((variant) => (
        <TextareaContainer key={variant} variant={variant}>
          <Textarea placeholder="Please enter something..." />
        </TextareaContainer>
      ))}
    </div>
  );
};
