"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/app/components/common/Button";

export default function Header() {
     return (
          <header className="p-6 flex items-center justify-between">
               <strong className="text-xl text-white font-bold uppercase">Harvey Coombs</strong>

               <nav className="flex gap-6 items-center">
                    <HeaderLink url="/">Home</HeaderLink>
                    <HeaderLink url="/work">Work</HeaderLink>
                    <HeaderLink url="/news">Updates</HeaderLink>
                    <HeaderLink url="/contact">Contact</HeaderLink>

                    <Button url="/donate">Donate</Button>
               </nav>
          </header>
     );
}

function HeaderLink({ url, children }: any) {
     const path = usePathname();
     return <Link href={url} className={`mb-1 cursor-pointer duration-150 group hover:text-white active:text-white/75 active:scale-96 ${path === url ? "text-white" : ""} max-sm:hidden`}>{children}</Link>;
}