import { motion } from "framer-motion";

interface Properties {
    children: React.ReactNode;
    title: string;
    delay: number;
    [key: string]: any;
}

export default function Section({ title, children, delay, ...rest }: Properties) {
    return (
        <motion.div className="pt-8  max-[550px]:pt-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.275, ease: "easeOut", delay: delay }} {...rest}>
            <h2 className="text-xl text-slate-700 font-bold mb-1.5 select-none max-[550px]:text-lg">{title}</h2>
            {children}
        </motion.div>
    );
}
