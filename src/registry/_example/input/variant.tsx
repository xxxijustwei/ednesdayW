import { Input } from "@/registry/input"

export const InputVariantExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input variant="default" placeholder="Default" />
            <Input variant="bordered" placeholder="Bordered" />
            <Input variant="underline" placeholder="Underline" />
        </div>
    )
}