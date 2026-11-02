import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "@/app/contact/ContactForm";

export default function Contact() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-5 lg:gap-24">
                         <div className="flex flex-col justify-between gap-16 lg:col-span-2">
                              <h1 className="max-w-5xl text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">Let&apos;s Talk</h1>
                              <div className="max-w-sm">
                                   <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-amber-300" aria-hidden="true" />
                                   <p className="mt-8 text-base leading-8 text-stone-400">Tell me what you are working on, where you are stuck, or what you want to make better.</p>
                                   <a href="mailto:hello@harveycoombs.com" className="mt-8 block w-fit border-b border-amber-300 pb-3 text-lg font-semibold text-amber-300 transition-colors hover:text-amber-200">hello@harveycoombs.com</a>
                              </div>
                         </div>
                         <div className="lg:col-span-3"><ContactForm /></div>
                    </div>
               </section>

               <section className="px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                         <Link href="/" className="flex w-fit items-center gap-3 text-sm font-semibold text-stone-400 transition-colors hover:text-amber-300"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to home</Link>
                    </div>
               </section>
          </main>
     );
}
