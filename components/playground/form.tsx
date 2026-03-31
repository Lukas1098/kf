"use client";

import { useActionState, useState } from "react";
import Input from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PLAYGROUND_OPTIONS } from "@/lib/constants";
import { usePlaygroundStore } from "@/stores/playground";
import { complete } from "@/lib/completion";
import { Loader } from "@/components/ui/loader";

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function Form() {
  const setOutput = usePlaygroundStore((state) => state.setOutput)
  const [value, setValue] = useState("");

  const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
    async (_, formData) => {
      const request = formData.get("request") as string;

      if (!request) {
        return {
          success: false,
          message: "Invalid data",
          errors: { request: ["Request is required"] },
        };
      }

      const completion = await complete(request);
      setOutput(completion.css, completion.tailwind, completion.framer);

      return { success: true, message: "OK" };
    },
    initialState
  );

  const isDisabled = isPending || value.trim().length === 0;

  return (
    <form className="flex flex-col gap-4 min-w-0" action={formAction}>
      <h2 className="text-sm font-medium tracking-tighter text-neutral-500">
        Describe the animation
      </h2>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <Input
          name="request"
          value={value}
          placeholder="slides in from left, slight bounce at end, 300ms..."
          disabled={isPending}
          aria-disabled={isPending}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={isDisabled}
          aria-disabled={isDisabled}
          className={cn(
            "text-sm px-4 py-2 bg-zinc-900 text-white rounded-md transition-opacity w-full sm:w-fit",
            isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
        >
          {isPending ? (
            <Loader
              variant="loading-dots"
              size="md"
              className="border-white border-t-transparent"
              text="Generating"
              />
          ) : "Generate"}
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        {PLAYGROUND_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setValue(option.value)}
            className={cn(
              "text-sm px-4 py-2 bg-zinc-100 text-primary rounded-full w-fit cursor-pointer transition-colors",
              value === option.value && "bg-zinc-900 text-white"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {state.error && (
        <p className="text-red-500 text-sm mt-2">{state.error}</p>
      )}
    </form>
  );
}