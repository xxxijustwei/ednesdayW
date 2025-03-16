import { Input } from "@/registry/ui/input"

export const InputSizeExample = () => {
    const sizes = ["sm", "md", "lg"] as const;
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            {sizes.map((size) => (
                <Input key={size} size={size} placeholder={size} />
            ))}
        </div>
    )
}