import { FieldInput } from "@/registry/ui/field-input";
import { AtSign, DollarSign, Percent, Search, X } from "lucide-react";

export const FieldInputStartEndContentExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldInput
        id="search"
        label="搜索"
        startContent={<Search size={20} />}
        endContent={<X size={20} className="cursor-pointer" />}
      />
      <FieldInput id="email" label="邮箱" startContent={<AtSign size={20} />} />
      <FieldInput
        id="price"
        label="价格"
        startContent={<DollarSign size={20} />}
        endContent={<span className="text-sm text-muted-foreground">USD</span>}
      />
      <FieldInput
        id="discount"
        label="折扣"
        endContent={<Percent size={20} />}
      />
    </div>
  );
};
