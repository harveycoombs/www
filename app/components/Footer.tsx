import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-5 flex justify-between items-center max-md:flex-col max-md:items-center max-md:gap-1">
            <div>2021 &ndash; {new Date().getFullYear()} &middot; Harvey Coombs</div>

            <Link href="https://github.com/harveycoombs/www" target="_blank" rel="noopener noreferrer" className="hover:underline">View this site on GitHub</Link>
        </footer>
    )
}