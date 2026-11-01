import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const capabilities = [
     {
          number: "01",
          title: "Product direction",
          description: "I turn rough ideas into clear products with a point of view.",
          detail: "From the first question to a plan the team can act on."
     },
     {
          number: "02",
          title: "Web development",
          description: "I make fast websites and applications that are easy to use.",
          detail: "Interfaces that work properly on every screen."
     },
     {
          number: "03",
          title: "Technical decisions",
          description: "I make the technical decisions that keep projects moving.",
          detail: "A clear route through the difficult parts."
     }
];

export default function Projects() {
     return (
          <main className="bg-neutral-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                         <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                              <h1 className="max-w-4xl text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">I take ideas from concept to launch.</h1>
                              <p className="max-w-xs text-sm leading-7 text-stone-500">Strategy, design, and code for work that needs to move.</p>
                         </div>
                    </div>
               </section>

               <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                         <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                              {capabilities.map((capability, index) => (
                                   <article key={capability.number} className={`group bg-neutral-950 p-7 transition-colors duration-300 hover:bg-neutral-900 sm:p-9 ${index === 1 ? "md:translate-y-6" : ""}`}>
                                        <div className="flex items-start justify-between">
                                             <span className="text-sm font-semibold text-amber-300">{capability.number}</span>
                                             <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                                        </div>
                                        <h2 className="mt-20 text-2xl font-medium tracking-tighter text-white">{capability.title}</h2>
                                        <p className="mt-4 text-sm leading-7 text-stone-400">{capability.description}</p>
                                        <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-stone-600">{capability.detail}</p>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>

               <section className="border-t border-white/10 bg-stone-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                         <h2 className="max-w-xl text-3xl font-medium tracking-tighter text-white sm:text-5xl">Have something to make?</h2>
                         <Link href="/contact" className="flex w-fit items-center gap-3 border-b border-amber-300 pb-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200">Start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
                    </div>
               </section>
          </main>
     );
}
