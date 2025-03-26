import { Input } from "@/registry/ui/input";
import { CheckCheck, SearchIcon } from "lucide-react";

export const InputStartEndContentExample = () => {
    const variants = ["default", "bordered", "underline"] as const;
    const startContent = <SearchIcon size={20} />;
    const endContent = <CheckCheck size={20} />;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
                <Input
                    key={variant}
                    variant={variant}
                    placeholder="Please enter"
                    startContent={startContent}
                />
            ))}

            {variants.map((variant) => (
                <Input
                    key={variant}
                    variant={variant}
                    placeholder="Please enter"
                    endContent={endContent}
                />
            ))}

            {variants.map((variant) => (
                <Input
                    key={variant}
                    variant={variant}
                    placeholder="Please enter"
                    startContent={startContent}
                    endContent={endContent}
                />
            ))}
        </div>
    );
};
