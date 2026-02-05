import { motion } from "motion/react";

export default function Projects() {
    return (
        <motion.div
            className="flex justify-center items-center w-fit mx-auto gap-8 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.75, ease: "easeOut" }}
        >
            <ProjectLink title="Vesper AI Bot" url="https://vesperbot.ai" />
            <ProjectLink title="Share.surf" url="https://share.surf" />
            <ProjectLink title="More Coming Soon" url="#" />
        </motion.div>
    );
}

function ProjectLink({ title, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-xl text-white font-extralight leading-none duration-200 uppercase active:text-white/75"
        >
            {title}
            <div className="absolute -bottom-1.5 w-full h-0.25 bg-white scale-x-0 group-hover:scale-x-100 group-active:scale-x-75 group-active:bg-white/75 duration-200"></div>
        </a>
    );
}