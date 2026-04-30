"use client";
import Link from "next/link";
import { motion } from "motion/react";

import Title from "@/app/components/Title";

export default function Home() {
    return (
        <main className="px-5 h-screen grid place-items-center bg-[linear-gradient(to_top,rgba(9,9,10,0.95),rgba(9,9,10,0.85)),url('/images/background.jpg')] bg-cover bg-center bg-no-repeat text-white absolute inset-0 z-5 max-md:bg-right">
            <section className="text-center">
                <Title width={924} height={75} className="max-lg:max-w-14/16 max-lg:mx-auto max-md:max-w-11/12" />

                <motion.div
                    className="flex justify-center items-center w-fit mx-auto gap-8 mt-12 max-md:flex-col max-sm:gap-6 max-sm:mt-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.75, ease: "easeOut" }}
                >
                    <ProjectLink title="Vesper AI Bot" url="https://vesperbot.ai" target="_blank" rel="noopener noreferrer" />
                    <ProjectLink title="Share.surf" url="https://share.surf" target="_blank" rel="noopener noreferrer" />
                    <ProjectLink title="Work With Me" url="https://hcdigitalservices.com" target="_blank" rel="noopener noreferrer" />
                    <ProjectLink title="Donate" url="/donate" />
                </motion.div>
            </section>
        </main>
    );
}

function ProjectLink({ title, url, ...rest }: any) {
    return (
        <Link
            href={url}
            className="group relative text-xl text-white font-extralight leading-none duration-200 uppercase active:text-white/75 max-md:text-lg"
            {...rest}
        >
            {title}
            <div className="absolute -bottom-1.5 w-full h-0.25 bg-white scale-x-0 group-hover:scale-x-100 group-active:scale-x-75 group-active:bg-white/75 duration-200"></div>
        </Link>
    );
}