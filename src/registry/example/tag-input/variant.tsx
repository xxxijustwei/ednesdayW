import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

export const inputVariants = [
  "default",
  "faded",
  "bordered",
  "underline",
] as const;

export const TagInputVariantExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {inputVariants.map((variant) => (
        <Demo key={variant} variant={variant} />
      ))}
    </div>
  );
};

const Demo = ({ variant }: { variant: (typeof inputVariants)[number] }) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <TagInput values={values} onValuesChange={setValues} size="md">
      <TagInputContainer variant={variant}>
        {values.map((value) => (
          <TagInputBadge key={value} value={value}>
            <span className="truncate">{value}</span>
          </TagInputBadge>
        ))}
        <TagInputBox placeholder="Add a tag" />
      </TagInputContainer>
    </TagInput>
  );
};
