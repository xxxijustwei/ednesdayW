import { Button } from "@/registry/ui/button";

const buttonSizes = ["sm", "md", "lg"] as const;

export const ButtonSizeExample = () => {
    return (
        <div className="w-full max-w-48 flex flex-col gap-4">
            {buttonSizes.map((size) => (
                <Button key={size} size={size}>
                    {size.toUpperCase()}
                </Button>
            ))}
        </div>
    );
};
