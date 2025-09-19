"use client";

import { CapWidget } from "@/registry/ui/cap-widget";

export const CapWidgetDemo = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <CapWidget endpoint="https://captcha.gurl.eu.org/api/" />
    </div>
  );
};
