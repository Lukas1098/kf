"use client";

import Link from "next/link";
import { Signature } from "../ui/signature";

export default function Footer() {
    return (
        <footer
            className="flex flex-col items-center justify-center py-12 px-16">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="rounded-2xl -mb-5">
                    <Signature
                        text="KF."
                        fontSize={10}
                        color="#0156FE"
                        inView={true}
                        once={true}
                    />
                </div>
                <p
                    className="text-sm text-zinc-600 dark:text-zinc-400">
                    Made by <Link href="https://lucasbernasconi.xyz" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 underline text-nowrap">Lucas Bernasconi</Link>
                </p>
            </div>
            <p
                className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                &copy; {new Date().getFullYear()} kf. All rights reserved.
            </p>
        </footer>
    )
}