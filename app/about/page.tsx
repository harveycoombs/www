import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function About() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                         <div className="max-w-5xl">
                              <h1 className="text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">I make digital products clear and useful.</h1>
                              <p className="mt-10 max-w-2xl text-lg leading-8 text-stone-400">I work from the first idea through the final release. I decide what matters, shape the experience, and write the code.</p>
                         </div>
                    </div>
               </section>

               <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-5 lg:gap-24">
                         <div className="relative min-h-112 overflow-hidden border border-white/10 sm:min-h-144 lg:col-span-2">
                              <Image src="/images/me.jpg" alt="Harvey Coombs at his desk" fill className="object-cover object-center grayscale-20 contrast-110" />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                         </div>
                         <div className="flex flex-col justify-center lg:col-span-3">
                              <p className="max-w-xl text-2xl leading-snug tracking-tighter text-white sm:text-4xl">I care about the details because small decisions change how a product feels.</p>
                              <p className="mt-8 max-w-xl text-base leading-8 text-stone-400">The best work is direct. It solves the right problem, removes friction, and gives people a reason to come back.</p>
                              <div className="mt-10 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
                                   <p className="flex items-center gap-3 text-sm text-stone-300"><FontAwesomeIcon icon={faCheck} className="text-amber-300" aria-hidden="true" /> Clear decisions</p>
                                   <p className="flex items-center gap-3 text-sm text-stone-300"><FontAwesomeIcon icon={faCheck} className="text-amber-300" aria-hidden="true" /> Useful outcomes</p>
                                   <p className="flex items-center gap-3 text-sm text-stone-300"><FontAwesomeIcon icon={faCheck} className="text-amber-300" aria-hidden="true" /> Clean execution</p>
                                   <p className="flex items-center gap-3 text-sm text-stone-300"><FontAwesomeIcon icon={faCheck} className="text-amber-300" aria-hidden="true" /> Room to grow</p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                         <p className="text-2xl tracking-tighter text-white">Want to know what I can do?</p>
                         <Link href="/services" className="flex w-fit items-center gap-3 border-b border-amber-300 pb-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200">See my services <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
                    </div>
               </section>
          </main>
     );
}
