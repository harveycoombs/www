"use client";
import { motion } from "framer-motion";

import Section from "@/app/components/ui/section";

export default function Home() {
    return (
        <main className="w-1000 mx-auto py-6">
            <div className="w-650 mx-auto">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: "easeOut" }}>
                    <h1 className="text-3xl text-slate-700 font-bold select-none">Harvey Coombs &ndash; Official Website</h1>
                    <p className="mt-1.5 font-semibold">Welcome to my official website. Here you can find all the information you need about me, my projects, and ways to contact me.</p>
                </motion.div>
                <Section title="About Me" delay={0.2}>
                    <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit tenetur aut reiciendis ex deleniti nemo rerum culpa, error, iure ullam officia debitis possimus voluptatum libero, numquam laudantium iste dicta ratione incidunt dolorem porro ipsa illo? Cum qui quia non odit ea, voluptates labore mollitia, nostrum sint iste voluptatem repellendus, explicabo at fugiat maxime. Inventore reprehenderit, ea ipsum error praesentium architecto est odit facilis perspiciatis nam neque minus aut labore corrupti impedit suscipit nemo atque omnis quo aspernatur aliquam delectus.</p>
                </Section>
                <Section title="Projects" delay={0.4}>
                    <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit tenetur aut reiciendis ex deleniti nemo rerum culpa, error, iure ullam officia debitis possimus voluptatum libero, numquam laudantium iste dicta ratione incidunt dolorem porro ipsa illo? Cum qui quia non odit ea, voluptates labore mollitia, nostrum sint iste voluptatem repellendus, explicabo at fugiat maxime. Inventore reprehenderit, ea ipsum error praesentium architecto est odit facilis perspiciatis nam neque minus aut labore corrupti impedit suscipit nemo atque omnis quo aspernatur aliquam delectus.</p>
                </Section>

                <Section title="Contact" delay={0.6}>
                    <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sit tenetur aut reiciendis ex deleniti nemo rerum culpa, error, iure ullam officia debitis possimus voluptatum libero, numquam laudantium iste dicta ratione incidunt dolorem porro ipsa illo? Cum qui quia non odit ea, voluptates labore mollitia, nostrum sint iste voluptatem repellendus, explicabo at fugiat maxime. Inventore reprehenderit, ea ipsum error praesentium architecto est odit facilis perspiciatis nam neque minus aut labore corrupti impedit suscipit nemo atque omnis quo aspernatur aliquam delectus.</p>
                </Section>
            </div>
        </main>
    );
}