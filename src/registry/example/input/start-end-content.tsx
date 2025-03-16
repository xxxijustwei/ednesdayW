import { Input } from "@/registry/ui/input"
import { CheckCheck, SearchIcon } from "lucide-react"

export const InputStartEndContentExample = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
            />
            <Input
                variant="bordered"
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
            />
            <Input
                variant="underline"
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
            />

            <Input
                placeholder="Please enter"
                endContent={
                    <CheckCheck size={20} />
                }
            />
            <Input
                variant="bordered"
                placeholder="Please enter"
                endContent={
                    <CheckCheck size={20} />
                }
            />
            <Input
                variant="underline"
                placeholder="Please enter"
                endContent={
                    <CheckCheck size={20} />
                }
            />

            <Input
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
                endContent={
                    <CheckCheck size={20} />
                }
            />
            <Input 
                variant="bordered"
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
                endContent={
                    <CheckCheck size={20} />
                }
            />
            <Input
                variant="underline"
                placeholder="Please enter"
                startContent={
                    <SearchIcon size={20} />
                }
                endContent={
                    <CheckCheck size={20} />
                }
            />
        </div>
    )
}