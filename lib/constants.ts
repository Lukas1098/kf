export const PLAYGROUND_OPTIONS = [
    {
        label: "bounce in",
        value: "bounces in from center, springy feel, 500ms",
    },
    {
        label: "slide left",
        value: "slides in from the left, ease-out, 350ms",
    },
    {
        label: "shake",
        value: "shakes horizontally, error feedback feeling, 500ms",
    },
    {
        label: "pop scale",
        value: "pops to 120% scale and snaps back, springy, 350ms",
    },
]

type CodeBlockGroupType = {
    label: string;
    value: string;
}

export const CODE_BLOCK_GROUPS: CodeBlockGroupType[] = [
    {
        label: "CSS",
        value: "css",
    },
    {
        label: "Tailwind",
        value: "tailwind",
    },
    {
        label: "Framer",
        value: "framer",
    }
]

export type CodeBlockProps = {
    code: string;
    language: string;
    className?: string;
}