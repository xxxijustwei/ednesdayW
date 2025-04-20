import { Button } from "@/registry/ui/button";

export const buttonVariants = [
    "primary",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
] as const;

export const ButtonVariantExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                    {variant}
                </Button>
            ))}
        </div>
    );
};
