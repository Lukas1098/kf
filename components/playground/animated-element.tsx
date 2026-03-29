"use client"

import { useEffect, useRef, useState } from "react"
import { usePlaygroundStore } from "@/stores/playground";

export default function AnimatedElement() {
    const { css, tailwind, framer } = usePlaygroundStore((state) => state)
    const styleRef = useRef<HTMLStyleElement | null>(null)
    const [key, setKey] = useState(0)

    useEffect(() => {
        if (!styleRef.current) {
            const style = document.createElement("style")
            document.head.appendChild(style)
            styleRef.current = style
        }
        styleRef.current.textContent = css || tailwind || framer
        setTimeout(() => setKey(k => k + 1), 100)
    }, [css, tailwind, framer])

    return (
        <div className="w-full min-h-[320px] rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center relative gap-4">
            <span className="absolute top-3 left-4 text-xs text-neutral-400 tracking-tight">preview</span>
            
            <div
                key={key}
                className="animated-element px-8 py-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
                element
            </div>

            <button
                type="button"
                onClick={() => setKey(k => k + 1)}
                className="absolute bottom-3 right-4 text-xs text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1"
            >
                ↺ replay
            </button>
        </div>
    )
}