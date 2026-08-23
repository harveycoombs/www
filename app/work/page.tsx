import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";
import Panel from "@/app/components/common/Panel";

export default function WorkPage() {
     return (
          <main className="push flex flex-col items-center justify-center gap-12 w-188 mx-auto max-md:px-6 max-md:w-full">
               <section className="w-full text-center">
                    <h1 className="block text-4xl font-extrabold tracking-wide uppercase text-white">My Work</h1>
                    <p className="block font-medium mt-2 text-zinc-500">A list of my past &amp; present projects</p>
               </section>

               <section className="w-full">
                    <h2 className="block mb-3 text-2xl font-bold tracking-wide uppercase text-white">Active Projects</h2>
                         
                    <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                         <Project title="Valiance Digital" startYear={2025} endYear={new Date().getFullYear()} summary="A software development & IT agency." icon="/images/projects/valiancedigital.jpg" url="/" />
                         <Project title="Coombs Technologies" startYear={2025} endYear={new Date().getFullYear()} summary="A healthcare technology company." icon="/images/projects/coombstech.jpg" url="/" />
                         <Project title="Share.surf" startYear={2021} endYear={new Date().getFullYear()} summary="A simple & secure file sharing platform." icon="/images/projects/sharesurf.jpg" url="/" />
                         <Project title="AgentiBot" startYear={2020} endYear={new Date().getFullYear()} summary="The world's first agentic AI Discord bot." icon="/images/projects/agentibot.jpg" url="/" />
                    </div>
               </section>

               <section className="w-full">
                    <h2 className="block mb-3 text-2xl font-bold tracking-wide uppercase text-white">Historical Projects</h2>
                         
                    <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                         <Project title="Emiko TV" startYear={2023} endYear={2023} summary="A video editing & sharing platform for short-form content." />
                         <Project title="EveryChapter" startYear={2022} endYear={2023} summary="An experimental AI social media platform." />
                         <Project title="Titania" startYear={2022} endYear={2025} summary="A library for simplifying JavaScript code." icon="/images/projects/titania.png" />
                    </div>
               </section>
          </main>
     );
}

function Project({ title, startYear, endYear, summary, icon = "", url = "" }: any) {
     const currentYear = new Date().getFullYear();
     
     return (
          <Panel classes="flex flex-col justify-between">
               <div>
                    <div className="flex items-center gap-3">
                         {icon.length ? <Image src={icon} alt={`${title} icon`} width={40} height={40} className="w-9.5 h-9.5 rounded-md select-none" draggable={false} /> : (
                              <div className="w-9.5 h-9.5 rounded-md select-none bg-white/7 grid place-items-center">
                                   <FontAwesomeIcon icon={faQuestion} />
                              </div>
                         )}
                         
                         <div>
                              <h3 className="tracking-wide text-white font-medium">{title}</h3>
                              <div className="text-sm font-medium text-zinc-600">{startYear} &ndash; {(endYear === currentYear) ? "present" : endYear.toString()}</div>
                         </div>
                    </div>
     
                    <p className="text-sm mt-2">{summary}</p>
               </div>

               {url.length > 0 && <Button classes="w-full mt-3">Visit <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sky-200" /></Button>}
          </Panel>
     );
}