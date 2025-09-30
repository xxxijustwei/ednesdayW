import { Spinner } from "@/registry/ui/spinner";

const sizes = ["sm", "md", "lg"] as const;

export const GridSpinnerExample = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-xs">
      {sizes.map((size) => (
        <Spinner key={size} size={size} variant="grid" />
      ))}
    </div>
  );
};
