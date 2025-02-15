import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Input } from "@/registry/input/input"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
            <header className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
                <p className="text-muted-foreground">
                    A custom registry for distribution code using shadcn.
                </p>
            </header>
            <main className="flex flex-col flex-1 gap-8">
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

                <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm text-muted-foreground sm:pl-3">
                            A contact form with Zod validation.
                        </h2>
                        <OpenInV0Button name="example-form" className="w-fit" />
                    </div>
                    <div className="flex items-center justify-center min-h-[500px] relative">
                        {/* <ExampleForm /> */}
                    </div>
                </div>
            </main>
        </div>
    )
}
