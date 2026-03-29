"use client";

import {
    CodeBlock,
    CodeBlockCode,
    CodeBlockGroup,
} from "@/components/playground/code-block";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { CODE_BLOCK_GROUPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePlaygroundStore } from "@/stores/playground";


const languageMap: Record<string, string> = {
    css: "css",
    tailwind: "css",
    framer: "tsx",
}

export default function CodeBlockGroupComponent() {
    const { css, tailwind, framer } = usePlaygroundStore((state) => state)
    const [copied, setCopied] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(CODE_BLOCK_GROUPS[0].value);

    const contentMap: Record<string, string> = { css, tailwind, framer }

    const handleCopy = () => {
        navigator.clipboard.writeText(contentMap[selectedGroup] || "");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full min-h-[240px] md:min-h-[320px]">
            <CodeBlock className="h-full min-h-[320px]">
                <CodeBlockGroup className="border-neutral-200 dark:border-neutral-800 border-b py-2 pr-2 pl-4">
                    <div className="flex items-center gap-2">
                        {CODE_BLOCK_GROUPS.map((group) => (
                            <button
                                key={group.value}
                                type="button"
                                onClick={() => setSelectedGroup(group.value)}
                                className={cn(
                                    "rounded px-2 py-1 text-xs font-medium transition-colors",
                                    selectedGroup === group.value
                                        ? "bg-zinc-900 text-white"
                                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                                )}
                            >
                                {group.label}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="h-8 w-8 bg-transparent border-none cursor-pointer hover:bg-zinc-100 rounded-md flex items-center justify-center"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <CheckIcon className="h-4 w-4 text-green-500" />
                        ) : (
                            <CopyIcon className="h-4 w-4 text-neutral-500" />
                        )}
                    </button>
                </CodeBlockGroup>
                <CodeBlockCode
                    code={contentMap[selectedGroup] || "// your keyframes will appear here"}
                    language={languageMap[selectedGroup]}
                />
            </CodeBlock>
        </div>
    );
}   