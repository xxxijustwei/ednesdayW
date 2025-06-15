import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

export const TagInputOutsideTagsExample = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <TagInput values={values} onValuesChange={setValues} size="md">
        <TagInputContainer variant="bordered">
          <TagInputBox placeholder="Add a tag" />
        </TagInputContainer>
        <div className="flex flex-wrap gap-1.5">
          {values.map((value) => (
            <TagInputBadge key={value} value={value}>
              <span className="truncate">{value}</span>
            </TagInputBadge>
          ))}
        </div>
      </TagInput>
    </div>
  );
};
