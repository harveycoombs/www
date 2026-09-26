"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";
import Panel from "@/app/components/common/Panel";

export default function ServicesPage() {
    
     return (
          <main className="push flex flex-col items-center justify-center gap-12 w-188 mx-auto max-md:px-6 max-md:w-full">
               <section className="w-full text-center">
                    <h1 className="block text-4xl font-extrabold tracking-wide uppercase text-white">Services I Offer</h1>
                    <p className="block font-medium mt-2 text-zinc-500">In addition to the projects in my <Link href="/portfolio">Portfolio</Link>, I also offer a wide variety of digital services.</p>
               </section>

               <section className="w-full">
                    <h2 className="block mb-3 text-2xl font-bold tracking-wide uppercase text-white">Currently Offered Services</h2>
                         
                    <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">

                    </div>
               </section>
          </main>
     );
}

function Service({ title, summary, icon, url }: any) {
     return (
          <Panel classes="flex flex-col justify-between">
               <div>
                    <div className="flex items-center gap-3">
                         <div className="w-9.5 h-9.5 rounded-md select-none bg-white/7 grid place-items-center">
                              <FontAwesomeIcon icon={icon} />
                         </div>

                         <h3 className="tracking-wide text-white font-medium">{title}</h3>
                    </div>
     
                    <p className="text-sm mt-2">{summary}</p>
               </div>

               <Button url={url} target="_blank" classes="w-full mt-3">Visit <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sky-200" /></Button>
          </Panel>
     );
}