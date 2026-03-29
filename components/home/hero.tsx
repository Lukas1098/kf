"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Hero() {
    return (
        <motion.div
            className="flex flex-col flex-1 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-22 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-sm text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Describe motion. <br /> Get css.
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        No libraries. no components. just keyframes.
                    </p>
                    <div className="flex flex-row items-center gap-4 text-base font-medium">
                        <Link
                            className="flex h-10 items-center justify-center rounded-full transition-colors duration-200 ease-out bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950 px-5 text-nowrap text-sm"
                            href="/playground"
                            prefetch={true}
                        >
                            Try it
                        </Link>
                        <Link
                            className="flex h-10 items-center justify-center rounded-full transition-colors duration-200 ease-out bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 px-5 text-nowrap text-sm"
                            href="https://github.com/Lukas1098/kf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repository
                            <GithubLogoIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </main>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-5xl px-16 mt-10 border border-neutral-100 p-2 mb-20 rounded-xl"
            >
                <Image
                    src="https://61fxn1dsq7.ucarecd.net/f5592ac9-0312-4093-99d5-a76e2444e099/-/format/auto/-/quality/smart/-/resize/2200x/-/progressive/yes/"
                    alt="kf"
                    width={3000}
                    height={2293}
                    className="object-contain w-full h-auto rounded-xl"
                    loading="eager"
                />
            </motion.div>
        </motion.div>
    );
}
