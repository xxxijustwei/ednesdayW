"use client";

import {
  ChipInput,
  ChipInputBadge,
  ChipInputBox,
  ChipInputContainer,
} from "@/registry/ui/chip-input";
import { useState } from "react";

const Page = () => {
  const [values, setValues] = useState<string[]>([]);
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="w-full max-w-72">
        <ChipInput values={values} onValuesChange={setValues} size="sm">
          <ChipInputContainer>
            <ChipInputBox placeholder="Add a tag" />
            {values.map((value) => (
              <ChipInputBadge key={value} value={value}>
                <span className="truncate">{value}</span>
              </ChipInputBadge>
            ))}
          </ChipInputContainer>
        </ChipInput>
      </div>
    </div>
  );
};

export default Page;
