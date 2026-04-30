"use client";
import { motion } from "motion/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Properties {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

export default function Popup({ children, title, onClose }: Properties) {
    return (
        <motion.div
            className="fixed inset-0 z-50 grid place-items-center p-5"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(6px)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseDown={(e: any) => e.target.id == "popup" && onClose()}
            id="popup"
        >
            <motion.div
                className="p-3.5 bg-white rounded-2xl shadow-lg min-w-100 max-md:min-w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex items-center justify-between mb-2.5">
                   <strong className="block font-semibold text-gray-700">{title}</strong>
                   <button onClick={onClose} className="cursor-pointer text-gray-400 hover:text-gray-500 duration-200 active:text-gray-600 active:scale-90"><FontAwesomeIcon icon={faXmark} /></button>
                </div>

                {children}
            </motion.div>
        </motion.div>
    );
}