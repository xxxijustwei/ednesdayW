import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

export const confirmKeys = ["both", "enter", "space"] as const;

const confirmKeyLabels = {
  both: "Enter/Space",
  enter: "Enter",
  space: "Space",
};

export const TagInputConfirmKeyExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {confirmKeys.map((confirmKey) => (
        <Demo key={confirmKey} confirmKey={confirmKey} />
      ))}
    </div>
  );
};

const Demo = ({ confirmKey }: { confirmKey: (typeof confirmKeys)[number] }) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <TagInput
      values={values}
      onValuesChange={setValues}
      size="md"
      confirmKey={confirmKey}
    >
      <TagInputContainer>
        {values.map((value) => (
          <TagInputBadge key={value} value={value}>
            <span className="truncate">{value}</span>
          </TagInputBadge>
        ))}
        <TagInputBox
          placeholder={`Press ${confirmKeyLabels[confirmKey]} to add tag`}
        />
      </TagInputContainer>
    </TagInput>
  );
};
