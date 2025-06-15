import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

export const inputSizes = ["sm", "md", "lg"] as const;

export const TagInputSizeExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {inputSizes.map((size) => (
        <Demo key={size} size={size} />
      ))}
    </div>
  );
};

const Demo = ({ size }: { size: (typeof inputSizes)[number] }) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <TagInput values={values} onValuesChange={setValues} size={size}>
      <TagInputContainer>
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
