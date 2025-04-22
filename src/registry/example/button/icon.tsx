import { Button } from "@/registry/ui/button";
import { CurrencyIcon } from "lucide-react";

const buttonVariants = [
    "primary",
    "secondary",
    "outline",
    "destructive",
    "ghost",
    "link",
] as const;

export const ButtonIconExample = () => {
    return (
        <div className="w-full max-w-24 grid grid-cols-2 gap-4 place-items-center">
            {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant} size="icon">
                    <CurrencyIcon />
                </Button>
            ))}
        </div>
    );
};
