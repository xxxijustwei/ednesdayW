"use client";

import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { useState } from "react";

const Page = () => {
  const [values, setValues] = useState<string[]>([]);
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="w-full max-w-72">
        <TagInput
          values={values}
          onValuesChange={setValues}
          size="lg"
          confirmKey="enter"
        >
          <TagInputContainer>
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
    </div>
  );
};

export default Page;
