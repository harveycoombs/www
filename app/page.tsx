"use client";
import Image from "next/image";
import { motion } from "motion/react";

import SocialMediaIcon from "@/app/components/SocialMediaIcon";
import Button from "@/app/components/Button";
import { faGithub, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    const age = Math.floor((new Date().getTime() - new Date("2003-05-23").getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <main className="h-full grid place-items-center">
            <motion.section initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex gap-12 items-center w-fit">
                <Image src="/images/me.jpg" alt="Me" width={350} height={350} className="rounded-lg block object-cover shadow-lg select-none" draggable={false} />

                <div>
                    <h1 className="text-4xl leading-none uppercase">Harvey Coombs <span className="text-red-500">&middot;</span> Personal Website</h1>
                    <ul className="text-lg my-10 list-[square] marker:text-red-500 list-inside">
                        <li>Software Engineer</li>
                        <li>{age} Years old</li>
                        <li>From the United Kingdom</li>
                        <li>Started programming at the age of 10</li>
                        <li>Fluent in Python, JavaScript, Rust &amp; C#</li>
                        <li>Particularly interested in Machine Learning</li>
                    </ul>

                    <div className="flex gap-4 select-none">
                        <SocialMediaIcon url="https://github.com/harveycoombs" icon={faGithub} />
                        <SocialMediaIcon url="https://www.reddit.com/user/Harvey-Coombs" icon={faReddit} />
                        <SocialMediaIcon url="https://www.linkedin.com/in/harveycoombs" icon={faLinkedin} />
                        <Button url="mailto:contact@harveycoombs.com">Email Me</Button>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}