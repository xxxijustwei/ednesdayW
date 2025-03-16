import { Input } from "@/registry/ui/input"

export const InputSizeExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
    )
}