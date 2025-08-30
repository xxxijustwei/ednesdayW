"use client";

import { FieldInput } from "@/registry/ui/field-input";
import { useState } from "react";

export const FieldInputPasswordExample = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput
        id="password"
        label="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FieldInput
        id="confirm-password"
        label="确认密码"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
};
