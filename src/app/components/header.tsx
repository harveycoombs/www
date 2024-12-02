import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Button from "@/app/components/ui/button";

export default function Header() {
    return (
        <header className="p-3 bg-slate-800 text-white">
            <div className="flex justify-between items-center w-1000 mx-auto">
                <Link href="/" className="font-medium text-lg leading-none duration-150 hover:opacity-75 active:opacity-55">Harvey Coombs</Link>
                <nav>
                    <HeaderIcon icon={faGithub} url="https://github.com/harveycoombs" />
                    <HeaderIcon icon={faXTwitter} url="https://x.com/harveycoombs23" />
                    <HeaderIcon icon={faLinkedin} url="https://uk.linkedin.com/in/harvey-coombs-24573214a/" />
                    <Button url="mailto:contact@harveycoombs.com" classes="inline-block align-middle">Email Me</Button>
                </nav>
            </div>
        </header>
    );
}

function HeaderIcon({ icon, url }: any) {
    return <Link href={url} className="inline-block align-middle text-lg leading-none duration-150 mr-4 text-slate-400 hover:text-slate-300 active:text-slate-200"><FontAwesomeIcon icon={icon} /></Link>;
}