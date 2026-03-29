"use client"

import Form from "@/components/playground/form"
import CodeBlockGroupComponent from "@/components/playground/code-block-group"
import AnimatedElement from "@/components/playground/animated-element"

export default function Container() {   
    return (
        <div className="flex flex-col gap-6 w-full">
            <Form />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
                <CodeBlockGroupComponent />
                <AnimatedElement />
            </div>
        </div>
    )
}