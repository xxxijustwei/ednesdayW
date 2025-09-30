import { FieldInput } from "@/registry/ui/field-input";
import {
  BounceSpinner,
  ChaseSpinner,
  CircleFadeSpinner,
  CircleSpinner,
  FlowSpinner,
  FoldSpinner,
  GridSpinner,
  PlaneSpinner,
  PulseSpinner,
  SwingSpinner,
  WanderSpinner,
  WaveSpinner,
} from "@/registry/ui/spinner";
import { MailIcon } from "lucide-react";

const sizes = ["sm", "md", "lg"] as const;

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-dvh p-12">
      <div className="flex flex-col items-center gap-8 max-w-xs w-full">
        {["default", "faded", "bordered", "underline"].map((variant) => (
          <FieldInput
            key={variant}
            id={`${variant}-input`}
            label="Email"
            variant={variant as "default" | "faded" | "bordered" | "underline"}
            size={"md"}
            placeholder="Enter your email"
            endContent={
              <MailIcon size={20} className="text-muted-foreground" />
            }
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-4 p-4">
            <PlaneSpinner size={size} />
            <ChaseSpinner size={size} />
            <BounceSpinner size={size} />
            <WaveSpinner size={size} />
            <PulseSpinner size={size} />
            <FlowSpinner size={size} />
            <SwingSpinner size={size} />
            <CircleSpinner size={size} />
            <CircleFadeSpinner size={size} />
            <GridSpinner size={size} />
            <FoldSpinner size={size} />
            <WanderSpinner />
          </div>
        ))}
      </div>
    </div>
  );
}
