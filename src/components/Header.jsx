import { faGithub, faRedditAlien, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import SocialMediaIcon from "./SocialMediaIcon.jsx";

export default function Header() {
    return (
        <header className="p-5 flex justify-between items-center">
            <strong className="text-lg font-medium">Harvey Coombs</strong>

            <nav className="flex gap-5">
                <SocialMediaIcon icon={faGithub} url="https://github.com/harveycoombs" title="GitHub" />
                <SocialMediaIcon icon={faRedditAlien} url="https://www.reddit.com/user/Harvey-Coombs" title="Reddit" />
                <SocialMediaIcon icon={faLinkedin} url="https://www.linkedin.com/in/harveycoombs" title="LinkedIn" />
            </nav>
        </header>
    );
}