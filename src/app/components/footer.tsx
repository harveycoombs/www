import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-3">
            <div className="w-1000 flex justify-between items-center mx-auto font-semibold text-slate-400/75 text-sm max-[1050px]:w-full">
                <div>{new Date().getFullYear()} &middot; Harvey Coombs</div>
                <div>View this site on <Link href="https://github.com/harveycoombs/www" className="hover:underline">GitHub</Link></div>
            </div>
        </footer>
    );
}