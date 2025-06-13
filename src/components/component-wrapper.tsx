"use client";

import { cn } from "@/lib/utils";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  uniqueKey: number;
}

export const ComponentWrapper = ({
  className,
  children,
  uniqueKey,
}: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "max-w-screen relative rounded-xl border bg-background",
        className,
      )}
      key={uniqueKey}
    >
      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
};
