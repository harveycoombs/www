import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const steps = [
     "Tell me what you need",
     "We decide what matters",
     "I make the work happen"
];

export default function More() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                         <h1 className="max-w-5xl text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">I prefer useful work.</h1>
                         <p className="mt-10 max-w-2xl text-lg leading-8 text-stone-400">No bloated process. No vague deliverables. Just a clear plan and the work required to finish it.</p>
                    </div>
               </section>

               <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-5 lg:gap-24">
                         <h2 className="max-w-sm text-4xl font-medium leading-tight tracking-tighter text-white sm:text-5xl lg:col-span-2">The process is simple.</h2>
                         <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-3">
                              {steps.map((step, index) => (
                                   <div key={step} className="flex items-center gap-6 py-7">
                                        <span className="flex size-8 shrink-0 items-center justify-center border border-amber-300 text-xs font-semibold text-amber-300"><FontAwesomeIcon icon={faCheck} aria-hidden="true" /></span>
                                        <p className="text-xl tracking-tight text-stone-200 sm:text-2xl">{step}</p>
                                        <span className="ml-auto text-sm text-stone-600">0{index + 1}</span>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                         <p className="max-w-xl text-2xl tracking-tighter text-white sm:text-4xl">If you know what needs to change, we can start there.</p>
                         <Link href="/contact" className="flex w-fit items-center gap-3 border-b border-amber-300 pb-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200">Get in touch <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
                    </div>
               </section>
          </main>
     );
}
