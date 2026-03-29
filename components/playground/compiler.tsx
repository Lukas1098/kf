"use client";
import { motion } from "motion/react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/playground/breadcrumbs";
import Container from "@/components/playground/container";

export default function Compiler() {
    return (
        <section className="flex flex-col items-start justify-start md:items-center md:justify-center py-10 px-6 md:py-18 md:px-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
                <Breadcrumb className="mt-6 mb-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                <span className="text-sm hover:underline ">Home</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <span className="text-sm">/</span>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                <span className="text-sm font-medium tracking-tighter text-neutral-500">
                                    Playground
                                </span>
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
                    Write how you want an element to move.
                </h1>
                <p className="text-lg text-gray-500">
                    Get clean CSS keyframes — no components, no libraries, no noise.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.16 }}
                className="max-w-7xl mx-auto w-full pt-15"
            >
                <Container />
            </motion.div>
        </section>
    );
}