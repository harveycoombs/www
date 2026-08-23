"use client";
import { useState } from "react";
import { HCaptcha } from "@hcaptcha/react-hcaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";
import Field from "@/app/components/common/Field";
import Label from "@/app/components/common/Label";
import TextBox from "@/app/components/common/TextBox";
import Notice from "@/app/components/common/Notice";
import Panel from "@/app/components/common/Panel";

export default function ContactPage() {
     const [success, setSuccess] = useState<boolean>(false);
     const [error, setError] = useState<string>("");
     const [warning, setWarning] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
     
     const [email, setEmail] = useState<string>("");
     const [name, setName] = useState<string>("");
     const [message, setMessage] = useState<string>("");
     const [captchaToken, setCaptchaToken] = useState<string>("");

     async function submit(e: any) {
          e.preventDefault();

          setSuccess(false);
          setError("");
          setWarning("");

          if (!email.length || !name.length || !message.length || !captchaToken.length) {
               setError("Please fill out all fields & complete the captcha");
               return;
          }

          setLoading(true);
          
          const response = await fetch("/api/contact", {
               method: "POST",
               body: JSON.stringify({ email, name, message, captchaToken })
          });

          const { success, error } = await response.json();

          setLoading(false);
          
          if (!response.ok) {
               setError(error);
          }

          setSuccess(success);
     }
     
     return (
          <main className="push flex flex-col items-center justify-center gap-12 w-188 mx-auto max-md:px-6 max-md:w-full">
               <section className="w-full text-center">
                    <h1 className="block text-4xl font-extrabold tracking-wide uppercase text-white">Contact Harvey</h1>
                    <p className="block font-medium mt-2 text-zinc-500">Get in touch with me using the form below</p>
               </section>

               <section className="w-full">
                    {success && <Notice type="success" classes="mb-4">Your message has been sent successfully!</Notice>}
                    {error.length > 0 && <Notice type="warning" classes="mb-4">{error}</Notice>}
                    {warning.length > 0 && <Notice type="warning" classes="mb-4">{warning}</Notice>}
                    
                    <Panel>
                         <form onSubmit={submit}>
                              <div className="flex gap-3">
                                   <div className="w-1/2">
                                        <Label classes="block mb-1.5">Name</Label>
                                        <Field classes="block w-full" onInput={(e: any) => setName(e.target.value)} />
                                   </div>
     
                                   <div className="w-1/2">
                                        <Label classes="block mb-1.5">Email Address</Label>
                                        <Field classes="block w-full" onInput={(e: any) => setEmail(e.target.value)} />
                                   </div>
                              </div>
     
                              <Label classes="block mb-1.5 my-2.5">Message</Label>
                              <TextBox rows={6} classes="block resize-vertical w-full min-h-32" onInput={(e: any) => setMessage(e.target.value)} />
     
                              <div className="flex gap-3 my-3 max-sm:flex-col max-sm:items-center">
                                   <div className="p-3 rounded-md border border-sky-400 bg-sky-400/10 text-sky-400 select-none max-sm:w-full max-sm:text-sm">
                                        <FontAwesomeIcon icon={faCircleInfo} /> You must complete all fields and the captcha before submitting
                                   </div>
     
                                   <div className="w-fit">
                                        <HCaptcha
                                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
                                            onVerify={(token: string, _: any) => setCaptchaToken(token)}
                                        />
                                   </div>
                              </div>
                              
                              <Button classes="block w-full">Send Message</Button>
     
                              <p className="mt-2 text-center">Response time may vary, but I will get back to you as soon as possible</p>
                         </form>
                    </Panel>
               </section>
          </main>
     );
}