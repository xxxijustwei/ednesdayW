import { Input } from "@/registry/ui/input";
import { CheckCheck, SearchIcon } from "lucide-react";

export const InputStartEndContentExample = () => {
  const startContent = <SearchIcon size={20} />;
  const endContent = <CheckCheck size={20} />;

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <Input
        variant="bordered"
        placeholder="Please enter"
        startContent={startContent}
      />
      <Input
        variant="bordered"
        placeholder="Please enter"
        endContent={endContent}
      />
      <Input
        variant="bordered"
        placeholder="Please enter"
        startContent={startContent}
        endContent={endContent}
      />
    </div>
  );
};
