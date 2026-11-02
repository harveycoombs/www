import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";
import DownButton from "@/app/components/home/DownButton";

export default function Home() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section id="top" className="relative grid min-h-screen place-items-center overflow-hidden border-b border-white/10">
                    <div className="absolute inset-0 z-0">
                         <Image
                              src="/images/me.jpg"
                              alt="Harvey Coombs"
                              width={2560}
                              height={1440}
                              priority
                              className="h-full w-full object-cover object-center grayscale-20 contrast-110 sm:object-center"
                         />

                         <div className="absolute inset-0 bg-radial from-amber-300/10 to-transparent" />
                         <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/75" />
                    </div>

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-36 sm:px-10 lg:px-16">
                         <div className="max-w-5xl">
                              <p className="mb-7 flex items-center gap-3 text-sm font-medium text-amber-300 sm:text-base">
                                   <span className="h-px w-10 bg-amber-300" />
                                   Hi, I&apos;m Harvey
                              </p>

                              <h1 className="max-w-5xl text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white">
                                   Entrepreneur <span className="text-amber-300">&amp;</span>
                                   <br />
                                   Software Engineer
                              </h1>

                              <p className="mt-9 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                                   Welcome to my official website &mdash; Get started by choosing an option below
                              </p>

                              <div className="mt-9 flex flex-wrap items-center gap-4">
                                   <Button url="/projects" classes="border-amber-300 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20">
                                        See my work <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" aria-hidden="true" />
                                   </Button>

                                   <Link href="/about" className="border-b border-white/40 pb-1 text-sm font-semibold text-white transition-colors hover:border-amber-300 hover:text-amber-300">
                                        More about me
                                   </Link>
                              </div>
                         </div>
                    </div>

                    <DownButton />
               </section>

               <section id="overview" className="border-b border-white/10 bg-stone-950">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                         <div className="max-w-3xl">
                              <h2 className="text-4xl font-medium leading-tight tracking-tighter text-white sm:text-6xl">I create things</h2>
                              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-400 sm:text-lg">See the links below for more</p>
                         </div>

                         <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                              <QuickLink url="/about" title="Who am I?" description="Find out some basic information about me" />
                              <QuickLink url="/projects" title="What have I done?" description="See my projects and ventures, past and present" />
                              <QuickLink url="/services" title="What can I do for you?" description="Take a look at the numerous services I provide" />
                         </div>
                    </div>
               </section>

               <section id="sharedotsurf" className="bg-stone-950">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28 flex justify-between">
                         <div className="max-w-3xl">
                              <h2 className="text-4xl font-medium leading-tight tracking-tighter text-white sm:text-6xl">Share.surf &mdash; File Sharing</h2>
                              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-400 sm:text-lg">Share.surf is a lightweight, easy-to-use file sharing platform.</p>

                              <Button classes="mt-4">Visit Share.surf<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" aria-hidden="true" /></Button>
                         </div>

                         <Image src="/images/share-surf.webp" alt="Share.surf" width={1920} height={1080} className="w-2/5 block shrink object-cover outline outline-white/10 border-12 border-stone-950" />
                    </div>
               </section>
          </main>
     );
}

function QuickLink({ url, title, description }: any) {
     return (
          <Link href={url} className="group bg-stone-950 p-7 transition-colors duration-300 hover:bg-neutral-900 sm:p-9">
               <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold text-amber-300">{title}</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white/30 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
               </div>

               <p className="mt-16 text-xl tracking-tight text-stone-300">{description}</p>
          </Link>
     );
}