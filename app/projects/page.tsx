import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";

export default function Projects() {
     return (
          <main className="bg-stone-950 text-stone-100 tracking-wide">
               <section className="border-b border-white/10 px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                         <h1 className="max-w-5xl text-5xl font-medium leading-none tracking-tighter text-white sm:text-8xl">My Work</h1>
                         <p className="mt-10 max-w-2xl text-lg leading-8 text-stone-400">My projects and ventures, both past and present.</p>
                    </div>
               </section>

               <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                         <h2 className="text-3xl font-semibold mb-4">Featured</h2>

                         <div className="grid gap-px mb-12 border border-white/10 bg-white/10 md:grid-cols-3">
                              <Project name="Valiance Digital" description="A web hosting & domain registrar company." icon="/images/icons/valiance-digital.png" url="https://valiancedigital.com/" />
                              <Project name="Coombs Technologies" description="An embedded systems development company." icon="/images/icons/coombs-tech.png" url="https://coombstech.com/" />
                              <Project name="Share.surf" description="An easy-to-use file sharing service." icon="/images/icons/share.png" url="https://valiancedigital.com/" />
                         </div>

                         <h2 className="text-3xl font-semibold mb-4">Other</h2>
                         
                         <div className="grid gap-px mb-12 border border-white/10 bg-white/10 md:grid-cols-3">
                              <Project name="Agentic Discord Bot" description="The world's first Agentic AI Discord bot." url="https://github.com/harveycoombs/agentic-discord-bot" />
                              <Project name="Byeground AI" description="An AI background removal tool." url="https://github.com/harveycoombs/byeground-ai" />
                              <Project name="IConvEx-1" description="A convolutional neural network for image classification." url="https://github.com/harveycoombs/iconvex-1" />
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

function Project({ name, description, icon = "", url = "" }: any) {
     return (
          <Link href={url} className="group bg-neutral-950 p-7 transition-colors duration-300 hover:bg-neutral-900 cursor-pointer sm:p-9">
               <div className="flex items-start justify-between">
                    {icon.length ? (
                         <Image 
                              src={icon} 
                              alt={name} 
                              width={30} 
                              height={30} 
                              className="outline outline-white/10 border-4 border-stone-950" 
                         />
                    ) : (
                         <div className="w-7.5 h-7.5 grid place-items-center outline outline-white/10">
                              <FontAwesomeIcon icon={faQuestion} className="text-sm text-white/30" aria-hidden="true" />
                         </div>
                    )}

                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl text-white/30 duration-300 group-hover:text-amber-300" aria-hidden="true" />
               </div>

               <h2 className="mt-20 text-2xl font-medium tracking-tighter text-white duration-300 group-hover:text-amber-300">{name}</h2>
               <p className="mt-4 text-sm leading-7 text-stone-400">{description}</p>
          </Link>
     );
}