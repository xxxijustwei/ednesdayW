import { useCallback, useState } from "react";

export interface RippleType {
  id: string;
  x: number;
  y: number;
  size: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const size = Math.max(target.clientWidth, target.clientHeight);
    const clientRect = target.getBoundingClientRect();
    const x = e.clientX - clientRect.left - size / 2;
    const y = e.clientY - clientRect.top - size / 2;

    setRipples((prev) => [...prev, { id: crypto.randomUUID(), x, y, size }]);
  }, []);

  const onClear = useCallback((id: string) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  return { ripples, onClick, onClear };
};

export type UseRippleReturn = ReturnType<typeof useRipple>;
