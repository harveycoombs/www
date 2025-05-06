import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faRedditAlien } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
    return (
        <header className="p-6 z-10 fixed top-0 left-0 right-0 flex justify-between items-center">
            <nav className="pl-2.5">
                <HeaderLink url="https://share.surf">Share.surf</HeaderLink>
                <HeaderLink url="https://vesper.gg">Vesper.gg</HeaderLink>
                <HeaderLink url="https://oxyn.ai">Oxyn.ai</HeaderLink>
                <HeaderLink url="mailto:contact@harveycoombs.com">Contact</HeaderLink>
            </nav>

            <div>
                <HeaderIcon url="https://github.com/harveycoombs" icon={faGithub} />
                <HeaderIcon url="https://www.linkedin.com/in/harveycoombs" icon={faLinkedin} />
                <HeaderIcon url="https://www.reddit.com/user/Harvey-Coombs" icon={faRedditAlien} />
            </div>
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} target="_blank" rel="noopener" className="inline-block align-middle mr-12 text-xs uppercase select-none cursor-pointer duration-300 hover:opacity-70 active:opacity-50">{children}</Link>;
}

function HeaderIcon({ url, icon }: any) {
    return <Link href={url} target="_blank" rel="noopener" className="inline-block align-middle ml-6 text-xl select-none cursor-pointer duration-300 hover:opacity-70 active:opacity-50l"><FontAwesomeIcon icon={icon} /></Link>;
}