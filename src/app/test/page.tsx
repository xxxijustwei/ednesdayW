import { FieldInput } from "@/registry/ui/field-input";
import { MailIcon } from "lucide-react";

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
    </div>
  );
}
