"use client";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function DownButton() {
     return (
          <motion.a
               initial={{ y: 0 }}
               animate={{ y: -10 }}
               transition={{ repeat: Infinity, ease: "linear", repeatType: "mirror", duration: 0.6 }}
               href="#overview"
               aria-label="Scroll to overview"
               className="absolute bottom-7 left-0 right-0 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-amber-300 transition-colors hover:text-white"
          >
               <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
               <FontAwesomeIcon icon={faAngleDown} className="text-xl" />
          </motion.a>
     );
}
