import { Input } from "@/registry/ui/input";

export const inputSizes = ["sm", "md", "lg"] as const;

export const InputSizeExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      {inputSizes.map((size) => (
        <Input key={size} size={size} placeholder={size} />
      ))}
    </div>
  );
};
