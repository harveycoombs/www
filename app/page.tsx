"use client";

import { motion } from "motion/react";
import ProjectLink from "./components/ProjectLink";

export default function Home() {
    const boldIndexes = [4, 5, 6, 7, 8, 9, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 126, 127, 128, 129, 130, 131, 132, 134, 135];
    
    return (
        <main className="px-5 h-[calc(100vh-133px)] flex flex-col justify-center max-md:h-[calc(100vh-161px)]">
            <section>
                <motion.h1 
                    className="text-5xl leading-18 font-extralight max-lg:text-4xl max-lg:leading-14 max-md:text-center max-sm:text-3xl max-sm:leading-12" 
                    initial={{ y: 80 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.8, delay: 5, ease: "easeOut" }}
                >
                    {Array.from("I'm Harvey, an experienced software engineer\nfrom the United Kingdom, focused on Deep\nLearning research, Embedded Systems and Agentic AI.").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.04,
                                ease: "easeOut"
                            }}
                            className={boldIndexes.includes(index) ? "font-medium text-white" : ""}
                        >
                            {char == "\n" ? <br /> : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div 
                    className="mt-12 text-xl max-lg:text-lg" 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 5.8, ease: "easeOut" }}
                >
                    <p className="leading-9 max-lg:leading-8 max-md:text-center">
                        Did I mention I started programming when I was 10 years old?<br/>
                        Check out some of my projects below:
                    </p>

                    <div className="mt-6 flex gap-7 max-md:justify-center max-sm:text-base max-sm:gap-3 max-sm:font-medium">
                        <ProjectLink title="Vesper" url="https://vesper.gg" />
                        <ProjectLink title="LlamAccel" url="https://llamaccel.com" />
                        <ProjectLink title="Dark Tensor" url="https://darktensor.ai" />
                        <ProjectLink title="Share.surf" url="https://share.surf" />
                    </div>
                </motion.div>
            </section>
        </main>
    );
}