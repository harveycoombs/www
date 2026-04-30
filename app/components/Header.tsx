"use client";
import { motion } from "motion/react";
import { faGithub, faRedditAlien, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    const path = usePathname();

    return (path == "/") ? (
        <motion.header 
            className="p-5 flex justify-center items-center gap-5 fixed top-0 left-0 right-0 z-50 text-white"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 2, ease: "easeInOut" }}
        >
            <SocialMediaIcon icon={faGithub} url="https://github.com/harveycoombs" title="GitHub" />
            <SocialMediaIcon icon={faRedditAlien} url="https://www.reddit.com/user/Harvey-Coombs" title="Reddit" />
            <SocialMediaIcon icon={faLinkedin} url="https://www.linkedin.com/in/harveycoombs" title="LinkedIn" />
        </motion.header>
    ) : (
        <header className="p-5 flex justify-between items-center text-gray-700 select-none">
            <Link href="/" className="text-xl font-bold hover:underline uppercase max-sm:text-lg">Harvey Coombs</Link>
            
            <nav className="flex items-center gap-3">
                <SocialMediaIcon icon={faGithub} url="https://github.com/harveycoombs" title="GitHub" />
                <SocialMediaIcon icon={faRedditAlien} url="https://www.reddit.com/user/Harvey-Coombs" title="Reddit" />
                <SocialMediaIcon icon={faLinkedin} url="https://www.linkedin.com/in/harveycoombs" title="LinkedIn" />
            </nav>
        </header>
    );
}

function SocialMediaIcon({ icon, url, ...rest }: any) {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block align-middle text-2xl duration-200 hover:opacity-75 active:opacity-50 max-sm:text-xl"
            {...rest}
        >
            <FontAwesomeIcon icon={icon} />
        </Link>
    );
}