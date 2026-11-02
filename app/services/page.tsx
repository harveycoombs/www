import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode, faCompass, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const services = [
     {
          icon: faLightbulb,
          title: "Product direction",
          description: "I help you decide what to make, who it is for, and what matters most."
     },
     {
          icon: faCode,
          title: "Web development",
          description: "I design and develop fast, responsive websites and applications."
     },
     {
          icon: faCompass,
          title: "Technical decisions",
          description: "I remove uncertainty from the technical choices that shape the work."
     }
];

const principles = [
     "Find the actual problem",
     "Make the important parts obvious",
     "Leave room to grow"
];

export default function Services() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                         <h1 className="max-w-5xl text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">Services I Offer</h1>
                         <p className="mt-10 max-w-2xl text-lg leading-8 text-stone-400">Need a new product, a better website, or a technical problem solved? I bring a calm, direct approach and get to the point.</p>
                    </div>
               </section>

               <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                         <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                              {services.map((service) => (
                                   <article key={service.title} className="bg-neutral-950 p-7 sm:p-9">
                                        <FontAwesomeIcon icon={service.icon} className="text-2xl text-amber-300" aria-hidden="true" />
                                        <h2 className="mt-16 text-2xl font-medium tracking-tighter text-white">{service.title}</h2>
                                        <p className="mt-4 text-sm leading-7 text-stone-400">{service.description}</p>
                                   </article>
                              ))}
                         </div>
                    </div>
               </section>

               <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-5 lg:gap-24">
                         <h2 className="max-w-sm text-4xl font-medium leading-tight tracking-tighter text-white sm:text-5xl lg:col-span-2">I do not add noise.</h2>
                         <div className="lg:col-span-3">
                              <div className="divide-y divide-white/10 border-y border-white/10">
                                   {principles.map((principle, index) => (
                                        <div key={principle} className="flex items-center justify-between gap-6 py-6">
                                             <p className="text-xl tracking-tight text-stone-200 sm:text-2xl">{principle}</p>
                                             <span className="text-sm text-amber-300">0{index + 1}</span>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               <section className="border-t border-white/10 bg-amber-300 px-6 py-20 text-neutral-900 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                         <h2 className="max-w-3xl text-5xl font-semibold leading-none tracking-tighter sm:text-7xl">Have something to make?<br />Let&apos;s get it done.</h2>
                         <Link href="/contact" className="flex w-fit items-center gap-3 border-b-2 border-neutral-900 pb-2 text-sm font-bold transition-transform hover:translate-x-1">Start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
                    </div>
               </section>
          </main>
     );
}
