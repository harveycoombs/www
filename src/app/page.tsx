"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Section from "@/app/components/common/section";

export default function Home() {
    return (
        <main className="w-1000 min-h-[calc(100vh-102px)] mx-auto py-6 max-[1050px]:w-full max-[1050px]:px-3 max-[550px]:py-3">
            <div className="w-650 mx-auto">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: "easeOut" }}>
                    <h1 className="text-3xl text-slate-700 font-bold select-none max-[550px]:text-center max-[550px]:text-2xl">Harvey Coombs &ndash; Official Website</h1>
                    <p className="mt-1.5 font-semibold max-[550px]:text-center max-[550px]:text-sm max-[550px]:font-bold">Welcome to my official website. Here you can find all the information you need about me, my projects, and ways to contact me.</p>
                </motion.div>
                <Section title="About Me" delay={0.2}>
                    <ul className="font-semibold list-disc ml-5 leading-relaxed max-[550px]:text-sm max-[550px]:font-bold">
                        <li>Software Engineer</li>
                        <li>21 Years old</li>
                        <li>From the United Kingdom</li>
                        <li>Started programming at the age of 10</li>
                        <li>Fluent in Python, JavaScript, Rust &amp; C#</li>
                        <li>Particularly interested in Deep Learning</li>
                        <li>Also enjoys reading and playing chess</li>
                    </ul>
                </Section>
                <Section title="Projects" delay={0.4}>
                    <p className="font-semibold max-[550px]:text-sm max-[550px]:font-bold">Below are some of my recent projects.</p>
                    <div className="grid grid-cols-4 gap-4 mt-3 max-md:grid-cols-2 max-[430px]:grid-cols-1">
                        <ProjectTile title="Share" description="An easy-to-use file sharing platform." url="https://share.surf/" repo="https://github.com/harveycoombs/share" language="React" />
                        <ProjectTile title="Collate" description="An AI search & summary Tool." url="https://collate.run/" language="React" />
                        <ProjectTile title="Storage" description="A fast file server." url="https://storage.harveycoombs.com/" repo="https://github.com/harveycoombs/storage" language="Rust" />
                        <ProjectTile title="Talk" description="Effortless language model inference" repo="https://github.com/harveycoombs/talk" language="Python" />
                    </div>
                </Section>

                <Section title="More" delay={0.6}>
                    <p className="font-semibold max-[550px]:text-sm max-[550px]:font-bold">In addition to the GitHub, X &amp; LinkedIn links found in the header, you can also find me on <Link href="https://huggingface.co/harveycoombs" target="_blank" rel="noopener" className="font-bold hover:underline">Huggingface</Link> and <Link href="https://www.chess.com/member/harveycoombs" target="_blank" rel="noopener" className="font-bold hover:underline">Chess.com</Link>.</p>
                </Section>
            </div>
        </main>
    );
}

function ProjectTile({ title, description, url, repo, language }: any) {
    return (
        <div className="p-2.5 rounded-md inline-flex flex-col items-center justify-between bg-slate-100 text-center select-none duration-150 hover:-translate-y-2 hover:shadow-md max-[650px]:w-full">
            <div>
                <strong className="font-bold">{title}</strong>
                <div className="text-slate-400/75 font-medium text-sm">{description}</div>
            </div>
            <div className="w-full flex justify-between items-center mt-2.5 text-lg text-slate-400 leading-none">
                {language?.length ? <div className="text-sm font-bold bg-slate-300/70 text-slate-500/70 leading-none py-1 px-2 rounded">{language}</div> : <div></div>}
                <div>
                    {repo?.length ? <Link href={repo} target="_blank" rel="noopener" className="inline-block align-middle duration-150 hover:text-slate-500/85 active:text-slate-500" title="View on GitHub"><FontAwesomeIcon icon={faGithub} /></Link> : <div></div>}
                    {url?.length ? <Link href={url} target="_blank" rel="noopener" className="inline-block align-middle duration-150 ml-3 hover:text-slate-500/85 active:text-slate-500" title="View"><FontAwesomeIcon icon={faExternalLinkAlt} /></Link> : null}
                </div>
            </div>
        </div>
    );
}