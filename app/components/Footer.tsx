import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faRedditAlien, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
     return (
          <footer className="border-t border-white/10 bg-stone-950 p-5 text-sm text-stone-500">
               <div className="mx-auto flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <p>&copy; 2021 &ndash; 2026 Harvey Coombs</p>

                    <div className="flex items-center gap-3">
                         <nav className="flex items-center gap-2" aria-label="Social media">
                              <SocialMediaButton icon={faXTwitter} url="https://x.com/theharveycoombs" label="X" />
                              <SocialMediaButton icon={faLinkedinIn} url="https://www.linkedin.com/in/harveycoombs" label="LinkedIn" />
                              <SocialMediaButton icon={faGithub} url="https://github.com/harveycoombs" label="GitHub" />
                         </nav>

                         <Link href="/" className="flex items-center gap-2 border-l border-white/10 pl-3 text-stone-300 transition-colors hover:text-amber-300">Back to top <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" /></Link>
                    </div>
               </div>
          </footer>
     );
}

function SocialMediaButton({ url, icon, label }: any) {
     return (
          <Link href={url} target="_blank" rel="noreferrer" aria-label={label} title={label} className="flex size-9 items-center justify-center border border-white/15 text-stone-400 transition-colors hover:border-amber-300 hover:text-amber-300">
               <FontAwesomeIcon icon={icon} aria-hidden="true" />
          </Link>
     );
}