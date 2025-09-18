"use client";

import { CapWidget } from "@/registry/ui/cap-widget";
import { useState } from "react";

export const CapWidgetLocaleExample = () => {
  const [token, setToken] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <CapWidget
        endpoint="https://captcha.gurl.eu.org/api/"
        onSolve={setToken}
        locale={{
          initial: "我不是机器人",
          verifying: "验证中...",
          solved: "典型的安卓思维",
          error: "验证失败",
        }}
      />
      <span>{token}</span>
    </div>
  );
};
