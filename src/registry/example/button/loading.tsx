import { Button } from "@/registry/ui/button";

const buttonVariants = [
  "primary",
  "secondary",
  "outline",
  "destructive",
  "ghost",
  "link",
] as const;

export const ButtonLoadingExample = () => {
  return (
    <div className="w-full max-w-xs grid grid-cols-2 gap-4">
      {buttonVariants.map((variant) => (
        <Button key={variant} variant={variant} loading>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  );
};
