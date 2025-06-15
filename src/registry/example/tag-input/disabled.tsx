import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

export const TagInputDisabledExample = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <TagInput values={values} onValuesChange={setValues} size="md" disabled>
        <TagInputContainer>
          {values.map((value) => (
            <TagInputBadge key={value} value={value}>
              <span className="truncate">{value}</span>
            </TagInputBadge>
          ))}
          <TagInputBox placeholder="Add a tag" />
        </TagInputContainer>
      </TagInput>
    </div>
  );
};
