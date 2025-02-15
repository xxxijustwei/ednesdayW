import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Input } from "@/registry/input/input"

export const InputExample = () => {
    return (
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    <h2 className="text-sm text-muted-foreground sm:pl-3">
                        A input component
                    </h2>
                </div>
                <OpenInV0Button name="input" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[400px] relative">
                <div className="w-full max-w-64">
                    <Input label="Email" />
                </div>
            </div>
        </div>
    )
}