import { motion } from "motion/react";
import { faGithub, faRedditAlien, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import SocialMediaIcon from "./SocialMediaIcon.jsx";

export default function Header() {
    return (
        <motion.header 
            className="p-5 flex justify-center items-center gap-5" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 2, ease: "easeInOut" }}
        >
            <SocialMediaIcon icon={faGithub} url="https://github.com/harveycoombs" title="GitHub" />
            <SocialMediaIcon icon={faRedditAlien} url="https://www.reddit.com/user/Harvey-Coombs" title="Reddit" />
            <SocialMediaIcon icon={faLinkedin} url="https://www.linkedin.com/in/harveycoombs" title="LinkedIn" />
        </motion.header>
    );
}