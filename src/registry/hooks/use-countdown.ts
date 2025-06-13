import { useCallback, useEffect, useState } from "react";

interface UseCountdownType {
  initialSeconds: number;
  autoStart?: boolean;
  onComplete?: () => void;
}

type CountdownState = "idle" | "running" | "finished";

export const useCountdown = ({
  initialSeconds,
  autoStart = false,
  onComplete,
}: UseCountdownType) => {
  const [countdown, setCountdown] = useState(Math.max(initialSeconds, 0));
  const [status, setStatus] = useState<CountdownState>(
    autoStart ? "running" : "idle",
  );

  const start = useCallback(() => {
    if (countdown <= 0) {
      setCountdown(Math.max(initialSeconds, 0));
    }

    setStatus("running");
  }, [initialSeconds, countdown]);

  const reset = useCallback(() => {
    setCountdown(Math.max(initialSeconds, 0));
    setStatus("idle");
  }, [initialSeconds]);

  useEffect(() => {
    if (status === "idle" || status === "finished") return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(interval);
          setStatus("finished");
          onComplete?.();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, countdown, onComplete]);

  return {
    countdown,
    status,
    start,
    reset,
    setCountdown,
  };
};

export type UseCountdownReturn = ReturnType<typeof useCountdown>;
