import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCloud, faCode, faInfinity, faMobileScreen, faNetworkWired, faRobot } from "@fortawesome/free-solid-svg-icons";

const services = [
     {
          icon: faCode,
          title: "Websites & web apps",
          description: "I design and build websites and web applications with JavaScript, TypeScript, React and Next.js, or C# and ASP.NET, using PostgreSQL, MySQL or MSSQL databases."
     },
     {
          icon: faMobileScreen,
          title: "Mobile apps",
          description: "I build iOS and Android apps with React Native and Expo."
     },
     {
          icon: faRobot,
          title: "AI & automation",
          description: "I help you automate repetitive tasks using AI, building tools with Python and LangChain."
     },
     {
          icon: faNetworkWired,
          title: "Network engineering",
          description: "I design, set up, and troubleshoot networks."
     },
     {
          icon: faCloud,
          title: "AWS & cloud",
          description: "I build and manage infrastructure on AWS."
     },
     {
          icon: faInfinity,
          title: "DevOps & delivery",
          description: "I set up CI/CD pipelines, monitoring, and infrastructure as code."
     }
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

               <section className="border-t border-white/10 bg-amber-300 px-6 py-20 text-neutral-900 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                         <h2 className="max-w-3xl text-5xl font-semibold leading-none tracking-tighter sm:text-7xl">Have something to make?<br />Let&apos;s get it done.</h2>
                         <Link href="/contact" className="flex w-fit items-center gap-3 border-b-2 border-neutral-900 pb-2 text-sm font-bold transition-transform hover:translate-x-1">Start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
                    </div>
               </section>
          </main>
     );
}
