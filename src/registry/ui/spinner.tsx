import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const spinnerVariants = cva("[--sk-color:var(--color-primary)]", {
  variants: {
    size: {
      sm: "[--sk-size:28px]",
      md: "[--sk-size:34px]",
      lg: "[--sk-size:40px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const PlaneSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-plane", spinnerVariants({ size }), className)}
      {...props}
    />
  );
};

export const ChaseSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-chase", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  );
};

export const BounceSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-bounce", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-bounce-dot" />
      <div className="sk-bounce-dot" />
    </div>
  );
};

export const WaveSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-wave", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
      <div className="sk-wave-rect" />
    </div>
  );
};

export const PulseSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-pulse", spinnerVariants({ size }), className)}
      {...props}
    />
  );
};

export const FlowSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-flow", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-flow-dot" />
      <div className="sk-flow-dot" />
      <div className="sk-flow-dot" />
    </div>
  );
};

export const SwingSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-swing", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-swing-dot" />
      <div className="sk-swing-dot" />
    </div>
  );
};

export const CircleSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-circle", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
      <div className="sk-circle-dot" />
    </div>
  );
};

export const CircleFadeSpinner = ({
  size,
  className,
  ...props
}: SpinnerProps) => {
  return (
    <div
      className={cn("sk-circle-fade", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
      <div className="sk-circle-fade-dot" />
    </div>
  );
};

export const GridSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-grid", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
      <div className="sk-grid-cube" />
    </div>
  );
};

export const FoldSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-fold", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
      <div className="sk-fold-cube" />
    </div>
  );
};

export const WanderSpinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <div
      className={cn("sk-wander", spinnerVariants({ size }), className)}
      {...props}
    >
      <div className="sk-wander-cube" />
      <div className="sk-wander-cube" />
    </div>
  );
};
