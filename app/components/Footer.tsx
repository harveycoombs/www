import Link from "next/link";

export default function Footer() {
     return (
          <footer className="p-6 flex items-center justify-between">
               <p>2021 &ndash; {new Date().getFullYear()} &middot; harveycoombs.com &middot; Harvey Coombs</p>
               <Link href="https://github.com/harveycoombs/www" className="hover:underline">View this site on GitHub</Link>
          </footer>
     );
}