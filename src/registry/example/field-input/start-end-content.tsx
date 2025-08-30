import { FieldInput } from "@/registry/ui/field-input";
import { DollarSign, Percent } from "lucide-react";

export const FieldInputStartEndContentExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput
        id="price"
        label="Price"
        startContent={<DollarSign size={20} />}
        endContent={<span className="text-sm text-muted-foreground">USD</span>}
      />
      <FieldInput
        id="discount"
        label="Discount"
        endContent={<Percent size={20} />}
      />
    </div>
  );
};
