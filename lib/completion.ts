"use server";

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function complete(prompt: string) {
    const response = await fetch(`${url}/api/completion`, {
        method: "POST",
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        throw new Error("Failed to complete");
    }

    return response.json();
}