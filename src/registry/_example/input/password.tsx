import { Input } from "@/registry/input"

export const InputPasswordExample = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="password" placeholder="Please enter your password" />
            <Input variant="bordered" type="password" placeholder="Please enter your password" />
            <Input variant="underline" type="password" placeholder="Please enter your password" />
        </div>
    )
}