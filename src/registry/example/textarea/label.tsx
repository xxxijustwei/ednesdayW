import {
  Textarea,
  TextareaContainer,
  TextareaLabel,
} from "@/registry/ui/textarea";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const TextareaLabelExample = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-120">
      {inputVariants.map((variant) => (
        <TextareaContainer key={variant} variant={variant} className="gap-0">
          <TextareaLabel htmlFor={variant}>Bio</TextareaLabel>
          <Textarea id={variant} placeholder="Please enter your Bio..." />
        </TextareaContainer>
      ))}
    </div>
  );
};
