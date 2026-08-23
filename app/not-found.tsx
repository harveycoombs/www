
import Link from "next/link";

export default function NotFound() {
     return (
          <main className="push grid place-items-center">
               <section className="w-fit text-center">
                    <h1 className="block text-6xl font-black uppercase text-white">Page <span className="text-red-400">Not</span> Found</h1>
                    <p className="block font-medium text-lg mt-3 text-zinc-500">Try checking the URL and try again, or <Link href="/" className="text-white hover:underline">click here</Link> to return home</p>
               </section>
          </main>
     );
}