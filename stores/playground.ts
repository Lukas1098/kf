import { create } from "zustand"

type PlaygroundStore = {
    css: string
    tailwind: string
    framer: string
    setOutput: (css: string, tailwind: string, framer: string) => void
}

export const usePlaygroundStore = create<PlaygroundStore>((set) => ({
    css: "",
    tailwind: "",
    framer: "",
    setOutput: (css, tailwind, framer) => set({ css, tailwind, framer }),
}))