import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReddit, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Button from "@/app/components/common/Button";

export default function Header() {
    return (
        <header className="p-3 bg-slate-800 text-white">
            <div className="flex justify-between items-center w-1000 mx-auto max-[1050px]:w-full max-[360px]:justify-center">
                <Link href="/" className="font-medium text-lg leading-none duration-150 hover:opacity-75 active:opacity-55 max-[360px]:hidden">Harvey Coombs</Link>
                <nav>
                    <HeaderIcon icon={faGithub} url="https://github.com/harveycoombs" />
                    <HeaderIcon icon={faReddit} url="https://www.reddit.com/user/Harvey_Coombs" />
                    <HeaderIcon icon={faLinkedin} url="https://linkedin.com/in/harvey-coombs-24573214a/" />
                    <Button url="mailto:contact@harveycoombs.com" classes="inline-block align-middle">Email Me</Button>
                </nav>
            </div>
        </header>
    );
}

function HeaderIcon({ icon, url }: any) {
    return <Link href={url} target="_blank" rel="noopener" className="inline-block align-middle text-lg leading-none duration-150 mr-4 text-slate-400 hover:text-slate-300 active:text-slate-200"><FontAwesomeIcon icon={icon} /></Link>;
}