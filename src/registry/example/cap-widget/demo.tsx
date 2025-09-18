"use client";

import { CapWidget } from "@/registry/ui/cap-widget";
import { useState } from "react";

export const CapWidgetDemo = () => {
  const [token, setToken] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <CapWidget
        endpoint="https://captcha.gurl.eu.org/api/"
        onSolve={setToken}
      />
      <span>{token}</span>
    </div>
  );
};
