"use client";
import Image from "next/image";
import { motion } from "motion/react";

import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import Button from "@/app/components/Button";
import { faGithub, faRedditAlien, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    const age = Math.floor((new Date().getTime() - new Date("2003-05-23").getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <main className="h-full grid place-items-center">
            <motion.section initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex gap-12 items-center w-fit px-6 max-lg:flex-col max-lg:relative max-lg:w-full">
                <Image src="/images/me.jpg" alt="Me" width={350} height={350} className="rounded-lg block object-cover shadow-lg select-none max-lg:aspect-video max-lg:w-full max-sm:aspect-square" draggable={false} />

                <div className="max-lg:absolute max-lg:inset-0 max-lg:mx-auto max-lg:text-center max-lg:px-12 max-lg:py-6 max-lg:grid max-lg:place-items-center max-lg:bg-black/50 max-lg:rounded-lg">
                    <h1 className="text-4xl leading-none uppercase max-md:text-3xl max-sm:text-2xl">Harvey Coombs <span className="text-red-500">&middot;</span> Official Website</h1>
                    <ul className="text-lg my-10 list-[square] marker:text-red-500 list-inside max-md:text-base max-md:my-0">
                        <li>Software Engineer</li>
                        <li>{age} Years old</li>
                        <li>From the United Kingdom</li>
                        <li>Started programming at the age of 10</li>
                        <li>Fluent in Python, JavaScript, Rust &amp; C#</li>
                        <li>Particularly interested in Machine Learning</li>
                    </ul>

                    <div className="flex gap-4 select-none max-lg:w-fit max-lg:mx-auto">
                        <SocialMediaIcon url="https://github.com/harveycoombs" icon={faGithub} />
                        <SocialMediaIcon url="https://www.reddit.com/user/Harvey-Coombs" icon={faRedditAlien} />
                        <SocialMediaIcon url="https://www.linkedin.com/in/harveycoombs" icon={faLinkedin} />
                        <Button url="mailto:contact@harveycoombs.com">Email Me</Button>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}