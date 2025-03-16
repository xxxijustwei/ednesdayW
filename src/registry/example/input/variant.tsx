import { Input } from "@/registry/ui/input"

export const InputVariantExample = () => {
    const variants = ["default", "bordered", "underline"] as const;
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {variants.map((variant) => (
                <Input key={variant} variant={variant} placeholder="Please enter" />
            ))}
        </div>
    )
}