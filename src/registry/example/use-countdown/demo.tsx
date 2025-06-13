"use client";

import { useCountdown } from "@/registry/hooks/use-countdown";
import { Button } from "@/registry/ui/button";

export const UseCountdownDemo = () => {
  const { countdown, status, start } = useCountdown({
    initialSeconds: 10,
  });

  return (
    <div className="w-full max-w-48 flex flex-col items-center justify-center">
      <Button
        variant="outline"
        className="w-full max-w-24"
        disabled={status === "running"}
        onClick={() => {
          if (status === "running") return;
          start();
        }}
      >
        {`Send ${status === "running" ? `(${countdown}s)` : ""}`}
      </Button>
    </div>
  );
};
