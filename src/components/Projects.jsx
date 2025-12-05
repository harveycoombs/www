import { motion } from "motion/react";

export default function Projects() {
    return (
        <motion.div
            className="mt-12 text-xl max-lg:text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.8, ease: "easeOut" }}
        >
            <p className="leading-9 max-lg:leading-8 max-md:text-center">Did I mention I started programming when I was 10 years old?<br />Check out some of my projects below:</p>

            <div className="mt-6 flex gap-7 max-md:justify-center max-sm:text-base max-sm:gap-3 max-sm:font-medium">
            <ProjectLink title="Vesper AI Bot" url="https://vesperbot.ai" />
            <ProjectLink title="Share.surf" url="https://share.surf" />
            <ProjectLink title="Coombs Technologies" url="https://coombstech.com" />
            </div>
        </motion.div>
    );
}

function ProjectLink({ title, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative py-0.5 pb-1.5 px-1.5 leading-none duration-200 hover:text-gray-800 active:text-gray-800"
        >
            <span className="relative z-10">{title}</span>
            <div className="bg-gray-200 absolute inset-0 w-full h-full scale-y-0 duration-200 origin-bottom z-0 group-hover:scale-y-100 group-active:scale-y-100"></div>
        </a>
    );
}