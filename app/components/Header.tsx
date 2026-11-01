"use client";
import Link from "next/link";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";

export default function Header() {

     const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (
          <header className={`-mb-20 p-5 w-full flex items-center justify-between text-white bg-stone-950/50 border-b border-white/15 shadow-xl backdrop-blur-md sticky z-40 top-0 left-0 right-0`}>
               <Link href="/" className="relative text-2xl sm:text-3xl font-semibold tracking-tighter leading-none transition-colors duration-200 before:mr-1 before:mb-0.5 before:inline-block before:size-2.5 before:bg-amber-400 before:shadow-lg hover:text-amber-300">Harvey Coombs</Link>
               
               <nav className="flex items-center gap-3 text-white/80 lg:gap-7">
                    <HeaderLink url="/about">About Me</HeaderLink>
                    <HeaderLink url="/projects">My Work</HeaderLink>
                    <HeaderLink url="/services">My Services</HeaderLink>
                    <HeaderLink url="/more">More</HeaderLink>

                    <button
                         className="size-11 border border-white/20 text-amber-300 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-300/10 lg:hidden"
                         aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                         aria-expanded={isMenuOpen}
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                         <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-xl" />
                    </button>

                    <Button url="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Button>
               </nav>

               {isMenuOpen && (
                    <div className="absolute left-5 right-5 top-full border border-white/15 bg-stone-950/95 p-4 shadow-2xl backdrop-blur-md lg:hidden">
                         <div className="flex flex-col divide-y divide-white/10">
                              <MobileLink url="/about" onClick={() => setIsMenuOpen(false)}>About Me</MobileLink>
                              <MobileLink url="/projects" onClick={() => setIsMenuOpen(false)}>My Work</MobileLink>
                              <MobileLink url="/services" onClick={() => setIsMenuOpen(false)}>My Services</MobileLink>
                              <MobileLink url="/more" onClick={() => setIsMenuOpen(false)}>More</MobileLink>
                              <MobileLink url="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</MobileLink>
                         </div>
                    </div>
               )}
          </header>
     );
}

function HeaderLink({ children, url }: any) {
     return (
          <Link href={url} className="font-semibold leading-none group duration-200 translate-y-0.5 transition-colors hover:text-amber-300 max-lg:hidden">
               {children}
               <span className="block h-0.5 mt-0.5 w-full bg-current scale-x-0 duration-200 group-hover:scale-x-100 origin-left" />
          </Link>
     );
}

function MobileLink({ children, url, onClick }: any) {
     return (
          <Link href={url} onClick={onClick} className="py-4 text-sm font-semibold text-stone-300 transition-colors hover:text-amber-300">
               {children}
          </Link>
     );
}
