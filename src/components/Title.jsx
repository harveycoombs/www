import { motion } from "motion/react";

const boldIndexes = [4, 5, 6, 7, 8, 9, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 126, 127, 128, 129, 130, 131, 132, 134, 135];

export default function Title() {
    return (
        <motion.h1
            className="text-5xl leading-18 font-extralight max-lg:text-4xl max-lg:leading-14 max-md:text-center max-sm:text-3xl max-sm:leading-12"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 5, ease: "easeOut" }}
        >{
            "I'm Harvey, an experienced software engineer\nfrom the United Kingdom, focused on Deep\nLearning research, Embedded Systems and Agentic AI.".split("").map((char, index) => (
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
                    {char === "\n" ? <br /> : char}
                </motion.span>
            ))
        }</motion.h1>
    );
}