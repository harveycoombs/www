"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const path = usePathname();
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className={`p-5 text-center text-sm ${path == "/" ? "fixed bottom-0 left-0 right-0 z-50 text-white" : ""}`}>
            2021 &ndash; {currentYear} &middot; Harvey Coombs &middot; <Link href="https://github.com/harveycoombs/www" target="_blank" rel="noopener noreferrer" className="hover:underline">View this site on GitHub</Link>
        </footer>
    );
}