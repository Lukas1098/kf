import { generateText, Output } from "ai";
import { mistral, type MistralLanguageModelOptions } from "@ai-sdk/mistral";
import { z } from "zod";

import path from 'path'
import fs from 'fs'

const emilSkill = fs.readFileSync(
    path.join(process.cwd(), 'app/tools/EMIL.md'),
    'utf8'
)

const model = mistral("mistral-large-latest");

const schema = z.object({
    css: z.string(),
    tailwind: z.string(),
    framer: z.string(),
});

export async function POST(req: Request) {
    if (!process.env.SYSTEM_PROMPT) {
        return Response.json({ error: "Missing system prompt" }, { status: 500 });
    }

    const { prompt }: { prompt: string } = await req.json();

    const { experimental_output } = await generateText({
        model,
        system: `${process.env.SYSTEM_PROMPT}\n\n${emilSkill}`,
        experimental_output: Output.object({ schema }),
        prompt,
        providerOptions: {
            mistral: {
                safePrompt: true,
            } satisfies MistralLanguageModelOptions,
        },
    });

    return Response.json(experimental_output);
}