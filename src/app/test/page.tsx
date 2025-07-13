"use client";

import { SelectTokensExample } from "@/registry/example/select/tokens";
import { useState } from "react";

const Page = () => {
  const [values, setValues] = useState<string[]>([]);
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <SelectTokensExample />
    </div>
  );
};

export default Page;
