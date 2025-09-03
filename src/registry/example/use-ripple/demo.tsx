import { useRipple } from "@/registry/hooks/use-ripple";
import { AnimatePresence, LazyMotion, domAnimation, m } from "motion/react";

export const UseRippleDemo = () => {
  const { ripples, onClick, onClear } = useRipple();

  return (
    <div
      className="w-full max-w-xs h-48 relative border-3 border-dashed border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-lg font-medium">Click Me</span>
      </div>
      {ripples.map((ripple) => {
        const duration = Math.min(
          Math.max(0.01 * ripple.size, 0.2),
          ripple.size > 100 ? 0.75 : 0.5,
        );
        return (
          <LazyMotion key={ripple.id} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                initial={{
                  transform: "scale(0)",
                  opacity: 0.35,
                }}
                animate={{ transform: "scale(2)", opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  backgroundColor: "currentColor",
                  borderRadius: "100%",
                  transformOrigin: "center",
                  pointerEvents: "none",
                  overflow: "hidden",
                  inset: 0,
                  zIndex: 0,
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                }}
                transition={{ duration }}
                onAnimationComplete={() => {
                  onClear(ripple.id);
                }}
              />
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </div>
  );
};
