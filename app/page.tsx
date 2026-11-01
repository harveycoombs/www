"use client";

export default function Home() {
     const d = new Date();

     return (
          <main className="h-screen grid place-items-center">
               <section className="text-center">
                    <h1 className="text-3xl font-semibold">Coming Soon</h1>
                    <p className="text-lg font-medium mt-1.5">Harvey Coombs &middot; 2021 &ndash; {d.getFullYear()}</p>
               </section>
          </main>
     );
}