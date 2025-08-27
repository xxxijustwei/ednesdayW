import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "@/registry/ui/input";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-dvh p-12">
      <div className="flex flex-col items-center gap-8 max-w-xs w-full">
        {["default", "faded", "bordered", "underline"].map((variant) => (
          <div
            key={variant}
            className={cn(
              "flex flex-col w-full",
              variant !== "underline" && "gap-2",
            )}
          >
            <Label>{variant}</Label>
            <Input
              variant={
                variant as "default" | "faded" | "bordered" | "underline"
              }
              defaultValue="admin@gmail.com"
              size={"md"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
