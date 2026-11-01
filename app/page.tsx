"use client";
import { useState, useEffect } from "react";

export default function Home() {
     const [year, setYear] = useState<number|null>(null);

     useEffect(() => {
          setYear(new Date().getFullYear());
     }, []);

     return (
          <main className="h-screen grid place-items-center">
               <section className="text-center">
                    <h1 className="text-3xl font-semibold">Coming Soon</h1>
                    <p className="text-lg font-medium mt-1.5">Harvey Coombs &middot; 2021 &ndash; {year}</p>
               </section>
          </main>
     );
}