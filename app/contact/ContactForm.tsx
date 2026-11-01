"use client";

import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
     const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
     const [message, setMessage] = useState("");

     async function handleSubmit(event: FormEvent<HTMLFormElement>) {
          event.preventDefault();
          setStatus("sending");
          setMessage("");

          const form = event.currentTarget;
          const formData = new FormData(form);

          try {
               const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                         name: formData.get("name"),
                         email: formData.get("email"),
                         message: formData.get("message"),
                         website: formData.get("website")
                    })
               });
               const result = await response.json();

               if (!response.ok) {
                    throw new Error(result.error || "The message could not be sent.");
               }

               form.reset();
               setStatus("success");
               setMessage("Thanks. Your message has been sent.");
          } catch (error) {
               setStatus("error");
               setMessage(error instanceof Error ? error.message : "The message could not be sent. Please try again.");
          }
     }

     return (
          <form onSubmit={handleSubmit} className="border border-white/10 bg-neutral-950 p-6 sm:p-8">
               <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-xs font-semibold tracking-widest text-stone-400">
                         Name
                         <input name="name" type="text" autoComplete="name" required maxLength={100} className="mt-3 block w-full border border-white/15 bg-stone-950 px-4 py-3 text-sm font-normal tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-amber-300" placeholder="Your name" />
                    </label>
                    <label className="text-xs font-semibold tracking-widest text-stone-400">
                         Email
                         <input name="email" type="email" autoComplete="email" required maxLength={254} className="mt-3 block w-full border border-white/15 bg-stone-950 px-4 py-3 text-sm font-normal tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-amber-300" placeholder="you@example.com" />
                    </label>
               </div>

               <label className="mt-6 block text-xs font-semibold tracking-widest text-stone-400">
                    Message
                    <textarea name="message" required minLength={10} maxLength={5000} rows={6} className="mt-3 block w-full resize-y border border-white/15 bg-stone-950 px-4 py-3 text-sm font-normal leading-6 tracking-normal text-white outline-none transition-colors placeholder:text-stone-600 focus:border-amber-300" placeholder="What are you working on?" />
               </label>

               <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />

               <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" disabled={status === "sending"} className="flex w-fit items-center border-2 border-amber-400 px-4 py-3 text-sm font-bold text-amber-300 transition-colors hover:bg-amber-300/15 disabled:cursor-wait">
                         {status === "sending" ? "Sending..." : "Send message"}
                         <FontAwesomeIcon icon={faPaperPlane} className="ml-3" aria-hidden="true" />
                    </button>
                    <p aria-live="polite" className={`flex items-center gap-2 text-xs leading-5 ${status === "error" ? "text-red-300" : status === "success" ? "text-emerald-300" : "text-stone-600"}`}>
                         {status === "error" && <FontAwesomeIcon icon={faCircleExclamation} aria-hidden="true" />}
                         {status === "success" && <FontAwesomeIcon icon={faCircleCheck} aria-hidden="true" />}
                         {message || "I usually reply within a couple of days."}
                    </p>
               </div>
          </form>
     );
}
